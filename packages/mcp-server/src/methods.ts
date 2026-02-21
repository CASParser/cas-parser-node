// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.camsKfintech.parse',
    fullyQualifiedName: 'camsKfintech.parse',
    httpMethod: 'post',
    httpPath: '/v4/cams_kfintech/parse',
  },
  {
    clientCallName: 'client.cdsl.parsePdf',
    fullyQualifiedName: 'cdsl.parsePdf',
    httpMethod: 'post',
    httpPath: '/v4/cdsl/parse',
  },
  {
    clientCallName: 'client.cdsl.fetch.requestOtp',
    fullyQualifiedName: 'cdsl.fetch.requestOtp',
    httpMethod: 'post',
    httpPath: '/v4/cdsl/fetch',
  },
  {
    clientCallName: 'client.cdsl.fetch.verifyOtp',
    fullyQualifiedName: 'cdsl.fetch.verifyOtp',
    httpMethod: 'post',
    httpPath: '/v4/cdsl/fetch/{session_id}/verify',
  },
  {
    clientCallName: 'client.contractNote.parse',
    fullyQualifiedName: 'contractNote.parse',
    httpMethod: 'post',
    httpPath: '/v4/contract_note/parse',
  },
  {
    clientCallName: 'client.inbox.checkConnectionStatus',
    fullyQualifiedName: 'inbox.checkConnectionStatus',
    httpMethod: 'post',
    httpPath: '/v4/inbox/status',
  },
  {
    clientCallName: 'client.inbox.connectEmail',
    fullyQualifiedName: 'inbox.connectEmail',
    httpMethod: 'post',
    httpPath: '/v4/inbox/connect',
  },
  {
    clientCallName: 'client.inbox.disconnectEmail',
    fullyQualifiedName: 'inbox.disconnectEmail',
    httpMethod: 'post',
    httpPath: '/v4/inbox/disconnect',
  },
  {
    clientCallName: 'client.inbox.listCasFiles',
    fullyQualifiedName: 'inbox.listCasFiles',
    httpMethod: 'post',
    httpPath: '/v4/inbox/cas',
  },
  {
    clientCallName: 'client.kfintech.generateCas',
    fullyQualifiedName: 'kfintech.generateCas',
    httpMethod: 'post',
    httpPath: '/v4/kfintech/generate',
  },
  {
    clientCallName: 'client.nsdl.parse',
    fullyQualifiedName: 'nsdl.parse',
    httpMethod: 'post',
    httpPath: '/v4/nsdl/parse',
  },
  {
    clientCallName: 'client.smart.parseCasPdf',
    fullyQualifiedName: 'smart.parseCasPdf',
    httpMethod: 'post',
    httpPath: '/v4/smart/parse',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
