// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CasParser } from '../client';

export abstract class APIResource {
  protected _client: CasParser;

  constructor(client: CasParser) {
    this._client = client;
  }
}
