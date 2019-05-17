/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.6.0
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
    define(['ApiClient', 'model/ApiResponseZacksAnalystRatings', 'model/ApiResponseZacksEPSSurprises', 'model/ApiResponseZacksSalesSurprises'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseZacksAnalystRatings'), require('../model/ApiResponseZacksEPSSurprises'), require('../model/ApiResponseZacksSalesSurprises'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ZacksApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseZacksAnalystRatings, root.intrinioSDK.ApiResponseZacksEPSSurprises, root.intrinioSDK.ApiResponseZacksSalesSurprises);
  }
}(this, function(ApiClient, ApiResponseZacksAnalystRatings, ApiResponseZacksEPSSurprises, ApiResponseZacksSalesSurprises) {
  'use strict';

  /**
   * Zacks service.
   * @module api/ZacksApi
   * @version 2.3.0
   */

  /**
   * Constructs a new ZacksApi. 
   * @alias module:api/ZacksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Zacks Analyst Ratings
     * Returns buy, sell, and hold recommendations from analysts at brokerages for all companies in the Zacks universe. Zack’s storied research team aggregates and validates the ratings from professional analysts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} opts.startDate Limit ratings to those on or after this date
     * @param {String} opts.endDate Limit ratings to those on or before this date
     * @param {Number} opts.meanGreater Return only records with a mean (average) higher than this value
     * @param {Number} opts.meanLess Return only records with a mean (average) lower than this value
     * @param {Number} opts.strongBuysGreater Return only records with more than this many Strong Buy recommendations
     * @param {Number} opts.strongBuysLess Return only records with fewer than this many Strong Buy recommendations
     * @param {Number} opts.buysGreater Return only records with more than this many Buy recommendations
     * @param {Number} opts.buysLess Return only records with fewer than this many Buy recommendations
     * @param {Number} opts.holdsGreater Return only records with more than this many Hold recommendations
     * @param {Number} opts.holdsLess Return only records with fewer than this many Hold recommendations
     * @param {Number} opts.sellsGreater Return only records with more than this many Sell recommendations
     * @param {Number} opts.sellsLess Return only records with fewer than this many Sell recommendations
     * @param {Number} opts.strongSellsGreater Return only records with more than this many Strong Sell recommendations
     * @param {Number} opts.strongSellsLess Return only records with fewer than this many Strong Sell recommendations
     * @param {Number} opts.totalGreater Return only records with more than this many recommendations, regardless of type
     * @param {Number} opts.totalLess Return only records with fewer than this many recommendations, regardless of type
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseZacksAnalystRatings} and HTTP response
     */
    this.getZacksAnalystRatingsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'identifier': opts['identifier'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'mean_greater': opts['meanGreater'],
        'mean_less': opts['meanLess'],
        'strong_buys_greater': opts['strongBuysGreater'],
        'strong_buys_less': opts['strongBuysLess'],
        'buys_greater': opts['buysGreater'],
        'buys_less': opts['buysLess'],
        'holds_greater': opts['holdsGreater'],
        'holds_less': opts['holdsLess'],
        'sells_greater': opts['sellsGreater'],
        'sells_less': opts['sellsLess'],
        'strong_sells_greater': opts['strongSellsGreater'],
        'strong_sells_less': opts['strongSellsLess'],
        'total_greater': opts['totalGreater'],
        'total_less': opts['totalLess'],
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
      var returnType = ApiResponseZacksAnalystRatings;

      return this.apiClient.callApi(
        '/zacks/analyst_ratings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Zacks Analyst Ratings
     * Returns buy, sell, and hold recommendations from analysts at brokerages for all companies in the Zacks universe. Zack’s storied research team aggregates and validates the ratings from professional analysts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} opts.startDate Limit ratings to those on or after this date
     * @param {String} opts.endDate Limit ratings to those on or before this date
     * @param {Number} opts.meanGreater Return only records with a mean (average) higher than this value
     * @param {Number} opts.meanLess Return only records with a mean (average) lower than this value
     * @param {Number} opts.strongBuysGreater Return only records with more than this many Strong Buy recommendations
     * @param {Number} opts.strongBuysLess Return only records with fewer than this many Strong Buy recommendations
     * @param {Number} opts.buysGreater Return only records with more than this many Buy recommendations
     * @param {Number} opts.buysLess Return only records with fewer than this many Buy recommendations
     * @param {Number} opts.holdsGreater Return only records with more than this many Hold recommendations
     * @param {Number} opts.holdsLess Return only records with fewer than this many Hold recommendations
     * @param {Number} opts.sellsGreater Return only records with more than this many Sell recommendations
     * @param {Number} opts.sellsLess Return only records with fewer than this many Sell recommendations
     * @param {Number} opts.strongSellsGreater Return only records with more than this many Strong Sell recommendations
     * @param {Number} opts.strongSellsLess Return only records with fewer than this many Strong Sell recommendations
     * @param {Number} opts.totalGreater Return only records with more than this many recommendations, regardless of type
     * @param {Number} opts.totalLess Return only records with fewer than this many recommendations, regardless of type
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseZacksAnalystRatings}
     */
    this.getZacksAnalystRatings = function(opts) {
      return this.getZacksAnalystRatingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Zacks EPS Surprises
     * Returns Zacks eps surprise data for all Securities.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Limit EPS surprises to those on or after this date
     * @param {String} opts.endDate Limit EPS surprises to those on or before this date
     * @param {Number} opts.epsActualGreater Return only records with an actual EPS higher than this value
     * @param {Number} opts.epsActualLess Return only records with an actual EPS lower than this value
     * @param {Number} opts.epsMeanEstimateGreater Return only records with an EPS mean estimate greater than this value
     * @param {Number} opts.epsMeanEstimateLess Return only records with an EPS mean estimate lower than this value
     * @param {Number} opts.epsAmountDiffGreater Return only records with an EPS amount difference greater than this value
     * @param {Number} opts.epsAmountDiffLess Return only records with an EPS amount difference less than this value
     * @param {Number} opts.epsPercentDiffGreater Return only records with an EPS percent difference greater than this value
     * @param {Number} opts.epsPercentDiffLess Return only records with an EPS percent difference less than this value
     * @param {Number} opts.epsCountEstimateGreater Return only records with an EPS count estimate greater than this value
     * @param {Number} opts.epsCountEstimateLess Return only records with an EPS count estimate less than this value
     * @param {Number} opts.epsStdDevEstimateGreater Return only records with an EPS standard deviation greater than this value
     * @param {Number} opts.epsStdDevEstimateLess Return only records with an EPS standard deviation less than this value
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseZacksEPSSurprises} and HTTP response
     */
    this.getZacksEpsSurprisesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'eps_actual_greater': opts['epsActualGreater'],
        'eps_actual_less': opts['epsActualLess'],
        'eps_mean_estimate_greater': opts['epsMeanEstimateGreater'],
        'eps_mean_estimate_less': opts['epsMeanEstimateLess'],
        'eps_amount_diff_greater': opts['epsAmountDiffGreater'],
        'eps_amount_diff_less': opts['epsAmountDiffLess'],
        'eps_percent_diff_greater': opts['epsPercentDiffGreater'],
        'eps_percent_diff_less': opts['epsPercentDiffLess'],
        'eps_count_estimate_greater': opts['epsCountEstimateGreater'],
        'eps_count_estimate_less': opts['epsCountEstimateLess'],
        'eps_std_dev_estimate_greater': opts['epsStdDevEstimateGreater'],
        'eps_std_dev_estimate_less': opts['epsStdDevEstimateLess'],
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
      var returnType = ApiResponseZacksEPSSurprises;

      return this.apiClient.callApi(
        '/zacks/eps_surprises', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Zacks EPS Surprises
     * Returns Zacks eps surprise data for all Securities.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Limit EPS surprises to those on or after this date
     * @param {String} opts.endDate Limit EPS surprises to those on or before this date
     * @param {Number} opts.epsActualGreater Return only records with an actual EPS higher than this value
     * @param {Number} opts.epsActualLess Return only records with an actual EPS lower than this value
     * @param {Number} opts.epsMeanEstimateGreater Return only records with an EPS mean estimate greater than this value
     * @param {Number} opts.epsMeanEstimateLess Return only records with an EPS mean estimate lower than this value
     * @param {Number} opts.epsAmountDiffGreater Return only records with an EPS amount difference greater than this value
     * @param {Number} opts.epsAmountDiffLess Return only records with an EPS amount difference less than this value
     * @param {Number} opts.epsPercentDiffGreater Return only records with an EPS percent difference greater than this value
     * @param {Number} opts.epsPercentDiffLess Return only records with an EPS percent difference less than this value
     * @param {Number} opts.epsCountEstimateGreater Return only records with an EPS count estimate greater than this value
     * @param {Number} opts.epsCountEstimateLess Return only records with an EPS count estimate less than this value
     * @param {Number} opts.epsStdDevEstimateGreater Return only records with an EPS standard deviation greater than this value
     * @param {Number} opts.epsStdDevEstimateLess Return only records with an EPS standard deviation less than this value
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseZacksEPSSurprises}
     */
    this.getZacksEpsSurprises = function(opts) {
      return this.getZacksEpsSurprisesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Zacks Sales Surprises
     * Returns Zacks sales surprise data for all Securities.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Limit sales surprises to those on or after this date
     * @param {String} opts.endDate Limit sales surprises to those on or before this date
     * @param {Number} opts.salesActualGreater Return only records with an actual sales higher than this value
     * @param {Number} opts.salesActualLess Return only records with an actual sales lower than this value
     * @param {Number} opts.salesMeanEstimateGreater Return only records with a sales mean estimate greater than this value
     * @param {Number} opts.salesMeanEstimateLess Return only records with a sales mean estimate lower than this value
     * @param {Number} opts.salesAmountDiffGreater Return only records with a sales amount difference greater than this value
     * @param {Number} opts.salesAmountDiffLess Return only records with a sales amount difference less than this value
     * @param {Number} opts.salesPercentDiffGreater Return only records with a sales percent difference greater than this value
     * @param {Number} opts.salesPercentDiffLess Return only records with a sales percent difference less than this value
     * @param {Number} opts.salesCountEstimateGreater Return only records with a sales count estimate greater than this value
     * @param {Number} opts.salesCountEstimateLess Return only records with a sales count estimate less than this value
     * @param {Number} opts.salesStdDevEstimateGreater Return only records with a sales standard deviation greater than this value
     * @param {Number} opts.salesStdDevEstimateLess Return only records with a sales standard deviation less than this value
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseZacksSalesSurprises} and HTTP response
     */
    this.getZacksSalesSurprisesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'sales_actual_greater': opts['salesActualGreater'],
        'sales_actual_less': opts['salesActualLess'],
        'sales_mean_estimate_greater': opts['salesMeanEstimateGreater'],
        'sales_mean_estimate_less': opts['salesMeanEstimateLess'],
        'sales_amount_diff_greater': opts['salesAmountDiffGreater'],
        'sales_amount_diff_less': opts['salesAmountDiffLess'],
        'sales_percent_diff_greater': opts['salesPercentDiffGreater'],
        'sales_percent_diff_less': opts['salesPercentDiffLess'],
        'sales_count_estimate_greater': opts['salesCountEstimateGreater'],
        'sales_count_estimate_less': opts['salesCountEstimateLess'],
        'sales_std_dev_estimate_greater': opts['salesStdDevEstimateGreater'],
        'sales_std_dev_estimate_less': opts['salesStdDevEstimateLess'],
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
      var returnType = ApiResponseZacksSalesSurprises;

      return this.apiClient.callApi(
        '/zacks/sales_surprises', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Zacks Sales Surprises
     * Returns Zacks sales surprise data for all Securities.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Limit sales surprises to those on or after this date
     * @param {String} opts.endDate Limit sales surprises to those on or before this date
     * @param {Number} opts.salesActualGreater Return only records with an actual sales higher than this value
     * @param {Number} opts.salesActualLess Return only records with an actual sales lower than this value
     * @param {Number} opts.salesMeanEstimateGreater Return only records with a sales mean estimate greater than this value
     * @param {Number} opts.salesMeanEstimateLess Return only records with a sales mean estimate lower than this value
     * @param {Number} opts.salesAmountDiffGreater Return only records with a sales amount difference greater than this value
     * @param {Number} opts.salesAmountDiffLess Return only records with a sales amount difference less than this value
     * @param {Number} opts.salesPercentDiffGreater Return only records with a sales percent difference greater than this value
     * @param {Number} opts.salesPercentDiffLess Return only records with a sales percent difference less than this value
     * @param {Number} opts.salesCountEstimateGreater Return only records with a sales count estimate greater than this value
     * @param {Number} opts.salesCountEstimateLess Return only records with a sales count estimate less than this value
     * @param {Number} opts.salesStdDevEstimateGreater Return only records with a sales standard deviation greater than this value
     * @param {Number} opts.salesStdDevEstimateLess Return only records with a sales standard deviation less than this value
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseZacksSalesSurprises}
     */
    this.getZacksSalesSurprises = function(opts) {
      return this.getZacksSalesSurprisesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));