// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CamsKfintechAPI from './cams-kfintech';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class Nsdl extends APIResource {
  /**
   * This endpoint specifically parses NSDL CAS (Consolidated Account Statement) PDF
   * files and returns data in a unified format. Use this endpoint when you know the
   * PDF is from NSDL.
   */
  parse(body: NsdlParseParams, options?: RequestOptions): APIPromise<CamsKfintechAPI.UnifiedResponse> {
    return this._client.post(
      '/v4/nsdl/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface NsdlParseParams {
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

export declare namespace Nsdl {
  export { type NsdlParseParams as NsdlParseParams };
}
