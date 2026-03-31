// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'check',
    endpoint: '/v1/credits',
    httpMethod: 'post',
    summary: 'Check API Credits',
    description:
      'Check your remaining API credits and usage for the current billing period.\n\nReturns:\n- Number of API calls used and remaining credits\n- Credit limit and reset date\n- List of enabled features for your plan\n\nCredits reset at the start of each billing period.\n',
    stainlessPath: '(resource) credits > (method) check',
    qualified: 'client.credits.check',
    response:
      '{ enabled_features?: string[]; is_unlimited?: boolean; limit?: number; remaining?: number; resets_at?: string; used?: number; }',
    markdown:
      "## check\n\n`client.credits.check(): { enabled_features?: string[]; is_unlimited?: boolean; limit?: number; remaining?: number; resets_at?: string; used?: number; }`\n\n**post** `/v1/credits`\n\nCheck your remaining API credits and usage for the current billing period.\n\nReturns:\n- Number of API calls used and remaining credits\n- Credit limit and reset date\n- List of enabled features for your plan\n\nCredits reset at the start of each billing period.\n\n\n### Returns\n\n- `{ enabled_features?: string[]; is_unlimited?: boolean; limit?: number; remaining?: number; resets_at?: string; used?: number; }`\n\n  - `enabled_features?: string[]`\n  - `is_unlimited?: boolean`\n  - `limit?: number`\n  - `remaining?: number`\n  - `resets_at?: string`\n  - `used?: number`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.credits.check();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/usage',
    httpMethod: 'post',
    summary: 'Get API Usage Logs',
    description:
      'Retrieve detailed API usage logs for your account.\n\nReturns a list of API calls with timestamps, features used, status codes, and credits consumed.\nUseful for monitoring usage patterns and debugging.\n\n**Legacy path:** `/logs` (still supported)\n',
    stainlessPath: '(resource) logs > (method) create',
    qualified: 'client.logs.create',
    params: ['end_time?: string;', 'limit?: number;', 'start_time?: string;'],
    response:
      '{ count?: number; logs?: { credits?: number; feature?: string; path?: string; request_id?: string; status_code?: number; timestamp?: string; }[]; status?: string; }',
    markdown:
      "## create\n\n`client.logs.create(end_time?: string, limit?: number, start_time?: string): { count?: number; logs?: object[]; status?: string; }`\n\n**post** `/v1/usage`\n\nRetrieve detailed API usage logs for your account.\n\nReturns a list of API calls with timestamps, features used, status codes, and credits consumed.\nUseful for monitoring usage patterns and debugging.\n\n**Legacy path:** `/logs` (still supported)\n\n\n### Parameters\n\n- `end_time?: string`\n  End time filter (ISO 8601). Defaults to now.\n\n- `limit?: number`\n  Maximum number of logs to return\n\n- `start_time?: string`\n  Start time filter (ISO 8601). Defaults to 30 days ago.\n\n### Returns\n\n- `{ count?: number; logs?: { credits?: number; feature?: string; path?: string; request_id?: string; status_code?: number; timestamp?: string; }[]; status?: string; }`\n\n  - `count?: number`\n  - `logs?: { credits?: number; feature?: string; path?: string; request_id?: string; status_code?: number; timestamp?: string; }[]`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst log = await client.logs.create();\n\nconsole.log(log);\n```",
  },
  {
    name: 'get_summary',
    endpoint: '/v1/usage/summary',
    httpMethod: 'post',
    summary: 'Get Usage Summary',
    description:
      'Get aggregated usage statistics grouped by feature.\n\nUseful for understanding which API features are being used most and tracking usage trends.\n\n**Legacy path:** `/logs/summary` (still supported)\n',
    stainlessPath: '(resource) logs > (method) get_summary',
    qualified: 'client.logs.getSummary',
    params: ['end_time?: string;', 'start_time?: string;'],
    response:
      '{ status?: string; summary?: { by_feature?: { credits?: number; feature?: string; requests?: number; }[]; total_credits?: number; total_requests?: number; }; }',
    markdown:
      "## get_summary\n\n`client.logs.getSummary(end_time?: string, start_time?: string): { status?: string; summary?: object; }`\n\n**post** `/v1/usage/summary`\n\nGet aggregated usage statistics grouped by feature.\n\nUseful for understanding which API features are being used most and tracking usage trends.\n\n**Legacy path:** `/logs/summary` (still supported)\n\n\n### Parameters\n\n- `end_time?: string`\n  End time filter (ISO 8601). Defaults to now.\n\n- `start_time?: string`\n  Start time filter (ISO 8601). Defaults to start of current month.\n\n### Returns\n\n- `{ status?: string; summary?: { by_feature?: { credits?: number; feature?: string; requests?: number; }[]; total_credits?: number; total_requests?: number; }; }`\n\n  - `status?: string`\n  - `summary?: { by_feature?: { credits?: number; feature?: string; requests?: number; }[]; total_credits?: number; total_requests?: number; }`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.logs.getSummary();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/token',
    httpMethod: 'post',
    summary: 'Generate Access Token',
    description:
      'Generate a short-lived access token from your API key.\n\n**Use this endpoint from your backend** to create tokens that can be safely passed to frontend/SDK.\n\n**Legacy path:** `/v1/access-token` (still supported)\n\nAccess tokens:\n- Are prefixed with `at_` for easy identification\n- Valid for up to 60 minutes\n- Can be used in place of API keys on all v4 endpoints\n- Cannot be used to generate other access tokens\n',
    stainlessPath: '(resource) access_token > (method) create',
    qualified: 'client.accessToken.create',
    params: ['expiry_minutes?: number;'],
    response: '{ access_token?: string; expires_in?: number; token_type?: string; }',
    markdown:
      "## create\n\n`client.accessToken.create(expiry_minutes?: number): { access_token?: string; expires_in?: number; token_type?: string; }`\n\n**post** `/v1/token`\n\nGenerate a short-lived access token from your API key.\n\n**Use this endpoint from your backend** to create tokens that can be safely passed to frontend/SDK.\n\n**Legacy path:** `/v1/access-token` (still supported)\n\nAccess tokens:\n- Are prefixed with `at_` for easy identification\n- Valid for up to 60 minutes\n- Can be used in place of API keys on all v4 endpoints\n- Cannot be used to generate other access tokens\n\n\n### Parameters\n\n- `expiry_minutes?: number`\n  Token validity in minutes (max 60)\n\n### Returns\n\n- `{ access_token?: string; expires_in?: number; token_type?: string; }`\n\n  - `access_token?: string`\n  - `expires_in?: number`\n  - `token_type?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst accessToken = await client.accessToken.create();\n\nconsole.log(accessToken);\n```",
  },
  {
    name: 'verify',
    endpoint: '/v1/token/verify',
    httpMethod: 'post',
    summary: 'Verify Access Token',
    description:
      "Verify an access token and check if it's still valid.\nUseful for debugging token issues.\n",
    stainlessPath: '(resource) verify_token > (method) verify',
    qualified: 'client.verifyToken.verify',
    response: '{ error?: string; masked_api_key?: string; valid?: boolean; }',
    markdown:
      "## verify\n\n`client.verifyToken.verify(): { error?: string; masked_api_key?: string; valid?: boolean; }`\n\n**post** `/v1/token/verify`\n\nVerify an access token and check if it's still valid.\nUseful for debugging token issues.\n\n\n### Returns\n\n- `{ error?: string; masked_api_key?: string; valid?: boolean; }`\n\n  - `error?: string`\n  - `masked_api_key?: string`\n  - `valid?: boolean`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.verifyToken.verify();\n\nconsole.log(response);\n```",
  },
  {
    name: 'parse',
    endpoint: '/v4/cams_kfintech/parse',
    httpMethod: 'post',
    summary: 'Parse CAMS/KFintech CAS PDF',
    description:
      'This endpoint specifically parses CAMS/KFintech CAS (Consolidated Account Statement) PDF files and returns data in a unified format.\nUse this endpoint when you know the PDF is from CAMS or KFintech.\n',
    stainlessPath: '(resource) cams_kfintech > (method) parse',
    qualified: 'client.camsKfintech.parse',
    params: ['password?: string;', 'pdf_file?: string;', 'pdf_url?: string;'],
    response:
      "{ demat_accounts?: { additional_info?: object; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: object; linked_holders?: linked_holder[]; value?: number; }[]; insurance?: { life_insurance_policies?: object[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: object; }; mutual_funds?: { additional_info?: object; amc?: string; folio_number?: string; linked_holders?: linked_holder[]; registrar?: string; schemes?: object[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: object[]; linked_holders?: linked_holder[]; pran?: string; value?: number; }[]; summary?: { accounts?: object; total_value?: number; }; }",
    markdown:
      "## parse\n\n`client.camsKfintech.parse(password?: string, pdf_file?: string, pdf_url?: string): { demat_accounts?: object[]; insurance?: object; investor?: object; meta?: object; mutual_funds?: object[]; nps?: object[]; summary?: object; }`\n\n**post** `/v4/cams_kfintech/parse`\n\nThis endpoint specifically parses CAMS/KFintech CAS (Consolidated Account Statement) PDF files and returns data in a unified format.\nUse this endpoint when you know the PDF is from CAMS or KFintech.\n\n\n### Parameters\n\n- `password?: string`\n  Password for the PDF file (if required)\n\n- `pdf_file?: string`\n  Base64 encoded CAS PDF file (required if pdf_url not provided)\n\n- `pdf_url?: string`\n  URL to the CAS PDF file (required if pdf_file not provided)\n\n### Returns\n\n- `{ demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: object[]; corporate_bonds?: object[]; demat_mutual_funds?: object[]; equities?: object[]; government_securities?: object[]; }; linked_holders?: object[]; value?: number; }[]; insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }; mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: object[]; registrar?: string; schemes?: { additional_info?: object; cost?: number; gain?: object; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: transaction[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: object; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: object[]; pran?: string; value?: number; }[]; summary?: { accounts?: { demat?: object; insurance?: object; mutual_funds?: object; nps?: object; }; total_value?: number; }; }`\n\n  - `demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; corporate_bonds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; demat_mutual_funds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; equities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; government_securities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; }; linked_holders?: { name?: string; pan?: string; }[]; value?: number; }[]`\n  - `insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }`\n  - `investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }`\n  - `meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }`\n  - `mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: { name?: string; pan?: string; }[]; registrar?: string; schemes?: { additional_info?: { advisor?: string; amfi?: string; close_units?: number; open_units?: number; rta_code?: string; }; cost?: number; gain?: { absolute?: number; percentage?: number; }; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: { additional_info?: object; amount?: number; balance?: number; date?: string; description?: string; dividend_rate?: number; nav?: number; type?: string; units?: number; }[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]`\n  - `nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: { manager?: string; tier?: 1 | 2; }; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: { name?: string; pan?: string; }[]; pran?: string; value?: number; }[]`\n  - `summary?: { accounts?: { demat?: { count?: number; total_value?: number; }; insurance?: { count?: number; total_value?: number; }; mutual_funds?: { count?: number; total_value?: number; }; nps?: { count?: number; total_value?: number; }; }; total_value?: number; }`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst unifiedResponse = await client.camsKfintech.parse();\n\nconsole.log(unifiedResponse);\n```",
  },
  {
    name: 'parse_pdf',
    endpoint: '/v4/cdsl/parse',
    httpMethod: 'post',
    summary: 'Parse CDSL CAS PDF',
    description:
      'This endpoint specifically parses CDSL CAS (Consolidated Account Statement) PDF files and returns data in a unified format.\nUse this endpoint when you know the PDF is from CDSL.\n',
    stainlessPath: '(resource) cdsl > (method) parse_pdf',
    qualified: 'client.cdsl.parsePdf',
    params: ['password?: string;', 'pdf_file?: string;', 'pdf_url?: string;'],
    response:
      "{ demat_accounts?: { additional_info?: object; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: object; linked_holders?: linked_holder[]; value?: number; }[]; insurance?: { life_insurance_policies?: object[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: object; }; mutual_funds?: { additional_info?: object; amc?: string; folio_number?: string; linked_holders?: linked_holder[]; registrar?: string; schemes?: object[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: object[]; linked_holders?: linked_holder[]; pran?: string; value?: number; }[]; summary?: { accounts?: object; total_value?: number; }; }",
    markdown:
      "## parse_pdf\n\n`client.cdsl.parsePdf(password?: string, pdf_file?: string, pdf_url?: string): { demat_accounts?: object[]; insurance?: object; investor?: object; meta?: object; mutual_funds?: object[]; nps?: object[]; summary?: object; }`\n\n**post** `/v4/cdsl/parse`\n\nThis endpoint specifically parses CDSL CAS (Consolidated Account Statement) PDF files and returns data in a unified format.\nUse this endpoint when you know the PDF is from CDSL.\n\n\n### Parameters\n\n- `password?: string`\n  Password for the PDF file (if required)\n\n- `pdf_file?: string`\n  Base64 encoded CAS PDF file (required if pdf_url not provided)\n\n- `pdf_url?: string`\n  URL to the CAS PDF file (required if pdf_file not provided)\n\n### Returns\n\n- `{ demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: object[]; corporate_bonds?: object[]; demat_mutual_funds?: object[]; equities?: object[]; government_securities?: object[]; }; linked_holders?: object[]; value?: number; }[]; insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }; mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: object[]; registrar?: string; schemes?: { additional_info?: object; cost?: number; gain?: object; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: transaction[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: object; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: object[]; pran?: string; value?: number; }[]; summary?: { accounts?: { demat?: object; insurance?: object; mutual_funds?: object; nps?: object; }; total_value?: number; }; }`\n\n  - `demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; corporate_bonds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; demat_mutual_funds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; equities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; government_securities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; }; linked_holders?: { name?: string; pan?: string; }[]; value?: number; }[]`\n  - `insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }`\n  - `investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }`\n  - `meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }`\n  - `mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: { name?: string; pan?: string; }[]; registrar?: string; schemes?: { additional_info?: { advisor?: string; amfi?: string; close_units?: number; open_units?: number; rta_code?: string; }; cost?: number; gain?: { absolute?: number; percentage?: number; }; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: { additional_info?: object; amount?: number; balance?: number; date?: string; description?: string; dividend_rate?: number; nav?: number; type?: string; units?: number; }[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]`\n  - `nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: { manager?: string; tier?: 1 | 2; }; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: { name?: string; pan?: string; }[]; pran?: string; value?: number; }[]`\n  - `summary?: { accounts?: { demat?: { count?: number; total_value?: number; }; insurance?: { count?: number; total_value?: number; }; mutual_funds?: { count?: number; total_value?: number; }; nps?: { count?: number; total_value?: number; }; }; total_value?: number; }`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst unifiedResponse = await client.cdsl.parsePdf();\n\nconsole.log(unifiedResponse);\n```",
  },
  {
    name: 'request_otp',
    endpoint: '/v4/cdsl/fetch',
    httpMethod: 'post',
    summary: 'CDSL CAS Fetch - Step 1 (Request OTP)',
    description:
      "**Step 1 of 2**: Request OTP for CDSL CAS fetch.\n\nThis endpoint:\n1. Solves reCAPTCHA automatically (~15-20 seconds)\n2. Submits login credentials to CDSL portal\n3. Triggers OTP to user's registered mobile number\n\nAfter user receives OTP, call `/v4/cdsl/fetch/{session_id}/verify` to complete.\n",
    stainlessPath: '(resource) cdsl.fetch > (method) request_otp',
    qualified: 'client.cdsl.fetch.requestOtp',
    params: ['bo_id: string;', 'dob: string;', 'pan: string;'],
    response: '{ msg?: string; session_id?: string; status?: string; }',
    markdown:
      "## request_otp\n\n`client.cdsl.fetch.requestOtp(bo_id: string, dob: string, pan: string): { msg?: string; session_id?: string; status?: string; }`\n\n**post** `/v4/cdsl/fetch`\n\n**Step 1 of 2**: Request OTP for CDSL CAS fetch.\n\nThis endpoint:\n1. Solves reCAPTCHA automatically (~15-20 seconds)\n2. Submits login credentials to CDSL portal\n3. Triggers OTP to user's registered mobile number\n\nAfter user receives OTP, call `/v4/cdsl/fetch/{session_id}/verify` to complete.\n\n\n### Parameters\n\n- `bo_id: string`\n  CDSL BO ID (16 digits)\n\n- `dob: string`\n  Date of birth (YYYY-MM-DD)\n\n- `pan: string`\n  PAN number\n\n### Returns\n\n- `{ msg?: string; session_id?: string; status?: string; }`\n\n  - `msg?: string`\n  - `session_id?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.cdsl.fetch.requestOtp({\n  bo_id: '1234567890123456',\n  dob: '1990-01-15',\n  pan: 'ABCDE1234F',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'verify_otp',
    endpoint: '/v4/cdsl/fetch/{session_id}/verify',
    httpMethod: 'post',
    summary: 'CDSL CAS Fetch - Step 2 (Verify OTP & Get Files)',
    description:
      '**Step 2 of 2**: Verify OTP and retrieve CDSL CAS files.\n\nAfter successful verification, CAS PDFs are fetched from CDSL portal,\nuploaded to cloud storage, and returned as direct download URLs.\n',
    stainlessPath: '(resource) cdsl.fetch > (method) verify_otp',
    qualified: 'client.cdsl.fetch.verifyOtp',
    params: ['session_id: string;', 'otp: string;', 'num_periods?: number;'],
    response: '{ files?: { filename?: string; url?: string; }[]; msg?: string; status?: string; }',
    markdown:
      "## verify_otp\n\n`client.cdsl.fetch.verifyOtp(session_id: string, otp: string, num_periods?: number): { files?: object[]; msg?: string; status?: string; }`\n\n**post** `/v4/cdsl/fetch/{session_id}/verify`\n\n**Step 2 of 2**: Verify OTP and retrieve CDSL CAS files.\n\nAfter successful verification, CAS PDFs are fetched from CDSL portal,\nuploaded to cloud storage, and returned as direct download URLs.\n\n\n### Parameters\n\n- `session_id: string`\n\n- `otp: string`\n  OTP received on mobile\n\n- `num_periods?: number`\n  Number of monthly statements to fetch (default 6)\n\n### Returns\n\n- `{ files?: { filename?: string; url?: string; }[]; msg?: string; status?: string; }`\n\n  - `files?: { filename?: string; url?: string; }[]`\n  - `msg?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.cdsl.fetch.verifyOtp('session_id', { otp: '123456' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'parse',
    endpoint: '/v4/contract_note/parse',
    httpMethod: 'post',
    summary: 'Parse Contract Note PDF',
    description:
      'This endpoint parses Contract Note PDF files from various brokers including Zerodha, Groww, Upstox, ICICI Securities, and others.\n\n**What is a Contract Note?**\nA contract note is a legal document that provides details of all trades executed by an investor. It includes:\n- Trade details with timestamps, quantities, and prices\n- Brokerage and charges breakdown\n- Settlement information\n- Regulatory compliance details\n\n**Supported Brokers:**\n- Zerodha Broking Limited\n- Groww Invest Tech Private Limited  \n- Upstox (RKSV Securities)\n- ICICI Securities Limited\n- Auto-detection for unknown brokers\n\n**Key Features:**\n- **Auto-detection**: Automatically identifies broker type from PDF content\n- **Comprehensive parsing**: Extracts equity transactions, derivatives transactions, detailed trades, and charges\n- **Flexible input**: Accepts both file upload and URL-based PDF input\n- **Password protection**: Supports password-protected PDFs\n\nThe API returns structured data including contract note information, client details, transaction summaries, and detailed trade-by-trade breakdowns.\n',
    stainlessPath: '(resource) contract_note > (method) parse',
    qualified: 'client.contractNote.parse',
    params: [
      "broker_type?: 'zerodha' | 'groww' | 'upstox' | 'icici';",
      'password?: string;',
      'pdf_file?: string;',
      'pdf_url?: string;',
    ],
    response:
      '{ data?: { broker_info?: object; charges_summary?: object; client_info?: object; contract_note_info?: object; derivatives_transactions?: object[]; detailed_trades?: object[]; equity_transactions?: object[]; }; msg?: string; status?: string; }',
    markdown:
      "## parse\n\n`client.contractNote.parse(broker_type?: 'zerodha' | 'groww' | 'upstox' | 'icici', password?: string, pdf_file?: string, pdf_url?: string): { data?: object; msg?: string; status?: string; }`\n\n**post** `/v4/contract_note/parse`\n\nThis endpoint parses Contract Note PDF files from various brokers including Zerodha, Groww, Upstox, ICICI Securities, and others.\n\n**What is a Contract Note?**\nA contract note is a legal document that provides details of all trades executed by an investor. It includes:\n- Trade details with timestamps, quantities, and prices\n- Brokerage and charges breakdown\n- Settlement information\n- Regulatory compliance details\n\n**Supported Brokers:**\n- Zerodha Broking Limited\n- Groww Invest Tech Private Limited  \n- Upstox (RKSV Securities)\n- ICICI Securities Limited\n- Auto-detection for unknown brokers\n\n**Key Features:**\n- **Auto-detection**: Automatically identifies broker type from PDF content\n- **Comprehensive parsing**: Extracts equity transactions, derivatives transactions, detailed trades, and charges\n- **Flexible input**: Accepts both file upload and URL-based PDF input\n- **Password protection**: Supports password-protected PDFs\n\nThe API returns structured data including contract note information, client details, transaction summaries, and detailed trade-by-trade breakdowns.\n\n\n### Parameters\n\n- `broker_type?: 'zerodha' | 'groww' | 'upstox' | 'icici'`\n  Optional broker type override. If not provided, system will auto-detect.\n\n- `password?: string`\n  Password for the PDF file (usually PAN number for Zerodha)\n\n- `pdf_file?: string`\n  Base64 encoded contract note PDF file\n\n- `pdf_url?: string`\n  URL to the contract note PDF file\n\n### Returns\n\n- `{ data?: { broker_info?: { broker_type?: 'zerodha' | 'groww' | 'upstox' | 'icici' | 'unknown'; name?: string; sebi_registration?: string; }; charges_summary?: { cgst?: number; exchange_transaction_charges?: number; igst?: number; net_amount_receivable_payable?: number; pay_in_pay_out_obligation?: number; sebi_turnover_fees?: number; securities_transaction_tax?: number; sgst?: number; stamp_duty?: number; taxable_value_brokerage?: number; }; client_info?: { address?: string; gst_state_code?: string; name?: string; pan?: string; place_of_supply?: string; ucc?: string; }; contract_note_info?: { contract_note_number?: string; settlement_date?: string; settlement_number?: string; trade_date?: string; }; derivatives_transactions?: { brokerage_per_unit?: number; buy_sell_bf_cf?: string; closing_rate_per_unit?: number; contract_description?: string; net_total?: number; quantity?: number; wap_per_unit?: number; }[]; detailed_trades?: { brokerage?: number; buy_sell?: string; closing_rate_per_unit?: number; exchange?: string; net_rate_per_unit?: number; net_total?: number; order_number?: string; order_time?: string; quantity?: number; remarks?: string; security_description?: string; trade_number?: string; trade_time?: string; }[]; equity_transactions?: { buy_quantity?: number; buy_total_value?: number; buy_wap?: number; isin?: string; net_obligation?: number; security_name?: string; security_symbol?: string; sell_quantity?: number; sell_total_value?: number; sell_wap?: number; }[]; }; msg?: string; status?: string; }`\n\n  - `data?: { broker_info?: { broker_type?: 'zerodha' | 'groww' | 'upstox' | 'icici' | 'unknown'; name?: string; sebi_registration?: string; }; charges_summary?: { cgst?: number; exchange_transaction_charges?: number; igst?: number; net_amount_receivable_payable?: number; pay_in_pay_out_obligation?: number; sebi_turnover_fees?: number; securities_transaction_tax?: number; sgst?: number; stamp_duty?: number; taxable_value_brokerage?: number; }; client_info?: { address?: string; gst_state_code?: string; name?: string; pan?: string; place_of_supply?: string; ucc?: string; }; contract_note_info?: { contract_note_number?: string; settlement_date?: string; settlement_number?: string; trade_date?: string; }; derivatives_transactions?: { brokerage_per_unit?: number; buy_sell_bf_cf?: string; closing_rate_per_unit?: number; contract_description?: string; net_total?: number; quantity?: number; wap_per_unit?: number; }[]; detailed_trades?: { brokerage?: number; buy_sell?: string; closing_rate_per_unit?: number; exchange?: string; net_rate_per_unit?: number; net_total?: number; order_number?: string; order_time?: string; quantity?: number; remarks?: string; security_description?: string; trade_number?: string; trade_time?: string; }[]; equity_transactions?: { buy_quantity?: number; buy_total_value?: number; buy_wap?: number; isin?: string; net_obligation?: number; security_name?: string; security_symbol?: string; sell_quantity?: number; sell_total_value?: number; sell_wap?: number; }[]; }`\n  - `msg?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.contractNote.parse();\n\nconsole.log(response);\n```",
  },
  {
    name: 'check_connection_status',
    endpoint: '/v4/inbox/status',
    httpMethod: 'post',
    summary: 'Check Email Connection Status',
    description:
      'Verify if an `inbox_token` is still valid and check connection status.\n\nUse this to check if the user needs to re-authenticate (e.g., if they\nrevoked access in their email provider settings).\n',
    stainlessPath: '(resource) inbox > (method) check_connection_status',
    qualified: 'client.inbox.checkConnectionStatus',
    params: ['x-inbox-token: string;'],
    response: '{ connected?: boolean; email?: string; provider?: string; status?: string; }',
    markdown:
      "## check_connection_status\n\n`client.inbox.checkConnectionStatus(x-inbox-token: string): { connected?: boolean; email?: string; provider?: string; status?: string; }`\n\n**post** `/v4/inbox/status`\n\nVerify if an `inbox_token` is still valid and check connection status.\n\nUse this to check if the user needs to re-authenticate (e.g., if they\nrevoked access in their email provider settings).\n\n\n### Parameters\n\n- `x-inbox-token: string`\n\n### Returns\n\n- `{ connected?: boolean; email?: string; provider?: string; status?: string; }`\n\n  - `connected?: boolean`\n  - `email?: string`\n  - `provider?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.inbox.checkConnectionStatus({ 'x-inbox-token': 'x-inbox-token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'connect_email',
    endpoint: '/v4/inbox/connect',
    httpMethod: 'post',
    summary: 'Connect Email Provider (Initiate OAuth)',
    description:
      "Initiate OAuth flow to connect user's email inbox.\n\nReturns an `oauth_url` that you should redirect the user to. After authorization,\nthey are redirected back to your `redirect_uri` with the following query parameters:\n\n**On success:**\n- `inbox_token` - Encrypted token to store client-side\n- `email` - Email address of the connected account\n- `state` - Your original state parameter (for CSRF verification)\n\n**On error:**\n- `error` - Error code (e.g., `access_denied`, `token_exchange_failed`)\n- `state` - Your original state parameter\n\n**Store the `inbox_token` client-side** and use it for all subsequent inbox API calls.\n",
    stainlessPath: '(resource) inbox > (method) connect_email',
    qualified: 'client.inbox.connectEmail',
    params: ['redirect_uri: string;', 'state?: string;'],
    response: '{ expires_in?: number; oauth_url?: string; status?: string; }',
    markdown:
      "## connect_email\n\n`client.inbox.connectEmail(redirect_uri: string, state?: string): { expires_in?: number; oauth_url?: string; status?: string; }`\n\n**post** `/v4/inbox/connect`\n\nInitiate OAuth flow to connect user's email inbox.\n\nReturns an `oauth_url` that you should redirect the user to. After authorization,\nthey are redirected back to your `redirect_uri` with the following query parameters:\n\n**On success:**\n- `inbox_token` - Encrypted token to store client-side\n- `email` - Email address of the connected account\n- `state` - Your original state parameter (for CSRF verification)\n\n**On error:**\n- `error` - Error code (e.g., `access_denied`, `token_exchange_failed`)\n- `state` - Your original state parameter\n\n**Store the `inbox_token` client-side** and use it for all subsequent inbox API calls.\n\n\n### Parameters\n\n- `redirect_uri: string`\n  Your callback URL to receive the inbox_token (must be http or https)\n\n- `state?: string`\n  State parameter for CSRF protection (returned in redirect)\n\n### Returns\n\n- `{ expires_in?: number; oauth_url?: string; status?: string; }`\n\n  - `expires_in?: number`\n  - `oauth_url?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.inbox.connectEmail({ redirect_uri: 'https://yourapp.com/oauth-callback' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'disconnect_email',
    endpoint: '/v4/inbox/disconnect',
    httpMethod: 'post',
    summary: 'Disconnect Email Provider',
    description:
      "Revoke email access and invalidate the token.\n\nThis calls the provider's token revocation API (e.g., Google's revoke endpoint)\nto ensure the user's consent is properly removed.\n\nAfter calling this, the `inbox_token` becomes unusable.\n",
    stainlessPath: '(resource) inbox > (method) disconnect_email',
    qualified: 'client.inbox.disconnectEmail',
    params: ['x-inbox-token: string;'],
    response: '{ msg?: string; status?: string; }',
    markdown:
      "## disconnect_email\n\n`client.inbox.disconnectEmail(x-inbox-token: string): { msg?: string; status?: string; }`\n\n**post** `/v4/inbox/disconnect`\n\nRevoke email access and invalidate the token.\n\nThis calls the provider's token revocation API (e.g., Google's revoke endpoint)\nto ensure the user's consent is properly removed.\n\nAfter calling this, the `inbox_token` becomes unusable.\n\n\n### Parameters\n\n- `x-inbox-token: string`\n\n### Returns\n\n- `{ msg?: string; status?: string; }`\n\n  - `msg?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.inbox.disconnectEmail({ 'x-inbox-token': 'x-inbox-token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_cas_files',
    endpoint: '/v4/inbox/cas',
    httpMethod: 'post',
    summary: 'List CAS Files from Email Inbox',
    description:
      "Search the user's email inbox for CAS files from known senders\n(CAMS, KFintech, CDSL, NSDL).\n\nFiles are uploaded to temporary cloud storage. **URLs expire in 24 hours.**\n\nOptionally filter by CAS provider and date range.\n\n**Billing:** 0.2 credits per request (charged regardless of success or number of files found).\n",
    stainlessPath: '(resource) inbox > (method) list_cas_files',
    qualified: 'client.inbox.listCasFiles',
    params: [
      'x-inbox-token: string;',
      "cas_types?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[];",
      'end_date?: string;',
      'start_date?: string;',
    ],
    response:
      "{ count?: number; files?: { cas_type?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'; expires_in?: number; filename?: string; message_date?: string; message_id?: string; original_filename?: string; sender_email?: string; size?: number; url?: string; }[]; status?: string; }",
    markdown:
      "## list_cas_files\n\n`client.inbox.listCasFiles(x-inbox-token: string, cas_types?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[], end_date?: string, start_date?: string): { count?: number; files?: object[]; status?: string; }`\n\n**post** `/v4/inbox/cas`\n\nSearch the user's email inbox for CAS files from known senders\n(CAMS, KFintech, CDSL, NSDL).\n\nFiles are uploaded to temporary cloud storage. **URLs expire in 24 hours.**\n\nOptionally filter by CAS provider and date range.\n\n**Billing:** 0.2 credits per request (charged regardless of success or number of files found).\n\n\n### Parameters\n\n- `x-inbox-token: string`\n\n- `cas_types?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]`\n  Filter by CAS provider(s):\n- `cdsl` → eCAS@cdslstatement.com\n- `nsdl` → NSDL-CAS@nsdl.co.in\n- `cams` → donotreply@camsonline.com\n- `kfintech` → samfS@kfintech.com\n\n\n- `end_date?: string`\n  End date in ISO format (YYYY-MM-DD). Defaults to today.\n\n- `start_date?: string`\n  Start date in ISO format (YYYY-MM-DD). Defaults to 30 days ago.\n\n### Returns\n\n- `{ count?: number; files?: { cas_type?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'; expires_in?: number; filename?: string; message_date?: string; message_id?: string; original_filename?: string; sender_email?: string; size?: number; url?: string; }[]; status?: string; }`\n\n  - `count?: number`\n  - `files?: { cas_type?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'; expires_in?: number; filename?: string; message_date?: string; message_id?: string; original_filename?: string; sender_email?: string; size?: number; url?: string; }[]`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.inbox.listCasFiles({ 'x-inbox-token': 'x-inbox-token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'generate_cas',
    endpoint: '/v4/kfintech/generate',
    httpMethod: 'post',
    summary: 'KFintech CAS Generator (Email Mailback)',
    description:
      "Generate CAS via KFintech mailback. The CAS PDF will be sent to the investor's email.\n\nThis is an async operation - the investor receives the CAS via email within a few minutes.\nFor instant CAS retrieval, use CDSL Fetch (`/v4/cdsl/fetch`).\n",
    stainlessPath: '(resource) kfintech > (method) generate_cas',
    qualified: 'client.kfintech.generateCas',
    params: [
      'email: string;',
      'from_date: string;',
      'password: string;',
      'to_date: string;',
      'pan_no?: string;',
    ],
    response: '{ msg?: string; status?: string; }',
    markdown:
      "## generate_cas\n\n`client.kfintech.generateCas(email: string, from_date: string, password: string, to_date: string, pan_no?: string): { msg?: string; status?: string; }`\n\n**post** `/v4/kfintech/generate`\n\nGenerate CAS via KFintech mailback. The CAS PDF will be sent to the investor's email.\n\nThis is an async operation - the investor receives the CAS via email within a few minutes.\nFor instant CAS retrieval, use CDSL Fetch (`/v4/cdsl/fetch`).\n\n\n### Parameters\n\n- `email: string`\n  Email address to receive the CAS document\n\n- `from_date: string`\n  Start date (YYYY-MM-DD)\n\n- `password: string`\n  Password for the PDF\n\n- `to_date: string`\n  End date (YYYY-MM-DD)\n\n- `pan_no?: string`\n  PAN number (optional)\n\n### Returns\n\n- `{ msg?: string; status?: string; }`\n\n  - `msg?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst response = await client.kfintech.generateCas({\n  email: 'user@example.com',\n  from_date: '2023-01-01',\n  password: 'Abcdefghi12$',\n  to_date: '2023-12-31',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'parse',
    endpoint: '/v4/nsdl/parse',
    httpMethod: 'post',
    summary: 'Parse NSDL CAS PDF',
    description:
      'This endpoint specifically parses NSDL CAS (Consolidated Account Statement) PDF files and returns data in a unified format.\nUse this endpoint when you know the PDF is from NSDL.\n',
    stainlessPath: '(resource) nsdl > (method) parse',
    qualified: 'client.nsdl.parse',
    params: ['password?: string;', 'pdf_file?: string;', 'pdf_url?: string;'],
    response:
      "{ demat_accounts?: { additional_info?: object; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: object; linked_holders?: linked_holder[]; value?: number; }[]; insurance?: { life_insurance_policies?: object[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: object; }; mutual_funds?: { additional_info?: object; amc?: string; folio_number?: string; linked_holders?: linked_holder[]; registrar?: string; schemes?: object[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: object[]; linked_holders?: linked_holder[]; pran?: string; value?: number; }[]; summary?: { accounts?: object; total_value?: number; }; }",
    markdown:
      "## parse\n\n`client.nsdl.parse(password?: string, pdf_file?: string, pdf_url?: string): { demat_accounts?: object[]; insurance?: object; investor?: object; meta?: object; mutual_funds?: object[]; nps?: object[]; summary?: object; }`\n\n**post** `/v4/nsdl/parse`\n\nThis endpoint specifically parses NSDL CAS (Consolidated Account Statement) PDF files and returns data in a unified format.\nUse this endpoint when you know the PDF is from NSDL.\n\n\n### Parameters\n\n- `password?: string`\n  Password for the PDF file (if required)\n\n- `pdf_file?: string`\n  Base64 encoded CAS PDF file (required if pdf_url not provided)\n\n- `pdf_url?: string`\n  URL to the CAS PDF file (required if pdf_file not provided)\n\n### Returns\n\n- `{ demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: object[]; corporate_bonds?: object[]; demat_mutual_funds?: object[]; equities?: object[]; government_securities?: object[]; }; linked_holders?: object[]; value?: number; }[]; insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }; mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: object[]; registrar?: string; schemes?: { additional_info?: object; cost?: number; gain?: object; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: transaction[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: object; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: object[]; pran?: string; value?: number; }[]; summary?: { accounts?: { demat?: object; insurance?: object; mutual_funds?: object; nps?: object; }; total_value?: number; }; }`\n\n  - `demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; corporate_bonds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; demat_mutual_funds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; equities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; government_securities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; }; linked_holders?: { name?: string; pan?: string; }[]; value?: number; }[]`\n  - `insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }`\n  - `investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }`\n  - `meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }`\n  - `mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: { name?: string; pan?: string; }[]; registrar?: string; schemes?: { additional_info?: { advisor?: string; amfi?: string; close_units?: number; open_units?: number; rta_code?: string; }; cost?: number; gain?: { absolute?: number; percentage?: number; }; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: { additional_info?: object; amount?: number; balance?: number; date?: string; description?: string; dividend_rate?: number; nav?: number; type?: string; units?: number; }[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]`\n  - `nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: { manager?: string; tier?: 1 | 2; }; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: { name?: string; pan?: string; }[]; pran?: string; value?: number; }[]`\n  - `summary?: { accounts?: { demat?: { count?: number; total_value?: number; }; insurance?: { count?: number; total_value?: number; }; mutual_funds?: { count?: number; total_value?: number; }; nps?: { count?: number; total_value?: number; }; }; total_value?: number; }`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst unifiedResponse = await client.nsdl.parse();\n\nconsole.log(unifiedResponse);\n```",
  },
  {
    name: 'parse_cas_pdf',
    endpoint: '/v4/smart/parse',
    httpMethod: 'post',
    summary: 'Smart Parse CAS PDF',
    description:
      'This endpoint parses CAS (Consolidated Account Statement) PDF files from NSDL, CDSL, or CAMS/KFintech and returns data in a unified format.\nIt auto-detects the CAS type and transforms the data into a consistent structure regardless of the source.\n',
    stainlessPath: '(resource) smart > (method) parse_cas_pdf',
    qualified: 'client.smart.parseCasPdf',
    params: ['password?: string;', 'pdf_file?: string;', 'pdf_url?: string;'],
    response:
      "{ demat_accounts?: { additional_info?: object; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: object; linked_holders?: linked_holder[]; value?: number; }[]; insurance?: { life_insurance_policies?: object[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: object; }; mutual_funds?: { additional_info?: object; amc?: string; folio_number?: string; linked_holders?: linked_holder[]; registrar?: string; schemes?: object[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: object[]; linked_holders?: linked_holder[]; pran?: string; value?: number; }[]; summary?: { accounts?: object; total_value?: number; }; }",
    markdown:
      "## parse_cas_pdf\n\n`client.smart.parseCasPdf(password?: string, pdf_file?: string, pdf_url?: string): { demat_accounts?: object[]; insurance?: object; investor?: object; meta?: object; mutual_funds?: object[]; nps?: object[]; summary?: object; }`\n\n**post** `/v4/smart/parse`\n\nThis endpoint parses CAS (Consolidated Account Statement) PDF files from NSDL, CDSL, or CAMS/KFintech and returns data in a unified format.\nIt auto-detects the CAS type and transforms the data into a consistent structure regardless of the source.\n\n\n### Parameters\n\n- `password?: string`\n  Password for the PDF file (if required)\n\n- `pdf_file?: string`\n  Base64 encoded CAS PDF file (required if pdf_url not provided)\n\n- `pdf_url?: string`\n  URL to the CAS PDF file (required if pdf_file not provided)\n\n### Returns\n\n- `{ demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: object[]; corporate_bonds?: object[]; demat_mutual_funds?: object[]; equities?: object[]; government_securities?: object[]; }; linked_holders?: object[]; value?: number; }[]; insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }; investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }; meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }; mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: object[]; registrar?: string; schemes?: { additional_info?: object; cost?: number; gain?: object; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: transaction[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]; nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: object; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: object[]; pran?: string; value?: number; }[]; summary?: { accounts?: { demat?: object; insurance?: object; mutual_funds?: object; nps?: object; }; total_value?: number; }; }`\n\n  - `demat_accounts?: { additional_info?: { bo_status?: string; bo_sub_status?: string; bo_type?: string; bsda?: string; email?: string; linked_pans?: string[]; nominee?: string; status?: string; }; bo_id?: string; client_id?: string; demat_type?: 'NSDL' | 'CDSL'; dp_id?: string; dp_name?: string; holdings?: { aifs?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; corporate_bonds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; demat_mutual_funds?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; equities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; government_securities?: { additional_info?: { close_units?: number; open_units?: number; }; isin?: string; name?: string; transactions?: object[]; units?: number; value?: number; }[]; }; linked_holders?: { name?: string; pan?: string; }[]; value?: number; }[]`\n  - `insurance?: { life_insurance_policies?: { additional_info?: object; life_assured?: string; policy_name?: string; policy_number?: string; premium_amount?: number; premium_frequency?: string; provider?: string; status?: string; sum_assured?: number; }[]; }`\n  - `investor?: { address?: string; cas_id?: string; email?: string; mobile?: string; name?: string; pan?: string; pincode?: string; }`\n  - `meta?: { cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH'; generated_at?: string; statement_period?: { from?: string; to?: string; }; }`\n  - `mutual_funds?: { additional_info?: { kyc?: string; pan?: string; pankyc?: string; }; amc?: string; folio_number?: string; linked_holders?: { name?: string; pan?: string; }[]; registrar?: string; schemes?: { additional_info?: { advisor?: string; amfi?: string; close_units?: number; open_units?: number; rta_code?: string; }; cost?: number; gain?: { absolute?: number; percentage?: number; }; isin?: string; name?: string; nav?: number; nominees?: string[]; transactions?: { additional_info?: object; amount?: number; balance?: number; date?: string; description?: string; dividend_rate?: number; nav?: number; type?: string; units?: number; }[]; type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other'; units?: number; value?: number; }[]; value?: number; }[]`\n  - `nps?: { additional_info?: object; cra?: string; funds?: { additional_info?: { manager?: string; tier?: 1 | 2; }; cost?: number; name?: string; nav?: number; units?: number; value?: number; }[]; linked_holders?: { name?: string; pan?: string; }[]; pran?: string; value?: number; }[]`\n  - `summary?: { accounts?: { demat?: { count?: number; total_value?: number; }; insurance?: { count?: number; total_value?: number; }; mutual_funds?: { count?: number; total_value?: number; }; nps?: { count?: number; total_value?: number; }; }; total_value?: number; }`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst unifiedResponse = await client.smart.parseCasPdf();\n\nconsole.log(unifiedResponse);\n```",
  },
  {
    name: 'create',
    endpoint: '/v4/inbound-email',
    httpMethod: 'post',
    summary: 'Create Inbound Email',
    description:
      'Create a dedicated inbound email address for collecting CAS statements via email forwarding.\n\n**How it works:**\n1. Create an inbound email with your webhook URL\n2. Display the email address to your user (e.g., "Forward your CAS to ie_xxx@import.casparser.in")\n3. When an investor forwards a CAS email, we verify the sender and deliver to your webhook\n\n**Webhook Delivery:**\n- We POST to your `callback_url` with JSON body containing files (matching EmailCASFile schema)\n- Failed deliveries are retried automatically with exponential backoff\n\n**Inactivity:**\n- Inbound emails with no activity in 30 days are marked inactive\n- Active inbound emails remain operational indefinitely\n',
    stainlessPath: '(resource) inbound_email > (method) create',
    qualified: 'client.inboundEmail.create',
    params: [
      'callback_url: string;',
      'alias?: string;',
      "allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[];",
      'metadata?: object;',
      'reference?: string;',
    ],
    response:
      "{ allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }",
    markdown:
      "## create\n\n`client.inboundEmail.create(callback_url: string, alias?: string, allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[], metadata?: object, reference?: string): { allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n\n**post** `/v4/inbound-email`\n\nCreate a dedicated inbound email address for collecting CAS statements via email forwarding.\n\n**How it works:**\n1. Create an inbound email with your webhook URL\n2. Display the email address to your user (e.g., \"Forward your CAS to ie_xxx@import.casparser.in\")\n3. When an investor forwards a CAS email, we verify the sender and deliver to your webhook\n\n**Webhook Delivery:**\n- We POST to your `callback_url` with JSON body containing files (matching EmailCASFile schema)\n- Failed deliveries are retried automatically with exponential backoff\n\n**Inactivity:**\n- Inbound emails with no activity in 30 days are marked inactive\n- Active inbound emails remain operational indefinitely\n\n\n### Parameters\n\n- `callback_url: string`\n  Webhook URL where we POST email notifications.\nMust be HTTPS in production (HTTP allowed for localhost during development).\n\n\n- `alias?: string`\n  Optional custom email prefix for user-friendly addresses.\n- Must be 3-32 characters\n- Alphanumeric + hyphens only\n- Must start and end with letter/number\n- Example: `john-portfolio@import.casparser.in`\n- If omitted, generates random ID like `ie_abc123xyz@import.casparser.in`\n\n\n- `allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]`\n  Filter emails by CAS provider. If omitted, accepts all providers.\n- `cdsl` → eCAS@cdslstatement.com\n- `nsdl` → NSDL-CAS@nsdl.co.in\n- `cams` → donotreply@camsonline.com\n- `kfintech` → samfS@kfintech.com\n\n\n- `metadata?: object`\n  Optional key-value pairs (max 10) to include in webhook payload.\nUseful for passing context like plan_type, campaign_id, etc.\n\n\n- `reference?: string`\n  Your internal identifier (e.g., user_id, account_id).\nReturned in webhook payload for correlation.\n\n\n### Returns\n\n- `{ allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n  An inbound email address for receiving forwarded CAS emails\n\n  - `allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]`\n  - `callback_url?: string`\n  - `created_at?: string`\n  - `email?: string`\n  - `inbound_email_id?: string`\n  - `metadata?: object`\n  - `reference?: string`\n  - `status?: 'active' | 'paused'`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst inboundEmail = await client.inboundEmail.create({ callback_url: 'https://api.yourapp.com/webhooks/cas-email' });\n\nconsole.log(inboundEmail);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v4/inbound-email/{inbound_email_id}',
    httpMethod: 'get',
    summary: 'Get Inbound Email Details',
    description: 'Retrieve details of a specific mailbox including statistics.\n',
    stainlessPath: '(resource) inbound_email > (method) retrieve',
    qualified: 'client.inboundEmail.retrieve',
    params: ['inbound_email_id: string;'],
    response:
      "{ allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }",
    markdown:
      "## retrieve\n\n`client.inboundEmail.retrieve(inbound_email_id: string): { allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n\n**get** `/v4/inbound-email/{inbound_email_id}`\n\nRetrieve details of a specific mailbox including statistics.\n\n\n### Parameters\n\n- `inbound_email_id: string`\n\n### Returns\n\n- `{ allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n  An inbound email address for receiving forwarded CAS emails\n\n  - `allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]`\n  - `callback_url?: string`\n  - `created_at?: string`\n  - `email?: string`\n  - `inbound_email_id?: string`\n  - `metadata?: object`\n  - `reference?: string`\n  - `status?: 'active' | 'paused'`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst inboundEmail = await client.inboundEmail.retrieve('ie_a1b2c3d4e5f6');\n\nconsole.log(inboundEmail);\n```",
  },
  {
    name: 'list',
    endpoint: '/v4/inbound-email',
    httpMethod: 'get',
    summary: 'List Inbound Emails',
    description:
      'List all mailboxes associated with your API key.\nReturns active and inactive mailboxes (deleted mailboxes are excluded).\n',
    stainlessPath: '(resource) inbound_email > (method) list',
    qualified: 'client.inboundEmail.list',
    params: ['limit?: number;', 'offset?: number;', "status?: 'active' | 'paused' | 'all';"],
    response:
      "{ inbound_emails?: { allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }[]; limit?: number; offset?: number; status?: string; total?: number; }",
    markdown:
      "## list\n\n`client.inboundEmail.list(limit?: number, offset?: number, status?: 'active' | 'paused' | 'all'): { inbound_emails?: object[]; limit?: number; offset?: number; status?: string; total?: number; }`\n\n**get** `/v4/inbound-email`\n\nList all mailboxes associated with your API key.\nReturns active and inactive mailboxes (deleted mailboxes are excluded).\n\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of inbound emails to return\n\n- `offset?: number`\n  Pagination offset\n\n- `status?: 'active' | 'paused' | 'all'`\n  Filter by status\n\n### Returns\n\n- `{ inbound_emails?: { allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }[]; limit?: number; offset?: number; status?: string; total?: number; }`\n\n  - `inbound_emails?: { allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }[]`\n  - `limit?: number`\n  - `offset?: number`\n  - `status?: string`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst inboundEmails = await client.inboundEmail.list();\n\nconsole.log(inboundEmails);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v4/inbound-email/{inbound_email_id}',
    httpMethod: 'delete',
    summary: 'Delete Inbound Email',
    description:
      'Permanently delete an inbound email address. It will stop accepting emails.\n\n**Note:** Deletion is immediate and cannot be undone. Any emails received after\ndeletion will be rejected.\n',
    stainlessPath: '(resource) inbound_email > (method) delete',
    qualified: 'client.inboundEmail.delete',
    params: ['inbound_email_id: string;'],
    response: '{ msg?: string; status?: string; }',
    markdown:
      "## delete\n\n`client.inboundEmail.delete(inbound_email_id: string): { msg?: string; status?: string; }`\n\n**delete** `/v4/inbound-email/{inbound_email_id}`\n\nPermanently delete an inbound email address. It will stop accepting emails.\n\n**Note:** Deletion is immediate and cannot be undone. Any emails received after\ndeletion will be rejected.\n\n\n### Parameters\n\n- `inbound_email_id: string`\n\n### Returns\n\n- `{ msg?: string; status?: string; }`\n\n  - `msg?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst inboundEmail = await client.inboundEmail.delete('inbound_email_id');\n\nconsole.log(inboundEmail);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
