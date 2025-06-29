// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class CasParserResource extends APIResource {
  /**
   * This endpoint specifically parses CAMS/KFintech CAS (Consolidated Account
   * Statement) PDF files and returns data in a unified format. Use this endpoint
   * when you know the PDF is from CAMS or KFintech.
   */
  camsKfintech(
    body: CasParserCamsKfintechParams,
    options?: RequestOptions,
  ): APIPromise<CasParserCamsKfintechResponse> {
    return this._client.post(
      '/v4/cams_kfintech/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * This endpoint specifically parses CDSL CAS (Consolidated Account Statement) PDF
   * files and returns data in a unified format. Use this endpoint when you know the
   * PDF is from CDSL.
   */
  cdsl(body: CasParserCdslParams, options?: RequestOptions): APIPromise<CasParserCdslResponse> {
    return this._client.post(
      '/v4/cdsl/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * This endpoint specifically parses NSDL CAS (Consolidated Account Statement) PDF
   * files and returns data in a unified format. Use this endpoint when you know the
   * PDF is from NSDL.
   */
  nsdl(body: CasParserNsdlParams, options?: RequestOptions): APIPromise<CasParserNsdlResponse> {
    return this._client.post(
      '/v4/nsdl/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * This endpoint parses CAS (Consolidated Account Statement) PDF files from NSDL,
   * CDSL, or CAMS/KFintech and returns data in a unified format. It auto-detects the
   * CAS type and transforms the data into a consistent structure regardless of the
   * source.
   */
  parseCasPdf(
    body: CasParserParseCasPdfParams,
    options?: RequestOptions,
  ): APIPromise<CasParserParseCasPdfResponse> {
    return this._client.post(
      '/v4/smart/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface CasParserCamsKfintechResponse {
  demat_accounts?: Array<CasParserCamsKfintechResponse.DematAccount>;

  insurance?: CasParserCamsKfintechResponse.Insurance;

  investor?: CasParserCamsKfintechResponse.Investor;

  meta?: CasParserCamsKfintechResponse.Meta;

  mutual_funds?: Array<CasParserCamsKfintechResponse.MutualFund>;

  summary?: CasParserCamsKfintechResponse.Summary;
}

export namespace CasParserCamsKfintechResponse {
  export interface DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    additional_info?: DematAccount.AdditionalInfo;

    /**
     * Beneficiary Owner ID (primarily for CDSL)
     */
    bo_id?: string;

    /**
     * Client ID
     */
    client_id?: string;

    /**
     * Type of demat account
     */
    demat_type?: 'NSDL' | 'CDSL';

    /**
     * Depository Participant ID
     */
    dp_id?: string;

    /**
     * Depository Participant name
     */
    dp_name?: string;

    holdings?: DematAccount.Holdings;

    /**
     * Total value of the demat account
     */
    value?: number;
  }

  export namespace DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    export interface AdditionalInfo {
      /**
       * Beneficiary Owner status (CDSL)
       */
      bo_status?: string;

      /**
       * Beneficiary Owner sub-status (CDSL)
       */
      bo_sub_status?: string;

      /**
       * Beneficiary Owner type (CDSL)
       */
      bo_type?: string;

      /**
       * Basic Services Demat Account status (CDSL)
       */
      bsda?: string;

      /**
       * Email associated with the demat account (CDSL)
       */
      email?: string;

      /**
       * List of linked PAN numbers (NSDL)
       */
      linked_pans?: Array<string>;

      /**
       * Nominee details (CDSL)
       */
      nominee?: string;

      /**
       * Account status (CDSL)
       */
      status?: string;
    }

    export interface Holdings {
      aifs?: Array<Holdings.Aif>;

      corporate_bonds?: Array<Holdings.CorporateBond>;

      demat_mutual_funds?: Array<Holdings.DematMutualFund>;

      equities?: Array<Holdings.Equity>;

      government_securities?: Array<Holdings.GovernmentSecurity>;
    }

    export namespace Holdings {
      export interface Aif {
        /**
         * Additional information specific to the AIF
         */
        additional_info?: unknown;

        /**
         * ISIN code of the AIF
         */
        isin?: string;

        /**
         * Name of the AIF
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface CorporateBond {
        /**
         * Additional information specific to the corporate bond
         */
        additional_info?: unknown;

        /**
         * ISIN code of the corporate bond
         */
        isin?: string;

        /**
         * Name of the corporate bond
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface DematMutualFund {
        /**
         * Additional information specific to the mutual fund
         */
        additional_info?: unknown;

        /**
         * ISIN code of the mutual fund
         */
        isin?: string;

        /**
         * Name of the mutual fund
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface Equity {
        /**
         * Additional information specific to the equity
         */
        additional_info?: unknown;

        /**
         * ISIN code of the equity
         */
        isin?: string;

        /**
         * Name of the equity
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface GovernmentSecurity {
        /**
         * Additional information specific to the government security
         */
        additional_info?: unknown;

        /**
         * ISIN code of the government security
         */
        isin?: string;

        /**
         * Name of the government security
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }
    }
  }

  export interface Insurance {
    life_insurance_policies?: Array<Insurance.LifeInsurancePolicy>;
  }

  export namespace Insurance {
    export interface LifeInsurancePolicy {
      /**
       * Additional information specific to the policy
       */
      additional_info?: unknown;

      /**
       * Name of the life assured
       */
      life_assured?: string;

      /**
       * Name of the insurance policy
       */
      policy_name?: string;

      /**
       * Insurance policy number
       */
      policy_number?: string;

      /**
       * Premium amount
       */
      premium_amount?: number;

      /**
       * Frequency of premium payment (e.g., Annual, Monthly)
       */
      premium_frequency?: string;

      /**
       * Insurance company name
       */
      provider?: string;

      /**
       * Status of the policy (e.g., Active, Lapsed)
       */
      status?: string;

      /**
       * Sum assured amount
       */
      sum_assured?: number;
    }
  }

  export interface Investor {
    /**
     * Address of the investor
     */
    address?: string;

    /**
     * CAS ID of the investor (only for NSDL and CDSL)
     */
    cas_id?: string;

    /**
     * Email address of the investor
     */
    email?: string;

    /**
     * Mobile number of the investor
     */
    mobile?: string;

    /**
     * Name of the investor
     */
    name?: string;

    /**
     * PAN (Permanent Account Number) of the investor
     */
    pan?: string;

    /**
     * Postal code of the investor's address
     */
    pincode?: string;
  }

  export interface Meta {
    /**
     * Type of CAS detected and processed
     */
    cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH';

    /**
     * Timestamp when the response was generated
     */
    generated_at?: string;

    statement_period?: Meta.StatementPeriod;
  }

  export namespace Meta {
    export interface StatementPeriod {
      /**
       * Start date of the statement period
       */
      from?: string;

      /**
       * End date of the statement period
       */
      to?: string;
    }
  }

  export interface MutualFund {
    /**
     * Additional folio information
     */
    additional_info?: MutualFund.AdditionalInfo;

    /**
     * Asset Management Company name
     */
    amc?: string;

    /**
     * Folio number
     */
    folio_number?: string;

    /**
     * Registrar and Transfer Agent name
     */
    registrar?: string;

    schemes?: Array<MutualFund.Scheme>;

    /**
     * Total value of the folio
     */
    value?: number;
  }

  export namespace MutualFund {
    /**
     * Additional folio information
     */
    export interface AdditionalInfo {
      /**
       * KYC status of the folio
       */
      kyc?: string;

      /**
       * PAN associated with the folio
       */
      pan?: string;

      /**
       * PAN KYC status
       */
      pankyc?: string;
    }

    export interface Scheme {
      /**
       * Additional information specific to the scheme
       */
      additional_info?: Scheme.AdditionalInfo;

      /**
       * Cost of investment
       */
      cost?: number;

      gain?: Scheme.Gain;

      /**
       * ISIN code of the scheme
       */
      isin?: string;

      /**
       * Scheme name
       */
      name?: string;

      /**
       * Net Asset Value per unit
       */
      nav?: number;

      /**
       * List of nominees
       */
      nominees?: Array<string>;

      transactions?: Array<Scheme.Transaction>;

      /**
       * Type of mutual fund scheme
       */
      type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other';

      /**
       * Number of units held
       */
      units?: number;

      /**
       * Current market value of the holding
       */
      value?: number;
    }

    export namespace Scheme {
      /**
       * Additional information specific to the scheme
       */
      export interface AdditionalInfo {
        /**
         * Financial advisor name (CAMS/KFintech)
         */
        advisor?: string;

        /**
         * AMFI code for the scheme (CAMS/KFintech)
         */
        amfi?: string;

        /**
         * Closing balance units (CAMS/KFintech)
         */
        close_units?: number;

        /**
         * Opening balance units (CAMS/KFintech)
         */
        open_units?: number;

        /**
         * RTA code for the scheme (CAMS/KFintech)
         */
        rta_code?: string;
      }

      export interface Gain {
        /**
         * Absolute gain or loss
         */
        absolute?: number;

        /**
         * Percentage gain or loss
         */
        percentage?: number;
      }

      export interface Transaction {
        /**
         * Transaction amount
         */
        amount?: number;

        /**
         * Balance units after transaction
         */
        balance?: number;

        /**
         * Transaction date
         */
        date?: string;

        /**
         * Transaction description
         */
        description?: string;

        /**
         * Dividend rate (for dividend transactions)
         */
        dividend_rate?: number;

        /**
         * NAV on transaction date
         */
        nav?: number;

        /**
         * Transaction type detected based on description. Possible values are
         * PURCHASE,PURCHASE_SIP,REDEMPTION,SWITCH_IN,SWITCH_IN_MERGER,SWITCH_OUT,SWITCH_OUT_MERGER,DIVIDEND_PAYOUT,DIVIDEND_REINVESTMENT,SEGREGATION,STAMP_DUTY_TAX,TDS_TAX,STT_TAX,MISC.
         * If dividend_rate is present, then possible values are dividend_rate is
         * applicable only for DIVIDEND_PAYOUT and DIVIDEND_REINVESTMENT.
         */
        type?: string;

        /**
         * Number of units involved
         */
        units?: number;
      }
    }
  }

  export interface Summary {
    accounts?: Summary.Accounts;

    /**
     * Total portfolio value across all accounts
     */
    total_value?: number;
  }

  export namespace Summary {
    export interface Accounts {
      demat?: Accounts.Demat;

      insurance?: Accounts.Insurance;

      mutual_funds?: Accounts.MutualFunds;
    }

    export namespace Accounts {
      export interface Demat {
        /**
         * Number of demat accounts
         */
        count?: number;

        /**
         * Total value of demat accounts
         */
        total_value?: number;
      }

      export interface Insurance {
        /**
         * Number of insurance policies
         */
        count?: number;

        /**
         * Total value of insurance policies
         */
        total_value?: number;
      }

      export interface MutualFunds {
        /**
         * Number of mutual fund folios
         */
        count?: number;

        /**
         * Total value of mutual funds
         */
        total_value?: number;
      }
    }
  }
}

export interface CasParserCdslResponse {
  demat_accounts?: Array<CasParserCdslResponse.DematAccount>;

  insurance?: CasParserCdslResponse.Insurance;

  investor?: CasParserCdslResponse.Investor;

  meta?: CasParserCdslResponse.Meta;

  mutual_funds?: Array<CasParserCdslResponse.MutualFund>;

  summary?: CasParserCdslResponse.Summary;
}

export namespace CasParserCdslResponse {
  export interface DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    additional_info?: DematAccount.AdditionalInfo;

    /**
     * Beneficiary Owner ID (primarily for CDSL)
     */
    bo_id?: string;

    /**
     * Client ID
     */
    client_id?: string;

    /**
     * Type of demat account
     */
    demat_type?: 'NSDL' | 'CDSL';

    /**
     * Depository Participant ID
     */
    dp_id?: string;

    /**
     * Depository Participant name
     */
    dp_name?: string;

    holdings?: DematAccount.Holdings;

    /**
     * Total value of the demat account
     */
    value?: number;
  }

  export namespace DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    export interface AdditionalInfo {
      /**
       * Beneficiary Owner status (CDSL)
       */
      bo_status?: string;

      /**
       * Beneficiary Owner sub-status (CDSL)
       */
      bo_sub_status?: string;

      /**
       * Beneficiary Owner type (CDSL)
       */
      bo_type?: string;

      /**
       * Basic Services Demat Account status (CDSL)
       */
      bsda?: string;

      /**
       * Email associated with the demat account (CDSL)
       */
      email?: string;

      /**
       * List of linked PAN numbers (NSDL)
       */
      linked_pans?: Array<string>;

      /**
       * Nominee details (CDSL)
       */
      nominee?: string;

      /**
       * Account status (CDSL)
       */
      status?: string;
    }

    export interface Holdings {
      aifs?: Array<Holdings.Aif>;

      corporate_bonds?: Array<Holdings.CorporateBond>;

      demat_mutual_funds?: Array<Holdings.DematMutualFund>;

      equities?: Array<Holdings.Equity>;

      government_securities?: Array<Holdings.GovernmentSecurity>;
    }

    export namespace Holdings {
      export interface Aif {
        /**
         * Additional information specific to the AIF
         */
        additional_info?: unknown;

        /**
         * ISIN code of the AIF
         */
        isin?: string;

        /**
         * Name of the AIF
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface CorporateBond {
        /**
         * Additional information specific to the corporate bond
         */
        additional_info?: unknown;

        /**
         * ISIN code of the corporate bond
         */
        isin?: string;

        /**
         * Name of the corporate bond
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface DematMutualFund {
        /**
         * Additional information specific to the mutual fund
         */
        additional_info?: unknown;

        /**
         * ISIN code of the mutual fund
         */
        isin?: string;

        /**
         * Name of the mutual fund
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface Equity {
        /**
         * Additional information specific to the equity
         */
        additional_info?: unknown;

        /**
         * ISIN code of the equity
         */
        isin?: string;

        /**
         * Name of the equity
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface GovernmentSecurity {
        /**
         * Additional information specific to the government security
         */
        additional_info?: unknown;

        /**
         * ISIN code of the government security
         */
        isin?: string;

        /**
         * Name of the government security
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }
    }
  }

  export interface Insurance {
    life_insurance_policies?: Array<Insurance.LifeInsurancePolicy>;
  }

  export namespace Insurance {
    export interface LifeInsurancePolicy {
      /**
       * Additional information specific to the policy
       */
      additional_info?: unknown;

      /**
       * Name of the life assured
       */
      life_assured?: string;

      /**
       * Name of the insurance policy
       */
      policy_name?: string;

      /**
       * Insurance policy number
       */
      policy_number?: string;

      /**
       * Premium amount
       */
      premium_amount?: number;

      /**
       * Frequency of premium payment (e.g., Annual, Monthly)
       */
      premium_frequency?: string;

      /**
       * Insurance company name
       */
      provider?: string;

      /**
       * Status of the policy (e.g., Active, Lapsed)
       */
      status?: string;

      /**
       * Sum assured amount
       */
      sum_assured?: number;
    }
  }

  export interface Investor {
    /**
     * Address of the investor
     */
    address?: string;

    /**
     * CAS ID of the investor (only for NSDL and CDSL)
     */
    cas_id?: string;

    /**
     * Email address of the investor
     */
    email?: string;

    /**
     * Mobile number of the investor
     */
    mobile?: string;

    /**
     * Name of the investor
     */
    name?: string;

    /**
     * PAN (Permanent Account Number) of the investor
     */
    pan?: string;

    /**
     * Postal code of the investor's address
     */
    pincode?: string;
  }

  export interface Meta {
    /**
     * Type of CAS detected and processed
     */
    cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH';

    /**
     * Timestamp when the response was generated
     */
    generated_at?: string;

    statement_period?: Meta.StatementPeriod;
  }

  export namespace Meta {
    export interface StatementPeriod {
      /**
       * Start date of the statement period
       */
      from?: string;

      /**
       * End date of the statement period
       */
      to?: string;
    }
  }

  export interface MutualFund {
    /**
     * Additional folio information
     */
    additional_info?: MutualFund.AdditionalInfo;

    /**
     * Asset Management Company name
     */
    amc?: string;

    /**
     * Folio number
     */
    folio_number?: string;

    /**
     * Registrar and Transfer Agent name
     */
    registrar?: string;

    schemes?: Array<MutualFund.Scheme>;

    /**
     * Total value of the folio
     */
    value?: number;
  }

  export namespace MutualFund {
    /**
     * Additional folio information
     */
    export interface AdditionalInfo {
      /**
       * KYC status of the folio
       */
      kyc?: string;

      /**
       * PAN associated with the folio
       */
      pan?: string;

      /**
       * PAN KYC status
       */
      pankyc?: string;
    }

    export interface Scheme {
      /**
       * Additional information specific to the scheme
       */
      additional_info?: Scheme.AdditionalInfo;

      /**
       * Cost of investment
       */
      cost?: number;

      gain?: Scheme.Gain;

      /**
       * ISIN code of the scheme
       */
      isin?: string;

      /**
       * Scheme name
       */
      name?: string;

      /**
       * Net Asset Value per unit
       */
      nav?: number;

      /**
       * List of nominees
       */
      nominees?: Array<string>;

      transactions?: Array<Scheme.Transaction>;

      /**
       * Type of mutual fund scheme
       */
      type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other';

      /**
       * Number of units held
       */
      units?: number;

      /**
       * Current market value of the holding
       */
      value?: number;
    }

    export namespace Scheme {
      /**
       * Additional information specific to the scheme
       */
      export interface AdditionalInfo {
        /**
         * Financial advisor name (CAMS/KFintech)
         */
        advisor?: string;

        /**
         * AMFI code for the scheme (CAMS/KFintech)
         */
        amfi?: string;

        /**
         * Closing balance units (CAMS/KFintech)
         */
        close_units?: number;

        /**
         * Opening balance units (CAMS/KFintech)
         */
        open_units?: number;

        /**
         * RTA code for the scheme (CAMS/KFintech)
         */
        rta_code?: string;
      }

      export interface Gain {
        /**
         * Absolute gain or loss
         */
        absolute?: number;

        /**
         * Percentage gain or loss
         */
        percentage?: number;
      }

      export interface Transaction {
        /**
         * Transaction amount
         */
        amount?: number;

        /**
         * Balance units after transaction
         */
        balance?: number;

        /**
         * Transaction date
         */
        date?: string;

        /**
         * Transaction description
         */
        description?: string;

        /**
         * Dividend rate (for dividend transactions)
         */
        dividend_rate?: number;

        /**
         * NAV on transaction date
         */
        nav?: number;

        /**
         * Transaction type detected based on description. Possible values are
         * PURCHASE,PURCHASE_SIP,REDEMPTION,SWITCH_IN,SWITCH_IN_MERGER,SWITCH_OUT,SWITCH_OUT_MERGER,DIVIDEND_PAYOUT,DIVIDEND_REINVESTMENT,SEGREGATION,STAMP_DUTY_TAX,TDS_TAX,STT_TAX,MISC.
         * If dividend_rate is present, then possible values are dividend_rate is
         * applicable only for DIVIDEND_PAYOUT and DIVIDEND_REINVESTMENT.
         */
        type?: string;

        /**
         * Number of units involved
         */
        units?: number;
      }
    }
  }

  export interface Summary {
    accounts?: Summary.Accounts;

    /**
     * Total portfolio value across all accounts
     */
    total_value?: number;
  }

  export namespace Summary {
    export interface Accounts {
      demat?: Accounts.Demat;

      insurance?: Accounts.Insurance;

      mutual_funds?: Accounts.MutualFunds;
    }

    export namespace Accounts {
      export interface Demat {
        /**
         * Number of demat accounts
         */
        count?: number;

        /**
         * Total value of demat accounts
         */
        total_value?: number;
      }

      export interface Insurance {
        /**
         * Number of insurance policies
         */
        count?: number;

        /**
         * Total value of insurance policies
         */
        total_value?: number;
      }

      export interface MutualFunds {
        /**
         * Number of mutual fund folios
         */
        count?: number;

        /**
         * Total value of mutual funds
         */
        total_value?: number;
      }
    }
  }
}

export interface CasParserNsdlResponse {
  demat_accounts?: Array<CasParserNsdlResponse.DematAccount>;

  insurance?: CasParserNsdlResponse.Insurance;

  investor?: CasParserNsdlResponse.Investor;

  meta?: CasParserNsdlResponse.Meta;

  mutual_funds?: Array<CasParserNsdlResponse.MutualFund>;

  summary?: CasParserNsdlResponse.Summary;
}

export namespace CasParserNsdlResponse {
  export interface DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    additional_info?: DematAccount.AdditionalInfo;

    /**
     * Beneficiary Owner ID (primarily for CDSL)
     */
    bo_id?: string;

    /**
     * Client ID
     */
    client_id?: string;

    /**
     * Type of demat account
     */
    demat_type?: 'NSDL' | 'CDSL';

    /**
     * Depository Participant ID
     */
    dp_id?: string;

    /**
     * Depository Participant name
     */
    dp_name?: string;

    holdings?: DematAccount.Holdings;

    /**
     * Total value of the demat account
     */
    value?: number;
  }

  export namespace DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    export interface AdditionalInfo {
      /**
       * Beneficiary Owner status (CDSL)
       */
      bo_status?: string;

      /**
       * Beneficiary Owner sub-status (CDSL)
       */
      bo_sub_status?: string;

      /**
       * Beneficiary Owner type (CDSL)
       */
      bo_type?: string;

      /**
       * Basic Services Demat Account status (CDSL)
       */
      bsda?: string;

      /**
       * Email associated with the demat account (CDSL)
       */
      email?: string;

      /**
       * List of linked PAN numbers (NSDL)
       */
      linked_pans?: Array<string>;

      /**
       * Nominee details (CDSL)
       */
      nominee?: string;

      /**
       * Account status (CDSL)
       */
      status?: string;
    }

    export interface Holdings {
      aifs?: Array<Holdings.Aif>;

      corporate_bonds?: Array<Holdings.CorporateBond>;

      demat_mutual_funds?: Array<Holdings.DematMutualFund>;

      equities?: Array<Holdings.Equity>;

      government_securities?: Array<Holdings.GovernmentSecurity>;
    }

    export namespace Holdings {
      export interface Aif {
        /**
         * Additional information specific to the AIF
         */
        additional_info?: unknown;

        /**
         * ISIN code of the AIF
         */
        isin?: string;

        /**
         * Name of the AIF
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface CorporateBond {
        /**
         * Additional information specific to the corporate bond
         */
        additional_info?: unknown;

        /**
         * ISIN code of the corporate bond
         */
        isin?: string;

        /**
         * Name of the corporate bond
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface DematMutualFund {
        /**
         * Additional information specific to the mutual fund
         */
        additional_info?: unknown;

        /**
         * ISIN code of the mutual fund
         */
        isin?: string;

        /**
         * Name of the mutual fund
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface Equity {
        /**
         * Additional information specific to the equity
         */
        additional_info?: unknown;

        /**
         * ISIN code of the equity
         */
        isin?: string;

        /**
         * Name of the equity
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface GovernmentSecurity {
        /**
         * Additional information specific to the government security
         */
        additional_info?: unknown;

        /**
         * ISIN code of the government security
         */
        isin?: string;

        /**
         * Name of the government security
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }
    }
  }

  export interface Insurance {
    life_insurance_policies?: Array<Insurance.LifeInsurancePolicy>;
  }

  export namespace Insurance {
    export interface LifeInsurancePolicy {
      /**
       * Additional information specific to the policy
       */
      additional_info?: unknown;

      /**
       * Name of the life assured
       */
      life_assured?: string;

      /**
       * Name of the insurance policy
       */
      policy_name?: string;

      /**
       * Insurance policy number
       */
      policy_number?: string;

      /**
       * Premium amount
       */
      premium_amount?: number;

      /**
       * Frequency of premium payment (e.g., Annual, Monthly)
       */
      premium_frequency?: string;

      /**
       * Insurance company name
       */
      provider?: string;

      /**
       * Status of the policy (e.g., Active, Lapsed)
       */
      status?: string;

      /**
       * Sum assured amount
       */
      sum_assured?: number;
    }
  }

  export interface Investor {
    /**
     * Address of the investor
     */
    address?: string;

    /**
     * CAS ID of the investor (only for NSDL and CDSL)
     */
    cas_id?: string;

    /**
     * Email address of the investor
     */
    email?: string;

    /**
     * Mobile number of the investor
     */
    mobile?: string;

    /**
     * Name of the investor
     */
    name?: string;

    /**
     * PAN (Permanent Account Number) of the investor
     */
    pan?: string;

    /**
     * Postal code of the investor's address
     */
    pincode?: string;
  }

  export interface Meta {
    /**
     * Type of CAS detected and processed
     */
    cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH';

    /**
     * Timestamp when the response was generated
     */
    generated_at?: string;

    statement_period?: Meta.StatementPeriod;
  }

  export namespace Meta {
    export interface StatementPeriod {
      /**
       * Start date of the statement period
       */
      from?: string;

      /**
       * End date of the statement period
       */
      to?: string;
    }
  }

  export interface MutualFund {
    /**
     * Additional folio information
     */
    additional_info?: MutualFund.AdditionalInfo;

    /**
     * Asset Management Company name
     */
    amc?: string;

    /**
     * Folio number
     */
    folio_number?: string;

    /**
     * Registrar and Transfer Agent name
     */
    registrar?: string;

    schemes?: Array<MutualFund.Scheme>;

    /**
     * Total value of the folio
     */
    value?: number;
  }

  export namespace MutualFund {
    /**
     * Additional folio information
     */
    export interface AdditionalInfo {
      /**
       * KYC status of the folio
       */
      kyc?: string;

      /**
       * PAN associated with the folio
       */
      pan?: string;

      /**
       * PAN KYC status
       */
      pankyc?: string;
    }

    export interface Scheme {
      /**
       * Additional information specific to the scheme
       */
      additional_info?: Scheme.AdditionalInfo;

      /**
       * Cost of investment
       */
      cost?: number;

      gain?: Scheme.Gain;

      /**
       * ISIN code of the scheme
       */
      isin?: string;

      /**
       * Scheme name
       */
      name?: string;

      /**
       * Net Asset Value per unit
       */
      nav?: number;

      /**
       * List of nominees
       */
      nominees?: Array<string>;

      transactions?: Array<Scheme.Transaction>;

      /**
       * Type of mutual fund scheme
       */
      type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other';

      /**
       * Number of units held
       */
      units?: number;

      /**
       * Current market value of the holding
       */
      value?: number;
    }

    export namespace Scheme {
      /**
       * Additional information specific to the scheme
       */
      export interface AdditionalInfo {
        /**
         * Financial advisor name (CAMS/KFintech)
         */
        advisor?: string;

        /**
         * AMFI code for the scheme (CAMS/KFintech)
         */
        amfi?: string;

        /**
         * Closing balance units (CAMS/KFintech)
         */
        close_units?: number;

        /**
         * Opening balance units (CAMS/KFintech)
         */
        open_units?: number;

        /**
         * RTA code for the scheme (CAMS/KFintech)
         */
        rta_code?: string;
      }

      export interface Gain {
        /**
         * Absolute gain or loss
         */
        absolute?: number;

        /**
         * Percentage gain or loss
         */
        percentage?: number;
      }

      export interface Transaction {
        /**
         * Transaction amount
         */
        amount?: number;

        /**
         * Balance units after transaction
         */
        balance?: number;

        /**
         * Transaction date
         */
        date?: string;

        /**
         * Transaction description
         */
        description?: string;

        /**
         * Dividend rate (for dividend transactions)
         */
        dividend_rate?: number;

        /**
         * NAV on transaction date
         */
        nav?: number;

        /**
         * Transaction type detected based on description. Possible values are
         * PURCHASE,PURCHASE_SIP,REDEMPTION,SWITCH_IN,SWITCH_IN_MERGER,SWITCH_OUT,SWITCH_OUT_MERGER,DIVIDEND_PAYOUT,DIVIDEND_REINVESTMENT,SEGREGATION,STAMP_DUTY_TAX,TDS_TAX,STT_TAX,MISC.
         * If dividend_rate is present, then possible values are dividend_rate is
         * applicable only for DIVIDEND_PAYOUT and DIVIDEND_REINVESTMENT.
         */
        type?: string;

        /**
         * Number of units involved
         */
        units?: number;
      }
    }
  }

  export interface Summary {
    accounts?: Summary.Accounts;

    /**
     * Total portfolio value across all accounts
     */
    total_value?: number;
  }

  export namespace Summary {
    export interface Accounts {
      demat?: Accounts.Demat;

      insurance?: Accounts.Insurance;

      mutual_funds?: Accounts.MutualFunds;
    }

    export namespace Accounts {
      export interface Demat {
        /**
         * Number of demat accounts
         */
        count?: number;

        /**
         * Total value of demat accounts
         */
        total_value?: number;
      }

      export interface Insurance {
        /**
         * Number of insurance policies
         */
        count?: number;

        /**
         * Total value of insurance policies
         */
        total_value?: number;
      }

      export interface MutualFunds {
        /**
         * Number of mutual fund folios
         */
        count?: number;

        /**
         * Total value of mutual funds
         */
        total_value?: number;
      }
    }
  }
}

export interface CasParserParseCasPdfResponse {
  demat_accounts?: Array<CasParserParseCasPdfResponse.DematAccount>;

  insurance?: CasParserParseCasPdfResponse.Insurance;

  investor?: CasParserParseCasPdfResponse.Investor;

  meta?: CasParserParseCasPdfResponse.Meta;

  mutual_funds?: Array<CasParserParseCasPdfResponse.MutualFund>;

  summary?: CasParserParseCasPdfResponse.Summary;
}

export namespace CasParserParseCasPdfResponse {
  export interface DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    additional_info?: DematAccount.AdditionalInfo;

    /**
     * Beneficiary Owner ID (primarily for CDSL)
     */
    bo_id?: string;

    /**
     * Client ID
     */
    client_id?: string;

    /**
     * Type of demat account
     */
    demat_type?: 'NSDL' | 'CDSL';

    /**
     * Depository Participant ID
     */
    dp_id?: string;

    /**
     * Depository Participant name
     */
    dp_name?: string;

    holdings?: DematAccount.Holdings;

    /**
     * Total value of the demat account
     */
    value?: number;
  }

  export namespace DematAccount {
    /**
     * Additional information specific to the demat account type
     */
    export interface AdditionalInfo {
      /**
       * Beneficiary Owner status (CDSL)
       */
      bo_status?: string;

      /**
       * Beneficiary Owner sub-status (CDSL)
       */
      bo_sub_status?: string;

      /**
       * Beneficiary Owner type (CDSL)
       */
      bo_type?: string;

      /**
       * Basic Services Demat Account status (CDSL)
       */
      bsda?: string;

      /**
       * Email associated with the demat account (CDSL)
       */
      email?: string;

      /**
       * List of linked PAN numbers (NSDL)
       */
      linked_pans?: Array<string>;

      /**
       * Nominee details (CDSL)
       */
      nominee?: string;

      /**
       * Account status (CDSL)
       */
      status?: string;
    }

    export interface Holdings {
      aifs?: Array<Holdings.Aif>;

      corporate_bonds?: Array<Holdings.CorporateBond>;

      demat_mutual_funds?: Array<Holdings.DematMutualFund>;

      equities?: Array<Holdings.Equity>;

      government_securities?: Array<Holdings.GovernmentSecurity>;
    }

    export namespace Holdings {
      export interface Aif {
        /**
         * Additional information specific to the AIF
         */
        additional_info?: unknown;

        /**
         * ISIN code of the AIF
         */
        isin?: string;

        /**
         * Name of the AIF
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface CorporateBond {
        /**
         * Additional information specific to the corporate bond
         */
        additional_info?: unknown;

        /**
         * ISIN code of the corporate bond
         */
        isin?: string;

        /**
         * Name of the corporate bond
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface DematMutualFund {
        /**
         * Additional information specific to the mutual fund
         */
        additional_info?: unknown;

        /**
         * ISIN code of the mutual fund
         */
        isin?: string;

        /**
         * Name of the mutual fund
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface Equity {
        /**
         * Additional information specific to the equity
         */
        additional_info?: unknown;

        /**
         * ISIN code of the equity
         */
        isin?: string;

        /**
         * Name of the equity
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export interface GovernmentSecurity {
        /**
         * Additional information specific to the government security
         */
        additional_info?: unknown;

        /**
         * ISIN code of the government security
         */
        isin?: string;

        /**
         * Name of the government security
         */
        name?: string;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }
    }
  }

  export interface Insurance {
    life_insurance_policies?: Array<Insurance.LifeInsurancePolicy>;
  }

  export namespace Insurance {
    export interface LifeInsurancePolicy {
      /**
       * Additional information specific to the policy
       */
      additional_info?: unknown;

      /**
       * Name of the life assured
       */
      life_assured?: string;

      /**
       * Name of the insurance policy
       */
      policy_name?: string;

      /**
       * Insurance policy number
       */
      policy_number?: string;

      /**
       * Premium amount
       */
      premium_amount?: number;

      /**
       * Frequency of premium payment (e.g., Annual, Monthly)
       */
      premium_frequency?: string;

      /**
       * Insurance company name
       */
      provider?: string;

      /**
       * Status of the policy (e.g., Active, Lapsed)
       */
      status?: string;

      /**
       * Sum assured amount
       */
      sum_assured?: number;
    }
  }

  export interface Investor {
    /**
     * Address of the investor
     */
    address?: string;

    /**
     * CAS ID of the investor (only for NSDL and CDSL)
     */
    cas_id?: string;

    /**
     * Email address of the investor
     */
    email?: string;

    /**
     * Mobile number of the investor
     */
    mobile?: string;

    /**
     * Name of the investor
     */
    name?: string;

    /**
     * PAN (Permanent Account Number) of the investor
     */
    pan?: string;

    /**
     * Postal code of the investor's address
     */
    pincode?: string;
  }

  export interface Meta {
    /**
     * Type of CAS detected and processed
     */
    cas_type?: 'NSDL' | 'CDSL' | 'CAMS_KFINTECH';

    /**
     * Timestamp when the response was generated
     */
    generated_at?: string;

    statement_period?: Meta.StatementPeriod;
  }

  export namespace Meta {
    export interface StatementPeriod {
      /**
       * Start date of the statement period
       */
      from?: string;

      /**
       * End date of the statement period
       */
      to?: string;
    }
  }

  export interface MutualFund {
    /**
     * Additional folio information
     */
    additional_info?: MutualFund.AdditionalInfo;

    /**
     * Asset Management Company name
     */
    amc?: string;

    /**
     * Folio number
     */
    folio_number?: string;

    /**
     * Registrar and Transfer Agent name
     */
    registrar?: string;

    schemes?: Array<MutualFund.Scheme>;

    /**
     * Total value of the folio
     */
    value?: number;
  }

  export namespace MutualFund {
    /**
     * Additional folio information
     */
    export interface AdditionalInfo {
      /**
       * KYC status of the folio
       */
      kyc?: string;

      /**
       * PAN associated with the folio
       */
      pan?: string;

      /**
       * PAN KYC status
       */
      pankyc?: string;
    }

    export interface Scheme {
      /**
       * Additional information specific to the scheme
       */
      additional_info?: Scheme.AdditionalInfo;

      /**
       * Cost of investment
       */
      cost?: number;

      gain?: Scheme.Gain;

      /**
       * ISIN code of the scheme
       */
      isin?: string;

      /**
       * Scheme name
       */
      name?: string;

      /**
       * Net Asset Value per unit
       */
      nav?: number;

      /**
       * List of nominees
       */
      nominees?: Array<string>;

      transactions?: Array<Scheme.Transaction>;

      /**
       * Type of mutual fund scheme
       */
      type?: 'Equity' | 'Debt' | 'Hybrid' | 'Other';

      /**
       * Number of units held
       */
      units?: number;

      /**
       * Current market value of the holding
       */
      value?: number;
    }

    export namespace Scheme {
      /**
       * Additional information specific to the scheme
       */
      export interface AdditionalInfo {
        /**
         * Financial advisor name (CAMS/KFintech)
         */
        advisor?: string;

        /**
         * AMFI code for the scheme (CAMS/KFintech)
         */
        amfi?: string;

        /**
         * Closing balance units (CAMS/KFintech)
         */
        close_units?: number;

        /**
         * Opening balance units (CAMS/KFintech)
         */
        open_units?: number;

        /**
         * RTA code for the scheme (CAMS/KFintech)
         */
        rta_code?: string;
      }

      export interface Gain {
        /**
         * Absolute gain or loss
         */
        absolute?: number;

        /**
         * Percentage gain or loss
         */
        percentage?: number;
      }

      export interface Transaction {
        /**
         * Transaction amount
         */
        amount?: number;

        /**
         * Balance units after transaction
         */
        balance?: number;

        /**
         * Transaction date
         */
        date?: string;

        /**
         * Transaction description
         */
        description?: string;

        /**
         * Dividend rate (for dividend transactions)
         */
        dividend_rate?: number;

        /**
         * NAV on transaction date
         */
        nav?: number;

        /**
         * Transaction type detected based on description. Possible values are
         * PURCHASE,PURCHASE_SIP,REDEMPTION,SWITCH_IN,SWITCH_IN_MERGER,SWITCH_OUT,SWITCH_OUT_MERGER,DIVIDEND_PAYOUT,DIVIDEND_REINVESTMENT,SEGREGATION,STAMP_DUTY_TAX,TDS_TAX,STT_TAX,MISC.
         * If dividend_rate is present, then possible values are dividend_rate is
         * applicable only for DIVIDEND_PAYOUT and DIVIDEND_REINVESTMENT.
         */
        type?: string;

        /**
         * Number of units involved
         */
        units?: number;
      }
    }
  }

  export interface Summary {
    accounts?: Summary.Accounts;

    /**
     * Total portfolio value across all accounts
     */
    total_value?: number;
  }

  export namespace Summary {
    export interface Accounts {
      demat?: Accounts.Demat;

      insurance?: Accounts.Insurance;

      mutual_funds?: Accounts.MutualFunds;
    }

    export namespace Accounts {
      export interface Demat {
        /**
         * Number of demat accounts
         */
        count?: number;

        /**
         * Total value of demat accounts
         */
        total_value?: number;
      }

      export interface Insurance {
        /**
         * Number of insurance policies
         */
        count?: number;

        /**
         * Total value of insurance policies
         */
        total_value?: number;
      }

      export interface MutualFunds {
        /**
         * Number of mutual fund folios
         */
        count?: number;

        /**
         * Total value of mutual funds
         */
        total_value?: number;
      }
    }
  }
}

export interface CasParserCamsKfintechParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file
   */
  pdf_url?: string;
}

export interface CasParserCdslParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file
   */
  pdf_url?: string;
}

export interface CasParserNsdlParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file
   */
  pdf_url?: string;
}

export interface CasParserParseCasPdfParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file
   */
  pdf_url?: string;
}

export declare namespace CasParserResource {
  export {
    type CasParserCamsKfintechResponse as CasParserCamsKfintechResponse,
    type CasParserCdslResponse as CasParserCdslResponse,
    type CasParserNsdlResponse as CasParserNsdlResponse,
    type CasParserParseCasPdfResponse as CasParserParseCasPdfResponse,
    type CasParserCamsKfintechParams as CasParserCamsKfintechParams,
    type CasParserCdslParams as CasParserCdslParams,
    type CasParserNsdlParams as CasParserNsdlParams,
    type CasParserParseCasPdfParams as CasParserParseCasPdfParams,
  };
}
