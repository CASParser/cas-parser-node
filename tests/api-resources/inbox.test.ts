// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CasParser from 'cas-parser';

const client = new CasParser({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inbox', () => {
  // Prism tests are disabled
  test.skip('checkConnectionStatus: only required params', async () => {
    const responsePromise = client.inbox.checkConnectionStatus({ 'x-inbox-token': 'x-inbox-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkConnectionStatus: required and optional params', async () => {
    const response = await client.inbox.checkConnectionStatus({ 'x-inbox-token': 'x-inbox-token' });
  });

  // Prism tests are disabled
  test.skip('connectEmail: only required params', async () => {
    const responsePromise = client.inbox.connectEmail({ redirect_uri: 'https://yourapp.com/oauth-callback' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('connectEmail: required and optional params', async () => {
    const response = await client.inbox.connectEmail({
      redirect_uri: 'https://yourapp.com/oauth-callback',
      state: 'abc123',
    });
  });

  // Prism tests are disabled
  test.skip('disconnectEmail: only required params', async () => {
    const responsePromise = client.inbox.disconnectEmail({ 'x-inbox-token': 'x-inbox-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('disconnectEmail: required and optional params', async () => {
    const response = await client.inbox.disconnectEmail({ 'x-inbox-token': 'x-inbox-token' });
  });

  // Prism tests are disabled
  test.skip('listCasFiles: only required params', async () => {
    const responsePromise = client.inbox.listCasFiles({ 'x-inbox-token': 'x-inbox-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listCasFiles: required and optional params', async () => {
    const response = await client.inbox.listCasFiles({
      'x-inbox-token': 'x-inbox-token',
      cas_types: ['cdsl', 'nsdl'],
      end_date: '2025-12-31',
      start_date: '2025-12-01',
    });
  });
});
