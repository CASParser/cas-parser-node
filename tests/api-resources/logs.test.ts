// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CasParser from 'cas-parser-node';

const client = new CasParser({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logs', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.logs.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.logs.create(
        {
          end_time: '2026-01-31T23:59:59Z',
          limit: 1,
          start_time: '2026-01-01T00:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CasParser.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getSummary', async () => {
    const responsePromise = client.logs.getSummary();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSummary: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.logs.getSummary(
        { end_time: '2019-12-27T18:11:19.117Z', start_time: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CasParser.NotFoundError);
  });
});
