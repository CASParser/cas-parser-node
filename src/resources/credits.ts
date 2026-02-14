// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Credits extends APIResource {
  /**
   * Check your remaining API credits and usage for the current billing period.
   *
   * Returns:
   *
   * - Number of API calls used and remaining credits
   * - Credit limit and reset date
   * - List of enabled features for your plan
   *
   * Credits reset at the start of each billing period.
   */
  check(options?: RequestOptions): APIPromise<CreditCheckResponse> {
    return this._client.post('/credits', options);
  }
}

export interface CreditCheckResponse {
  /**
   * List of API features enabled for your plan
   */
  enabled_features?: Array<string>;

  /**
   * Whether the account has unlimited credits
   */
  is_unlimited?: boolean;

  /**
   * Total credit limit for billing period
   */
  limit?: number;

  /**
   * Remaining credits (null if unlimited)
   */
  remaining?: number | null;

  /**
   * When credits reset (ISO 8601)
   */
  resets_at?: string | null;

  /**
   * Number of credits used this billing period
   */
  used?: number;
}

export declare namespace Credits {
  export { type CreditCheckResponse as CreditCheckResponse };
}
