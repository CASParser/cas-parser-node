// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CasParser from 'cas-parser';

const client = new CasParser({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generate', () => {
  // skipped: tests are disabled for the time being
  test.skip('createCas: only required params', async () => {
    const responsePromise = client.generate.createCas({
      email: 'user@example.com',
      from_date: '2023-01-01',
      password: 'Abcdefghi12$',
      to_date: '2023-12-31',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCas: required and optional params', async () => {
    const response = await client.generate.createCas({
      email: 'user@example.com',
      from_date: '2023-01-01',
      password: 'Abcdefghi12$',
      to_date: '2023-12-31',
      cas_authority: 'kfintech',
      pan_no: 'ABCDE1234F',
    });
  });
});
