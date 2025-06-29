// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Generate extends APIResource {
  /**
   * This endpoint generates CAS (Consolidated Account Statement) documents by
   * submitting a mailback request to the specified CAS authority. Currently only
   * supports KFintech, with plans to support CAMS, CDSL, and NSDL in the future.
   *
   * @example
   * ```ts
   * const response = await client.generate.createCas({
   *   email: 'user@example.com',
   *   from_date: '2023-01-01',
   *   password: 'Abcdefghi12$',
   *   to_date: '2023-12-31',
   * });
   * ```
   */
  createCas(body: GenerateCreateCasParams, options?: RequestOptions): APIPromise<GenerateCreateCasResponse> {
    return this._client.post('/v4/generate', { body, ...options });
  }
}

export interface GenerateCreateCasResponse {
  msg?: string;

  status?: string;
}

export interface GenerateCreateCasParams {
  /**
   * Email address to receive the CAS document
   */
  email: string;

  /**
   * Start date for the CAS period (format YYYY-MM-DD)
   */
  from_date: string;

  /**
   * Password to protect the generated CAS PDF
   */
  password: string;

  /**
   * End date for the CAS period (format YYYY-MM-DD)
   */
  to_date: string;

  /**
   * CAS authority to generate the document from (currently only kfintech is
   * supported)
   */
  cas_authority?: 'kfintech' | 'cams' | 'cdsl' | 'nsdl';

  /**
   * PAN number (optional for some CAS authorities)
   */
  pan_no?: string;
}

export declare namespace Generate {
  export {
    type GenerateCreateCasResponse as GenerateCreateCasResponse,
    type GenerateCreateCasParams as GenerateCreateCasParams,
  };
}
