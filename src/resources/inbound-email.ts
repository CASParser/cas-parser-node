// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create dedicated inbound email addresses for investors to forward their CAS statements.
 *
 * **Use Case:** Your app wants to collect CAS statements from users without requiring OAuth or file upload.
 *
 * **How it works:**
 * 1. Call `POST /v4/inbound-email` to create a unique inbound email address
 * 2. Display this email to your user: "Forward your CAS statement to ie_xxx@import.casparser.in"
 * 3. When user forwards a CAS email, we verify sender authenticity (SPF/DKIM) and call your webhook
 * 4. Your webhook receives email metadata + attachment download URLs
 *
 * **Sender Validation:**
 * - Only emails from verified CAS authorities are processed:
 *   - CDSL: `eCAS@cdslstatement.com`
 *   - NSDL: `NSDL-CAS@nsdl.co.in`
 *   - CAMS: `donotreply@camsonline.com`
 *   - KFintech: `samfS@kfintech.com`
 * - Emails failing SPF/DKIM/DMARC are rejected
 * - Forwarded emails must contain the original sender in headers
 *
 * **Billing:** 0.2 credits per successfully processed valid email
 */
export class InboundEmail extends APIResource {
  /**
   * Create a dedicated inbound email address for collecting CAS statements via email
   * forwarding. When an investor forwards a CAS email to this address, we verify the
   * sender and make the file available to you.
   *
   * `callback_url` is **optional**:
   *
   * - **Set it** — we POST each parsed email to your webhook as it arrives.
   * - **Omit it** — retrieve files via `GET /v4/inbound-email/{id}/files` without
   *   building a webhook consumer.
   *
   * @example
   * ```ts
   * const inboundEmail = await client.inboundEmail.create();
   * ```
   */
  create(body: InboundEmailCreateParams, options?: RequestOptions): APIPromise<InboundEmailCreateResponse> {
    return this._client.post('/v4/inbound-email', { body, ...options });
  }

  /**
   * Retrieve details of a specific mailbox including statistics.
   *
   * @example
   * ```ts
   * const inboundEmail = await client.inboundEmail.retrieve(
   *   'ie_a1b2c3d4e5f6',
   * );
   * ```
   */
  retrieve(inboundEmailID: string, options?: RequestOptions): APIPromise<InboundEmailRetrieveResponse> {
    return this._client.get(path`/v4/inbound-email/${inboundEmailID}`, options);
  }

  /**
   * List all mailboxes associated with your API key. Returns active and inactive
   * mailboxes (deleted mailboxes are excluded).
   *
   * @example
   * ```ts
   * const inboundEmails = await client.inboundEmail.list();
   * ```
   */
  list(
    query: InboundEmailListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InboundEmailListResponse> {
    return this._client.get('/v4/inbound-email', { query, ...options });
  }

  /**
   * Permanently delete an inbound email address. It will stop accepting emails.
   *
   * **Note:** Deletion is immediate and cannot be undone. Any emails received after
   * deletion will be rejected.
   *
   * @example
   * ```ts
   * const inboundEmail = await client.inboundEmail.delete(
   *   'inbound_email_id',
   * );
   * ```
   */
  delete(inboundEmailID: string, options?: RequestOptions): APIPromise<InboundEmailDeleteResponse> {
    return this._client.delete(path`/v4/inbound-email/${inboundEmailID}`, options);
  }
}

/**
 * An inbound email address for receiving forwarded CAS emails
 */
export interface InboundEmailCreateResponse {
  /**
   * Accepted CAS providers (empty = all)
   */
  allowed_sources?: Array<'cdsl' | 'nsdl' | 'cams' | 'kfintech'>;

  /**
   * Webhook URL for email notifications. `null` means files are only retrievable via
   * `GET /v4/inbound-email/{id}/files` (pull delivery).
   */
  callback_url?: string | null;

  /**
   * When the mailbox was created
   */
  created_at?: string;

  /**
   * The inbound email address to forward CAS statements to
   */
  email?: string;

  /**
   * Unique inbound email identifier
   */
  inbound_email_id?: string;

  /**
   * Custom key-value metadata
   */
  metadata?: { [key: string]: string };

  /**
   * Your internal reference identifier
   */
  reference?: string | null;

  /**
   * Current mailbox status
   */
  status?: 'active' | 'paused';

