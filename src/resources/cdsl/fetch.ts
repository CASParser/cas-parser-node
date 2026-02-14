// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Fetch extends APIResource {
  /**
   * **Step 1 of 2**: Request OTP for CDSL CAS fetch.
   *
   * This endpoint:
   *
   * 1. Solves reCAPTCHA automatically (~15-20 seconds)
   * 2. Submits login credentials to CDSL portal
   * 3. Triggers OTP to user's registered mobile number
   *
   * After user receives OTP, call `/v4/cdsl/fetch/{session_id}/verify` to complete.
   *
   * @example
   * ```ts
   * const response = await client.cdsl.fetch.requestOtp({
   *   bo_id: '1234567890123456',
   *   dob: '1990-01-15',
   *   pan: 'ABCDE1234F',
   * });
   * ```
   */
  requestOtp(body: FetchRequestOtpParams, options?: RequestOptions): APIPromise<FetchRequestOtpResponse> {
    return this._client.post('/v4/cdsl/fetch', { body, ...options });
  }

  /**
   * **Step 2 of 2**: Verify OTP and retrieve CDSL CAS files.
   *
   * After successful verification, CAS PDFs are fetched from CDSL portal, uploaded
   * to cloud storage, and returned as direct download URLs.
   *
   * @example
   * ```ts
   * const response = await client.cdsl.fetch.verifyOtp(
   *   'session_id',
   *   { otp: '123456' },
   * );
   * ```
   */
  verifyOtp(
    sessionID: string,
    body: FetchVerifyOtpParams,
    options?: RequestOptions,
  ): APIPromise<FetchVerifyOtpResponse> {
    return this._client.post(path`/v4/cdsl/fetch/${sessionID}/verify`, { body, ...options });
  }
}

export interface FetchRequestOtpResponse {
  msg?: string;

  /**
   * Session ID for verify step
   */
  session_id?: string;

  status?: string;
}

export interface FetchVerifyOtpResponse {
  files?: Array<FetchVerifyOtpResponse.File>;

  msg?: string;

  status?: string;
}

export namespace FetchVerifyOtpResponse {
  export interface File {
    filename?: string;

    /**
     * Direct download URL (cloud storage)
     */
    url?: string;
  }
}

export interface FetchRequestOtpParams {
  /**
   * CDSL BO ID (16 digits)
   */
  bo_id: string;

  /**
   * Date of birth (YYYY-MM-DD)
   */
  dob: string;

  /**
   * PAN number
   */
  pan: string;
}

export interface FetchVerifyOtpParams {
  /**
   * OTP received on mobile
   */
  otp: string;

  /**
   * Number of monthly statements to fetch (default 6)
   */
  num_periods?: number;
}

export declare namespace Fetch {
  export {
    type FetchRequestOtpResponse as FetchRequestOtpResponse,
    type FetchVerifyOtpResponse as FetchVerifyOtpResponse,
    type FetchRequestOtpParams as FetchRequestOtpParams,
    type FetchVerifyOtpParams as FetchVerifyOtpParams,
  };
}
