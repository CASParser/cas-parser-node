// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CamsKfintechAPI from './cams-kfintech';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class Smart extends APIResource {
  /**
   * This endpoint parses CAS (Consolidated Account Statement) PDF files from NSDL,
   * CDSL, or CAMS/KFintech and returns data in a unified format. It auto-detects the
   * CAS type and transforms the data into a consistent structure regardless of the
   * source.
   */
  parseCasPdf(
    body: SmartParseCasPdfParams,
    options?: RequestOptions,
  ): APIPromise<CamsKfintechAPI.UnifiedResponse> {
    return this._client.post(
      '/v4/smart/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface SmartParseCasPdfParams {
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

export declare namespace Smart {
  export { type SmartParseCasPdfParams as SmartParseCasPdfParams };
}