  /**
   * When the mailbox was last updated
   */
  updated_at?: string;
}

/**
 * An inbound email address for receiving forwarded CAS emails
 */
export interface InboundEmailRetrieveResponse {
  /**
   * Accepted CAS providers (empty = all)
   */
  allowed_sources?: Array<'cdsl' | 'nsdl' | 'cams' | 'kfintech'>;

  /**
   * Webhook URL for email notifications. `null` means files are only retrievable via
   * `GET /v4/inbound-email/{id}/files` (pull delivery).
   */
  callback_url?: string | null;

  /**
   * When the mailbox was created
   */
  created_at?: string;

  /**
   * The inbound email address to forward CAS statements to
   */
  email?: string;

  /**
   * Unique inbound email identifier
   */
  inbound_email_id?: string;

  /**
   * Custom key-value metadata
   */
  metadata?: { [key: string]: string };

  /**
   * Your internal reference identifier
   */
  reference?: string | null;

  /**
   * Current mailbox status
   */
  status?: 'active' | 'paused';

  /**
   * When the mailbox was last updated
   */
  updated_at?: string;
}

export interface InboundEmailListResponse {
  inbound_emails?: Array<InboundEmailListResponse.InboundEmail>;

  limit?: number;

  offset?: number;

  status?: string;

  /**
   * Total number of inbound emails (for pagination)
   */
  total?: number;
}

export namespace InboundEmailListResponse {
  /**
   * An inbound email address for receiving forwarded CAS emails
   */
  export interface InboundEmail {
    /**
     * Accepted CAS providers (empty = all)
     */
    allowed_sources?: Array<'cdsl' | 'nsdl' | 'cams' | 'kfintech'>;

    /**
     * Webhook URL for email notifications. `null` means files are only retrievable via
     * `GET /v4/inbound-email/{id}/files` (pull delivery).
     */
    callback_url?: string | null;

    /**
     * When the mailbox was created
     */
    created_at?: string;

    /**
     * The inbound email address to forward CAS statements to
     */
    email?: string;

    /**
     * Unique inbound email identifier
     */
    inbound_email_id?: string;

    /**
     * Custom key-value metadata
     */
    metadata?: { [key: string]: string };

    /**
     * Your internal reference identifier
     */
    reference?: string | null;

    /**
     * Current mailbox status
     */
    status?: 'active' | 'paused';

    /**
     * When the mailbox was last updated
     */
    updated_at?: string;
  }
}

export interface InboundEmailDeleteResponse {
  msg?: string;

  status?: string;
}

export interface InboundEmailCreateParams {
  /**
   * Optional custom email prefix (e.g. `john-portfolio@import.casparser.in`). 3-32
   * chars, alphanumeric + hyphens, must start/end with a letter or number. If
   * omitted, a random ID is generated.
   */
  alias?: string;

  /**
   * Filter emails by CAS provider. If omitted, accepts all providers.
   *
   * - `cdsl` → eCAS@cdslstatement.com
   * - `nsdl` → NSDL-CAS@nsdl.co.in
   * - `cams` → donotreply@camsonline.com
   * - `kfintech` → samfS@kfintech.com
   */
  allowed_sources?: Array<'cdsl' | 'nsdl' | 'cams' | 'kfintech'>;

  /**
   * Optional webhook URL where we POST parsed emails. Must be HTTPS in production
   * (HTTP allowed for localhost). If omitted, retrieve files via
   * `GET /v4/inbound-email/{id}/files`.
   */
  callback_url?: string | null;

  /**
   * Optional key-value pairs (max 10) to include in webhook payload. Useful for
   * passing context like plan_type, campaign_id, etc.
   */
  metadata?: { [key: string]: string };

  /**
   * Your internal identifier (e.g., user_id, account_id). Returned in webhook
   * payload for correlation.
   */
  reference?: string;
}

export interface InboundEmailListParams {
  /**
   * Maximum number of inbound emails to return
   */
  limit?: number;

  /**
   * Pagination offset
   */
  offset?: number;

  /**
   * Filter by status
   */
  status?: 'active' | 'paused' | 'all';
}

export declare namespace InboundEmail {
  export {
    type InboundEmailCreateResponse as InboundEmailCreateResponse,
    type InboundEmailRetrieveResponse as InboundEmailRetrieveResponse,
    type InboundEmailListResponse as InboundEmailListResponse,
    type InboundEmailDeleteResponse as InboundEmailDeleteResponse,
    type InboundEmailCreateParams as InboundEmailCreateParams,
    type InboundEmailListParams as InboundEmailListParams,
  };
}
