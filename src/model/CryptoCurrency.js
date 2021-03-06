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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.CryptoCurrency = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CryptoCurrency model module.
   * @module model/CryptoCurrency
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>CryptoCurrency</code>.
   * A Crypto Currency is a digital or virtual currency that uses cryptography for security. They trade as Crypto Currency Pairs with fiat currencies (USD) or other Crypto Currences (ETH) on Crypto Exchanges, similar to Forex. Included are the name, code, symbol, and the first and last dates for which price data is available for the given Crypto Currency.
   * @alias module:model/CryptoCurrency
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CryptoCurrency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CryptoCurrency} obj Optional instance to populate.
   * @return {module:model/CryptoCurrency} The populated <code>CryptoCurrency</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('first_price_date')) {
        obj['first_price_date'] = ApiClient.convertToType(data['first_price_date'], 'String');
      }
      if (data.hasOwnProperty('last_price_date')) {
        obj['last_price_date'] = ApiClient.convertToType(data['last_price_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * The common name of the crypto currency.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A code representing the crypto currency.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The symbol of the Crypto Currency.
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * The earliest date that daily historical pricing is available for.
   * @member {String} first_price_date
   */
  exports.prototype['first_price_date'] = undefined;
  /**
   * The most recent date that daily historical pricing is available for.
   * @member {String} last_price_date
   */
  exports.prototype['last_price_date'] = undefined;



  return exports;
}));


