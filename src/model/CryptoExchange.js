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
    root.intrinioSDK.CryptoExchange = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CryptoExchange model module.
   * @module model/CryptoExchange
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>CryptoExchange</code>.
   * An exchange that a Crypto Currency Pair trades on. Crypto Exchange data includes name, code, book depth availability, historical data availability, snapshot availability, trade data availability, and a list of Crypto Currency Pairs that trade on it. Each exchange may provide different kinds of data (book depth, trades, etc.) about the Crypto Currency Pairs that trade on it.
   * @alias module:model/CryptoExchange
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CryptoExchange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CryptoExchange} obj Optional instance to populate.
   * @return {module:model/CryptoExchange} The populated <code>CryptoExchange</code> instance.
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
   * The Crypto Exchange name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Crypto Exchange code.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * A boolean, representing whether book depth data is provided by this exchange or not.
   * @member {Boolean} book_depth_available
   */
  exports.prototype['book_depth_available'] = undefined;
  /**
   * A boolean, representing whether historical data is provided by this exchange or not.
   * @member {Boolean} history_available
   */
  exports.prototype['history_available'] = undefined;
  /**
   * A boolean, representing whether snpashot data is provided by this exchange or not.
   * @member {Boolean} snapshot_available
   */
  exports.prototype['snapshot_available'] = undefined;
  /**
   * A boolean, representing whether trade data is provided by this exchange or not.
   * @member {Boolean} trades_available
   */
  exports.prototype['trades_available'] = undefined;



  return exports;
}));


