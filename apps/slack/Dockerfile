FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json tsconfig.base.json ./
COPY packages/mcp-client packages/mcp-client
COPY apps/slack apps/slack
COPY apps/vscode/package.json apps/vscode/package.json
COPY apps/zapier/package.json apps/zapier/package.json
RUN npm ci --ignore-scripts --workspace @minds/mcp-client --workspace @minds/slack --include-workspace-root
RUN npm run build --workspace @minds/mcp-client && npm run build --workspace @minds/slack
RUN npm prune --omit=dev --workspace @minds/mcp-client --workspace @minds/slack --include-workspace-root
FROM node:22-bookworm-slim
ENV NODE_ENV=production PORT=3000
WORKDIR /app
COPY --from=build --chown=node:node /app /app
USER node
EXPOSE 3000
CMD ["node", "apps/slack/dist/main.js"]
