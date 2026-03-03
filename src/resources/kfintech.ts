// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for generating new CAS documents via email mailback (KFintech).
 */
export class Kfintech extends APIResource {
  /**
   * Generate CAS via KFintech mailback. The CAS PDF will be sent to the investor's
   * email.
   *
   * This is an async operation - the investor receives the CAS via email within a
   * few minutes. For instant CAS retrieval, use CDSL Fetch (`/v4/cdsl/fetch`).
   *
   * @example
   * ```ts
   * const response = await client.kfintech.generateCas({
   *   email: 'user@example.com',
   *   from_date: '2023-01-01',
   *   password: 'Abcdefghi12$',
   *   to_date: '2023-12-31',
   * });
   * ```
   */
  generateCas(
    body: KfintechGenerateCasParams,
    options?: RequestOptions,
  ): APIPromise<KfintechGenerateCasResponse> {
    return this._client.post('/v4/kfintech/generate', { body, ...options });
  }
}

export interface KfintechGenerateCasResponse {
  msg?: string;

  status?: string;
}

export interface KfintechGenerateCasParams {
  /**
   * Email address to receive the CAS document
   */
  email: string;

  /**
   * Start date (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * Password for the PDF
   */
  password: string;

  /**
   * End date (YYYY-MM-DD)
   */
  to_date: string;

  /**
   * PAN number (optional)
   */
  pan_no?: string;
}

export declare namespace Kfintech {
  export {
    type KfintechGenerateCasResponse as KfintechGenerateCasResponse,
    type KfintechGenerateCasParams as KfintechGenerateCasParams,
  };
}
