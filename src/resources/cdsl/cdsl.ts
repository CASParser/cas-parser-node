// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CamsKfintechAPI from '../cams-kfintech';
import * as FetchAPI from './fetch';
import {
  Fetch,
  FetchRequestOtpParams,
  FetchRequestOtpResponse,
  FetchVerifyOtpParams,
  FetchVerifyOtpResponse,
} from './fetch';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';

/**
 * Endpoints for parsing CAS PDF files from different sources.
 */
export class Cdsl extends APIResource {
  fetch: FetchAPI.Fetch = new FetchAPI.Fetch(this._client);

  /**
   * This endpoint specifically parses CDSL CAS (Consolidated Account Statement) PDF
   * files and returns data in a unified format. Use this endpoint when you know the
   * PDF is from CDSL.
   *
   * @example
   * ```ts
   * const unifiedResponse = await client.cdsl.parsePdf();
   * ```
   */
  parsePdf(body: CdslParsePdfParams, options?: RequestOptions): APIPromise<CamsKfintechAPI.UnifiedResponse> {
    return this._client.post(
      '/v4/cdsl/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface CdslParsePdfParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file (required if pdf_url not provided)
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file (required if pdf_file not provided)
   */
  pdf_url?: string;
}

Cdsl.Fetch = Fetch;

export declare namespace Cdsl {
  export { type CdslParsePdfParams as CdslParsePdfParams };

  export {
    Fetch as Fetch,
    type FetchRequestOtpResponse as FetchRequestOtpResponse,
    type FetchVerifyOtpResponse as FetchVerifyOtpResponse,
    type FetchRequestOtpParams as FetchRequestOtpParams,
    type FetchVerifyOtpParams as FetchVerifyOtpParams,
  };
}
