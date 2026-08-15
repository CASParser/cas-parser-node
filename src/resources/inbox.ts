// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for importing CAS files directly from user email inboxes.
 *
 * **Supported Providers:**
 *
 * - **Gmail** (`gmail`, default) — `@gmail.com` and Google Workspace domains
 * - **Microsoft** (`outlook`) — personal Microsoft accounts: `@outlook.com`,
 *   `@hotmail.com`, `@live.com`, `@msn.com`, and localised variants such as
 *   `@hotmail.co.uk`, `@live.in`, `@hotmail.fr`. Any other address registered
 *   as a personal Microsoft account also works, including custom domains.
 * - **Zoho Mail** (`zoho`) — Zoho-hosted mailboxes, including custom domains
 *
 * **How it works:**
 * 1. Call `POST /v4/inbox/connect` to get an OAuth URL
 * 2. Redirect user to the OAuth URL for consent
 * 3. User is redirected back to your `redirect_uri` with an encrypted `inbox_token`
 * 4. Use the token to list/fetch CAS files from their inbox (`/v4/inbox/cas`)
 * 5. Files are uploaded to temporary cloud storage (URLs expire in 24 hours)
 *
 * **Security:**
 * - Read-only access (we cannot send emails)
 * - Tokens are encrypted with server-side secret
 * - User can revoke access anytime via `/v4/inbox/disconnect`
 */
export class Inbox extends APIResource {
  /**
   * Verify if an `inbox_token` is still valid and check connection status.
   *
   * Use this to check if the user needs to re-authenticate (e.g., if they revoked
   * access in their email provider settings).
   *
   * @example
   * ```ts
   * const response = await client.inbox.checkConnectionStatus({
   *   'x-inbox-token': 'x-inbox-token',
   * });
   * ```
   */
  checkConnectionStatus(
    params: InboxCheckConnectionStatusParams,
    options?: RequestOptions,
  ): APIPromise<InboxCheckConnectionStatusResponse> {
    const { 'x-inbox-token': xInboxToken } = params;
    return this._client.post('/v4/inbox/status', {
      ...options,
      headers: buildHeaders([{ 'x-inbox-token': xInboxToken }, options?.headers]),
    });
  }

  /**
   * Initiate OAuth flow to connect user's email inbox.
   *
   * Returns an `oauth_url` that you should redirect the user to. After
   * authorization, they are redirected back to your `redirect_uri` with the
   * following query parameters:
   *
   * **On success:**
   *
   * - `inbox_token` - Encrypted token to store client-side
   * - `email` - Email address of the connected account
   * - `state` - Your original state parameter (for CSRF verification)
   *
   * **On error:**
   *
   * - `error` - Error code (e.g., `access_denied`, `token_exchange_failed`)
   * - `state` - Your original state parameter
   *
   * **Store the `inbox_token` client-side** and use it for all subsequent inbox API
   * calls. The token is long-lived (it stores an encrypted refresh token), so a
   * single OAuth connect gives ongoing access to both historical and future CAS
   * statements in the user's inbox. Reuse the same token until the user revokes
   * access via `/v4/inbox/disconnect` or their provider's account settings.
   *
   * @example
   * ```ts
   * const response = await client.inbox.connectEmail({
   *   redirect_uri: 'https://yourapp.com/oauth-callback',
   * });
   * ```
   */
  connectEmail(
    body: InboxConnectEmailParams,
    options?: RequestOptions,
  ): APIPromise<InboxConnectEmailResponse> {
    return this._client.post('/v4/inbox/connect', { body, ...options });
  }

  /**
   * Revoke email access and invalidate the token.
   *
   * This calls the provider's token revocation API (e.g., Google's revoke endpoint)
   * to ensure the user's consent is properly removed.
   *
   * After calling this, the `inbox_token` becomes unusable.
   *
   * @example
   * ```ts
   * const response = await client.inbox.disconnectEmail({
   *   'x-inbox-token': 'x-inbox-token',
   * });
   * ```
   */
  disconnectEmail(
    params: InboxDisconnectEmailParams,
    options?: RequestOptions,
  ): APIPromise<InboxDisconnectEmailResponse> {
    const { 'x-inbox-token': xInboxToken } = params;
    return this._client.post('/v4/inbox/disconnect', {
      ...options,
      headers: buildHeaders([{ 'x-inbox-token': xInboxToken }, options?.headers]),
    });
  }

  /**
   * Search the user's email inbox for CAS files from known senders (CAMS, KFintech,
   * CDSL, NSDL).
   *
   * Files are uploaded to temporary cloud storage. **URLs expire in 24 hours.**
   *
   * Optionally filter by CAS provider and date range.
   *
   * **Billing:** 0.2 credits per request (charged regardless of success or number of
   * files found).
   *
   * @example
   * ```ts
   * const response = await client.inbox.listCasFiles({
   *   'x-inbox-token': 'x-inbox-token',
   * });
   * ```
   */
  listCasFiles(
    params: InboxListCasFilesParams,
    options?: RequestOptions,
  ): APIPromise<InboxListCasFilesResponse> {
    const { 'x-inbox-token': xInboxToken, ...body } = params;
    return this._client.post('/v4/inbox/cas', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-inbox-token': xInboxToken }, options?.headers]),
    });
  }
}

