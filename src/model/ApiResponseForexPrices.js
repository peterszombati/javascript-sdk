/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.8.0
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
    define(['ApiClient', 'model/ForexPair', 'model/ForexPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ForexPair'), require('./ForexPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseForexPrices = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ForexPair, root.intrinioSDK.ForexPrice);
  }
}(this, function(ApiClient, ForexPair, ForexPrice) {
  'use strict';




  /**
   * The ApiResponseForexPrices model module.
   * @module model/ApiResponseForexPrices
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>ApiResponseForexPrices</code>.
   * @alias module:model/ApiResponseForexPrices
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseForexPrices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseForexPrices} obj Optional instance to populate.
   * @return {module:model/ApiResponseForexPrices} The populated <code>ApiResponseForexPrices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], [ForexPrice]);
      }
      if (data.hasOwnProperty('pair')) {
        obj['pair'] = ForexPair.constructFromObject(data['pair']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ForexPrice>} prices
   */
  exports.prototype['prices'] = undefined;
  /**
   * The Forex currency pair for which prices were requested
   * @member {module:model/ForexPair} pair
   */
  exports.prototype['pair'] = undefined;
  /**
   * The token required to request the next page of the data
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


