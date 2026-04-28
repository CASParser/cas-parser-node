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
    perLanguage: {
      typescript: {
        method: 'client.credits.check',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.credits.check();\n\nconsole.log(response.enabled_features);",
      },
      python: {
        method: 'credits.check',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.credits.check()\nprint(response.enabled_features)',
      },
      java: {
        method: 'credits().check',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.credits.CreditCheckParams;\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        CreditCheckResponse response = client.credits().check();\n    }\n}',
      },
      go: {
        method: 'client.Credits.Check',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Credits.Check(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.EnabledFeatures)\n}\n',
      },
      php: {
        method: 'credits->check',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->credits->check();\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v1/credits \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.logs.create',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst log = await client.logs.create();\n\nconsole.log(log.count);",
      },
      python: {
        method: 'logs.create',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nlog = client.logs.create()\nprint(log.count)',
      },
      java: {
        method: 'logs().create',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.logs.LogCreateParams;\nimport com.cas_parser.api.models.logs.LogCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        LogCreateResponse log = client.logs().create();\n    }\n}',
      },
      go: {
        method: 'client.Logs.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlog, err := client.Logs.New(context.TODO(), casparser.LogNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", log.Count)\n}\n',
      },
      php: {
        method: 'logs->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$log = $client->logs->create(\n  endTime: new \\DateTimeImmutable('2026-01-31T23:59:59Z'),\n  limit: 1,\n  startTime: new \\DateTimeImmutable('2026-01-01T00:00:00Z'),\n);\n\nvar_dump($log);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v1/usage \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.logs.getSummary',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.logs.getSummary();\n\nconsole.log(response.status);",
      },
      python: {
        method: 'logs.get_summary',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.logs.get_summary()\nprint(response.status)',
      },
      java: {
        method: 'logs().getSummary',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.logs.LogGetSummaryParams;\nimport com.cas_parser.api.models.logs.LogGetSummaryResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        LogGetSummaryResponse response = client.logs().getSummary();\n    }\n}',
      },
      go: {
        method: 'client.Logs.GetSummary',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Logs.GetSummary(context.TODO(), casparser.LogGetSummaryParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      php: {
        method: 'logs->getSummary',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->logs->getSummary(\n  endTime: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  startTime: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v1/usage/summary \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.accessToken.create',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst accessToken = await client.accessToken.create();\n\nconsole.log(accessToken.access_token);",
      },
      python: {
        method: 'access_token.create',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\naccess_token = client.access_token.create()\nprint(access_token.access_token)',
      },
      java: {
        method: 'accessToken().create',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.accesstoken.AccessTokenCreateParams;\nimport com.cas_parser.api.models.accesstoken.AccessTokenCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        AccessTokenCreateResponse accessToken = client.accessToken().create();\n    }\n}',
      },
      go: {
        method: 'client.AccessToken.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccessToken, err := client.AccessToken.New(context.TODO(), casparser.AccessTokenNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accessToken.AccessToken)\n}\n',
      },
      php: {
        method: 'accessToken->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$accessToken = $client->accessToken->create(expiryMinutes: 60);\n\nvar_dump($accessToken);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v1/token \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.verifyToken.verify',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.verifyToken.verify();\n\nconsole.log(response.valid);",
      },
      python: {
        method: 'verify_token.verify',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.verify_token.verify()\nprint(response.valid)',
      },
      java: {
        method: 'verifyToken().verify',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.verifytoken.VerifyTokenVerifyParams;\nimport com.cas_parser.api.models.verifytoken.VerifyTokenVerifyResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        VerifyTokenVerifyResponse response = client.verifyToken().verify();\n    }\n}',
      },
      go: {
        method: 'client.VerifyToken.Verify',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.VerifyToken.Verify(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Valid)\n}\n',
      },
      php: {
        method: 'verifyToken->verify',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->verifyToken->verify();\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v1/token/verify \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.camsKfintech.parse',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst unifiedResponse = await client.camsKfintech.parse();\n\nconsole.log(unifiedResponse.demat_accounts);",
      },
      python: {
        method: 'cams_kfintech.parse',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nunified_response = client.cams_kfintech.parse()\nprint(unified_response.demat_accounts)',
      },
      java: {
        method: 'camsKfintech().parse',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.camskfintech.CamsKfintechParseParams;\nimport com.cas_parser.api.models.camskfintech.UnifiedResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        UnifiedResponse unifiedResponse = client.camsKfintech().parse();\n    }\n}',
      },
      go: {
        method: 'client.CamsKfintech.Parse',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunifiedResponse, err := client.CamsKfintech.Parse(context.TODO(), casparser.CamsKfintechParseParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unifiedResponse.DematAccounts)\n}\n',
      },
      php: {
        method: 'camsKfintech->parse',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$unifiedResponse = $client->camsKfintech->parse(\n  password: 'password', pdfFile: 'pdf_file', pdfURL: 'https://example.com'\n);\n\nvar_dump($unifiedResponse);",
      },
      http: {
        example:
          "curl https://api.casparser.in/v4/cams_kfintech/parse \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $CAS_PARSER_API_KEY\" \\\n    -d '{}'",
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.cdsl.parsePdf',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst unifiedResponse = await client.cdsl.parsePdf();\n\nconsole.log(unifiedResponse.demat_accounts);",
      },
      python: {
        method: 'cdsl.parse_pdf',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nunified_response = client.cdsl.parse_pdf()\nprint(unified_response.demat_accounts)',
      },
      java: {
        method: 'cdsl().parsePdf',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.camskfintech.UnifiedResponse;\nimport com.cas_parser.api.models.cdsl.CdslParsePdfParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        UnifiedResponse unifiedResponse = client.cdsl().parsePdf();\n    }\n}',
      },
      go: {
        method: 'client.Cdsl.ParsePdf',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunifiedResponse, err := client.Cdsl.ParsePdf(context.TODO(), casparser.CdslParsePdfParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unifiedResponse.DematAccounts)\n}\n',
      },
      php: {
        method: 'cdsl->parsePdf',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$unifiedResponse = $client->cdsl->parsePdf(\n  password: 'password', pdfFile: 'pdf_file', pdfURL: 'https://example.com'\n);\n\nvar_dump($unifiedResponse);",
      },
      http: {
        example:
          "curl https://api.casparser.in/v4/cdsl/parse \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $CAS_PARSER_API_KEY\" \\\n    -d '{}'",
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.cdsl.fetch.requestOtp',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.cdsl.fetch.requestOtp({\n  bo_id: '1234567890123456',\n  dob: '1990-01-15',\n  pan: 'ABCDE1234F',\n});\n\nconsole.log(response.session_id);",
      },
      python: {
        method: 'cdsl.fetch.request_otp',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.cdsl.fetch.request_otp(\n    bo_id="1234567890123456",\n    dob="1990-01-15",\n    pan="ABCDE1234F",\n)\nprint(response.session_id)',
      },
      java: {
        method: 'cdsl().fetch().requestOtp',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.cdsl.fetch.FetchRequestOtpParams;\nimport com.cas_parser.api.models.cdsl.fetch.FetchRequestOtpResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        FetchRequestOtpParams params = FetchRequestOtpParams.builder()\n            .boId("1234567890123456")\n            .dob("1990-01-15")\n            .pan("ABCDE1234F")\n            .build();\n        FetchRequestOtpResponse response = client.cdsl().fetch().requestOtp(params);\n    }\n}',
      },
      go: {
        method: 'client.Cdsl.Fetch.RequestOtp',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Cdsl.Fetch.RequestOtp(context.TODO(), casparser.CdslFetchRequestOtpParams{\n\t\tBoID: "1234567890123456",\n\t\tDob:  "1990-01-15",\n\t\tPan:  "ABCDE1234F",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.SessionID)\n}\n',
      },
      php: {
        method: 'cdsl->fetch->requestOtp',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->cdsl->fetch->requestOtp(\n  boID: '1234567890123456', dob: '1990-01-15', pan: 'ABCDE1234F'\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/cdsl/fetch \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $CAS_PARSER_API_KEY" \\\n    -d \'{\n          "bo_id": "1234567890123456",\n          "dob": "1990-01-15",\n          "pan": "ABCDE1234F"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.cdsl.fetch.verifyOtp',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.cdsl.fetch.verifyOtp('session_id', { otp: '123456' });\n\nconsole.log(response.files);",
      },
      python: {
        method: 'cdsl.fetch.verify_otp',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.cdsl.fetch.verify_otp(\n    session_id="session_id",\n    otp="123456",\n)\nprint(response.files)',
      },
      java: {
        method: 'cdsl().fetch().verifyOtp',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.cdsl.fetch.FetchVerifyOtpParams;\nimport com.cas_parser.api.models.cdsl.fetch.FetchVerifyOtpResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        FetchVerifyOtpParams params = FetchVerifyOtpParams.builder()\n            .sessionId("session_id")\n            .otp("123456")\n            .build();\n        FetchVerifyOtpResponse response = client.cdsl().fetch().verifyOtp(params);\n    }\n}',
      },
      go: {
        method: 'client.Cdsl.Fetch.VerifyOtp',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Cdsl.Fetch.VerifyOtp(\n\t\tcontext.TODO(),\n\t\t"session_id",\n\t\tcasparser.CdslFetchVerifyOtpParams{\n\t\t\tOtp: "123456",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Files)\n}\n',
      },
      php: {
        method: 'cdsl->fetch->verifyOtp',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->cdsl->fetch->verifyOtp(\n  'session_id', otp: '123456', numPeriods: 6\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/cdsl/fetch/$SESSION_ID/verify \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $CAS_PARSER_API_KEY" \\\n    -d \'{\n          "otp": "123456",\n          "num_periods": 6\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.contractNote.parse',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.contractNote.parse();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'contract_note.parse',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.contract_note.parse()\nprint(response.data)',
      },
      java: {
        method: 'contractNote().parse',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.contractnote.ContractNoteParseParams;\nimport com.cas_parser.api.models.contractnote.ContractNoteParseResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        ContractNoteParseResponse response = client.contractNote().parse();\n    }\n}',
      },
      go: {
        method: 'client.ContractNote.Parse',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.ContractNote.Parse(context.TODO(), casparser.ContractNoteParseParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      php: {
        method: 'contractNote->parse',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->contractNote->parse(\n  brokerType: 'zerodha',\n  password: 'FAXAK2545F',\n  pdfFile: 'JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwo...',\n  pdfURL: 'https://example.com/contract_note.pdf',\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/contract_note/parse \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $CAS_PARSER_API_KEY" \\\n    -d \'{\n          "broker_type": "zerodha",\n          "password": "FAXAK2545F",\n          "pdf_file": "JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwo...",\n          "pdf_url": "https://example.com/contract_note.pdf"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.inbox.listCasFiles',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.listCasFiles({ 'x-inbox-token': 'x-inbox-token' });\n\nconsole.log(response.count);",
      },
      python: {
        method: 'inbox.list_cas_files',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.list_cas_files(\n    x_inbox_token="x-inbox-token",\n)\nprint(response.count)',
      },
      java: {
        method: 'inbox().listCasFiles',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inbox.InboxListCasFilesParams;\nimport com.cas_parser.api.models.inbox.InboxListCasFilesResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboxListCasFilesParams params = InboxListCasFilesParams.builder()\n            .xInboxToken("x-inbox-token")\n            .build();\n        InboxListCasFilesResponse response = client.inbox().listCasFiles(params);\n    }\n}',
      },
      go: {
        method: 'client.Inbox.ListCasFiles',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.ListCasFiles(context.TODO(), casparser.InboxListCasFilesParams{\n\t\tXInboxToken: "x-inbox-token",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Count)\n}\n',
      },
      php: {
        method: 'inbox->listCasFiles',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->inbox->listCasFiles(\n  xInboxToken: 'x-inbox-token',\n  casTypes: ['cdsl', 'nsdl'],\n  endDate: '2025-12-31',\n  startDate: '2025-12-01',\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/inbox/cas \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.inbox.connectEmail',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.connectEmail({\n  redirect_uri: 'https://yourapp.com/oauth-callback',\n});\n\nconsole.log(response.expires_in);",
      },
      python: {
        method: 'inbox.connect_email',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.connect_email(\n    redirect_uri="https://yourapp.com/oauth-callback",\n)\nprint(response.expires_in)',
      },
      java: {
        method: 'inbox().connectEmail',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inbox.InboxConnectEmailParams;\nimport com.cas_parser.api.models.inbox.InboxConnectEmailResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboxConnectEmailParams params = InboxConnectEmailParams.builder()\n            .redirectUri("https://yourapp.com/oauth-callback")\n            .build();\n        InboxConnectEmailResponse response = client.inbox().connectEmail(params);\n    }\n}',
      },
      go: {
        method: 'client.Inbox.ConnectEmail',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.ConnectEmail(context.TODO(), casparser.InboxConnectEmailParams{\n\t\tRedirectUri: "https://yourapp.com/oauth-callback",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ExpiresIn)\n}\n',
      },
      php: {
        method: 'inbox->connectEmail',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->inbox->connectEmail(\n  redirectUri: 'https://yourapp.com/oauth-callback', state: 'abc123'\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/inbox/connect \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $CAS_PARSER_API_KEY" \\\n    -d \'{\n          "redirect_uri": "https://yourapp.com/oauth-callback",\n          "state": "abc123"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.inbox.disconnectEmail',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.disconnectEmail({ 'x-inbox-token': 'x-inbox-token' });\n\nconsole.log(response.msg);",
      },
      python: {
        method: 'inbox.disconnect_email',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.disconnect_email(\n    x_inbox_token="x-inbox-token",\n)\nprint(response.msg)',
      },
      java: {
        method: 'inbox().disconnectEmail',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inbox.InboxDisconnectEmailParams;\nimport com.cas_parser.api.models.inbox.InboxDisconnectEmailResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboxDisconnectEmailParams params = InboxDisconnectEmailParams.builder()\n            .xInboxToken("x-inbox-token")\n            .build();\n        InboxDisconnectEmailResponse response = client.inbox().disconnectEmail(params);\n    }\n}',
      },
      go: {
        method: 'client.Inbox.DisconnectEmail',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.DisconnectEmail(context.TODO(), casparser.InboxDisconnectEmailParams{\n\t\tXInboxToken: "x-inbox-token",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Msg)\n}\n',
      },
      php: {
        method: 'inbox->disconnectEmail',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->inbox->disconnectEmail(xInboxToken: 'x-inbox-token');\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/inbox/disconnect \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.inbox.checkConnectionStatus',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.inbox.checkConnectionStatus({ 'x-inbox-token': 'x-inbox-token' });\n\nconsole.log(response.provider);",
      },
      python: {
        method: 'inbox.check_connection_status',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.inbox.check_connection_status(\n    x_inbox_token="x-inbox-token",\n)\nprint(response.provider)',
      },
      java: {
        method: 'inbox().checkConnectionStatus',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inbox.InboxCheckConnectionStatusParams;\nimport com.cas_parser.api.models.inbox.InboxCheckConnectionStatusResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboxCheckConnectionStatusParams params = InboxCheckConnectionStatusParams.builder()\n            .xInboxToken("x-inbox-token")\n            .build();\n        InboxCheckConnectionStatusResponse response = client.inbox().checkConnectionStatus(params);\n    }\n}',
      },
      go: {
        method: 'client.Inbox.CheckConnectionStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Inbox.CheckConnectionStatus(context.TODO(), casparser.InboxCheckConnectionStatusParams{\n\t\tXInboxToken: "x-inbox-token",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Provider)\n}\n',
      },
      php: {
        method: 'inbox->checkConnectionStatus',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->inbox->checkConnectionStatus(xInboxToken: 'x-inbox-token');\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/inbox/status \\\n    -X POST \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.kfintech.generateCas',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.kfintech.generateCas({\n  email: 'user@example.com',\n  from_date: '2023-01-01',\n  password: 'Abcdefghi12$',\n  to_date: '2023-12-31',\n});\n\nconsole.log(response.msg);",
      },
      python: {
        method: 'kfintech.generate_cas',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.kfintech.generate_cas(\n    email="user@example.com",\n    from_date="2023-01-01",\n    password="Abcdefghi12$",\n    to_date="2023-12-31",\n)\nprint(response.msg)',
      },
      java: {
        method: 'kfintech().generateCas',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.kfintech.KfintechGenerateCasParams;\nimport com.cas_parser.api.models.kfintech.KfintechGenerateCasResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        KfintechGenerateCasParams params = KfintechGenerateCasParams.builder()\n            .email("user@example.com")\n            .fromDate("2023-01-01")\n            .password("Abcdefghi12$")\n            .toDate("2023-12-31")\n            .build();\n        KfintechGenerateCasResponse response = client.kfintech().generateCas(params);\n    }\n}',
      },
      go: {
        method: 'client.Kfintech.GenerateCas',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Kfintech.GenerateCas(context.TODO(), casparser.KfintechGenerateCasParams{\n\t\tEmail:    "user@example.com",\n\t\tFromDate: "2023-01-01",\n\t\tPassword: "Abcdefghi12$",\n\t\tToDate:   "2023-12-31",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Msg)\n}\n',
      },
      php: {
        method: 'kfintech->generateCas',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->kfintech->generateCas(\n  email: 'user@example.com',\n  fromDate: '2023-01-01',\n  password: 'Abcdefghi12$',\n  toDate: '2023-12-31',\n  panNo: 'ABCDE1234F',\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/kfintech/generate \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $CAS_PARSER_API_KEY" \\\n    -d \'{\n          "email": "user@example.com",\n          "from_date": "2023-01-01",\n          "password": "Abcdefghi12$",\n          "to_date": "2023-12-31",\n          "pan_no": "ABCDE1234F"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.nsdl.parse',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst unifiedResponse = await client.nsdl.parse();\n\nconsole.log(unifiedResponse.demat_accounts);",
      },
      python: {
        method: 'nsdl.parse',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nunified_response = client.nsdl.parse()\nprint(unified_response.demat_accounts)',
      },
      java: {
        method: 'nsdl().parse',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.camskfintech.UnifiedResponse;\nimport com.cas_parser.api.models.nsdl.NsdlParseParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        UnifiedResponse unifiedResponse = client.nsdl().parse();\n    }\n}',
      },
      go: {
        method: 'client.Nsdl.Parse',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunifiedResponse, err := client.Nsdl.Parse(context.TODO(), casparser.NsdlParseParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unifiedResponse.DematAccounts)\n}\n',
      },
      php: {
        method: 'nsdl->parse',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$unifiedResponse = $client->nsdl->parse(\n  password: 'password', pdfFile: 'pdf_file', pdfURL: 'https://example.com'\n);\n\nvar_dump($unifiedResponse);",
      },
      http: {
        example:
          "curl https://api.casparser.in/v4/nsdl/parse \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $CAS_PARSER_API_KEY\" \\\n    -d '{}'",
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.smart.parseCasPdf',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst unifiedResponse = await client.smart.parseCasPdf();\n\nconsole.log(unifiedResponse.demat_accounts);",
      },
      python: {
        method: 'smart.parse_cas_pdf',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\nunified_response = client.smart.parse_cas_pdf()\nprint(unified_response.demat_accounts)',
      },
      java: {
        method: 'smart().parseCasPdf',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.camskfintech.UnifiedResponse;\nimport com.cas_parser.api.models.smart.SmartParseCasPdfParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        UnifiedResponse unifiedResponse = client.smart().parseCasPdf();\n    }\n}',
      },
      go: {
        method: 'client.Smart.ParseCasPdf',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunifiedResponse, err := client.Smart.ParseCasPdf(context.TODO(), casparser.SmartParseCasPdfParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unifiedResponse.DematAccounts)\n}\n',
      },
      php: {
        method: 'smart->parseCasPdf',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$unifiedResponse = $client->smart->parseCasPdf(\n  password: 'password', pdfFile: 'pdf_file', pdfURL: 'https://example.com'\n);\n\nvar_dump($unifiedResponse);",
      },
      http: {
        example:
          "curl https://api.casparser.in/v4/smart/parse \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $CAS_PARSER_API_KEY\" \\\n    -d '{}'",
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.inboundEmail.list',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst inboundEmails = await client.inboundEmail.list();\n\nconsole.log(inboundEmails.inbound_emails);",
      },
      python: {
        method: 'inbound_email.list',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\ninbound_emails = client.inbound_email.list()\nprint(inbound_emails.inbound_emails)',
      },
      java: {
        method: 'inboundEmail().list',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inboundemail.InboundEmailListParams;\nimport com.cas_parser.api.models.inboundemail.InboundEmailListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboundEmailListResponse inboundEmails = client.inboundEmail().list();\n    }\n}',
      },
      go: {
        method: 'client.InboundEmail.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinboundEmails, err := client.InboundEmail.List(context.TODO(), casparser.InboundEmailListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", inboundEmails.InboundEmails)\n}\n',
      },
      php: {
        method: 'inboundEmail->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$inboundEmails = $client->inboundEmail->list(\n  limit: 1, offset: 0, status: 'active'\n);\n\nvar_dump($inboundEmails);",
      },
      http: {
        example: 'curl https://api.casparser.in/v4/inbound-email \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v4/inbound-email',
    httpMethod: 'post',
    summary: 'Create Inbound Email',
    description:
      'Create a dedicated inbound email address for collecting CAS statements\nvia email forwarding. When an investor forwards a CAS email to this\naddress, we verify the sender and make the file available to you.\n\n`callback_url` is **optional**:\n- **Set it** — we POST each parsed email to your webhook as it arrives.\n- **Omit it** — retrieve files via `GET /v4/inbound-email/{id}/files`\n  without building a webhook consumer.\n',
    stainlessPath: '(resource) inbound_email > (method) create',
    qualified: 'client.inboundEmail.create',
    params: [
      'alias?: string;',
      "allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[];",
      'callback_url?: string;',
      'metadata?: object;',
      'reference?: string;',
    ],
    response:
      "{ allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }",
    markdown:
      "## create\n\n`client.inboundEmail.create(alias?: string, allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[], callback_url?: string, metadata?: object, reference?: string): { allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n\n**post** `/v4/inbound-email`\n\nCreate a dedicated inbound email address for collecting CAS statements\nvia email forwarding. When an investor forwards a CAS email to this\naddress, we verify the sender and make the file available to you.\n\n`callback_url` is **optional**:\n- **Set it** — we POST each parsed email to your webhook as it arrives.\n- **Omit it** — retrieve files via `GET /v4/inbound-email/{id}/files`\n  without building a webhook consumer.\n\n\n### Parameters\n\n- `alias?: string`\n  Optional custom email prefix (e.g.\n`john-portfolio@import.casparser.in`). 3-32 chars,\nalphanumeric + hyphens, must start/end with a letter or\nnumber. If omitted, a random ID is generated.\n\n\n- `allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]`\n  Filter emails by CAS provider. If omitted, accepts all providers.\n- `cdsl` → eCAS@cdslstatement.com\n- `nsdl` → NSDL-CAS@nsdl.co.in\n- `cams` → donotreply@camsonline.com\n- `kfintech` → samfS@kfintech.com\n\n\n- `callback_url?: string`\n  Optional webhook URL where we POST parsed emails. Must be\nHTTPS in production (HTTP allowed for localhost). If omitted,\nretrieve files via `GET /v4/inbound-email/{id}/files`.\n\n\n- `metadata?: object`\n  Optional key-value pairs (max 10) to include in webhook payload.\nUseful for passing context like plan_type, campaign_id, etc.\n\n\n- `reference?: string`\n  Your internal identifier (e.g., user_id, account_id).\nReturned in webhook payload for correlation.\n\n\n### Returns\n\n- `{ allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n  An inbound email address for receiving forwarded CAS emails\n\n  - `allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]`\n  - `callback_url?: string`\n  - `created_at?: string`\n  - `email?: string`\n  - `inbound_email_id?: string`\n  - `metadata?: object`\n  - `reference?: string`\n  - `status?: 'active' | 'paused'`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst inboundEmail = await client.inboundEmail.create();\n\nconsole.log(inboundEmail);\n```",
    perLanguage: {
      typescript: {
        method: 'client.inboundEmail.create',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst inboundEmail = await client.inboundEmail.create();\n\nconsole.log(inboundEmail.inbound_email_id);",
      },
      python: {
        method: 'inbound_email.create',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\ninbound_email = client.inbound_email.create()\nprint(inbound_email.inbound_email_id)',
      },
      java: {
        method: 'inboundEmail().create',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inboundemail.InboundEmailCreateParams;\nimport com.cas_parser.api.models.inboundemail.InboundEmailCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboundEmailCreateResponse inboundEmail = client.inboundEmail().create();\n    }\n}',
      },
      go: {
        method: 'client.InboundEmail.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinboundEmail, err := client.InboundEmail.New(context.TODO(), casparser.InboundEmailNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", inboundEmail.InboundEmailID)\n}\n',
      },
      php: {
        method: 'inboundEmail->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$inboundEmail = $client->inboundEmail->create(\n  alias: 'john-portfolio',\n  allowedSources: ['cdsl', 'nsdl'],\n  callbackURL: 'https://api.yourapp.com/webhooks/cas-email',\n  metadata: ['plan' => 'premium', 'source' => 'onboarding'],\n  reference: 'user_12345',\n);\n\nvar_dump($inboundEmail);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/inbound-email \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $CAS_PARSER_API_KEY" \\\n    -d \'{\n          "alias": "john-portfolio",\n          "allowed_sources": [\n            "cdsl",\n            "nsdl"\n          ],\n          "callback_url": "https://api.yourapp.com/webhooks/cas-email",\n          "metadata": {\n            "plan": "premium",\n            "source": "onboarding"\n          },\n          "reference": "user_12345"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.inboundEmail.delete',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst inboundEmail = await client.inboundEmail.delete('inbound_email_id');\n\nconsole.log(inboundEmail.msg);",
      },
      python: {
        method: 'inbound_email.delete',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\ninbound_email = client.inbound_email.delete(\n    "inbound_email_id",\n)\nprint(inbound_email.msg)',
      },
      java: {
        method: 'inboundEmail().delete',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inboundemail.InboundEmailDeleteParams;\nimport com.cas_parser.api.models.inboundemail.InboundEmailDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboundEmailDeleteResponse inboundEmail = client.inboundEmail().delete("inbound_email_id");\n    }\n}',
      },
      go: {
        method: 'client.InboundEmail.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinboundEmail, err := client.InboundEmail.Delete(context.TODO(), "inbound_email_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", inboundEmail.Msg)\n}\n',
      },
      php: {
        method: 'inboundEmail->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$inboundEmail = $client->inboundEmail->delete('inbound_email_id');\n\nvar_dump($inboundEmail);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/inbound-email/$INBOUND_EMAIL_ID \\\n    -X DELETE \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
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
      "## retrieve\n\n`client.inboundEmail.retrieve(inbound_email_id: string): { allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n\n**get** `/v4/inbound-email/{inbound_email_id}`\n\nRetrieve details of a specific mailbox including statistics.\n\n\n### Parameters\n\n- `inbound_email_id: string`\n\n### Returns\n\n- `{ allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]; callback_url?: string; created_at?: string; email?: string; inbound_email_id?: string; metadata?: object; reference?: string; status?: 'active' | 'paused'; updated_at?: string; }`\n  An inbound email address for receiving forwarded CAS emails\n\n  - `allowed_sources?: 'cdsl' | 'nsdl' | 'cams' | 'kfintech'[]`\n  - `callback_url?: string`\n  - `created_at?: string`\n  - `email?: string`\n  - `inbound_email_id?: string`\n  - `metadata?: object`\n  - `reference?: string`\n  - `status?: 'active' | 'paused'`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser();\n\nconst inboundEmail = await client.inboundEmail.retrieve('inbound_email_id');\n\nconsole.log(inboundEmail);\n```",
    perLanguage: {
      typescript: {
        method: 'client.inboundEmail.retrieve',
        example:
          "import CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst inboundEmail = await client.inboundEmail.retrieve('inbound_email_id');\n\nconsole.log(inboundEmail.inbound_email_id);",
      },
      python: {
        method: 'inbound_email.retrieve',
        example:
          'import os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\ninbound_email = client.inbound_email.retrieve(\n    "inbound_email_id",\n)\nprint(inbound_email.inbound_email_id)',
      },
      java: {
        method: 'inboundEmail().retrieve',
        example:
          'package com.cas_parser.api.example;\n\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.inboundemail.InboundEmailRetrieveParams;\nimport com.cas_parser.api.models.inboundemail.InboundEmailRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CasParserClient client = CasParserOkHttpClient.fromEnv();\n\n        InboundEmailRetrieveResponse inboundEmail = client.inboundEmail().retrieve("inbound_email_id");\n    }\n}',
      },
      go: {
        method: 'client.InboundEmail.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinboundEmail, err := client.InboundEmail.Get(context.TODO(), "inbound_email_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", inboundEmail.InboundEmailID)\n}\n',
      },
      php: {
        method: 'inboundEmail->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$inboundEmail = $client->inboundEmail->retrieve('inbound_email_id');\n\nvar_dump($inboundEmail);",
      },
      http: {
        example:
          'curl https://api.casparser.in/v4/inbound-email/$INBOUND_EMAIL_ID \\\n    -H "x-api-key: $CAS_PARSER_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'go',
    content:
      '# Cas Parser Go API Library\n\n<a href="https://pkg.go.dev/github.com/CASParser/cas-parser-go"><img src="https://pkg.go.dev/badge/github.com/CASParser/cas-parser-go.svg" alt="Go Reference"></a>\n\nThe Cas Parser Go library provides convenient access to the [Cas Parser REST API](https://casparser.in/docs)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cas Parser MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cas-parser-node-mcp&config=eyJuYW1lIjoiY2FzLXBhcnNlci1ub2RlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2Nhcy1wYXJzZXIuc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cas-parser-node-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcas-parser.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/CASParser/cas-parser-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/CASParser/cas-parser-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/CASParser/cas-parser-go"\n\t"github.com/CASParser/cas-parser-go/option"\n)\n\nfunc main() {\n\tclient := casparser.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("CAS_PARSER_API_KEY")\n\t)\n\tresponse, err := client.Credits.Check(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.EnabledFeatures)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Credits.Check(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/CASParser/cas-parser-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Credits.Check(context.TODO())\nif err != nil {\n\tvar apierr *casparser.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/credits": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Credits.Check(\n\tctx,\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := casparser.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Credits.Check(context.TODO(), option.WithMaxRetries(5))\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nresponse, err := client.Credits.Check(context.TODO(), option.WithResponseInto(&response))\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", response)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/CASParser/cas-parser-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Cas Parser Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.cas_parser.api/cas-parser-java)](https://central.sonatype.com/artifact/com.cas_parser.api/cas-parser-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.cas_parser.api/cas-parser-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.cas_parser.api/cas-parser-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Cas Parser Java SDK provides convenient access to the [Cas Parser REST API](https://casparser.in/docs)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cas Parser MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cas-parser-node-mcp&config=eyJuYW1lIjoiY2FzLXBhcnNlci1ub2RlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2Nhcy1wYXJzZXIuc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cas-parser-node-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcas-parser.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [casparser.in](https://casparser.in/docs). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.cas_parser.api/cas-parser-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.cas_parser.api:cas-parser-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.cas_parser.api</groupId>\n  <artifactId>cas-parser-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.credits.CreditCheckParams;\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\n\n// Configures using the `casparser.apiKey` and `casparser.baseUrl` system properties\n// Or configures using the `CAS_PARSER_API_KEY` and `CAS_PARSER_BASE_URL` environment variables\nCasParserClient client = CasParserOkHttpClient.fromEnv();\n\nCreditCheckResponse response = client.credits().check();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\n\n// Configures using the `casparser.apiKey` and `casparser.baseUrl` system properties\n// Or configures using the `CAS_PARSER_API_KEY` and `CAS_PARSER_BASE_URL` environment variables\nCasParserClient client = CasParserOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    // Configures using the `casparser.apiKey` and `casparser.baseUrl` system properties\n    // Or configures using the `CAS_PARSER_API_KEY` and `CAS_PARSER_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property     | Environment variable  | Required | Default value                |\n| --------- | ------------------- | --------------------- | -------- | ---------------------------- |\n| `apiKey`  | `casparser.apiKey`  | `CAS_PARSER_API_KEY`  | true     | -                            |\n| `baseUrl` | `casparser.baseUrl` | `CAS_PARSER_BASE_URL` | true     | `"https://api.casparser.in"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\n\nCasParserClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Cas Parser API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.credits().check(...)` should be called with an instance of `CreditCheckParams`, and it     will return an instance of `CreditCheckResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport com.cas_parser.api.models.credits.CreditCheckParams;\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `casparser.apiKey` and `casparser.baseUrl` system properties\n// Or configures using the `CAS_PARSER_API_KEY` and `CAS_PARSER_BASE_URL` environment variables\nCasParserClient client = CasParserOkHttpClient.fromEnv();\n\nCompletableFuture<CreditCheckResponse> response = client.async().credits().check();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.cas_parser.api.client.CasParserClientAsync;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClientAsync;\nimport com.cas_parser.api.models.credits.CreditCheckParams;\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `casparser.apiKey` and `casparser.baseUrl` system properties\n// Or configures using the `CAS_PARSER_API_KEY` and `CAS_PARSER_BASE_URL` environment variables\nCasParserClientAsync client = CasParserOkHttpClientAsync.fromEnv();\n\nCompletableFuture<CreditCheckResponse> response = client.credits().check();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.cas_parser.api.core.http.Headers;\nimport com.cas_parser.api.core.http.HttpResponseFor;\nimport com.cas_parser.api.models.credits.CreditCheckParams;\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\n\nHttpResponseFor<CreditCheckResponse> response = client.credits().withRawResponse().check();\n\nint statusCode = response.statusCode();\nHeaders headers = response.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\n\nCreditCheckResponse parsedResponse = response.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`CasParserServiceException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/CasParserServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`CasParserIoException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/CasParserIoException.kt): I/O networking errors.\n\n- [`CasParserRetryableException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/CasParserRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`CasParserInvalidDataException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/CasParserInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`CasParserException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/CasParserException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `CAS_PARSER_LOG` environment variable to   `info`:\n\n```sh\nexport CAS_PARSER_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport CAS_PARSER_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `cas-parser-java-core` is published with a     [configuration file](cas-parser-java-core/src/main/resources/META-INF/proguard/cas-parser-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`CasParserOkHttpClient`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClient.kt) or     [`CasParserOkHttpClientAsync`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\n\nCreditCheckResponse response = client.credits().check(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport java.time.Duration;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\nimport java.time.Duration;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `cas-parser-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`CasParserClient`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClient.kt), [`CasParserClientAsync`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientAsync.kt),             [`CasParserClientImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientImpl.kt), and [`CasParserClientAsyncImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `cas-parser-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`CasParserOkHttpClient`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClient.kt) and [`CasParserOkHttpClientAsync`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClientAsync.kt), which             provide a way to construct [`CasParserClientImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientImpl.kt) and             [`CasParserClientAsyncImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientAsyncImpl.kt), respectively, using OkHttp\n- `cas-parser-java`\n  - Depends on and exposes the APIs of both `cas-parser-java-core` and `cas-parser-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`cas-parser-java` dependency](#installation) with `cas-parser-java-core`\n2. Copy `cas-parser-java-client-okhttp`\'s [`OkHttpClient`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`CasParserClientImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientImpl.kt) or [`CasParserClientAsyncImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientAsyncImpl.kt), similarly to        [`CasParserOkHttpClient`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClient.kt) or [`CasParserOkHttpClientAsync`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`cas-parser-java` dependency](#installation) with `cas-parser-java-core`\n2. Write a class that implements the [`HttpClient`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/core/http/HttpClient.kt) interface\n3. Construct [`CasParserClientImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientImpl.kt) or [`CasParserClientAsyncImpl`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/client/CasParserClientAsyncImpl.kt), similarly to        [`CasParserOkHttpClient`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClient.kt) or [`CasParserOkHttpClientAsync`](cas-parser-java-client-okhttp/src/main/kotlin/com/cas_parser/api/client/okhttp/CasParserOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.cas_parser.api.core.JsonValue;\nimport com.cas_parser.api.models.credits.CreditCheckParams;\n\nCreditCheckParams params = CreditCheckParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/core/Values.kt) object to its setter:\n\n```java\nimport com.cas_parser.api.models.credits.CreditCheckParams;\n\nCreditCheckParams params = CreditCheckParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.cas_parser.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/core/Values.kt):\n\n```java\nimport com.cas_parser.api.core.JsonMissing;\nimport com.cas_parser.api.models.cdsl.fetch.FetchRequestOtpParams;\nimport com.cas_parser.api.models.credits.CreditCheckParams;\n\nCreditCheckParams params = FetchRequestOtpParams.builder()\n    .dob("1990-01-15")\n    .pan("ABCDE1234F")\n    .boId(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.cas_parser.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.credits().check(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.cas_parser.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.credits().check(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`CasParserInvalidDataException`](cas-parser-java-core/src/main/kotlin/com/cas_parser/api/errors/CasParserInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\n\nCreditCheckResponse response = client.credits().check(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.cas_parser.api.models.credits.CreditCheckResponse;\n\nCreditCheckResponse response = client.credits().check(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.cas_parser.api.client.CasParserClient;\nimport com.cas_parser.api.client.okhttp.CasParserOkHttpClient;\n\nCasParserClient client = CasParserOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/CASParser/cas-parser-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'php',
    content:
      '# Cas Parser PHP API Library\n\nThe Cas Parser PHP library provides convenient access to the Cas Parser REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n<!-- x-release-please-start-version -->\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:CASParser/cas-parser-php.git"\n    }\n  ],\n  "require": {\n    "org-placeholder/cas-parser": "dev-main"\n  }\n}\n```\n<!-- x-release-please-end -->\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(apiKey: getenv(\'CAS_PARSER_API_KEY\') ?: \'My API Key\');\n\n$response = $client->credits->check();\n\nvar_dump($response->enabled_features);\n```',
  },
  {
    language: 'python',
    content:
      '# Cas Parser Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/cas-parser-python.svg?label=pypi%20(stable))](https://pypi.org/project/cas-parser-python/)\n\nThe Cas Parser Python library provides convenient access to the Cas Parser REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cas Parser MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cas-parser-node-mcp&config=eyJuYW1lIjoiY2FzLXBhcnNlci1ub2RlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2Nhcy1wYXJzZXIuc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cas-parser-node-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcas-parser.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [casparser.in](https://casparser.in/docs). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install cas-parser-python\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom cas_parser import CasParser\n\nclient = CasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\n\nresponse = client.credits.check()\nprint(response.enabled_features)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `CAS_PARSER_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncCasParser` instead of `CasParser` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom cas_parser import AsyncCasParser\n\nclient = AsyncCasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  response = await client.credits.check()\n  print(response.enabled_features)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install cas-parser-python[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom cas_parser import DefaultAioHttpClient\nfrom cas_parser import AsyncCasParser\n\nasync def main() -> None:\n  async with AsyncCasParser(\n    api_key=os.environ.get("CAS_PARSER_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.credits.check()\n    print(response.enabled_features)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `cas_parser.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `cas_parser.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `cas_parser.APIError`.\n\n```python\nimport cas_parser\nfrom cas_parser import CasParser\n\nclient = CasParser()\n\ntry:\n    client.credits.check()\nexcept cas_parser.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept cas_parser.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept cas_parser.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom cas_parser import CasParser\n\n# Configure the default for all requests:\nclient = CasParser(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).credits.check()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom cas_parser import CasParser\n\n# Configure the default for all requests:\nclient = CasParser(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = CasParser(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).credits.check()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `CAS_PARSER_LOG` to `info`.\n\n```shell\n$ export CAS_PARSER_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom cas_parser import CasParser\n\nclient = CasParser()\nresponse = client.credits.with_raw_response.check()\nprint(response.headers.get(\'X-My-Header\'))\n\ncredit = response.parse()  # get the object that `credits.check()` would have returned\nprint(credit.enabled_features)\n```\n\nThese methods return an [`APIResponse`](https://github.com/CASParser/cas-parser-python/tree/main/src/cas_parser/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/CASParser/cas-parser-python/tree/main/src/cas_parser/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.credits.with_streaming_response.check() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom cas_parser import CasParser, DefaultHttpxClient\n\nclient = CasParser(\n    # Or use the `CAS_PARSER_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom cas_parser import CasParser\n\nwith CasParser() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/CASParser/cas-parser-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport cas_parser\nprint(cas_parser.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Cas Parser TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/cas-parser-node.svg?label=npm%20(stable))](https://npmjs.org/package/cas-parser-node) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/cas-parser-node)\n\nThis library provides convenient access to the Cas Parser REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [casparser.in](https://casparser.in/docs). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cas Parser MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cas-parser-node-mcp&config=eyJuYW1lIjoiY2FzLXBhcnNlci1ub2RlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2Nhcy1wYXJzZXIuc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cas-parser-node-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcas-parser.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install cas-parser-node\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.credits.check();\n\nconsole.log(response.enabled_features);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  apiKey: process.env['CAS_PARSER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response: CasParser.CreditCheckResponse = await client.credits.check();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.credits.check().catch(async (err) => {\n  if (err instanceof CasParser.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new CasParser({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.credits.check({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new CasParser({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.credits.check({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new CasParser();\n\nconst response = await client.credits.check().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.credits.check().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.enabled_features);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `CAS_PARSER_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport CasParser from 'cas-parser-node';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new CasParser({\n  logger: logger.child({ name: 'CasParser' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.credits.check({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport CasParser from 'cas-parser-node';\nimport fetch from 'my-fetch';\n\nconst client = new CasParser({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport CasParser from 'cas-parser-node';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new CasParser({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport CasParser from 'cas-parser-node';\n\nconst client = new CasParser({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport CasParser from 'npm:cas-parser-node';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new CasParser({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/CASParser/cas-parser-node/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

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
