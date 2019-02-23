/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponseSecurities', 'model/ApiResponseSecuritiesSearch', 'model/ApiResponseSecurityHistoricalData', 'model/ApiResponseSecurityIntradayPrices', 'model/ApiResponseSecurityStockPriceAdjustments', 'model/ApiResponseSecurityStockPrices', 'model/DividendRecord', 'model/EarningsRecord', 'model/RealtimeStockPrice', 'model/Security', 'model/SecurityScreenGroup', 'model/SecurityScreenResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseSecurities'), require('../model/ApiResponseSecuritiesSearch'), require('../model/ApiResponseSecurityHistoricalData'), require('../model/ApiResponseSecurityIntradayPrices'), require('../model/ApiResponseSecurityStockPriceAdjustments'), require('../model/ApiResponseSecurityStockPrices'), require('../model/DividendRecord'), require('../model/EarningsRecord'), require('../model/RealtimeStockPrice'), require('../model/Security'), require('../model/SecurityScreenGroup'), require('../model/SecurityScreenResult'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.SecurityApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseSecurities, root.intrinioSDK.ApiResponseSecuritiesSearch, root.intrinioSDK.ApiResponseSecurityHistoricalData, root.intrinioSDK.ApiResponseSecurityIntradayPrices, root.intrinioSDK.ApiResponseSecurityStockPriceAdjustments, root.intrinioSDK.ApiResponseSecurityStockPrices, root.intrinioSDK.DividendRecord, root.intrinioSDK.EarningsRecord, root.intrinioSDK.RealtimeStockPrice, root.intrinioSDK.Security, root.intrinioSDK.SecurityScreenGroup, root.intrinioSDK.SecurityScreenResult);
  }
}(this, function(ApiClient, ApiResponseSecurities, ApiResponseSecuritiesSearch, ApiResponseSecurityHistoricalData, ApiResponseSecurityIntradayPrices, ApiResponseSecurityStockPriceAdjustments, ApiResponseSecurityStockPrices, DividendRecord, EarningsRecord, RealtimeStockPrice, Security, SecurityScreenGroup, SecurityScreenResult) {
  'use strict';

  /**
   * Security service.
   * @module api/SecurityApi
   * @version 2.1.0
   */

  /**
   * Constructs a new SecurityApi. 
   * @alias module:api/SecurityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * All Securities
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseSecurities} and HTTP response
     */
    this.getAllSecuritiesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseSecurities;

      return this.apiClient.callApi(
        '/securities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Securities
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseSecurities}
     */
    this.getAllSecurities = function(opts) {
      return this.getAllSecuritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lookup Security
     * Returns the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Security} and HTTP response
     */
    this.getSecurityByIdWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityById");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Security;

      return this.apiClient.callApi(
        '/securities/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lookup Security
     * Returns the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Security}
     */
    this.getSecurityById = function(identifier) {
      return this.getSecurityByIdWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Data Point (Number) for Security
     * Returns a numeric value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code-name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Number'} and HTTP response
     */
    this.getSecurityDataPointNumberWithHttpInfo = function(identifier, tag) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityDataPointNumber");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getSecurityDataPointNumber");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['text/plain; charset=utf-8'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/securities/{identifier}/data_point/{tag}/number', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Data Point (Number) for Security
     * Returns a numeric value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code-name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Number'}
     */
    this.getSecurityDataPointNumber = function(identifier, tag) {
      return this.getSecurityDataPointNumberWithHttpInfo(identifier, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Data Point (Text) for Security
     * Returns a text value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code-name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getSecurityDataPointTextWithHttpInfo = function(identifier, tag) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityDataPointText");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getSecurityDataPointText");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['text/plain; charset=utf-8'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/securities/{identifier}/data_point/{tag}/text', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Data Point (Text) for Security
     * Returns a text value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code-name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getSecurityDataPointText = function(identifier, tag) {
      return this.getSecurityDataPointTextWithHttpInfo(identifier, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Historical Data for Security
     * Returns historical values for the given &#x60;tag&#x60; and the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code-name
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.frequency Return historical data in the given frequency (default to daily)
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical date on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseSecurityHistoricalData} and HTTP response
     */
    this.getSecurityHistoricalDataWithHttpInfo = function(identifier, tag, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityHistoricalData");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getSecurityHistoricalData");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
        'frequency': opts['frequency'],
        'type': opts['type'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'sort_order': opts['sortOrder'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseSecurityHistoricalData;

      return this.apiClient.callApi(
        '/securities/{identifier}/historical_data/{tag}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical Data for Security
     * Returns historical values for the given &#x60;tag&#x60; and the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code-name
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.frequency Return historical data in the given frequency (default to daily)
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical date on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseSecurityHistoricalData}
     */
    this.getSecurityHistoricalData = function(identifier, tag, opts) {
      return this.getSecurityHistoricalDataWithHttpInfo(identifier, tag, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Intraday Stock Prices for Security
     * Return intraday stock prices for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.source Return intraday prices from the specified data source
     * @param {Date} opts.startDate Return intraday prices starting at the specified date
     * @param {String} opts.startTime Return intraday prices starting at the specified time on the &#x60;start_date&#x60; (timezone is UTC)
     * @param {Date} opts.endDate Return intraday prices stopping at the specified date
     * @param {String} opts.endTime Return intraday prices stopping at the specified time on the &#x60;end_date&#x60; (timezone is UTC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseSecurityIntradayPrices} and HTTP response
     */
    this.getSecurityIntradayPricesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityIntradayPrices");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'source': opts['source'],
        'start_date': opts['startDate'],
        'start_time': opts['startTime'],
        'end_date': opts['endDate'],
        'end_time': opts['endTime'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseSecurityIntradayPrices;

      return this.apiClient.callApi(
        '/securities/{identifier}/prices/intraday', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Intraday Stock Prices for Security
     * Return intraday stock prices for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.source Return intraday prices from the specified data source
     * @param {Date} opts.startDate Return intraday prices starting at the specified date
     * @param {String} opts.startTime Return intraday prices starting at the specified time on the &#x60;start_date&#x60; (timezone is UTC)
     * @param {Date} opts.endDate Return intraday prices stopping at the specified date
     * @param {String} opts.endTime Return intraday prices stopping at the specified time on the &#x60;end_date&#x60; (timezone is UTC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseSecurityIntradayPrices}
     */
    this.getSecurityIntradayPrices = function(identifier, opts) {
      return this.getSecurityIntradayPricesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lastest Dividend Record for Security
     * Returns the latest available dividend information for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DividendRecord} and HTTP response
     */
    this.getSecurityLatestDividendRecordWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityLatestDividendRecord");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DividendRecord;

      return this.apiClient.callApi(
        '/securities/{identifier}/dividends/latest', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lastest Dividend Record for Security
     * Returns the latest available dividend information for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DividendRecord}
     */
    this.getSecurityLatestDividendRecord = function(identifier) {
      return this.getSecurityLatestDividendRecordWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lastest Earnings Record for Security
     * Returns latest available earnings information for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EarningsRecord} and HTTP response
     */
    this.getSecurityLatestEarningsRecordWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityLatestEarningsRecord");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EarningsRecord;

      return this.apiClient.callApi(
        '/securities/{identifier}/earnings/latest', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lastest Earnings Record for Security
     * Returns latest available earnings information for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EarningsRecord}
     */
    this.getSecurityLatestEarningsRecord = function(identifier) {
      return this.getSecurityLatestEarningsRecordWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Realtime Stock Price for Security
     * Return the realtime stock price for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.source Return the realtime price from the specified data source
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RealtimeStockPrice} and HTTP response
     */
    this.getSecurityRealtimePriceWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityRealtimePrice");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'source': opts['source'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RealtimeStockPrice;

      return this.apiClient.callApi(
        '/securities/{identifier}/prices/realtime', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Realtime Stock Price for Security
     * Return the realtime stock price for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.source Return the realtime price from the specified data source
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RealtimeStockPrice}
     */
    this.getSecurityRealtimePrice = function(identifier, opts) {
      return this.getSecurityRealtimePriceWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Stock Price Adjustments by Security
     * Returns stock price adjustments for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return price adjustments on or after the date
     * @param {Date} opts.endDate Return price adjustments on or before the date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseSecurityStockPriceAdjustments} and HTTP response
     */
    this.getSecurityStockPriceAdjustmentsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityStockPriceAdjustments");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseSecurityStockPriceAdjustments;

      return this.apiClient.callApi(
        '/securities/{identifier}/prices/adjustments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Stock Price Adjustments by Security
     * Returns stock price adjustments for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return price adjustments on or after the date
     * @param {Date} opts.endDate Return price adjustments on or before the date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseSecurityStockPriceAdjustments}
     */
    this.getSecurityStockPriceAdjustments = function(identifier, opts) {
      return this.getSecurityStockPriceAdjustmentsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Stock Prices by Security
     * Return end-of-day stock prices for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return prices on or after the date
     * @param {Date} opts.endDate Return prices on or before the date
     * @param {module:model/String} opts.frequency Return stock prices in the given frequency (default to daily)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseSecurityStockPrices} and HTTP response
     */
    this.getSecurityStockPricesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityStockPrices");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'frequency': opts['frequency'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseSecurityStockPrices;

      return this.apiClient.callApi(
        '/securities/{identifier}/prices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Stock Prices by Security
     * Return end-of-day stock prices for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return prices on or after the date
     * @param {Date} opts.endDate Return prices on or before the date
     * @param {module:model/String} opts.frequency Return stock prices in the given frequency (default to daily)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseSecurityStockPrices}
     */
    this.getSecurityStockPrices = function(identifier, opts) {
      return this.getSecurityStockPricesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Screen Securities
     * Screen Securities using complex logic
     * @param {Object} opts Optional parameters
     * @param {module:model/SecurityScreenGroup} opts.logic The logic to screen with, consisting of operators, clauses, and nested groups.&lt;br/&gt; See &lt;a href&#x3D;\&quot;/documentation/screener_v2\&quot; target&#x3D;\&quot;_blank\&quot;&gt;screener documentation&lt;/a&gt; for details on how to construct conditions.
     * @param {String} opts.orderColumn Results returned sorted by this column
     * @param {module:model/String} opts.orderDirection Sort order to use with the order_column (default to asc)
     * @param {Boolean} opts.primaryOnly Return only primary securities (default to false)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SecurityScreenResult>} and HTTP response
     */
    this.screenSecuritiesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['logic'];


      var pathParams = {
      };
      var queryParams = {
        'order_column': opts['orderColumn'],
        'order_direction': opts['orderDirection'],
        'primary_only': opts['primaryOnly'],
        'page_size': opts['pageSize'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [SecurityScreenResult];

      return this.apiClient.callApi(
        '/securities/screen', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Screen Securities
     * Screen Securities using complex logic
     * @param {Object} opts Optional parameters
     * @param {module:model/SecurityScreenGroup} opts.logic The logic to screen with, consisting of operators, clauses, and nested groups.&lt;br/&gt; See &lt;a href&#x3D;\&quot;/documentation/screener_v2\&quot; target&#x3D;\&quot;_blank\&quot;&gt;screener documentation&lt;/a&gt; for details on how to construct conditions.
     * @param {String} opts.orderColumn Results returned sorted by this column
     * @param {module:model/String} opts.orderDirection Sort order to use with the order_column (default to asc)
     * @param {Boolean} opts.primaryOnly Return only primary securities (default to false)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SecurityScreenResult>}
     */
    this.screenSecurities = function(opts) {
      return this.screenSecuritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Securities
     * Searches for Securities matching the text &#x60;query&#x60;
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseSecuritiesSearch} and HTTP response
     */
    this.searchSecuritiesWithHttpInfo = function(query, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchSecurities");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
        'page_size': opts['pageSize'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseSecuritiesSearch;

      return this.apiClient.callApi(
        '/securities/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Securities
     * Searches for Securities matching the text &#x60;query&#x60;
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseSecuritiesSearch}
     */
    this.searchSecurities = function(query, opts) {
      return this.searchSecuritiesWithHttpInfo(query, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
