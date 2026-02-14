// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AccessToken extends APIResource {
  /**
   * Generate a short-lived access token from your API key.
   *
   * **Use this endpoint from your backend** to create tokens that can be safely
   * passed to frontend/SDK.
   *
   * Access tokens:
   *
   * - Are prefixed with `at_` for easy identification
   * - Valid for up to 60 minutes
   * - Can be used in place of API keys on all v4 endpoints
   * - Cannot be used to generate other access tokens
   *
   * @example
   * ```ts
   * const accessToken = await client.accessToken.create();
   * ```
   */
  create(
    body: AccessTokenCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccessTokenCreateResponse> {
    return this._client.post('/v1/access-token', { body, ...options });
  }
}

export interface AccessTokenCreateResponse {
  /**
   * The at\_ prefixed access token
   */
  access_token?: string;

  /**
   * Token validity in seconds
   */
  expires_in?: number;

  /**
   * Always "api_key" - token is a drop-in replacement for x-api-key header
   */
  token_type?: string;
}

export interface AccessTokenCreateParams {
  /**
   * Token validity in minutes (max 60)
   */
  expiry_minutes?: number;
}

export declare namespace AccessToken {
  export {
    type AccessTokenCreateResponse as AccessTokenCreateResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };
}
