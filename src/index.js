/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Marketplace, we offer a wide selection of financial data feeds sourced by our own proprietary processes as well as from many data vendors. The primary application of the Intrinio API is for use in third-party applications and integrations or for end-users utilizing the Excel add-in and Google Sheets add-on. The Intrinio API uses HTTPS verbs and a RESTful endpoint structure, which makes it easy to request data from Intrinio. Responses are delivered in JSON format. If you need additional help in using the API, go to our home page (https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['invoker/ApiClient', 'invoker/model/Company', 'invoker/model/CompanyNews', 'invoker/model/CompanySummary', 'invoker/model/DataPointNumber', 'invoker/model/DataPointText', 'invoker/model/EconomicIndex', 'invoker/model/EconomicIndexSummary', 'invoker/model/Filing', 'invoker/model/FilingSummary', 'invoker/model/Fundamental', 'invoker/model/FundamentalSummary', 'invoker/model/HistoricalData', 'invoker/model/ReportedFinancial', 'invoker/model/ReportedTag', 'invoker/model/SICIndex', 'invoker/model/Security', 'invoker/model/SecurityScreenClause', 'invoker/model/SecurityScreenGroup', 'invoker/model/SecurityScreenResult', 'invoker/model/SecurityScreenResultData', 'invoker/model/SecuritySummary', 'invoker/model/StandardizedFinancial', 'invoker/model/StandardizedTag', 'invoker/model/StockExchange', 'invoker/model/StockMarketIndex', 'invoker/model/StockMarketIndexSummary', 'invoker/model/StockPrice', 'invoker/model/StockPriceSummary', 'invoker/api/CompanyApi', 'invoker/api/DataPointApi', 'invoker/api/FilingApi', 'invoker/api/FundamentalsApi', 'invoker/api/HistoricalDataApi', 'invoker/api/IndexApi', 'invoker/api/SecurityApi', 'invoker/api/StandardizedTagApi', 'invoker/api/StockExchangeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Company'), require('./model/CompanyNews'), require('./model/CompanySummary'), require('./model/DataPointNumber'), require('./model/DataPointText'), require('./model/EconomicIndex'), require('./model/EconomicIndexSummary'), require('./model/Filing'), require('./model/FilingSummary'), require('./model/Fundamental'), require('./model/FundamentalSummary'), require('./model/HistoricalData'), require('./model/ReportedFinancial'), require('./model/ReportedTag'), require('./model/SICIndex'), require('./model/Security'), require('./model/SecurityScreenClause'), require('./model/SecurityScreenGroup'), require('./model/SecurityScreenResult'), require('./model/SecurityScreenResultData'), require('./model/SecuritySummary'), require('./model/StandardizedFinancial'), require('./model/StandardizedTag'), require('./model/StockExchange'), require('./model/StockMarketIndex'), require('./model/StockMarketIndexSummary'), require('./model/StockPrice'), require('./model/StockPriceSummary'), require('./api/CompanyApi'), require('./api/DataPointApi'), require('./api/FilingApi'), require('./api/FundamentalsApi'), require('./api/HistoricalDataApi'), require('./api/IndexApi'), require('./api/SecurityApi'), require('./api/StandardizedTagApi'), require('./api/StockExchangeApi'));
  }
}(function(ApiClient, Company, CompanyNews, CompanySummary, DataPointNumber, DataPointText, EconomicIndex, EconomicIndexSummary, Filing, FilingSummary, Fundamental, FundamentalSummary, HistoricalData, ReportedFinancial, ReportedTag, SICIndex, Security, SecurityScreenClause, SecurityScreenGroup, SecurityScreenResult, SecurityScreenResultData, SecuritySummary, StandardizedFinancial, StandardizedTag, StockExchange, StockMarketIndex, StockMarketIndexSummary, StockPrice, StockPriceSummary, CompanyApi, DataPointApi, FilingApi, FundamentalsApi, HistoricalDataApi, IndexApi, SecurityApi, StandardizedTagApi, StockExchangeApi) {
  'use strict';

  /**
   * Access the Intrinio API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var intrinio = require('invoker/index'); // See note below*.
   * var xxxSvc = new intrinio.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new intrinio.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['invoker/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new intrinio.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new intrinio.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module invoker/index
   * @version 0.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:invoker/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Company model constructor.
     * @property {module:invoker/model/Company}
     */
    Company: Company,
    /**
     * The CompanyNews model constructor.
     * @property {module:invoker/model/CompanyNews}
     */
    CompanyNews: CompanyNews,
    /**
     * The CompanySummary model constructor.
     * @property {module:invoker/model/CompanySummary}
     */
    CompanySummary: CompanySummary,
    /**
     * The DataPointNumber model constructor.
     * @property {module:invoker/model/DataPointNumber}
     */
    DataPointNumber: DataPointNumber,
    /**
     * The DataPointText model constructor.
     * @property {module:invoker/model/DataPointText}
     */
    DataPointText: DataPointText,
    /**
     * The EconomicIndex model constructor.
     * @property {module:invoker/model/EconomicIndex}
     */
    EconomicIndex: EconomicIndex,
    /**
     * The EconomicIndexSummary model constructor.
     * @property {module:invoker/model/EconomicIndexSummary}
     */
    EconomicIndexSummary: EconomicIndexSummary,
    /**
     * The Filing model constructor.
     * @property {module:invoker/model/Filing}
     */
    Filing: Filing,
    /**
     * The FilingSummary model constructor.
     * @property {module:invoker/model/FilingSummary}
     */
    FilingSummary: FilingSummary,
    /**
     * The Fundamental model constructor.
     * @property {module:invoker/model/Fundamental}
     */
    Fundamental: Fundamental,
    /**
     * The FundamentalSummary model constructor.
     * @property {module:invoker/model/FundamentalSummary}
     */
    FundamentalSummary: FundamentalSummary,
    /**
     * The HistoricalData model constructor.
     * @property {module:invoker/model/HistoricalData}
     */
    HistoricalData: HistoricalData,
    /**
     * The ReportedFinancial model constructor.
     * @property {module:invoker/model/ReportedFinancial}
     */
    ReportedFinancial: ReportedFinancial,
    /**
     * The ReportedTag model constructor.
     * @property {module:invoker/model/ReportedTag}
     */
    ReportedTag: ReportedTag,
    /**
     * The SICIndex model constructor.
     * @property {module:invoker/model/SICIndex}
     */
    SICIndex: SICIndex,
    /**
     * The Security model constructor.
     * @property {module:invoker/model/Security}
     */
    Security: Security,
    /**
     * The SecurityScreenClause model constructor.
     * @property {module:invoker/model/SecurityScreenClause}
     */
    SecurityScreenClause: SecurityScreenClause,
    /**
     * The SecurityScreenGroup model constructor.
     * @property {module:invoker/model/SecurityScreenGroup}
     */
    SecurityScreenGroup: SecurityScreenGroup,
    /**
     * The SecurityScreenResult model constructor.
     * @property {module:invoker/model/SecurityScreenResult}
     */
    SecurityScreenResult: SecurityScreenResult,
    /**
     * The SecurityScreenResultData model constructor.
     * @property {module:invoker/model/SecurityScreenResultData}
     */
    SecurityScreenResultData: SecurityScreenResultData,
    /**
     * The SecuritySummary model constructor.
     * @property {module:invoker/model/SecuritySummary}
     */
    SecuritySummary: SecuritySummary,
    /**
     * The StandardizedFinancial model constructor.
     * @property {module:invoker/model/StandardizedFinancial}
     */
    StandardizedFinancial: StandardizedFinancial,
    /**
     * The StandardizedTag model constructor.
     * @property {module:invoker/model/StandardizedTag}
     */
    StandardizedTag: StandardizedTag,
    /**
     * The StockExchange model constructor.
     * @property {module:invoker/model/StockExchange}
     */
    StockExchange: StockExchange,
    /**
     * The StockMarketIndex model constructor.
     * @property {module:invoker/model/StockMarketIndex}
     */
    StockMarketIndex: StockMarketIndex,
    /**
     * The StockMarketIndexSummary model constructor.
     * @property {module:invoker/model/StockMarketIndexSummary}
     */
    StockMarketIndexSummary: StockMarketIndexSummary,
    /**
     * The StockPrice model constructor.
     * @property {module:invoker/model/StockPrice}
     */
    StockPrice: StockPrice,
    /**
     * The StockPriceSummary model constructor.
     * @property {module:invoker/model/StockPriceSummary}
     */
    StockPriceSummary: StockPriceSummary,
    /**
     * The CompanyApi service constructor.
     * @property {module:invoker/api/CompanyApi}
     */
    CompanyApi: CompanyApi,
    /**
     * The DataPointApi service constructor.
     * @property {module:invoker/api/DataPointApi}
     */
    DataPointApi: DataPointApi,
    /**
     * The FilingApi service constructor.
     * @property {module:invoker/api/FilingApi}
     */
    FilingApi: FilingApi,
    /**
     * The FundamentalsApi service constructor.
     * @property {module:invoker/api/FundamentalsApi}
     */
    FundamentalsApi: FundamentalsApi,
    /**
     * The HistoricalDataApi service constructor.
     * @property {module:invoker/api/HistoricalDataApi}
     */
    HistoricalDataApi: HistoricalDataApi,
    /**
     * The IndexApi service constructor.
     * @property {module:invoker/api/IndexApi}
     */
    IndexApi: IndexApi,
    /**
     * The SecurityApi service constructor.
     * @property {module:invoker/api/SecurityApi}
     */
    SecurityApi: SecurityApi,
    /**
     * The StandardizedTagApi service constructor.
     * @property {module:invoker/api/StandardizedTagApi}
     */
    StandardizedTagApi: StandardizedTagApi,
    /**
     * The StockExchangeApi service constructor.
     * @property {module:invoker/api/StockExchangeApi}
     */
    StockExchangeApi: StockExchangeApi
  };

  return exports;
}));