export interface InboxCheckConnectionStatusResponse {
  /**
   * Whether the token is valid and usable
   */
  connected?: boolean;

  /**
   * Email address of the connected account
   */
  email?: string;

  provider?: string;

  status?: string;
}

export interface InboxConnectEmailResponse {
  /**
   * Seconds until the OAuth URL expires (typically 10 minutes)
   */
  expires_in?: number;

  /**
   * Redirect user to this URL to start OAuth flow
   */
  oauth_url?: string;

  /**
   * The provider this OAuth URL was generated for
   */
  provider?: 'gmail' | 'outlook' | 'zoho';

  status?: string;
}

export interface InboxDisconnectEmailResponse {
  msg?: string;

  status?: string;
}

export interface InboxListCasFilesResponse {
  /**
   * Number of CAS files found
   */
  count?: number;

  files?: Array<InboxListCasFilesResponse.File>;

  status?: string;
}

export namespace InboxListCasFilesResponse {
  /**
   * A CAS file found in the user's email inbox
   */
  export interface File {
    /**
     * Detected CAS provider based on sender email
     */
    cas_type?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech';

    /**
     * URL expiration time in seconds. Defaults vary by source:
     *
     * - Email Inbox Import (Gmail, Outlook, Zoho): 86400 (24h)
     * - Inbound Email with `callback_url` set: 172800 (48h)
     * - Inbound Email without `callback_url`: aligned with the session TTL (~30 min)
     */
    expires_in?: number;

    /**
     * Standardized filename (provider_YYYYMMDD_uniqueid.pdf)
     */
    filename?: string;

    /**
     * Date the email was received
     */
    message_date?: string;

    /**
     * Unique identifier for the email message (use for subsequent API calls)
     */
    message_id?: string;

    /**
     * Original attachment filename from the email
     */
    original_filename?: string;

    /**
     * Email address of the CAS authority (CDSL, NSDL, CAMS, or KFintech) who
     * originally sent this statement
     */
    sender_email?: string;

    /**
     * File size in bytes
     */
    size?: number;

    /**
     * Direct download URL (presigned, expires based on expires_in)
     */
    url?: string;
  }
}

export interface InboxCheckConnectionStatusParams {
  /**
   * The encrypted inbox token
   */
  'x-inbox-token': string;
}

export interface InboxConnectEmailParams {
  /**
   * Your callback URL to receive the inbox_token (must be http or https)
   */
  redirect_uri: string;

  /**
   * Mail provider to connect. Defaults to `gmail`.
   *
   * - `gmail` - Google accounts: `@gmail.com` and Google Workspace domains.
   * - `outlook` - personal Microsoft accounts: `@outlook.com`, `@hotmail.com`,
   *   `@live.com`, `@msn.com` and localised variants (`@hotmail.co.uk`, `@live.in`,
   *   `@hotmail.fr`). Any other address registered as a personal Microsoft account
   *   also works, including custom domains.
   * - `zoho` - Zoho Mail accounts, including custom domains hosted on Zoho.
   *
   * Any unrecognised value is treated as `gmail`. The resolved provider is returned
   * in the response.
   */
  provider?: 'gmail' | 'outlook' | 'zoho';

  /**
   * State parameter for CSRF protection (returned in redirect)
   */
  state?: string;
}

export interface InboxDisconnectEmailParams {
  /**
   * The encrypted inbox token to revoke
   */
  'x-inbox-token': string;
}

export interface InboxListCasFilesParams {
  /**
   * Header param: The encrypted inbox token
   */
  'x-inbox-token': string;

  /**
   * Body param: Filter by CAS provider(s):
   *
   * - `cdsl` → eCAS@cdslstatement.com
   * - `nsdl` → NSDL-CAS@nsdl.co.in
   * - `cams` → donotreply@camsonline.com
   * - `kfintech` → samfS@kfintech.com
   */
  cas_types?: Array<'cdsl' | 'nsdl' | 'cams' | 'kfintech'>;

  /**
   * Body param: End date in ISO format (YYYY-MM-DD). Defaults to today.
   */
  end_date?: string;

  /**
   * Body param: Start date in ISO format (YYYY-MM-DD). Defaults to 30 days ago.
   */
  start_date?: string;
}

export declare namespace Inbox {
  export {
    type InboxCheckConnectionStatusResponse as InboxCheckConnectionStatusResponse,
    type InboxConnectEmailResponse as InboxConnectEmailResponse,
    type InboxDisconnectEmailResponse as InboxDisconnectEmailResponse,
    type InboxListCasFilesResponse as InboxListCasFilesResponse,
    type InboxCheckConnectionStatusParams as InboxCheckConnectionStatusParams,
    type InboxConnectEmailParams as InboxConnectEmailParams,
    type InboxDisconnectEmailParams as InboxDisconnectEmailParams,
    type InboxListCasFilesParams as InboxListCasFilesParams,
  };
}
