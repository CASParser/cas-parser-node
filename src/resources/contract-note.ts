// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class ContractNote extends APIResource {
  /**
   * This endpoint parses Contract Note PDF files from various brokers including
   * Zerodha, Groww, Upstox, ICICI Securities, and others.
   *
   * **What is a Contract Note?** A contract note is a legal document that provides
   * details of all trades executed by an investor. It includes:
   *
   * - Trade details with timestamps, quantities, and prices
   * - Brokerage and charges breakdown
   * - Settlement information
   * - Regulatory compliance details
   *
   * **Supported Brokers:**
   *
   * - Zerodha Broking Limited
   * - Groww Invest Tech Private Limited
   * - Upstox (RKSV Securities)
   * - ICICI Securities Limited
   * - Auto-detection for unknown brokers
   *
   * **Key Features:**
   *
   * - **Auto-detection**: Automatically identifies broker type from PDF content
   * - **Comprehensive parsing**: Extracts equity transactions, derivatives
   *   transactions, detailed trades, and charges
   * - **Flexible input**: Accepts both file upload and URL-based PDF input
   * - **Password protection**: Supports password-protected PDFs
   *
   * The API returns structured data including contract note information, client
   * details, transaction summaries, and detailed trade-by-trade breakdowns.
   *
   * @example
   * ```ts
   * const response = await client.contractNote.parse();
   * ```
   */
  parse(body: ContractNoteParseParams, options?: RequestOptions): APIPromise<ContractNoteParseResponse> {
    return this._client.post(
      '/v4/contract_note/parse',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface ContractNoteParseResponse {
  data?: ContractNoteParseResponse.Data;

  msg?: string;

  status?: string;
}

export namespace ContractNoteParseResponse {
  export interface Data {
    broker_info?: Data.BrokerInfo;

    /**
     * Breakdown of various charges and fees
     */
    charges_summary?: Data.ChargesSummary;

    client_info?: Data.ClientInfo;

    contract_note_info?: Data.ContractNoteInfo;

    /**
     * Summary of derivatives transactions
     */
    derivatives_transactions?: Array<Data.DerivativesTransaction>;

    /**
     * Detailed breakdown of all individual trades
     */
    detailed_trades?: Array<Data.DetailedTrade>;

    /**
     * Summary of equity transactions grouped by security
     */
    equity_transactions?: Array<Data.EquityTransaction>;
  }

  export namespace Data {
    export interface BrokerInfo {
      /**
       * Auto-detected or specified broker type
       */
      broker_type?: 'zerodha' | 'groww' | 'upstox' | 'icici' | 'unknown';

      /**
       * Broker company name
       */
      name?: string;

      /**
       * SEBI registration number of the broker
       */
      sebi_registration?: string;
    }

    /**
     * Breakdown of various charges and fees
     */
    export interface ChargesSummary {
      /**
       * Central GST amount
       */
      cgst?: number;

      /**
       * Exchange transaction charges
       */
      exchange_transaction_charges?: number;

      /**
       * Integrated GST amount
       */
      igst?: number;

      /**
       * Final net amount receivable or payable
       */
      net_amount_receivable_payable?: number;

      /**
       * Net pay-in/pay-out obligation
       */
      pay_in_pay_out_obligation?: number;

      /**
       * SEBI turnover fees
       */
      sebi_turnover_fees?: number;

      /**
       * Securities Transaction Tax
       */
      securities_transaction_tax?: number;

      /**
       * State GST amount
       */
      sgst?: number;

      /**
       * Stamp duty charges
       */
      stamp_duty?: number;

      /**
       * Taxable brokerage amount
       */
      taxable_value_brokerage?: number;
    }

    export interface ClientInfo {
      /**
       * Client address
       */
      address?: string;

      /**
       * GST state code
       */
      gst_state_code?: string;

      /**
       * Client name
       */
      name?: string;

      /**
       * Client PAN number
       */
      pan?: string;

      /**
       * GST place of supply
       */
      place_of_supply?: string;

      /**
       * Unique Client Code
       */
      ucc?: string;
    }

    export interface ContractNoteInfo {
      /**
       * Contract note reference number
       */
      contract_note_number?: string;

      /**
       * Settlement date for the trades
       */
      settlement_date?: string;

      /**
       * Settlement reference number
       */
      settlement_number?: string;

      /**
       * Date when trades were executed
       */
      trade_date?: string;
    }

    export interface DerivativesTransaction {
      /**
       * Brokerage charged per unit
       */
      brokerage_per_unit?: number;

      /**
       * Transaction type (Buy/Sell/Bring Forward/Carry Forward)
       */
      buy_sell_bf_cf?: string;

      /**
       * Closing rate per unit
       */
      closing_rate_per_unit?: number;

      /**
       * Derivatives contract description
       */
      contract_description?: string;

      /**
       * Net total amount
       */
      net_total?: number;

      /**
       * Quantity traded
       */
      quantity?: number;

      /**
       * Weighted Average Price per unit
       */
      wap_per_unit?: number;
    }

    export interface DetailedTrade {
      /**
       * Brokerage charged for this trade
       */
      brokerage?: number;

      /**
       * Transaction type (B for Buy, S for Sell)
       */
      buy_sell?: string;

      /**
       * Closing rate per unit
       */
      closing_rate_per_unit?: number;

      /**
       * Exchange name
       */
      exchange?: string;

      /**
       * Net rate per unit
       */
      net_rate_per_unit?: number;

      /**
       * Net total for this trade
       */
      net_total?: number;

      /**
       * Order reference number
       */
      order_number?: string;

      /**
       * Time when order was placed
       */
      order_time?: string;

      /**
       * Quantity traded
       */
      quantity?: number;

      /**
       * Additional remarks or notes
       */
      remarks?: string;

      /**
       * Security name with exchange and ISIN
       */
      security_description?: string;

      /**
       * Trade reference number
       */
      trade_number?: string;

      /**
       * Time when trade was executed
       */
      trade_time?: string;
    }

    export interface EquityTransaction {
      /**
       * Total quantity purchased
       */
      buy_quantity?: number;

      /**
       * Total value of buy transactions
       */
      buy_total_value?: number;

      /**
       * Weighted Average Price for buy transactions
       */
      buy_wap?: number;

      /**
       * ISIN code of the security
       */
      isin?: string;

      /**
       * Net amount payable/receivable for this security
       */
      net_obligation?: number;

      /**
       * Name of the security
       */
      security_name?: string;

      /**
       * Trading symbol
       */
      security_symbol?: string;

      /**
       * Total quantity sold
       */
      sell_quantity?: number;

      /**
       * Total value of sell transactions
       */
      sell_total_value?: number;

      /**
       * Weighted Average Price for sell transactions
       */
      sell_wap?: number;
    }
  }
}

export interface ContractNoteParseParams {
  /**
   * Optional broker type override. If not provided, system will auto-detect.
   */
  broker_type?: 'zerodha' | 'groww' | 'upstox' | 'icici';

  /**
   * Password for the PDF file (usually PAN number for Zerodha)
   */
  password?: string;

  /**
   * Base64 encoded contract note PDF file
   */
  pdf_file?: string;

  /**
   * URL to the contract note PDF file
   */
  pdf_url?: string;
}

export declare namespace ContractNote {
  export {
    type ContractNoteParseResponse as ContractNoteParseResponse,
    type ContractNoteParseParams as ContractNoteParseParams,
  };
}
