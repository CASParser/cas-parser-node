// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CasParser from 'cas-parser-node';

const client = new CasParser({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fetch', () => {
  // Prism tests are disabled
  test.skip('requestOtp: only required params', async () => {
    const responsePromise = client.cdsl.fetch.requestOtp({
      bo_id: '1234567890123456',
      dob: '1990-01-15',
      pan: 'ABCDE1234F',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('requestOtp: required and optional params', async () => {
    const response = await client.cdsl.fetch.requestOtp({
      bo_id: '1234567890123456',
      dob: '1990-01-15',
      pan: 'ABCDE1234F',
    });
  });

  // Prism tests are disabled
  test.skip('verifyOtp: only required params', async () => {
    const responsePromise = client.cdsl.fetch.verifyOtp('session_id', { otp: '123456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verifyOtp: required and optional params', async () => {
    const response = await client.cdsl.fetch.verifyOtp('session_id', { otp: '123456', num_periods: 6 });
  });
});
