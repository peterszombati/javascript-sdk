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
    root.intrinioSDK.CryptoPair = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CryptoPair model module.
   * @module model/CryptoPair
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>CryptoPair</code>.
   * A Crypto Currency Pair is a currency pair traded on a Crypto Exchange and includes at least one Crypto Currency (i.e. BTCUSD, BTCETH, etc.). Details of a Crypto Currency Pair include name, code, the Crypto Currencies in the pair, and the Crypto Exchanges that the Crypto Currency Pair trades on. Included are also details about the data available for this Crypto Currency Pair such as the first and last date that price is available, book depth availability, history availability, snapshot availability, and trade data availability.
   * @alias module:model/CryptoPair
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CryptoPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CryptoPair} obj Optional instance to populate.
   * @return {module:model/CryptoPair} The populated <code>CryptoPair</code> instance.
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
      if (data.hasOwnProperty('first_price_date')) {
        obj['first_price_date'] = ApiClient.convertToType(data['first_price_date'], 'String');
      }
      if (data.hasOwnProperty('last_price_date')) {
        obj['last_price_date'] = ApiClient.convertToType(data['last_price_date'], 'String');
      }
      if (data.hasOwnProperty('book_depth_available')) {
        obj['book_depth_available'] = ApiClient.convertToType(data['book_depth_available'], 'Boolean');
      }
      if (data.hasOwnProperty('history_available')) {
        obj['history_available'] = ApiClient.convertToType(data['history_available'], 'Boolean');
      }
      if (data.hasOwnProperty('snapshot_available')) {
        obj['snapshot_available'] = ApiClient.convertToType(data['snapshot_available'], 'Boolean');
      }
      if (data.hasOwnProperty('trades_available')) {
        obj['trades_available'] = ApiClient.convertToType(data['trades_available'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The Crypto Currency Pair name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Crypto Currency Pair code.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
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
  /**
   * A boolean, representing whether this pair has book depth data available or not.
   * @member {Boolean} book_depth_available
   */
  exports.prototype['book_depth_available'] = undefined;
  /**
   * A boolean, representing whether this pair has historical price data available or not.
   * @member {Boolean} history_available
   */
  exports.prototype['history_available'] = undefined;
  /**
   * A boolean, representing whether this pair has snapshot data available or not.
   * @member {Boolean} snapshot_available
   */
  exports.prototype['snapshot_available'] = undefined;
  /**
   * A boolean, representing whether this pair has trade data available or not.
   * @member {Boolean} trades_available
   */
  exports.prototype['trades_available'] = undefined;



  return exports;
}));


