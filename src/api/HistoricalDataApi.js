/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.8.4
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
    define(['ApiClient', 'model/ApiResponseHistoricalData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseHistoricalData'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.HistoricalDataApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseHistoricalData);
  }
}(this, function(ApiClient, ApiResponseHistoricalData) {
  'use strict';

  /**
   * HistoricalData service.
   * @module api/HistoricalDataApi
   * @version 5.0.0
   */

  /**
   * Constructs a new HistoricalDataApi. 
   * @alias module:api/HistoricalDataApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Historical Data
     * Returns historical values for the given &#x60;tag&#x60; and the entity represented by the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.frequency Return historical data in the given frequency (default to daily)
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical date on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseHistoricalData} and HTTP response
     */
    this.getHistoricalDataWithHttpInfo = function(identifier, tag, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getHistoricalData");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getHistoricalData");
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
      var returnType = ApiResponseHistoricalData;

      return this.apiClient.callApi(
        '/historical_data/{identifier}/{tag}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical Data
     * Returns historical values for the given &#x60;tag&#x60; and the entity represented by the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.frequency Return historical data in the given frequency (default to daily)
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical date on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseHistoricalData}
     */
    this.getHistoricalData = function(identifier, tag, opts) {
      return this.getHistoricalDataWithHttpInfo(identifier, tag, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
