// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CamsKfintechAPI from './cams-kfintech';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class Cdsl extends APIResource {
  /**
   * This endpoint specifically parses CDSL CAS (Consolidated Account Statement) PDF
   * files and returns data in a unified format. Use this endpoint when you know the
   * PDF is from CDSL.
   */
  parse(body: CdslParseParams, options?: RequestOptions): APIPromise<CamsKfintechAPI.UnifiedResponse> {
    return this._client.post(
      '/v4/cdsl/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface CdslParseParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file
   */
  pdf_url?: string;
}

export declare namespace Cdsl {
  export { type CdslParseParams as CdslParseParams };
}
