// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cas-parser-node-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cas-parser-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import CasParser from 'cas-parser-node';

export const metadata: Metadata = {
  resource: 'CAS Generator',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v4/generate',
  operationId: 'generateCAS',
};

export const tool: Tool = {
  name: 'generate_cas_cas_generator',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint generates CAS (Consolidated Account Statement) documents by submitting a mailback request to the specified CAS authority.\nCurrently only supports KFintech, with plans to support CAMS, CDSL, and NSDL in the future.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cas_generator_generate_cas_response',\n  $defs: {\n    cas_generator_generate_cas_response: {\n      type: 'object',\n      properties: {\n        msg: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Email address to receive the CAS document',
      },
      from_date: {
        type: 'string',
        description: 'Start date for the CAS period (format YYYY-MM-DD)',
      },
      password: {
        type: 'string',
        description: 'Password to protect the generated CAS PDF',
      },
      to_date: {
        type: 'string',
        description: 'End date for the CAS period (format YYYY-MM-DD)',
      },
      cas_authority: {
        type: 'string',
        description: 'CAS authority to generate the document from (currently only kfintech is supported)',
        enum: ['kfintech', 'cams', 'cdsl', 'nsdl'],
      },
      pan_no: {
        type: 'string',
        description: 'PAN number (optional for some CAS authorities)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email', 'from_date', 'password', 'to_date'],
  },
  annotations: {},
};

export const handler = async (client: CasParser, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.casGenerator.generateCas(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
