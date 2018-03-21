/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Marketplace, we offer a wide selection of financial data feeds sourced by our own proprietary processes as well as from many data vendors. The primary application of the Intrinio API is for use in third-party applications and integrations or for end-users utilizing the Excel add-in and Google Sheets add-on. The Intrinio API uses HTTPS verbs and a RESTful endpoint structure, which makes it easy to request data from Intrinio. Responses are delivered in JSON format. If you need additional help in using the API, go to our home page (https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.0.0
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
    define(['invoker/ApiClient', 'invoker/model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.StockPrice = factory(root.intrinio.ApiClient, root.intrinio.SecuritySummary);
  }
}(this, function(ApiClient, SecuritySummary) {
  'use strict';




  /**
   * The StockPrice model module.
   * @module invoker/model/StockPrice
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>StockPrice</code>.
   * The stock price of a security on a given date.
   * @alias module:invoker/model/StockPrice
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>StockPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/StockPrice} obj Optional instance to populate.
   * @return {module:invoker/model/StockPrice} The populated <code>StockPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('intraperiod')) {
        obj['intraperiod'] = ApiClient.convertToType(data['intraperiod'], 'Boolean');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
      if (data.hasOwnProperty('ex_dividend')) {
        obj['ex_dividend'] = ApiClient.convertToType(data['ex_dividend'], 'Number');
      }
      if (data.hasOwnProperty('split_ratio')) {
        obj['split_ratio'] = ApiClient.convertToType(data['split_ratio'], 'Number');
      }
      if (data.hasOwnProperty('adj_open')) {
        obj['adj_open'] = ApiClient.convertToType(data['adj_open'], 'Number');
      }
      if (data.hasOwnProperty('adj_high')) {
        obj['adj_high'] = ApiClient.convertToType(data['adj_high'], 'Number');
      }
      if (data.hasOwnProperty('adj_low')) {
        obj['adj_low'] = ApiClient.convertToType(data['adj_low'], 'Number');
      }
      if (data.hasOwnProperty('adj_close')) {
        obj['adj_close'] = ApiClient.convertToType(data['adj_close'], 'Number');
      }
      if (data.hasOwnProperty('adj_volume')) {
        obj['adj_volume'] = ApiClient.convertToType(data['adj_volume'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Security of the stock price
   * @member {module:invoker/model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;
  /**
   * The calendar date that the stock price represents. For non-daily stock prices, this represents the last day in the period (end of the week, month, quarter, year, etc)
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * If true, the stock price represents an unfinished period (be it day, week, quarter, month, or year), meaning that the close price is the latest price available, not the official close price for the period
   * @member {Boolean} intraperiod
   */
  exports.prototype['intraperiod'] = undefined;
  /**
   * The type of period that the stock price represents
   * @member {module:invoker/model/StockPrice.FrequencyEnum} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * The price at the beginning of the period
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The highest price over the span of the period
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The lowest price over the span of the period
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The price at the end of the period
   * @member {Number} close
   */
  exports.prototype['close'] = undefined;
  /**
   * The number of shares exchanged during the period
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The face (or dollar) value of any dividends awarded during the period
   * @member {Number} ex_dividend
   */
  exports.prototype['ex_dividend'] = undefined;
  /**
   * The combined ratio of all splits during the period. A 2 for 1 split would yield a split ratio of 0.5.
   * @member {Number} split_ratio
   */
  exports.prototype['split_ratio'] = undefined;
  /**
   * The price at the beginning of the period, adjusted for splits and dividends
   * @member {Number} adj_open
   */
  exports.prototype['adj_open'] = undefined;
  /**
   * The highest price over the span of the period, adjusted for splits and dividends
   * @member {Number} adj_high
   */
  exports.prototype['adj_high'] = undefined;
  /**
   * The lowest price over the span of the period, adjusted for splits and dividends
   * @member {Number} adj_low
   */
  exports.prototype['adj_low'] = undefined;
  /**
   * The price at the end of the period, adjusted for splits and dividends
   * @member {Number} adj_close
   */
  exports.prototype['adj_close'] = undefined;
  /**
   * The number of shares exchanged during the period, adjusted for splits and dividends
   * @member {Number} adj_volume
   */
  exports.prototype['adj_volume'] = undefined;


  /**
   * Allowed values for the <code>frequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyEnum = {
    /**
     * value: "daily"
     * @const
     */
    "daily": "daily",
    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",
    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly",
    /**
     * value: "quarterly"
     * @const
     */
    "quarterly": "quarterly",
    /**
     * value: "yearly"
     * @const
     */
    "yearly": "yearly"  };


  return exports;
}));


