# Changelog

## 1.15.0 (2026-07-26)

Full Changelog: [v1.14.0...v1.15.0](https://github.com/CASParser/cas-parser-node/compare/v1.14.0...v1.15.0)

### Features

* **api:** api update ([5c2221d](https://github.com/CASParser/cas-parser-node/commit/5c2221df1ef6b413dd01f55942b60bc31c6c8414))

## 1.14.0 (2026-07-18)

Full Changelog: [v1.13.2...v1.14.0](https://github.com/CASParser/cas-parser-node/compare/v1.13.2...v1.14.0)

### Features

* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([973c65c](https://github.com/CASParser/cas-parser-node/commit/973c65c571fef36b2207881c02a5efbfa00b6616))

## 1.13.2 (2026-07-12)

Full Changelog: [v1.13.1...v1.13.2](https://github.com/CASParser/cas-parser-node/compare/v1.13.1...v1.13.2)

### Bug Fixes

* **ci:** bump @arethetypeswrong/cli to ^0.18.0 and run CI workflows on Node 24 ([ef78e4a](https://github.com/CASParser/cas-parser-node/commit/ef78e4ab1b7b83badae72a8e396910ed0a965037))

## 1.13.1 (2026-06-17)

Full Changelog: [v1.13.0...v1.13.1](https://github.com/CASParser/cas-parser-node/compare/v1.13.0...v1.13.1)

### Bug Fixes

* **client:** send content-type header for requests with an omitted optional body ([2fe41cb](https://github.com/CASParser/cas-parser-node/commit/2fe41cb34218c540ded078bb04eaa49588c730e5))
* **typescript:** upgrade tsc-multi so that it works with Node 26 ([145b2ae](https://github.com/CASParser/cas-parser-node/commit/145b2ae95005fb8e5e23d75a06baac49e9e2f147))


### Chores

* **tests:** remove redundant File import ([cffd663](https://github.com/CASParser/cas-parser-node/commit/cffd66364ee33ddbe6fd3f64267f4cf4813b1b84))

## 1.13.0 (2026-05-08)

Full Changelog: [v1.12.0...v1.13.0](https://github.com/CASParser/cas-parser-node/compare/v1.12.0...v1.13.0)

### Features

* **api:** api update ([0116ca5](https://github.com/CASParser/cas-parser-node/commit/0116ca5490a4dcc51738a366f5664cdb6c6ee973))
* **api:** api update ([e997de1](https://github.com/CASParser/cas-parser-node/commit/e997de1bf4b9578656c61393865da3deb365a1db))


### Chores

* redact api-key headers in debug logs ([3418679](https://github.com/CASParser/cas-parser-node/commit/341867954aff79f0a3f5deeaac38c231a8f55203))


### Documentation

* clarify forwards compat behavior ([978bb0b](https://github.com/CASParser/cas-parser-node/commit/978bb0b17d57a90b1071a83d46b8a1f1aa417eaa))
* update logging docs ([6024e55](https://github.com/CASParser/cas-parser-node/commit/6024e55d27dee093886f8d99efdab0f0002a4871))
* update with proxy auth info ([1164937](https://github.com/CASParser/cas-parser-node/commit/11649372a063f6dd9c92ad70b017abbaf9fa3b6f))

## 1.12.0 (2026-05-01)

Full Changelog: [v1.11.0...v1.12.0](https://github.com/CASParser/cas-parser-node/compare/v1.11.0...v1.12.0)

### Features

* support setting headers via env ([2899c1d](https://github.com/CASParser/cas-parser-node/commit/2899c1d771c88fbea5a46a906f2ba5f4828de4d7))


### Chores

* avoid formatting file that gets changed during releases ([c604d6b](https://github.com/CASParser/cas-parser-node/commit/c604d6b90111464182c5578685042405c6e5553d))
* **format:** run eslint and prettier separately ([8efd708](https://github.com/CASParser/cas-parser-node/commit/8efd708dd0f3a1b990aa6ce02bc82d7fa522b914))
* **internal:** codegen related update ([e66b969](https://github.com/CASParser/cas-parser-node/commit/e66b9693629dd385f5070009f4157fe2bf448477))
* **internal:** more robust bootstrap script ([9a06591](https://github.com/CASParser/cas-parser-node/commit/9a0659124c81613c52a6238c2c75dd5338057524))
* **internal:** update docs ordering ([a824668](https://github.com/CASParser/cas-parser-node/commit/a824668824fe6e792b240c1a41cdbebdfa6a6751))
* restructure docs search code ([203f62a](https://github.com/CASParser/cas-parser-node/commit/203f62a11d9314fa6deb79c1239af3f7099944f5))

## 1.11.0 (2026-04-19)

Full Changelog: [v1.10.5...v1.11.0](https://github.com/CASParser/cas-parser-node/compare/v1.10.5...v1.11.0)

### Features

* **api:** api update ([4c2f4ff](https://github.com/CASParser/cas-parser-node/commit/4c2f4ffbfb0553f148d5b2d637a3875ead77712c))
* **api:** api update ([71f95f3](https://github.com/CASParser/cas-parser-node/commit/71f95f310f7170a60b4d79791797d842776f1599))

## 1.10.5 (2026-04-10)

Full Changelog: [v1.10.4...v1.10.5](https://github.com/CASParser/cas-parser-node/compare/v1.10.4...v1.10.5)

### Chores

* **internal:** codegen related update ([7902be3](https://github.com/CASParser/cas-parser-node/commit/7902be366765677101a75a4fde4e7fbb8acea0b9))
* **internal:** fix MCP server import ordering ([7ce0466](https://github.com/CASParser/cas-parser-node/commit/7ce04669a1f6764d14b6f3d970bca7a8378b6c71))
* **internal:** show error causes in MCP servers when running in local mode ([ec19dfb](https://github.com/CASParser/cas-parser-node/commit/ec19dfb70337d9b8277d48f1a577771b715306ac))
* **mcp-server:** increase local docs search result count from 5 to 10 ([ecf40a9](https://github.com/CASParser/cas-parser-node/commit/ecf40a97b897395380ac733b2172d05b8f763896))

## 1.10.4 (2026-04-03)

Full Changelog: [v1.10.3...v1.10.4](https://github.com/CASParser/cas-parser-node/compare/v1.10.3...v1.10.4)

### Bug Fixes

* **internal:** gitignore generated `oidc` dir ([b1df6bc](https://github.com/CASParser/cas-parser-node/commit/b1df6bc1d207373ba90e1087250c4efc615b8ade))


### Chores

* **ci:** escape input path in publish-npm workflow ([f795a47](https://github.com/CASParser/cas-parser-node/commit/f795a4790d772af4853ac232b9f23e1b325ea54c))
* **internal:** codegen related update ([b032db4](https://github.com/CASParser/cas-parser-node/commit/b032db4ed25377b86ff33d36d6c9e38b9b486348))
* **internal:** improve local docs search for MCP servers ([d83f66b](https://github.com/CASParser/cas-parser-node/commit/d83f66b9f8757aeb8023add6f1bba21e6e284475))
* **internal:** improve local docs search for MCP servers ([8def340](https://github.com/CASParser/cas-parser-node/commit/8def34059bbf2620e2e85b115948e47e4fe6cfca))
* **internal:** support local docs search in MCP servers ([e90f399](https://github.com/CASParser/cas-parser-node/commit/e90f399089d7e5cadd0892126834455ca6617ed4))
* **internal:** support type annotations when running MCP in local execution mode ([8c230cf](https://github.com/CASParser/cas-parser-node/commit/8c230cfd7fdd9068a8475f239fc0cdaff329987d))
* **mcp-server:** add support for session id, forward client info ([9908707](https://github.com/CASParser/cas-parser-node/commit/9908707d2c43b2ad1bf4ead7613ea952319587ff))
* **mcp-server:** log client info ([a6f08fa](https://github.com/CASParser/cas-parser-node/commit/a6f08fa3e605b5c63d0a40aac854ef924cccaea2))

## 1.10.3 (2026-03-27)

Full Changelog: [v1.10.2...v1.10.3](https://github.com/CASParser/cas-parser-node/compare/v1.10.2...v1.10.3)

### Chores

* **ci:** skip lint on metadata-only changes ([c586cc0](https://github.com/CASParser/cas-parser-node/commit/c586cc0ec3026afa1ebce62cd27df64c9324745d))
* **internal:** fix MCP server TS errors that occur with required client options ([a284756](https://github.com/CASParser/cas-parser-node/commit/a284756cb83eb774ab2483a1581b7b180e474f94))
* **internal:** support custom-instructions-path flag in MCP servers ([8089550](https://github.com/CASParser/cas-parser-node/commit/8089550962d4a008a8a39f6662576f792da4221a))
* **internal:** update gitignore ([c3d5073](https://github.com/CASParser/cas-parser-node/commit/c3d50737ff158aa5dd43743005fb68ee23a7ea05))

## 1.10.2 (2026-03-17)

Full Changelog: [v1.10.1...v1.10.2](https://github.com/CASParser/cas-parser-node/compare/v1.10.1...v1.10.2)

### Chores

* **internal:** codegen related update ([42785e5](https://github.com/CASParser/cas-parser-node/commit/42785e5ad046d551e6c851d7521203a176354433))
* **internal:** codegen related update ([4515206](https://github.com/CASParser/cas-parser-node/commit/4515206424c06f436dc61bea1994c56cb687c394))
* **internal:** codegen related update ([f91eb0e](https://github.com/CASParser/cas-parser-node/commit/f91eb0e9800b5d0f970f31e97d06355aa6d3df77))
* **internal:** codegen related update ([c38d136](https://github.com/CASParser/cas-parser-node/commit/c38d136006bcbf2f05e1642b1098c6d785c32af2))
* **internal:** codegen related update ([44b93cc](https://github.com/CASParser/cas-parser-node/commit/44b93cccf487ebf941d1c947e4d3320338e22f77))
* **internal:** codegen related update ([4005e2f](https://github.com/CASParser/cas-parser-node/commit/4005e2f3a16bba4dccfdfad92e3ff03696d67d10))
* **internal:** codegen related update ([a9f558a](https://github.com/CASParser/cas-parser-node/commit/a9f558abca126a4b575f9015dd6550706c60783a))
* **internal:** codegen related update ([da227d9](https://github.com/CASParser/cas-parser-node/commit/da227d988d02d7a168bc84b5d1e7ae5094390747))
* **internal:** codegen related update ([57415da](https://github.com/CASParser/cas-parser-node/commit/57415dabd939521c07a8fcf745624f790dcbdf3e))
* **internal:** codegen related update ([5040a3f](https://github.com/CASParser/cas-parser-node/commit/5040a3f99ad8354df704b5fd383f503f2d704e8a))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([d44814b](https://github.com/CASParser/cas-parser-node/commit/d44814bb29c75f80ea39a7e51b8c0ec495672e0f))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([a97ef55](https://github.com/CASParser/cas-parser-node/commit/a97ef55a49629a248550f498201d884891b41aec))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([c7cc5dc](https://github.com/CASParser/cas-parser-node/commit/c7cc5dc4378b6b76af659ca87b91bedeee47b76c))
* **internal:** tweak CI branches ([5a31470](https://github.com/CASParser/cas-parser-node/commit/5a31470b7bbf42e03a4ca9a8948c5bf6212ec749))
* **internal:** update dependencies to address dependabot vulnerabilities ([67cd264](https://github.com/CASParser/cas-parser-node/commit/67cd26484b9ab683bf8101210ac9ae285c86eab2))
* **internal:** update lock file ([e95138b](https://github.com/CASParser/cas-parser-node/commit/e95138b5d2cdf73a4474d11d52beb2ad8a966c89))
* **internal:** update lockfile ([9f834de](https://github.com/CASParser/cas-parser-node/commit/9f834de4889c6439090b17132ab987376603740c))


### Refactors

* update sdk ([b972fe0](https://github.com/CASParser/cas-parser-node/commit/b972fe0ffc1dc4b3ab81afb47c86a0e306f06120))

## 1.10.1 (2026-03-07)

Full Changelog: [v1.10.0...v1.10.1](https://github.com/CASParser/cas-parser-node/compare/v1.10.0...v1.10.1)

### Bug Fixes

* **client:** preserve URL params already embedded in path ([4463ff7](https://github.com/CASParser/cas-parser-node/commit/4463ff7c902ccf318892d2b1ce7976b9d0dca5a1))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([884f203](https://github.com/CASParser/cas-parser-node/commit/884f20313d10951ef4413f6b3a258025cc2ee2b3))
* **internal:** codegen related update ([9add47e](https://github.com/CASParser/cas-parser-node/commit/9add47ed236c49b558a6498e12908a4a6ea45da2))
* **internal:** codegen related update ([ccf33c8](https://github.com/CASParser/cas-parser-node/commit/ccf33c894ed6ff3f9ec9728ca3b6304893b05269))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([9ddb632](https://github.com/CASParser/cas-parser-node/commit/9ddb632b1c81bbbc71aa368509b26b95f35a32e9))
* **mcp-server:** improve instructions ([30dda75](https://github.com/CASParser/cas-parser-node/commit/30dda75bbcbef7632d04ba868e455370704a3c61))
* **mcp-server:** return access instructions for 404 without API key ([fdb885a](https://github.com/CASParser/cas-parser-node/commit/fdb885a459f35993fa0b4b07f079a8167cadbe9b))

## 1.10.0 (2026-03-03)

Full Changelog: [v1.9.0...v1.10.0](https://github.com/CASParser/cas-parser-node/compare/v1.9.0...v1.10.0)

### Features

* **mcp:** add an option to disable code tool ([1165824](https://github.com/CASParser/cas-parser-node/commit/11658245be3d4578a6d22fc5c9a88cb466f92818))


### Bug Fixes

* **docs/contributing:** correct pnpm link command ([bebfdc3](https://github.com/CASParser/cas-parser-node/commit/bebfdc36309d111760b974d2edbc1a4119cdf98d))
* **mcp:** update prompt ([5edb3a0](https://github.com/CASParser/cas-parser-node/commit/5edb3a0114fc591318fdbe56f91ba030d330fdaf))


### Chores

* **internal:** codegen related update ([75fc710](https://github.com/CASParser/cas-parser-node/commit/75fc710f26be8f812d0eac1d5135dc55f0dce865))
* **internal:** codegen related update ([f58a313](https://github.com/CASParser/cas-parser-node/commit/f58a3133b6db1eb3646979d451dc8c1effb4a0db))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([257f07b](https://github.com/CASParser/cas-parser-node/commit/257f07b1064815e62c07a1208646bc14b4c43319))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([a6fd091](https://github.com/CASParser/cas-parser-node/commit/a6fd0912c1dbeb077f4c232d3a382d19ad6f3164))
* **internal:** make MCP code execution location configurable via a flag ([231dc58](https://github.com/CASParser/cas-parser-node/commit/231dc58a7c5593b87d91f8e9d2ba6012aabf55a5))
* **internal:** move stringifyQuery implementation to internal function ([7048aa6](https://github.com/CASParser/cas-parser-node/commit/7048aa6345edf172e3e162f9492175dd3bbe75cb))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([a2d2c9b](https://github.com/CASParser/cas-parser-node/commit/a2d2c9b82e991f3f5df7df42379f2a49aec798ad))
* **internal:** upgrade pnpm version ([57c291d](https://github.com/CASParser/cas-parser-node/commit/57c291d980615daf189e09e2e4949b1e9ac2c0c8))

## 1.9.0 (2026-02-23)

Full Changelog: [v1.8.0...v1.9.0](https://github.com/CASParser/cas-parser-node/compare/v1.8.0...v1.9.0)

### Features

* **api:** manual updates ([75ec0c8](https://github.com/CASParser/cas-parser-node/commit/75ec0c8875f5ac06ef72fff853114efd020e20e0))

## 1.8.0 (2026-02-23)

Full Changelog: [v1.7.2...v1.8.0](https://github.com/CASParser/cas-parser-node/compare/v1.7.2...v1.8.0)

### Features

* **api:** api update ([58b6b46](https://github.com/CASParser/cas-parser-node/commit/58b6b46652f008b870fa189dc960c2d53e1a3887))
* **api:** api update ([a7e9bf9](https://github.com/CASParser/cas-parser-node/commit/a7e9bf9a5e23696d476b150f3149f853994d4f6c))
* **api:** api update ([c7c17cd](https://github.com/CASParser/cas-parser-node/commit/c7c17cd05e594d81b830765d2904c95b6387c1d1))
* **api:** manual updates ([d666a0b](https://github.com/CASParser/cas-parser-node/commit/d666a0b46b2d37de44fd443a92fd4b883a2ba98d))

## 1.7.2 (2026-02-20)

Full Changelog: [v1.7.1...v1.7.2](https://github.com/CASParser/cas-parser-node/compare/v1.7.1...v1.7.2)

### Bug Fixes

* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([2989ad0](https://github.com/CASParser/cas-parser-node/commit/2989ad0e371056cdf52be17d4b18b990533f1514))


### Chores

* **internal/client:** fix form-urlencoded requests ([f39cb7f](https://github.com/CASParser/cas-parser-node/commit/f39cb7f6c2ad7c20da495ded91c644e432596425))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([5b3baf7](https://github.com/CASParser/cas-parser-node/commit/5b3baf7ead67ae4a2e371ceda87d5d9e97019c5d))
* **internal:** cache fetch instruction calls in MCP server ([335fe62](https://github.com/CASParser/cas-parser-node/commit/335fe623fd4ec8add20d330ab4e85db3165f8e81))
* **internal:** remove mock server code ([c06dabf](https://github.com/CASParser/cas-parser-node/commit/c06dabff5d1c4bbc99e6691a54646299a1ba74c9))
* **mcp:** correctly update version in sync with sdk ([0d611f4](https://github.com/CASParser/cas-parser-node/commit/0d611f42d2477e8cbb3e1e746a5f48bc209a3502))
* update mock server docs ([89099af](https://github.com/CASParser/cas-parser-node/commit/89099af92c2f5dfff6649e325cfe1d1f08fc9d6c))

## 1.7.1 (2026-02-14)

Full Changelog: [v1.7.0...v1.7.1](https://github.com/CASParser/cas-parser-node/compare/v1.7.0...v1.7.1)

### Chores

* update SDK settings ([23b293e](https://github.com/CASParser/cas-parser-node/commit/23b293e0c90438e9460d17e8c5ff6946b7c9fa6c))
* update SDK settings ([02786ba](https://github.com/CASParser/cas-parser-node/commit/02786ba97ae061d050df6c5037335c3125813d30))
* update SDK settings ([0c860c9](https://github.com/CASParser/cas-parser-node/commit/0c860c9d7f0251a8d2a0bb179304912a5ec2423f))

## 1.7.0 (2026-02-14)

Full Changelog: [v1.6.2...v1.7.0](https://github.com/CASParser/cas-parser-node/compare/v1.6.2...v1.7.0)

### Features

* **api:** manual updates ([d96862e](https://github.com/CASParser/cas-parser-node/commit/d96862e6b10001d9e69c6be976c8cf1c7ed22bcc))
* **api:** manual updates ([ea2a1c6](https://github.com/CASParser/cas-parser-node/commit/ea2a1c684cfdef56c82b33b750ac645f1ff2b135))


### Chores

* update SDK settings ([a386e8a](https://github.com/CASParser/cas-parser-node/commit/a386e8aadbd317afccb344358a4ed04ed741d2f6))

## 1.6.2 (2026-02-14)

Full Changelog: [v1.6.1...v1.6.2](https://github.com/CASParser/cas-parser-node/compare/v1.6.1...v1.6.2)

### Chores

* update SDK settings ([05b29e9](https://github.com/CASParser/cas-parser-node/commit/05b29e9d60bfd19087cb14cabc32f2c8221e8e8a))
* update SDK settings ([2361eff](https://github.com/CASParser/cas-parser-node/commit/2361eff0fb2b2cad4781d0bcf3cbe04524446732))

## 1.6.1 (2026-02-14)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/CASParser/cas-parser-node/compare/v1.6.0...v1.6.1)

### Chores

* **internal:** configure MCP Server hosting ([e23865a](https://github.com/CASParser/cas-parser-node/commit/e23865ad1da35011a6c98f5e1f3794de43346609))

## 1.6.0 (2026-02-14)

Full Changelog: [v1.5.1...v1.6.0](https://github.com/CASParser/cas-parser-node/compare/v1.5.1...v1.6.0)

### Features

* **api:** manual updates ([c483f9f](https://github.com/CASParser/cas-parser-node/commit/c483f9fa85bda72c8cd35cb36b84b7b618b7ecc9))


### Chores

* configure new SDK language ([c5b4f8a](https://github.com/CASParser/cas-parser-node/commit/c5b4f8a53aa3d56d53802f1dcca10188b614bc47))
* update SDK settings ([165d960](https://github.com/CASParser/cas-parser-node/commit/165d960d998ef169f8cdbd05377ee5c386202d19))

## 1.5.1 (2026-02-14)

Full Changelog: [v1.5.0...v1.5.1](https://github.com/CASParser/cas-parser-node/compare/v1.5.0...v1.5.1)

### Chores

* **internal:** configure MCP Server hosting ([ef69e28](https://github.com/CASParser/cas-parser-node/commit/ef69e288bdb8047c419c4aa1ff72ce1aedf1f93d))

## 1.5.0 (2026-02-14)

Full Changelog: [v1.4.1...v1.5.0](https://github.com/CASParser/cas-parser-node/compare/v1.4.1...v1.5.0)

### Features

* **api:** api update ([b944bed](https://github.com/CASParser/cas-parser-node/commit/b944bedc18587bce5f196925b243c1fb06627207))
* **api:** api update ([af9b876](https://github.com/CASParser/cas-parser-node/commit/af9b876e705aa393015cf79d917c968e4c888d02))
* **api:** api update ([0c09872](https://github.com/CASParser/cas-parser-node/commit/0c09872dbb4088a98f77562e5609003c2366bbfd))
* **api:** api update ([17e0044](https://github.com/CASParser/cas-parser-node/commit/17e00442b40feb5b6c5c300b39b660787b99d23b))
* **api:** api update ([3047e70](https://github.com/CASParser/cas-parser-node/commit/3047e70310ddf1dd571c70c4683b01041579bf5f))
* **api:** api update ([7f71235](https://github.com/CASParser/cas-parser-node/commit/7f712351a3d5349fff33bf321ab946a58a8ae015))
* **mcp:** add docs search tool ([e2afa83](https://github.com/CASParser/cas-parser-node/commit/e2afa8394a7f891e90526dffeab493f4033ebfe0))
* **mcp:** add option for including docs tools ([e39c90e](https://github.com/CASParser/cas-parser-node/commit/e39c90ed1a75114d95ccae8183f69983331bf7c2))
* **mcp:** enable experimental docs search tool ([86b23ff](https://github.com/CASParser/cas-parser-node/commit/86b23ff7a185038d52d18395f7cccb68716affed))
* **mcp:** enable optional code execution tool on http mcp servers ([c65e4a3](https://github.com/CASParser/cas-parser-node/commit/c65e4a343bc9f6d6064e5c3a416630ef3880aa9e))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([461a411](https://github.com/CASParser/cas-parser-node/commit/461a411c1491f80b951618ec83a117667da2c786))
* **mcpb:** pin @anthropic-ai/mcpb version ([3a1120e](https://github.com/CASParser/cas-parser-node/commit/3a1120e08ae1f95374532f8711918b20ad6b74c1))
* **mcp:** fix cli argument parsing logic ([6d18c3d](https://github.com/CASParser/cas-parser-node/commit/6d18c3d887c074a25205c62dd3a461fff1424d28))
* **mcp:** resolve a linting issue in server code ([691d0c1](https://github.com/CASParser/cas-parser-node/commit/691d0c124350d54df029a9fa2873a85369615f7d))
* **mcp:** return tool execution error on jq failure ([b36d83b](https://github.com/CASParser/cas-parser-node/commit/b36d83bad328f0cfe7eb66ec2472ab0611ea079b))


### Performance Improvements

* faster formatting ([5e72001](https://github.com/CASParser/cas-parser-node/commit/5e72001cfce74462351337f831f066cfdd500db4))


### Chores

* **codegen:** internal codegen update ([63d6cd7](https://github.com/CASParser/cas-parser-node/commit/63d6cd75e8ec5d1985cbaf203bd60a4172c3cbd6))
* do not install brew dependencies in ./scripts/bootstrap by default ([d4fb00e](https://github.com/CASParser/cas-parser-node/commit/d4fb00e57c79b1b2420cd1fd4d3843ee1e73675d))
* extract some types in mcp docs ([464c4ad](https://github.com/CASParser/cas-parser-node/commit/464c4adaf3e55bba56c65b932686b196057816c8))
* **internal:** codegen related update ([03494e0](https://github.com/CASParser/cas-parser-node/commit/03494e0cfbecc96d136297acb7cc3c44ec622c63))
* **internal:** codegen related update ([4d1a0f4](https://github.com/CASParser/cas-parser-node/commit/4d1a0f4799890a888f01eb528ca0d2d3a798b0cd))
* **internal:** codegen related update ([22c7ea2](https://github.com/CASParser/cas-parser-node/commit/22c7ea2ba63601478bc3d9ad534ff0df493f4c8c))
* **internal:** fix incremental formatting in some cases ([170eef2](https://github.com/CASParser/cas-parser-node/commit/170eef2a9573b4a2c3a51f4a8979a4d8cb49ce77))
* **internal:** gitignore .mcpb files ([037b423](https://github.com/CASParser/cas-parser-node/commit/037b423d403f4af547043cc73164df04fcbe8115))
* **internal:** grammar fix (it's -&gt; its) ([0f7008c](https://github.com/CASParser/cas-parser-node/commit/0f7008c68019fc03ae354f85839784008e838eac))
* **internal:** ignore .eslintcache ([475202b](https://github.com/CASParser/cas-parser-node/commit/475202b2ce09234a57356ce5a1dd466f3122e9a8))
* **internal:** remove .eslintcache ([8897700](https://github.com/CASParser/cas-parser-node/commit/8897700e7ebf141e8416adf62a78a679e37c55bc))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([3e2894e](https://github.com/CASParser/cas-parser-node/commit/3e2894e798b721339c48214a6b8b2d932a3e2c02))
* **internal:** use npm pack for build uploads ([080eee4](https://github.com/CASParser/cas-parser-node/commit/080eee4a0de5730b86eabe4cdd9bf6831ed69713))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([2c53c6a](https://github.com/CASParser/cas-parser-node/commit/2c53c6a40eae947ff82bf62021471d770f3154a0))
* mcp code tool explicit error message when missing a run function ([c1688e1](https://github.com/CASParser/cas-parser-node/commit/c1688e1762adac87ce781019f0c7e3797d6cbc20))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([92613e9](https://github.com/CASParser/cas-parser-node/commit/92613e96bb14ed9de8d1042cbb30d580d44a4fa7))
* **mcp:** add line numbers to code tool errors ([b3c083e](https://github.com/CASParser/cas-parser-node/commit/b3c083e9e828fa712b60904be1ab82a43679615c))
* **mcp:** allow pointing `docs_search` tool at other URLs ([5df72aa](https://github.com/CASParser/cas-parser-node/commit/5df72aac38114806d999acd0e266eb6c6abff4cc))
* **mcp:** clarify http auth error ([63e29fe](https://github.com/CASParser/cas-parser-node/commit/63e29fee0c13d900bab2f1abdc905c1cc519138a))
* **mcp:** rename dxt to mcpb ([4206154](https://github.com/CASParser/cas-parser-node/commit/4206154f0e8c7f82ce8c62b0729e4859af7fbda9))
* **mcp:** upgrade jq-web ([fb5ee4c](https://github.com/CASParser/cas-parser-node/commit/fb5ee4cee2cfc01cb3718e7b71b6e0573e1128aa))
* update lockfile ([952858c](https://github.com/CASParser/cas-parser-node/commit/952858c419b88f6a5205daece2c9ecdac5324dd1))
* update SDK settings ([6669b0b](https://github.com/CASParser/cas-parser-node/commit/6669b0bc8763e9d38c711d269f90837d6c4c3120))
* use structured error when code execution tool errors ([0b9eb86](https://github.com/CASParser/cas-parser-node/commit/0b9eb86e3ee6d9e2a35b396453bf4fbec66dc905))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([f57f923](https://github.com/CASParser/cas-parser-node/commit/f57f9234638bd30b09ee62fb45e4374d78e3b93f))
* **mcp:** add a README link to add server to VS Code or Claude Code ([d687a4a](https://github.com/CASParser/cas-parser-node/commit/d687a4a380963a0e493b8a106e6c30f88e3d0047))

## 1.4.1 (2025-09-12)

Full Changelog: [v1.4.0...v1.4.1](https://github.com/CASParser/cas-parser-node/compare/v1.4.0...v1.4.1)

### Bug Fixes

* coerce nullable values to undefined ([5355e4d](https://github.com/CASParser/cas-parser-node/commit/5355e4dc9d5acca9d1c0fbb58539c4106af4d1b0))
* **mcp:** fix uploading dxt release assets ([a6e483b](https://github.com/CASParser/cas-parser-node/commit/a6e483ba375b7d97278928526ed10b2cc564bfa3))


### Chores

* **mcp:** upload dxt as release asset ([334e4d3](https://github.com/CASParser/cas-parser-node/commit/334e4d3dc3124709dc485d968d07fde384d3b23f))

## 1.4.0 (2025-09-06)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/CASParser/cas-parser-node/compare/v1.3.0...v1.4.0)

### Features

* **mcp:** allow setting logging level ([09e1385](https://github.com/CASParser/cas-parser-node/commit/09e1385c6aca980373b2e306a322ededef76a968))
* **mcp:** expose client options in `streamableHTTPApp` ([8b00452](https://github.com/CASParser/cas-parser-node/commit/8b00452cbb7fce7b4d63e240021c2088f3ff1724))


### Bug Fixes

* **mcp:** fix query options parsing ([c0c48c9](https://github.com/CASParser/cas-parser-node/commit/c0c48c931043e8a4ca2154ea128589b19e0c0d24))


### Chores

* ci build action ([52509dd](https://github.com/CASParser/cas-parser-node/commit/52509ddf57d2452be7194a560a77f497668e75ae))
* **internal:** codegen related update ([fbd7b14](https://github.com/CASParser/cas-parser-node/commit/fbd7b14ecce310840c07c198b070b3546178a2ae))
* **internal:** codegen related update ([328471e](https://github.com/CASParser/cas-parser-node/commit/328471eb93f460fbf4e56139ed85c6565e0c3f72))
* **internal:** update global Error reference ([a1c4a4b](https://github.com/CASParser/cas-parser-node/commit/a1c4a4b62f88fe05201137ae92a934f9248dc237))

## 1.3.0 (2025-08-24)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/CASParser/cas-parser-node/compare/v1.2.0...v1.3.0)

### Features

* **mcp:** add code execution tool ([84904a7](https://github.com/CASParser/cas-parser-node/commit/84904a7f558053aa211b8f483a7b4f6c2b13b8f6))
* **mcp:** add option to infer mcp client ([c190ccd](https://github.com/CASParser/cas-parser-node/commit/c190ccdd5cb6342dc620c26a3d06c0514f693a37))
* **mcp:** parse query string as mcp client options in mcp server ([1f6e085](https://github.com/CASParser/cas-parser-node/commit/1f6e085c4e7e9edf497585587fc3e6603b53a3e3))


### Chores

* add package to package.json ([9a166fa](https://github.com/CASParser/cas-parser-node/commit/9a166fa5baf70f7d0114d1c4dce14a1ac8bf956f))
* **client:** qualify global Blob ([902939b](https://github.com/CASParser/cas-parser-node/commit/902939be47f74826e00ca6b8f73e94f969d96952))
* **internal:** codegen related update ([033f0ef](https://github.com/CASParser/cas-parser-node/commit/033f0ef5142b7f37ec8ccf9c276d5bd9bb3dbe76))
* **internal:** codegen related update ([8463673](https://github.com/CASParser/cas-parser-node/commit/8463673b3bdd581f5d58b7ed18fb782b42cb94d9))
* **internal:** make mcp-server publishing public by defaut ([4bbdb37](https://github.com/CASParser/cas-parser-node/commit/4bbdb3749a70bc35a4e9fdd4b9763a6f79f78a24))
* **internal:** refactor array check ([00cc94f](https://github.com/CASParser/cas-parser-node/commit/00cc94fb85746fc3a79136d22214864673a3c93f))
* **mcp:** add cors to oauth metadata route ([3833155](https://github.com/CASParser/cas-parser-node/commit/3833155c5d3bcca5a7bf6ca0f513e8365db316cc))
* **mcp:** update package.json ([02b1e54](https://github.com/CASParser/cas-parser-node/commit/02b1e541dcf8d3a253c91f55266be3edb3db60e8))
* **mcp:** update types ([db1c76c](https://github.com/CASParser/cas-parser-node/commit/db1c76c3d2a76789d4dc3e5de57a875b7fa091db))
* update CI script ([b359ebc](https://github.com/CASParser/cas-parser-node/commit/b359ebce43e80eead9d0ff40b45a13e6af4c82b1))

## 1.2.0 (2025-08-18)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/CASParser/cas-parser-node/compare/v1.1.0...v1.2.0)

### Features

* **api:** manual updates ([f7c2421](https://github.com/CASParser/cas-parser-node/commit/f7c24211d125ede213446dea411d633f571c4c41))

## 1.1.0 (2025-08-18)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/CASParser/cas-parser-node/compare/v1.0.0...v1.1.0)

### Features

* **api:** api update ([6108aea](https://github.com/CASParser/cas-parser-node/commit/6108aea7cb4622bb475866a49784a9f519bb487e))


### Chores

* configure new SDK language ([8c5268d](https://github.com/CASParser/cas-parser-node/commit/8c5268d5a259411365d9f567f0c14e31e3b3c100))
* update SDK settings ([e57c92b](https://github.com/CASParser/cas-parser-node/commit/e57c92bdc3a0be8def3e0110adf637141d861fe8))

## 1.0.0 (2025-08-18)

Full Changelog: [v0.0.1-alpha.0...v1.0.0](https://github.com/CASParser/cas-parser-node/compare/v0.0.1-alpha.0...v1.0.0)

### Features

* **api:** manual updates ([1e6c39a](https://github.com/CASParser/cas-parser-node/commit/1e6c39a1be39d9bdb89d50f43c26f178a4f24b39))
* **api:** manual updates ([676d6a3](https://github.com/CASParser/cas-parser-node/commit/676d6a33df8f48f3c72d7589251b8e4616e3e866))
* **api:** manual updates ([76afa40](https://github.com/CASParser/cas-parser-node/commit/76afa403b2222d928d99c5eb3a9229e03e0c1de2))
* **api:** manual updates ([4b9ce92](https://github.com/CASParser/cas-parser-node/commit/4b9ce92d3d6adef435618d31f67679c1cd564a6e))
* **api:** manual updates ([a4c7c4f](https://github.com/CASParser/cas-parser-node/commit/a4c7c4f49bedad0d5f27c4a30845a343985d1702))


### Chores

* add docs to RequestOptions type ([bcdc5af](https://github.com/CASParser/cas-parser-node/commit/bcdc5af6492012646f690cd6e632790411db96eb))
* **client:** improve path param validation ([d9e2f49](https://github.com/CASParser/cas-parser-node/commit/d9e2f4987c13a4e6e56757ccfc8c4f8105f84ff1))
* **internal:** remove redundant imports config ([245bd3d](https://github.com/CASParser/cas-parser-node/commit/245bd3d586a4058218c56e915b29285e11abf795))
* make some internal functions async ([cc8085d](https://github.com/CASParser/cas-parser-node/commit/cc8085d9c43e0ba0c3ff249518e2a3f890da15d0))
* **ts:** reorder package.json imports ([7bd9452](https://github.com/CASParser/cas-parser-node/commit/7bd94525624bb8a8720b43b28bc7a073e60a653b))
* update SDK settings ([d81dccb](https://github.com/CASParser/cas-parser-node/commit/d81dccbdc37c2440374d9e05f5a4d80bc1b16622))
* update SDK settings ([a2f5d4c](https://github.com/CASParser/cas-parser-node/commit/a2f5d4cda1960a8ce0d3c41f8e6d40ec66829aee))
