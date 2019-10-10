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
    define(['ApiClient', 'model/RealtimeStockPriceSecurity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RealtimeStockPriceSecurity'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.RealtimeStockPrice = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.RealtimeStockPriceSecurity);
  }
}(this, function(ApiClient, RealtimeStockPriceSecurity) {
  'use strict';




  /**
   * The RealtimeStockPrice model module.
   * @module model/RealtimeStockPrice
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>RealtimeStockPrice</code>.
   * The realtime stock price of a security.
   * @alias module:model/RealtimeStockPrice
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>RealtimeStockPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RealtimeStockPrice} obj Optional instance to populate.
   * @return {module:model/RealtimeStockPrice} The populated <code>RealtimeStockPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('last_price')) {
        obj['last_price'] = ApiClient.convertToType(data['last_price'], 'Number');
      }
      if (data.hasOwnProperty('last_time')) {
        obj['last_time'] = ApiClient.convertToType(data['last_time'], 'Date');
      }
      if (data.hasOwnProperty('bid_price')) {
        obj['bid_price'] = ApiClient.convertToType(data['bid_price'], 'Number');
      }
      if (data.hasOwnProperty('bid_size')) {
        obj['bid_size'] = ApiClient.convertToType(data['bid_size'], 'Number');
      }
      if (data.hasOwnProperty('ask_price')) {
        obj['ask_price'] = ApiClient.convertToType(data['ask_price'], 'Number');
      }
      if (data.hasOwnProperty('ask_size')) {
        obj['ask_size'] = ApiClient.convertToType(data['ask_size'], 'Number');
      }
      if (data.hasOwnProperty('open_price')) {
        obj['open_price'] = ApiClient.convertToType(data['open_price'], 'Number');
      }
      if (data.hasOwnProperty('high_price')) {
        obj['high_price'] = ApiClient.convertToType(data['high_price'], 'Number');
      }
      if (data.hasOwnProperty('low_price')) {
        obj['low_price'] = ApiClient.convertToType(data['low_price'], 'Number');
      }
      if (data.hasOwnProperty('exchange_volume')) {
        obj['exchange_volume'] = ApiClient.convertToType(data['exchange_volume'], 'Number');
      }
      if (data.hasOwnProperty('market_volume')) {
        obj['market_volume'] = ApiClient.convertToType(data['market_volume'], 'Number');
      }
      if (data.hasOwnProperty('updated_on')) {
        obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = RealtimeStockPriceSecurity.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * The price of the last trade.
   * @member {Number} last_price
   */
  exports.prototype['last_price'] = undefined;
  /**
   * The date and time when the last trade occurred.
   * @member {Date} last_time
   */
  exports.prototype['last_time'] = undefined;
  /**
   * The price of the top bid order.
   * @member {Number} bid_price
   */
  exports.prototype['bid_price'] = undefined;
  /**
   * The size of the top bid order.
   * @member {Number} bid_size
   */
  exports.prototype['bid_size'] = undefined;
  /**
   * The price of the top ask order.
   * @member {Number} ask_price
   */
  exports.prototype['ask_price'] = undefined;
  /**
   * The size of the top ask order.
   * @member {Number} ask_size
   */
  exports.prototype['ask_size'] = undefined;
  /**
   * The price at the open of the trading day.
   * @member {Number} open_price
   */
  exports.prototype['open_price'] = undefined;
  /**
   * The high price for the trading day.
   * @member {Number} high_price
   */
  exports.prototype['high_price'] = undefined;
  /**
   * The low price for the trading day.
   * @member {Number} low_price
   */
  exports.prototype['low_price'] = undefined;
  /**
   * The number of shares exchanged during the trading day on the exchange.
   * @member {Number} exchange_volume
   */
  exports.prototype['exchange_volume'] = undefined;
  /**
   * The number of shares exchanged during the trading day for the whole market.
   * @member {Number} market_volume
   */
  exports.prototype['market_volume'] = undefined;
  /**
   * The date and time when the data was last updated.
   * @member {Date} updated_on
   */
  exports.prototype['updated_on'] = undefined;
  /**
   * The source of the data.
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {module:model/RealtimeStockPriceSecurity} security
   */
  exports.prototype['security'] = undefined;



  return exports;
}));


