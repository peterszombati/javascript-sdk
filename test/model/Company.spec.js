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
    instance = new intrinio.Company();
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

  describe('Company', function() {
    it('should create an instance of Company', function() {
      // uncomment below and update the code to test Company
      //var instane = new intrinio.Company();
      //expect(instance).to.be.a(intrinio.Company);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property lei (base name: "lei")', function() {
      // uncomment below and update the code to test the property lei
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property legalName (base name: "legal_name")', function() {
      // uncomment below and update the code to test the property legalName
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property stockExchange (base name: "stock_exchange")', function() {
      // uncomment below and update the code to test the property stockExchange
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property sic (base name: "sic")', function() {
      // uncomment below and update the code to test the property sic
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property ceo (base name: "ceo")', function() {
      // uncomment below and update the code to test the property ceo
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property companyUrl (base name: "company_url")', function() {
      // uncomment below and update the code to test the property companyUrl
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property businessAddress (base name: "business_address")', function() {
      // uncomment below and update the code to test the property businessAddress
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property mailingAddress (base name: "mailing_address")', function() {
      // uncomment below and update the code to test the property mailingAddress
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property businessPhoneNo (base name: "business_phone_no")', function() {
      // uncomment below and update the code to test the property businessPhoneNo
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property hqAddress1 (base name: "hq_address1")', function() {
      // uncomment below and update the code to test the property hqAddress1
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property hqAddress2 (base name: "hq_address2")', function() {
      // uncomment below and update the code to test the property hqAddress2
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property hqAddressCity (base name: "hq_address_city")', function() {
      // uncomment below and update the code to test the property hqAddressCity
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property hqAddressPostalCode (base name: "hq_address_postal_code")', function() {
      // uncomment below and update the code to test the property hqAddressPostalCode
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property entityLegalForm (base name: "entity_legal_form")', function() {
      // uncomment below and update the code to test the property entityLegalForm
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property cik (base name: "cik")', function() {
      // uncomment below and update the code to test the property cik
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property latestFilingDate (base name: "latest_filing_date")', function() {
      // uncomment below and update the code to test the property latestFilingDate
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property hqState (base name: "hq_state")', function() {
      // uncomment below and update the code to test the property hqState
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property hqCountry (base name: "hq_country")', function() {
      // uncomment below and update the code to test the property hqCountry
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property incState (base name: "inc_state")', function() {
      // uncomment below and update the code to test the property incState
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property incCountry (base name: "inc_country")', function() {
      // uncomment below and update the code to test the property incCountry
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property employees (base name: "employees")', function() {
      // uncomment below and update the code to test the property employees
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property entityStatus (base name: "entity_status")', function() {
      // uncomment below and update the code to test the property entityStatus
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property sector (base name: "sector")', function() {
      // uncomment below and update the code to test the property sector
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property industryCategory (base name: "industry_category")', function() {
      // uncomment below and update the code to test the property industryCategory
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property industryGroup (base name: "industry_group")', function() {
      // uncomment below and update the code to test the property industryGroup
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

    it('should have the property standardizedActive (base name: "standardized_active")', function() {
      // uncomment below and update the code to test the property standardizedActive
      //var instane = new intrinio.Company();
      //expect(instance).to.be();
    });

  });

}));
