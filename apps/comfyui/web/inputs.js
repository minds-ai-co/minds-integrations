// Reveal declared, typed sockets progressively; saved socket names never change.
export function installDynamicMediaInputs(nodeType, nodeData) {
  const groups = ["IMAGE", "VIDEO"].map(type => Object.entries(nodeData.input.optional)
    .filter(([, definition]) => definition[0] === type)
    .map(([name]) => ({ name, type })));
  const pending = new WeakSet();
  const syncing = new WeakSet();
  const templates = new Map();

  function sync(node) {
    if (!node.graph || syncing.has(node)) return;
    syncing.add(node);
    try {
      const previousHeight = node.computeSize()[1];
      for (const input of node.inputs || []) templates.set(input.name, { ...input });
      for (const group of groups) {
        let lastConnected = -1;
        for (let index = 0; index < group.length; index++) {
          const input = node.inputs.find(input => input.name === group[index].name);
          if (input?.link != null) lastConnected = index;
        }
        const visible = Math.min(group.length, Math.max(2, lastConnected + 2));
        const hidden = new Set(group.slice(visible).map(input => input.name));
        for (let index = node.inputs.length - 1; index >= 0; index--) {
          if (hidden.has(node.inputs[index].name)) node.removeInput(index);
        }
        for (const { name, type } of group.slice(0, visible)) {
          if (!node.inputs.some(input => input.name === name)) {
            const template = templates.get(name);
            node.addInput(name, type, {
              ...(template?.label ? { label: template.label } : {}),
              ...(template?.localized_name ? { localized_name: template.localized_name } : {}),
            });
          }
        }
      }
      const [width, height] = node.computeSize();
      node.setSize([node.size?.[0] || width,
        Math.max(height, (node.size?.[1] || previousHeight) + height - previousHeight)]);
      node.setDirtyCanvas(true, true);
    } finally { syncing.delete(node); }
  }

  function schedule(node) {
    if (pending.has(node) || syncing.has(node)) return;
    pending.add(node);
    // Configure/connect callbacks can fire before the graph has finished restoring links.
    queueMicrotask(() => { pending.delete(node); sync(node); });
  }

  const created = nodeType.prototype.onNodeCreated;
  nodeType.prototype.onNodeCreated = function (...args) {
    const result = created?.apply(this, args);
    for (const input of this.inputs || []) templates.set(input.name, { ...input });
    schedule(this);
    return result;
  };
  for (const hook of ["onAdded", "onConfigure", "onConnectionsChange"]) {
    const original = nodeType.prototype[hook];
    nodeType.prototype[hook] = function (...args) {
      const result = original?.apply(this, args);
      if (hook !== "onConnectionsChange" || args[0] === 1) schedule(this);
      return result;
    };
  }
}
