// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CasParser from 'cas-parser-node';

const client = new CasParser({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource kfintech', () => {
  // Mock server tests are disabled
  test.skip('generateCas: only required params', async () => {
    const responsePromise = client.kfintech.generateCas({
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

  // Mock server tests are disabled
  test.skip('generateCas: required and optional params', async () => {
    const response = await client.kfintech.generateCas({
      email: 'user@example.com',
      from_date: '2023-01-01',
      password: 'Abcdefghi12$',
      to_date: '2023-12-31',
      pan_no: 'ABCDE1234F',
    });
  });
});
