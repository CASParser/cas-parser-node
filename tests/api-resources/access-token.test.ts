// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CasParser from 'cas-parser';

const client = new CasParser({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accessToken', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.accessToken.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accessToken.create({ expiry_minutes: 60 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(CasParser.NotFoundError);
  });
});
