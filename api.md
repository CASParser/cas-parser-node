# Credits

Types:

- <code><a href="./src/resources/credits.ts">CreditCheckResponse</a></code>

Methods:

- <code title="post /credits">client.credits.<a href="./src/resources/credits.ts">check</a>() -> CreditCheckResponse</code>

# Logs

Types:

- <code><a href="./src/resources/logs.ts">LogCreateResponse</a></code>
- <code><a href="./src/resources/logs.ts">LogGetSummaryResponse</a></code>

Methods:

- <code title="post /logs">client.logs.<a href="./src/resources/logs.ts">create</a>({ ...params }) -> LogCreateResponse</code>
- <code title="post /logs/summary">client.logs.<a href="./src/resources/logs.ts">getSummary</a>({ ...params }) -> LogGetSummaryResponse</code>

# AccessToken

Types:

- <code><a href="./src/resources/access-token.ts">AccessTokenCreateResponse</a></code>

Methods:

- <code title="post /v1/access-token">client.accessToken.<a href="./src/resources/access-token.ts">create</a>({ ...params }) -> AccessTokenCreateResponse</code>

# VerifyToken

Types:

- <code><a href="./src/resources/verify-token.ts">VerifyTokenVerifyResponse</a></code>

Methods:

- <code title="post /v1/verify-token">client.verifyToken.<a href="./src/resources/verify-token.ts">verify</a>() -> VerifyTokenVerifyResponse</code>

# CamsKfintech

Types:

- <code><a href="./src/resources/cams-kfintech.ts">LinkedHolder</a></code>
- <code><a href="./src/resources/cams-kfintech.ts">Transaction</a></code>
- <code><a href="./src/resources/cams-kfintech.ts">UnifiedResponse</a></code>

Methods:

- <code title="post /v4/cams_kfintech/parse">client.camsKfintech.<a href="./src/resources/cams-kfintech.ts">parse</a>({ ...params }) -> UnifiedResponse</code>

# Cdsl

Methods:

- <code title="post /v4/cdsl/parse">client.cdsl.<a href="./src/resources/cdsl/cdsl.ts">parsePdf</a>({ ...params }) -> UnifiedResponse</code>

## Fetch

Types:

- <code><a href="./src/resources/cdsl/fetch.ts">FetchRequestOtpResponse</a></code>
- <code><a href="./src/resources/cdsl/fetch.ts">FetchVerifyOtpResponse</a></code>

Methods:

- <code title="post /v4/cdsl/fetch">client.cdsl.fetch.<a href="./src/resources/cdsl/fetch.ts">requestOtp</a>({ ...params }) -> FetchRequestOtpResponse</code>
- <code title="post /v4/cdsl/fetch/{session_id}/verify">client.cdsl.fetch.<a href="./src/resources/cdsl/fetch.ts">verifyOtp</a>(sessionID, { ...params }) -> FetchVerifyOtpResponse</code>

# ContractNote

Types:

- <code><a href="./src/resources/contract-note.ts">ContractNoteParseResponse</a></code>

Methods:

- <code title="post /v4/contract_note/parse">client.contractNote.<a href="./src/resources/contract-note.ts">parse</a>({ ...params }) -> ContractNoteParseResponse</code>

# Inbox

Types:

- <code><a href="./src/resources/inbox.ts">InboxCheckConnectionStatusResponse</a></code>
- <code><a href="./src/resources/inbox.ts">InboxConnectEmailResponse</a></code>
- <code><a href="./src/resources/inbox.ts">InboxDisconnectEmailResponse</a></code>
- <code><a href="./src/resources/inbox.ts">InboxListCasFilesResponse</a></code>

Methods:

- <code title="post /v4/inbox/status">client.inbox.<a href="./src/resources/inbox.ts">checkConnectionStatus</a>({ ...params }) -> InboxCheckConnectionStatusResponse</code>
- <code title="post /v4/inbox/connect">client.inbox.<a href="./src/resources/inbox.ts">connectEmail</a>({ ...params }) -> InboxConnectEmailResponse</code>
- <code title="post /v4/inbox/disconnect">client.inbox.<a href="./src/resources/inbox.ts">disconnectEmail</a>({ ...params }) -> InboxDisconnectEmailResponse</code>
- <code title="post /v4/inbox/cas">client.inbox.<a href="./src/resources/inbox.ts">listCasFiles</a>({ ...params }) -> InboxListCasFilesResponse</code>

# Kfintech

Types:

- <code><a href="./src/resources/kfintech.ts">KfintechGenerateCasResponse</a></code>

Methods:

- <code title="post /v4/kfintech/generate">client.kfintech.<a href="./src/resources/kfintech.ts">generateCas</a>({ ...params }) -> KfintechGenerateCasResponse</code>

# Nsdl

Methods:

- <code title="post /v4/nsdl/parse">client.nsdl.<a href="./src/resources/nsdl.ts">parse</a>({ ...params }) -> UnifiedResponse</code>

# Smart

Methods:

- <code title="post /v4/smart/parse">client.smart.<a href="./src/resources/smart.ts">parseCasPdf</a>({ ...params }) -> UnifiedResponse</code>
