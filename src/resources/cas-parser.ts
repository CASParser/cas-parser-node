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
  camsKfintech(body: CasParserCamsKfintechParams, options?: RequestOptions): APIPromise<UnifiedResponse> {
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
  cdsl(body: CasParserCdslParams, options?: RequestOptions): APIPromise<UnifiedResponse> {
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
  nsdl(body: CasParserNsdlParams, options?: RequestOptions): APIPromise<UnifiedResponse> {
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
  smartParse(body: CasParserSmartParseParams, options?: RequestOptions): APIPromise<UnifiedResponse> {
    return this._client.post(
      '/v4/smart/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface UnifiedResponse {
  demat_accounts?: Array<UnifiedResponse.DematAccount>;

  insurance?: UnifiedResponse.Insurance;

  investor?: UnifiedResponse.Investor;

  meta?: UnifiedResponse.Meta;

  mutual_funds?: Array<UnifiedResponse.MutualFund>;

  /**
   * List of NPS accounts
   */
  nps?: Array<UnifiedResponse.Np>;

  summary?: UnifiedResponse.Summary;
}

export namespace UnifiedResponse {
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
     * List of account holders linked to this demat account
     */
    linked_holders?: Array<DematAccount.LinkedHolder>;

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
        additional_info?: Aif.AdditionalInfo;

        /**
         * ISIN code of the AIF
         */
        isin?: string;

        /**
         * Name of the AIF
         */
        name?: string;

        /**
         * List of transactions for this holding (beta)
         */
        transactions?: Array<Aif.Transaction>;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export namespace Aif {
        /**
         * Additional information specific to the AIF
         */
        export interface AdditionalInfo {
          /**
           * Closing balance units for the statement period (beta)
           */
          close_units?: number | null;

          /**
           * Opening balance units for the statement period (beta)
           */
          open_units?: number | null;
        }

        /**
         * Unified transaction schema for all holding types (MF folios, equities, bonds,
         * etc.)
         */
        export interface Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          additional_info?: Transaction.AdditionalInfo;

          /**
           * Transaction amount in currency (computed from units × price/NAV)
           */
          amount?: number | null;

          /**
           * Balance units after transaction
           */
          balance?: number;

          /**
           * Transaction date (YYYY-MM-DD)
           */
          date?: string;

          /**
           * Transaction description/particulars
           */
          description?: string;

          /**
           * Dividend rate (for DIVIDEND_PAYOUT transactions)
           */
          dividend_rate?: number | null;

          /**
           * NAV/price per unit on transaction date
           */
          nav?: number | null;

          /**
           * Transaction type. Possible values are PURCHASE, PURCHASE_SIP, REDEMPTION,
           * SWITCH_IN, SWITCH_IN_MERGER, SWITCH_OUT, SWITCH_OUT_MERGER, DIVIDEND_PAYOUT,
           * DIVIDEND_REINVEST, SEGREGATION, STAMP_DUTY_TAX, TDS_TAX, STT_TAX, MISC,
           * REVERSAL, UNKNOWN.
           */
          type?:
            | 'PURCHASE'
            | 'PURCHASE_SIP'
            | 'REDEMPTION'
            | 'SWITCH_IN'
            | 'SWITCH_IN_MERGER'
            | 'SWITCH_OUT'
            | 'SWITCH_OUT_MERGER'
            | 'DIVIDEND_PAYOUT'
            | 'DIVIDEND_REINVEST'
            | 'SEGREGATION'
            | 'STAMP_DUTY_TAX'
            | 'TDS_TAX'
            | 'STT_TAX'
            | 'MISC'
            | 'REVERSAL'
            | 'UNKNOWN';

          /**
           * Number of units involved in transaction
           */
          units?: number;
        }

        export namespace Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          export interface AdditionalInfo {
            /**
             * Capital withdrawal amount (CDSL MF transactions)
             */
            capital_withdrawal?: number;

            /**
             * Units credited (demat transactions)
             */
            credit?: number;

            /**
             * Units debited (demat transactions)
             */
            debit?: number;

            /**
             * Income distribution amount (CDSL MF transactions)
             */
            income_distribution?: number;

            /**
             * Order/transaction reference number (demat transactions)
             */
            order_no?: string;

            /**
             * Price per unit (NSDL/CDSL MF transactions)
             */
            price?: number;

            /**
             * Stamp duty charged
             */
            stamp_duty?: number;
          }
        }
      }

      export interface CorporateBond {
        /**
         * Additional information specific to the corporate bond
         */
        additional_info?: CorporateBond.AdditionalInfo;

        /**
         * ISIN code of the corporate bond
         */
        isin?: string;

        /**
         * Name of the corporate bond
         */
        name?: string;

        /**
         * List of transactions for this holding (beta)
         */
        transactions?: Array<CorporateBond.Transaction>;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export namespace CorporateBond {
        /**
         * Additional information specific to the corporate bond
         */
        export interface AdditionalInfo {
          /**
           * Closing balance units for the statement period (beta)
           */
          close_units?: number | null;

          /**
           * Opening balance units for the statement period (beta)
           */
          open_units?: number | null;
        }

        /**
         * Unified transaction schema for all holding types (MF folios, equities, bonds,
         * etc.)
         */
        export interface Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          additional_info?: Transaction.AdditionalInfo;

          /**
           * Transaction amount in currency (computed from units × price/NAV)
           */
          amount?: number | null;

          /**
           * Balance units after transaction
           */
          balance?: number;

          /**
           * Transaction date (YYYY-MM-DD)
           */
          date?: string;

          /**
           * Transaction description/particulars
           */
          description?: string;

          /**
           * Dividend rate (for DIVIDEND_PAYOUT transactions)
           */
          dividend_rate?: number | null;

          /**
           * NAV/price per unit on transaction date
           */
          nav?: number | null;

          /**
           * Transaction type. Possible values are PURCHASE, PURCHASE_SIP, REDEMPTION,
           * SWITCH_IN, SWITCH_IN_MERGER, SWITCH_OUT, SWITCH_OUT_MERGER, DIVIDEND_PAYOUT,
           * DIVIDEND_REINVEST, SEGREGATION, STAMP_DUTY_TAX, TDS_TAX, STT_TAX, MISC,
           * REVERSAL, UNKNOWN.
           */
          type?:
            | 'PURCHASE'
            | 'PURCHASE_SIP'
            | 'REDEMPTION'
            | 'SWITCH_IN'
            | 'SWITCH_IN_MERGER'
            | 'SWITCH_OUT'
            | 'SWITCH_OUT_MERGER'
            | 'DIVIDEND_PAYOUT'
            | 'DIVIDEND_REINVEST'
            | 'SEGREGATION'
            | 'STAMP_DUTY_TAX'
            | 'TDS_TAX'
            | 'STT_TAX'
            | 'MISC'
            | 'REVERSAL'
            | 'UNKNOWN';

          /**
           * Number of units involved in transaction
           */
          units?: number;
        }

        export namespace Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          export interface AdditionalInfo {
            /**
             * Capital withdrawal amount (CDSL MF transactions)
             */
            capital_withdrawal?: number;

            /**
             * Units credited (demat transactions)
             */
            credit?: number;

            /**
             * Units debited (demat transactions)
             */
            debit?: number;

            /**
             * Income distribution amount (CDSL MF transactions)
             */
            income_distribution?: number;

            /**
             * Order/transaction reference number (demat transactions)
             */
            order_no?: string;

            /**
             * Price per unit (NSDL/CDSL MF transactions)
             */
            price?: number;

            /**
             * Stamp duty charged
             */
            stamp_duty?: number;
          }
        }
      }

      export interface DematMutualFund {
        /**
         * Additional information specific to the mutual fund
         */
        additional_info?: DematMutualFund.AdditionalInfo;

        /**
         * ISIN code of the mutual fund
         */
        isin?: string;

        /**
         * Name of the mutual fund
         */
        name?: string;

        /**
         * List of transactions for this holding (beta)
         */
        transactions?: Array<DematMutualFund.Transaction>;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export namespace DematMutualFund {
        /**
         * Additional information specific to the mutual fund
         */
        export interface AdditionalInfo {
          /**
           * Closing balance units for the statement period (beta)
           */
          close_units?: number | null;

          /**
           * Opening balance units for the statement period (beta)
           */
          open_units?: number | null;
        }

        /**
         * Unified transaction schema for all holding types (MF folios, equities, bonds,
         * etc.)
         */
        export interface Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          additional_info?: Transaction.AdditionalInfo;

          /**
           * Transaction amount in currency (computed from units × price/NAV)
           */
          amount?: number | null;

          /**
           * Balance units after transaction
           */
          balance?: number;

          /**
           * Transaction date (YYYY-MM-DD)
           */
          date?: string;

          /**
           * Transaction description/particulars
           */
          description?: string;

          /**
           * Dividend rate (for DIVIDEND_PAYOUT transactions)
           */
          dividend_rate?: number | null;

          /**
           * NAV/price per unit on transaction date
           */
          nav?: number | null;

          /**
           * Transaction type. Possible values are PURCHASE, PURCHASE_SIP, REDEMPTION,
           * SWITCH_IN, SWITCH_IN_MERGER, SWITCH_OUT, SWITCH_OUT_MERGER, DIVIDEND_PAYOUT,
           * DIVIDEND_REINVEST, SEGREGATION, STAMP_DUTY_TAX, TDS_TAX, STT_TAX, MISC,
           * REVERSAL, UNKNOWN.
           */
          type?:
            | 'PURCHASE'
            | 'PURCHASE_SIP'
            | 'REDEMPTION'
            | 'SWITCH_IN'
            | 'SWITCH_IN_MERGER'
            | 'SWITCH_OUT'
            | 'SWITCH_OUT_MERGER'
            | 'DIVIDEND_PAYOUT'
            | 'DIVIDEND_REINVEST'
            | 'SEGREGATION'
            | 'STAMP_DUTY_TAX'
            | 'TDS_TAX'
            | 'STT_TAX'
            | 'MISC'
            | 'REVERSAL'
            | 'UNKNOWN';

          /**
           * Number of units involved in transaction
           */
          units?: number;
        }

        export namespace Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          export interface AdditionalInfo {
            /**
             * Capital withdrawal amount (CDSL MF transactions)
             */
            capital_withdrawal?: number;

            /**
             * Units credited (demat transactions)
             */
            credit?: number;

            /**
             * Units debited (demat transactions)
             */
            debit?: number;

            /**
             * Income distribution amount (CDSL MF transactions)
             */
            income_distribution?: number;

            /**
             * Order/transaction reference number (demat transactions)
             */
            order_no?: string;

            /**
             * Price per unit (NSDL/CDSL MF transactions)
             */
            price?: number;

            /**
             * Stamp duty charged
             */
            stamp_duty?: number;
          }
        }
      }

      export interface Equity {
        /**
         * Additional information specific to the equity
         */
        additional_info?: Equity.AdditionalInfo;

        /**
         * ISIN code of the equity
         */
        isin?: string;

        /**
         * Name of the equity
         */
        name?: string;

        /**
         * List of transactions for this holding (beta)
         */
        transactions?: Array<Equity.Transaction>;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export namespace Equity {
        /**
         * Additional information specific to the equity
         */
        export interface AdditionalInfo {
          /**
           * Closing balance units for the statement period (beta)
           */
          close_units?: number | null;

          /**
           * Opening balance units for the statement period (beta)
           */
          open_units?: number | null;
        }

        /**
         * Unified transaction schema for all holding types (MF folios, equities, bonds,
         * etc.)
         */
        export interface Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          additional_info?: Transaction.AdditionalInfo;

          /**
           * Transaction amount in currency (computed from units × price/NAV)
           */
          amount?: number | null;

          /**
           * Balance units after transaction
           */
          balance?: number;

          /**
           * Transaction date (YYYY-MM-DD)
           */
          date?: string;

          /**
           * Transaction description/particulars
           */
          description?: string;

          /**
           * Dividend rate (for DIVIDEND_PAYOUT transactions)
           */
          dividend_rate?: number | null;

          /**
           * NAV/price per unit on transaction date
           */
          nav?: number | null;

          /**
           * Transaction type. Possible values are PURCHASE, PURCHASE_SIP, REDEMPTION,
           * SWITCH_IN, SWITCH_IN_MERGER, SWITCH_OUT, SWITCH_OUT_MERGER, DIVIDEND_PAYOUT,
           * DIVIDEND_REINVEST, SEGREGATION, STAMP_DUTY_TAX, TDS_TAX, STT_TAX, MISC,
           * REVERSAL, UNKNOWN.
           */
          type?:
            | 'PURCHASE'
            | 'PURCHASE_SIP'
            | 'REDEMPTION'
            | 'SWITCH_IN'
            | 'SWITCH_IN_MERGER'
            | 'SWITCH_OUT'
            | 'SWITCH_OUT_MERGER'
            | 'DIVIDEND_PAYOUT'
            | 'DIVIDEND_REINVEST'
            | 'SEGREGATION'
            | 'STAMP_DUTY_TAX'
            | 'TDS_TAX'
            | 'STT_TAX'
            | 'MISC'
            | 'REVERSAL'
            | 'UNKNOWN';

          /**
           * Number of units involved in transaction
           */
          units?: number;
        }

        export namespace Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          export interface AdditionalInfo {
            /**
             * Capital withdrawal amount (CDSL MF transactions)
             */
            capital_withdrawal?: number;

            /**
             * Units credited (demat transactions)
             */
            credit?: number;

            /**
             * Units debited (demat transactions)
             */
            debit?: number;

            /**
             * Income distribution amount (CDSL MF transactions)
             */
            income_distribution?: number;

            /**
             * Order/transaction reference number (demat transactions)
             */
            order_no?: string;

            /**
             * Price per unit (NSDL/CDSL MF transactions)
             */
            price?: number;

            /**
             * Stamp duty charged
             */
            stamp_duty?: number;
          }
        }
      }

      export interface GovernmentSecurity {
        /**
         * Additional information specific to the government security
         */
        additional_info?: GovernmentSecurity.AdditionalInfo;

        /**
         * ISIN code of the government security
         */
        isin?: string;

        /**
         * Name of the government security
         */
        name?: string;

        /**
         * List of transactions for this holding (beta)
         */
        transactions?: Array<GovernmentSecurity.Transaction>;

        /**
         * Number of units held
         */
        units?: number;

        /**
         * Current market value of the holding
         */
        value?: number;
      }

      export namespace GovernmentSecurity {
        /**
         * Additional information specific to the government security
         */
        export interface AdditionalInfo {
          /**
           * Closing balance units for the statement period (beta)
           */
          close_units?: number | null;

          /**
           * Opening balance units for the statement period (beta)
           */
          open_units?: number | null;
        }

        /**
         * Unified transaction schema for all holding types (MF folios, equities, bonds,
         * etc.)
         */
        export interface Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          additional_info?: Transaction.AdditionalInfo;

          /**
           * Transaction amount in currency (computed from units × price/NAV)
           */
          amount?: number | null;

          /**
           * Balance units after transaction
           */
          balance?: number;

          /**
           * Transaction date (YYYY-MM-DD)
           */
          date?: string;

          /**
           * Transaction description/particulars
           */
          description?: string;

          /**
           * Dividend rate (for DIVIDEND_PAYOUT transactions)
           */
          dividend_rate?: number | null;

          /**
           * NAV/price per unit on transaction date
           */
          nav?: number | null;

          /**
           * Transaction type. Possible values are PURCHASE, PURCHASE_SIP, REDEMPTION,
           * SWITCH_IN, SWITCH_IN_MERGER, SWITCH_OUT, SWITCH_OUT_MERGER, DIVIDEND_PAYOUT,
           * DIVIDEND_REINVEST, SEGREGATION, STAMP_DUTY_TAX, TDS_TAX, STT_TAX, MISC,
           * REVERSAL, UNKNOWN.
           */
          type?:
            | 'PURCHASE'
            | 'PURCHASE_SIP'
            | 'REDEMPTION'
            | 'SWITCH_IN'
            | 'SWITCH_IN_MERGER'
            | 'SWITCH_OUT'
            | 'SWITCH_OUT_MERGER'
            | 'DIVIDEND_PAYOUT'
            | 'DIVIDEND_REINVEST'
            | 'SEGREGATION'
            | 'STAMP_DUTY_TAX'
            | 'TDS_TAX'
            | 'STT_TAX'
            | 'MISC'
            | 'REVERSAL'
            | 'UNKNOWN';

          /**
           * Number of units involved in transaction
           */
          units?: number;
        }

        export namespace Transaction {
          /**
           * Additional transaction-specific fields that vary by source
           */
          export interface AdditionalInfo {
            /**
             * Capital withdrawal amount (CDSL MF transactions)
             */
            capital_withdrawal?: number;

            /**
             * Units credited (demat transactions)
             */
            credit?: number;

            /**
             * Units debited (demat transactions)
             */
            debit?: number;

            /**
             * Income distribution amount (CDSL MF transactions)
             */
            income_distribution?: number;

            /**
             * Order/transaction reference number (demat transactions)
             */
            order_no?: string;

            /**
             * Price per unit (NSDL/CDSL MF transactions)
             */
            price?: number;

            /**
             * Stamp duty charged
             */
            stamp_duty?: number;
          }
        }
      }
    }

    export interface LinkedHolder {
      /**
       * Name of the account holder
       */
      name?: string;

      /**
       * PAN of the account holder
       */
      pan?: string;
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
     * List of account holders linked to this mutual fund folio
     */
    linked_holders?: Array<MutualFund.LinkedHolder>;

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

    export interface LinkedHolder {
      /**
       * Name of the account holder
       */
      name?: string;

      /**
       * PAN of the account holder
       */
      pan?: string;
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
         * Closing balance units for the statement period
         */
        close_units?: number | null;

        /**
         * Opening balance units for the statement period
         */
        open_units?: number | null;

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

      /**
       * Unified transaction schema for all holding types (MF folios, equities, bonds,
       * etc.)
       */
      export interface Transaction {
        /**
         * Additional transaction-specific fields that vary by source
         */
        additional_info?: Transaction.AdditionalInfo;

        /**
         * Transaction amount in currency (computed from units × price/NAV)
         */
        amount?: number | null;

        /**
         * Balance units after transaction
         */
        balance?: number;

        /**
         * Transaction date (YYYY-MM-DD)
         */
        date?: string;

        /**
         * Transaction description/particulars
         */
        description?: string;

        /**
         * Dividend rate (for DIVIDEND_PAYOUT transactions)
         */
        dividend_rate?: number | null;

        /**
         * NAV/price per unit on transaction date
         */
        nav?: number | null;

        /**
         * Transaction type. Possible values are PURCHASE, PURCHASE_SIP, REDEMPTION,
         * SWITCH_IN, SWITCH_IN_MERGER, SWITCH_OUT, SWITCH_OUT_MERGER, DIVIDEND_PAYOUT,
         * DIVIDEND_REINVEST, SEGREGATION, STAMP_DUTY_TAX, TDS_TAX, STT_TAX, MISC,
         * REVERSAL, UNKNOWN.
         */
        type?:
          | 'PURCHASE'
          | 'PURCHASE_SIP'
          | 'REDEMPTION'
          | 'SWITCH_IN'
          | 'SWITCH_IN_MERGER'
          | 'SWITCH_OUT'
          | 'SWITCH_OUT_MERGER'
          | 'DIVIDEND_PAYOUT'
          | 'DIVIDEND_REINVEST'
          | 'SEGREGATION'
          | 'STAMP_DUTY_TAX'
          | 'TDS_TAX'
          | 'STT_TAX'
          | 'MISC'
          | 'REVERSAL'
          | 'UNKNOWN';

        /**
         * Number of units involved in transaction
         */
        units?: number;
      }

      export namespace Transaction {
        /**
         * Additional transaction-specific fields that vary by source
         */
        export interface AdditionalInfo {
          /**
           * Capital withdrawal amount (CDSL MF transactions)
           */
          capital_withdrawal?: number;

          /**
           * Units credited (demat transactions)
           */
          credit?: number;

          /**
           * Units debited (demat transactions)
           */
          debit?: number;

          /**
           * Income distribution amount (CDSL MF transactions)
           */
          income_distribution?: number;

          /**
           * Order/transaction reference number (demat transactions)
           */
          order_no?: string;

          /**
           * Price per unit (NSDL/CDSL MF transactions)
           */
          price?: number;

          /**
           * Stamp duty charged
           */
          stamp_duty?: number;
        }
      }
    }
  }

  export interface Np {
    /**
     * Additional information specific to the NPS account
     */
    additional_info?: unknown;

    /**
     * Central Record Keeping Agency name
     */
    cra?: string;

    funds?: Array<Np.Fund>;

    /**
     * List of account holders linked to this NPS account
     */
    linked_holders?: Array<Np.LinkedHolder>;

    /**
     * Permanent Retirement Account Number (PRAN)
     */
    pran?: string;

    /**
     * Total value of the NPS account
     */
    value?: number;
  }

  export namespace Np {
    export interface Fund {
      /**
       * Additional information specific to the NPS fund
       */
      additional_info?: Fund.AdditionalInfo;

      /**
       * Cost of investment
       */
      cost?: number;

      /**
       * Name of the NPS fund
       */
      name?: string;

      /**
       * Net Asset Value per unit
       */
      nav?: number;

      /**
       * Number of units held
       */
      units?: number;

      /**
       * Current market value of the holding
       */
      value?: number;
    }

    export namespace Fund {
      /**
       * Additional information specific to the NPS fund
       */
      export interface AdditionalInfo {
        /**
         * Fund manager name
         */
        manager?: string;

        /**
         * NPS tier (Tier I or Tier II)
         */
        tier?: 1 | 2 | null;
      }
    }

    export interface LinkedHolder {
      /**
       * Name of the account holder
       */
      name?: string;

      /**
       * PAN of the account holder
       */
      pan?: string;
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

      nps?: Accounts.Nps;
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

      export interface Nps {
        /**
         * Number of NPS accounts
         */
        count?: number;

        /**
         * Total value of NPS accounts
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
   * Base64 encoded CAS PDF file (required if pdf_url not provided)
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file (required if pdf_file not provided)
   */
  pdf_url?: string;
}

export interface CasParserCdslParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file (required if pdf_url not provided)
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file (required if pdf_file not provided)
   */
  pdf_url?: string;
}

export interface CasParserNsdlParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file (required if pdf_url not provided)
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file (required if pdf_file not provided)
   */
  pdf_url?: string;
}

export interface CasParserSmartParseParams {
  /**
   * Password for the PDF file (if required)
   */
  password?: string;

  /**
   * Base64 encoded CAS PDF file (required if pdf_url not provided)
   */
  pdf_file?: string;

  /**
   * URL to the CAS PDF file (required if pdf_file not provided)
   */
  pdf_url?: string;
}

export declare namespace CasParserResource {
  export {
    type UnifiedResponse as UnifiedResponse,
    type CasParserCamsKfintechParams as CasParserCamsKfintechParams,
    type CasParserCdslParams as CasParserCdslParams,
    type CasParserNsdlParams as CasParserNsdlParams,
    type CasParserSmartParseParams as CasParserSmartParseParams,
  };
}
