/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Marketplace, we offer a wide selection of financial data feeds sourced by our own proprietary processes as well as from many data vendors. The primary application of the Intrinio API is for use in third-party applications and integrations or for end-users utilizing the Excel add-in and Google Sheets add-on. The Intrinio API uses HTTPS verbs and a RESTful endpoint structure, which makes it easy to request data from Intrinio. Responses are delivered in JSON format. If you need additional help in using the API, go to our home page (https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.0.2
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.intrinio);
  }
}(this, function(expect, intrinio) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new intrinio.FilingSummary();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FilingSummary', function() {
    it('should create an instance of FilingSummary', function() {
      // uncomment below and update the code to test FilingSummary
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be.a(intrinio.FilingSummary);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property filingDate (base name: "filing_date")', function() {
      // uncomment below and update the code to test the property filingDate
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property acceptedDate (base name: "accepted_date")', function() {
      // uncomment below and update the code to test the property acceptedDate
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property periodEndDate (base name: "period_end_date")', function() {
      // uncomment below and update the code to test the property periodEndDate
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property reportType (base name: "report_type")', function() {
      // uncomment below and update the code to test the property reportType
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property secUniqueId (base name: "sec_unique_id")', function() {
      // uncomment below and update the code to test the property secUniqueId
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property filingUrl (base name: "filing_url")', function() {
      // uncomment below and update the code to test the property filingUrl
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property reportUrl (base name: "report_url")', function() {
      // uncomment below and update the code to test the property reportUrl
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

    it('should have the property instanceUrl (base name: "instance_url")', function() {
      // uncomment below and update the code to test the property instanceUrl
      //var instane = new intrinio.FilingSummary();
      //expect(instance).to.be();
    });

  });

}));
