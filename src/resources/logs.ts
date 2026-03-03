// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for checking API quota and credits usage.
 * These endpoints help you monitor your API usage and remaining quota.
 */
export class Logs extends APIResource {
  /**
   * Retrieve detailed API usage logs for your account.
   *
   * Returns a list of API calls with timestamps, features used, status codes, and
   * credits consumed. Useful for monitoring usage patterns and debugging.
   *
   * **Legacy path:** `/logs` (still supported)
   *
   * @example
   * ```ts
   * const log = await client.logs.create();
   * ```
   */
  create(
    body: LogCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogCreateResponse> {
    return this._client.post('/v1/usage', { body, ...options });
  }

  /**
   * Get aggregated usage statistics grouped by feature.
   *
   * Useful for understanding which API features are being used most and tracking
   * usage trends.
   *
   * **Legacy path:** `/logs/summary` (still supported)
   *
   * @example
   * ```ts
   * const response = await client.logs.getSummary();
   * ```
   */
  getSummary(
    body: LogGetSummaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogGetSummaryResponse> {
    return this._client.post('/v1/usage/summary', { body, ...options });
  }
}

export interface LogCreateResponse {
  /**
   * Number of logs returned
   */
  count?: number;

  logs?: Array<LogCreateResponse.Log>;

  status?: string;
}

export namespace LogCreateResponse {
  export interface Log {
    /**
     * Credits consumed for this request
     */
    credits?: number;

    /**
     * API feature used
     */
    feature?: string;

    /**
     * API endpoint path
     */
    path?: string;

    /**
     * Unique request identifier
     */
    request_id?: string;

    /**
     * HTTP response status code
     */
    status_code?: number;

    /**
     * When the request was made
     */
    timestamp?: string;
  }
}

export interface LogGetSummaryResponse {
  status?: string;

  summary?: LogGetSummaryResponse.Summary;
}

export namespace LogGetSummaryResponse {
  export interface Summary {
    /**
     * Usage breakdown by feature
     */
    by_feature?: Array<Summary.ByFeature>;

    /**
     * Total credits consumed in the period
     */
    total_credits?: number;

    /**
     * Total API requests made in the period
     */
    total_requests?: number;
  }

  export namespace Summary {
    export interface ByFeature {
      /**
       * Credits consumed by this feature
       */
      credits?: number;

      /**
       * API feature name
       */
      feature?: string;

      /**
       * Number of requests for this feature
       */
      requests?: number;
    }
  }
}

export interface LogCreateParams {
  /**
   * End time filter (ISO 8601). Defaults to now.
   */
  end_time?: string;

  /**
   * Maximum number of logs to return
   */
  limit?: number;

  /**
   * Start time filter (ISO 8601). Defaults to 30 days ago.
   */
  start_time?: string;
}

export interface LogGetSummaryParams {
  /**
   * End time filter (ISO 8601). Defaults to now.
   */
  end_time?: string;

  /**
   * Start time filter (ISO 8601). Defaults to start of current month.
   */
  start_time?: string;
}

export declare namespace Logs {
  export {
    type LogCreateResponse as LogCreateResponse,
    type LogGetSummaryResponse as LogGetSummaryResponse,
    type LogCreateParams as LogCreateParams,
    type LogGetSummaryParams as LogGetSummaryParams,
  };
}
