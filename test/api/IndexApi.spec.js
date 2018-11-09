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
    instance = new intrinio.IndexApi();
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

  describe('IndexApi', function() {
    describe('getAllEconomicIndices', function() {
      it('should call getAllEconomicIndices successfully', function(done) {
        //uncomment below and update the code to test getAllEconomicIndices
        //instance.getAllEconomicIndices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllSicIndices', function() {
      it('should call getAllSicIndices successfully', function(done) {
        //uncomment below and update the code to test getAllSicIndices
        //instance.getAllSicIndices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllStockMarketIndices', function() {
      it('should call getAllStockMarketIndices successfully', function(done) {
        //uncomment below and update the code to test getAllStockMarketIndices
        //instance.getAllStockMarketIndices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEconomicIndexById', function() {
      it('should call getEconomicIndexById successfully', function(done) {
        //uncomment below and update the code to test getEconomicIndexById
        //instance.getEconomicIndexById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEconomicIndexDataPointNumber', function() {
      it('should call getEconomicIndexDataPointNumber successfully', function(done) {
        //uncomment below and update the code to test getEconomicIndexDataPointNumber
        //instance.getEconomicIndexDataPointNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEconomicIndexDataPointText', function() {
      it('should call getEconomicIndexDataPointText successfully', function(done) {
        //uncomment below and update the code to test getEconomicIndexDataPointText
        //instance.getEconomicIndexDataPointText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEconomicIndexHistoricalData', function() {
      it('should call getEconomicIndexHistoricalData successfully', function(done) {
        //uncomment below and update the code to test getEconomicIndexHistoricalData
        //instance.getEconomicIndexHistoricalData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSicIndexById', function() {
      it('should call getSicIndexById successfully', function(done) {
        //uncomment below and update the code to test getSicIndexById
        //instance.getSicIndexById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSicIndexDataPointNumber', function() {
      it('should call getSicIndexDataPointNumber successfully', function(done) {
        //uncomment below and update the code to test getSicIndexDataPointNumber
        //instance.getSicIndexDataPointNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSicIndexDataPointText', function() {
      it('should call getSicIndexDataPointText successfully', function(done) {
        //uncomment below and update the code to test getSicIndexDataPointText
        //instance.getSicIndexDataPointText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSicIndexHistoricalData', function() {
      it('should call getSicIndexHistoricalData successfully', function(done) {
        //uncomment below and update the code to test getSicIndexHistoricalData
        //instance.getSicIndexHistoricalData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockMarketIndexById', function() {
      it('should call getStockMarketIndexById successfully', function(done) {
        //uncomment below and update the code to test getStockMarketIndexById
        //instance.getStockMarketIndexById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockMarketIndexDataPointNumber', function() {
      it('should call getStockMarketIndexDataPointNumber successfully', function(done) {
        //uncomment below and update the code to test getStockMarketIndexDataPointNumber
        //instance.getStockMarketIndexDataPointNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockMarketIndexDataPointText', function() {
      it('should call getStockMarketIndexDataPointText successfully', function(done) {
        //uncomment below and update the code to test getStockMarketIndexDataPointText
        //instance.getStockMarketIndexDataPointText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockMarketIndexHistoricalData', function() {
      it('should call getStockMarketIndexHistoricalData successfully', function(done) {
        //uncomment below and update the code to test getStockMarketIndexHistoricalData
        //instance.getStockMarketIndexHistoricalData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchEconomicIndices', function() {
      it('should call searchEconomicIndices successfully', function(done) {
        //uncomment below and update the code to test searchEconomicIndices
        //instance.searchEconomicIndices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchSicIndices', function() {
      it('should call searchSicIndices successfully', function(done) {
        //uncomment below and update the code to test searchSicIndices
        //instance.searchSicIndices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchStockMarketsIndices', function() {
      it('should call searchStockMarketsIndices successfully', function(done) {
        //uncomment below and update the code to test searchStockMarketsIndices
        //instance.searchStockMarketsIndices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
