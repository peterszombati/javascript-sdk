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
    root.intrinioSDK.CryptoStat = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CryptoStat model module.
   * @module model/CryptoStat
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>CryptoStat</code>.
   * Marketwide stats for a Crypto Currency including market cap, available supply, total supply, and max supply
   * @alias module:model/CryptoStat
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CryptoStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CryptoStat} obj Optional instance to populate.
   * @return {module:model/CryptoStat} The populated <code>CryptoStat</code> instance.
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
      if (data.hasOwnProperty('market_cap_usd')) {
        obj['market_cap_usd'] = ApiClient.convertToType(data['market_cap_usd'], 'Number');
      }
      if (data.hasOwnProperty('available_supply')) {
        obj['available_supply'] = ApiClient.convertToType(data['available_supply'], 'Number');
      }
      if (data.hasOwnProperty('total_supply')) {
        obj['total_supply'] = ApiClient.convertToType(data['total_supply'], 'Number');
      }
      if (data.hasOwnProperty('max_supply')) {
        obj['max_supply'] = ApiClient.convertToType(data['max_supply'], 'Number');
      }
      if (data.hasOwnProperty('last_updated')) {
        obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'String');
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
   * The market cap of the Crypto Currency in USD.
   * @member {Number} market_cap_usd
   */
  exports.prototype['market_cap_usd'] = undefined;
  /**
   * The available supply of the Crypto Currency.
   * @member {Number} available_supply
   */
  exports.prototype['available_supply'] = undefined;
  /**
   * The total supply of the Crypto Currency.
   * @member {Number} total_supply
   */
  exports.prototype['total_supply'] = undefined;
  /**
   * The maxmium supply of coins available to mine.
   * @member {Number} max_supply
   */
  exports.prototype['max_supply'] = undefined;
  /**
   * UTC timestamp of when the data was last updated.
   * @member {String} last_updated
   */
  exports.prototype['last_updated'] = undefined;



  return exports;
}));


