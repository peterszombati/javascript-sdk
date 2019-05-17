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
    define(['ApiClient', 'model/CryptoCurrency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CryptoCurrency'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseCryptoCurrencies = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CryptoCurrency);
  }
}(this, function(ApiClient, CryptoCurrency) {
  'use strict';




  /**
   * The ApiResponseCryptoCurrencies model module.
   * @module model/ApiResponseCryptoCurrencies
   * @version 2.3.0
   */

  /**
   * Constructs a new <code>ApiResponseCryptoCurrencies</code>.
   * @alias module:model/ApiResponseCryptoCurrencies
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiResponseCryptoCurrencies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseCryptoCurrencies} obj Optional instance to populate.
   * @return {module:model/ApiResponseCryptoCurrencies} The populated <code>ApiResponseCryptoCurrencies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencies')) {
        obj['currencies'] = ApiClient.convertToType(data['currencies'], [CryptoCurrency]);
      }
    }
    return obj;
  }

  /**
   * A list of Crypto Currencies for the given Crypto Exchange sorted by alphabetically by symbol.
   * @member {Array.<module:model/CryptoCurrency>} currencies
   */
  exports.prototype['currencies'] = undefined;



  return exports;
}));

