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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.MutualFundStat = factory(root.intrinio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MutualFundStat model module.
   * @module model/MutualFundStat
   * @version 0.9.1
   */

  /**
   * Constructs a new <code>MutualFundStat</code>.
   * The stats collection of a mutual fund on a given date.
   * @alias module:model/MutualFundStat
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MutualFundStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MutualFundStat} obj Optional instance to populate.
   * @return {module:model/MutualFundStat} The populated <code>MutualFundStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('net_assets')) {
        obj['net_assets'] = ApiClient.convertToType(data['net_assets'], 'Number');
      }
      if (data.hasOwnProperty('net_asset_value')) {
        obj['net_asset_value'] = ApiClient.convertToType(data['net_asset_value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The calendar date that the stats collection represents
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The dollar amount of net assets managed by the fund
   * @member {Number} net_assets
   */
  exports.prototype['net_assets'] = undefined;
  /**
   * The value of the mutual fund that is reached by deducting the fund's liabilities from the market value of all of its shares and then dividing by the number of issued shares
   * @member {Number} net_asset_value
   */
  exports.prototype['net_asset_value'] = undefined;



  return exports;
}));


