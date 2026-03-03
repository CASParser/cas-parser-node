// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for managing access tokens for the Portfolio Connect SDK.
 * Use these to generate short-lived `at_` prefixed tokens that can be safely passed to frontend applications.
 * Access tokens can be used in place of API keys on all v4 endpoints.
 */
export class VerifyToken extends APIResource {
  /**
   * Verify an access token and check if it's still valid. Useful for debugging token
   * issues.
   */
  verify(options?: RequestOptions): APIPromise<VerifyTokenVerifyResponse> {
    return this._client.post('/v1/token/verify', options);
  }
}

export interface VerifyTokenVerifyResponse {
  /**
   * Error message (only shown if invalid)
   */
  error?: string;

  /**
   * Masked API key (only shown if valid)
   */
  masked_api_key?: string;

  /**
   * Whether the token is valid
   */
  valid?: boolean;
}

export declare namespace VerifyToken {
  export { type VerifyTokenVerifyResponse as VerifyTokenVerifyResponse };
}
