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
    instance = new intrinio.EconomicIndex();
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

  describe('EconomicIndex', function() {
    it('should create an instance of EconomicIndex', function() {
      // uncomment below and update the code to test EconomicIndex
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be.a(intrinio.EconomicIndex);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property continent (base name: "continent")', function() {
      // uncomment below and update the code to test the property continent
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property updateFrequency (base name: "update_frequency")', function() {
      // uncomment below and update the code to test the property updateFrequency
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "last_updated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property observationStart (base name: "observation_start")', function() {
      // uncomment below and update the code to test the property observationStart
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property observationEnd (base name: "observation_end")', function() {
      // uncomment below and update the code to test the property observationEnd
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property seasonalAdjustment (base name: "seasonal_adjustment")', function() {
      // uncomment below and update the code to test the property seasonalAdjustment
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instane = new intrinio.EconomicIndex();
      //expect(instance).to.be();
    });

  });

}));
