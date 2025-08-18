// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cas-parser-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import CasParser from 'cas-parser-node';

export const metadata: Metadata = {
  resource: 'CAS Parser',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v4/smart/parse',
  operationId: 'smartParse',
};

export const tool: Tool = {
  name: 'smart_parse_cas_parser',
  description:
    'This endpoint parses CAS (Consolidated Account Statement) PDF files from NSDL, CDSL, or CAMS/KFintech and returns data in a unified format.\nIt auto-detects the CAS type and transforms the data into a consistent structure regardless of the source.\n',
  inputSchema: {
    type: 'object',
    properties: {
      password: {
        type: 'string',
        description: 'Password for the PDF file (if required)',
      },
      pdf_file: {
        type: 'string',
        description: 'Base64 encoded CAS PDF file',
      },
      pdf_url: {
        type: 'string',
        description: 'URL to the CAS PDF file',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: CasParser, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.casParser.smartParse(body));
};

export default { metadata, tool, handler };
