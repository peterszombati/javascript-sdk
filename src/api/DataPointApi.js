/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Marketplace, we offer a wide selection of financial data feeds sourced by our own proprietary processes as well as from many data vendors. The primary application of the Intrinio API is for use in third-party applications and integrations or for end-users utilizing the Excel add-in and Google Sheets add-on. The Intrinio API uses HTTPS verbs and a RESTful endpoint structure, which makes it easy to request data from Intrinio. Responses are delivered in JSON format. If you need additional help in using the API, go to our home page (https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.0.1
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
    define(['ApiClient', 'model/DataPointNumber', 'model/DataPointText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataPointNumber'), require('../model/DataPointText'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.DataPointApi = factory(root.intrinio.ApiClient, root.intrinio.DataPointNumber, root.intrinio.DataPointText);
  }
}(this, function(ApiClient, DataPointNumber, DataPointText) {
  'use strict';

  /**
   * DataPoint service.
   * @module api/DataPointApi
   * @version 0.9.1
   */

  /**
   * Constructs a new DataPointApi. 
   * @alias module:api/DataPointApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a Data Point (Number)
     * Returns a numeric value for the given &#x60;item&#x60; and the entity with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataPointNumber} and HTTP response
     */
    this.getDataPointNumberWithHttpInfo = function(identifier, item) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getDataPointNumber");
      }

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling getDataPointNumber");
      }


      var pathParams = {
        'identifier': identifier,
        'item': item
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataPointNumber;

      return this.apiClient.callApi(
        '/data_point/{identifier}/{item}/number', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Data Point (Number)
     * Returns a numeric value for the given &#x60;item&#x60; and the entity with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DataPointNumber}
     */
    this.getDataPointNumber = function(identifier, item) {
      return this.getDataPointNumberWithHttpInfo(identifier, item)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Data Point (Text)
     * Returns a text value for the given &#x60;item&#x60; and the entity with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataPointText} and HTTP response
     */
    this.getDataPointTextWithHttpInfo = function(identifier, item) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getDataPointText");
      }

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling getDataPointText");
      }


      var pathParams = {
        'identifier': identifier,
        'item': item
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataPointText;

      return this.apiClient.callApi(
        '/data_point/{identifier}/{item}/text', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Data Point (Text)
     * Returns a text value for the given &#x60;item&#x60; and the entity with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DataPointText}
     */
    this.getDataPointText = function(identifier, item) {
      return this.getDataPointTextWithHttpInfo(identifier, item)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
