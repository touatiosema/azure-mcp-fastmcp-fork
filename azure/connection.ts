// Azure service: encapsulates Azure DevOps connection logic for use in MCP tools/resources
import * as azdev from "azure-devops-node-api";

import type { WebApi } from "azure-devops-node-api";

export function createAzureConnection(orgUrl: string, pat: string): WebApi {
  if (!orgUrl) {
    console.warn("orgUrl must be set");
  }
  if (!pat) {
    console.warn("pat must be set");
  }
  const authHandler = azdev.getBasicHandler("", pat);
  return new azdev.WebApi(orgUrl, authHandler);
}
