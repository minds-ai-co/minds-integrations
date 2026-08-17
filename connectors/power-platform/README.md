# Minds Power Platform connector

The connector exposes a bounded set of production REST operations for Power
Automate, Power Apps, Logic Apps, and Copilot Studio. The default research
operation is a non-executing plan preview.

The committed Swagger 2.0 definition is generated from the canonical live
OpenAPI document. It includes five bounded operations: list, create, and read a
Panel, preview a non-executing research plan, and read a persisted Panel
summary. Destructive deletion and study execution are intentionally excluded.

Refresh and validate the package before a Microsoft submission:

```bash
node connectors/power-platform/scripts/sync-openapi.mjs
node connectors/power-platform/scripts/validate.mjs
```

Before certification, validate the connector with Microsoft's tooling, test
all five operations in Power Automate, replace the temporary full-Authorization
input with the approved first-party OAuth client, and complete Partner Center
publisher verification. Certification must not proceed with placeholder OAuth
values or without the required live operation evidence.
