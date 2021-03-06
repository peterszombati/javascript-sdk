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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.intrinioSDK);
  }
}(this, function(expect, intrinioSDK) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new intrinioSDK.CryptoApi();
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

  describe('CryptoApi', function() {
    describe('getCryptoBookAsks', function() {
      it('should call getCryptoBookAsks successfully', function(done) {
        //uncomment below and update the code to test getCryptoBookAsks
        //instance.getCryptoBookAsks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoBookBids', function() {
      it('should call getCryptoBookBids successfully', function(done) {
        //uncomment below and update the code to test getCryptoBookBids
        //instance.getCryptoBookBids(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoBookSummary', function() {
      it('should call getCryptoBookSummary successfully', function(done) {
        //uncomment below and update the code to test getCryptoBookSummary
        //instance.getCryptoBookSummary(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoCurrencies', function() {
      it('should call getCryptoCurrencies successfully', function(done) {
        //uncomment below and update the code to test getCryptoCurrencies
        //instance.getCryptoCurrencies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoExchanges', function() {
      it('should call getCryptoExchanges successfully', function(done) {
        //uncomment below and update the code to test getCryptoExchanges
        //instance.getCryptoExchanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPairs', function() {
      it('should call getCryptoPairs successfully', function(done) {
        //uncomment below and update the code to test getCryptoPairs
        //instance.getCryptoPairs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsAdi', function() {
      it('should call getCryptoPriceTechnicalsAdi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsAdi
        //instance.getCryptoPriceTechnicalsAdi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsAdtv', function() {
      it('should call getCryptoPriceTechnicalsAdtv successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsAdtv
        //instance.getCryptoPriceTechnicalsAdtv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsAdx', function() {
      it('should call getCryptoPriceTechnicalsAdx successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsAdx
        //instance.getCryptoPriceTechnicalsAdx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsAo', function() {
      it('should call getCryptoPriceTechnicalsAo successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsAo
        //instance.getCryptoPriceTechnicalsAo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsAtr', function() {
      it('should call getCryptoPriceTechnicalsAtr successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsAtr
        //instance.getCryptoPriceTechnicalsAtr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsBb', function() {
      it('should call getCryptoPriceTechnicalsBb successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsBb
        //instance.getCryptoPriceTechnicalsBb(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsCci', function() {
      it('should call getCryptoPriceTechnicalsCci successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsCci
        //instance.getCryptoPriceTechnicalsCci(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsCmf', function() {
      it('should call getCryptoPriceTechnicalsCmf successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsCmf
        //instance.getCryptoPriceTechnicalsCmf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsDc', function() {
      it('should call getCryptoPriceTechnicalsDc successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsDc
        //instance.getCryptoPriceTechnicalsDc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsDpo', function() {
      it('should call getCryptoPriceTechnicalsDpo successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsDpo
        //instance.getCryptoPriceTechnicalsDpo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsEom', function() {
      it('should call getCryptoPriceTechnicalsEom successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsEom
        //instance.getCryptoPriceTechnicalsEom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsFi', function() {
      it('should call getCryptoPriceTechnicalsFi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsFi
        //instance.getCryptoPriceTechnicalsFi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsIchimoku', function() {
      it('should call getCryptoPriceTechnicalsIchimoku successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsIchimoku
        //instance.getCryptoPriceTechnicalsIchimoku(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsKc', function() {
      it('should call getCryptoPriceTechnicalsKc successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsKc
        //instance.getCryptoPriceTechnicalsKc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsKst', function() {
      it('should call getCryptoPriceTechnicalsKst successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsKst
        //instance.getCryptoPriceTechnicalsKst(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsMacd', function() {
      it('should call getCryptoPriceTechnicalsMacd successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsMacd
        //instance.getCryptoPriceTechnicalsMacd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsMfi', function() {
      it('should call getCryptoPriceTechnicalsMfi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsMfi
        //instance.getCryptoPriceTechnicalsMfi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsMi', function() {
      it('should call getCryptoPriceTechnicalsMi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsMi
        //instance.getCryptoPriceTechnicalsMi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsNvi', function() {
      it('should call getCryptoPriceTechnicalsNvi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsNvi
        //instance.getCryptoPriceTechnicalsNvi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsObv', function() {
      it('should call getCryptoPriceTechnicalsObv successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsObv
        //instance.getCryptoPriceTechnicalsObv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsObvMean', function() {
      it('should call getCryptoPriceTechnicalsObvMean successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsObvMean
        //instance.getCryptoPriceTechnicalsObvMean(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsRsi', function() {
      it('should call getCryptoPriceTechnicalsRsi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsRsi
        //instance.getCryptoPriceTechnicalsRsi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsSma', function() {
      it('should call getCryptoPriceTechnicalsSma successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsSma
        //instance.getCryptoPriceTechnicalsSma(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsSr', function() {
      it('should call getCryptoPriceTechnicalsSr successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsSr
        //instance.getCryptoPriceTechnicalsSr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsTrix', function() {
      it('should call getCryptoPriceTechnicalsTrix successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsTrix
        //instance.getCryptoPriceTechnicalsTrix(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsTsi', function() {
      it('should call getCryptoPriceTechnicalsTsi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsTsi
        //instance.getCryptoPriceTechnicalsTsi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsUo', function() {
      it('should call getCryptoPriceTechnicalsUo successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsUo
        //instance.getCryptoPriceTechnicalsUo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsVi', function() {
      it('should call getCryptoPriceTechnicalsVi successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsVi
        //instance.getCryptoPriceTechnicalsVi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsVpt', function() {
      it('should call getCryptoPriceTechnicalsVpt successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsVpt
        //instance.getCryptoPriceTechnicalsVpt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsVwap', function() {
      it('should call getCryptoPriceTechnicalsVwap successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsVwap
        //instance.getCryptoPriceTechnicalsVwap(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPriceTechnicalsWr', function() {
      it('should call getCryptoPriceTechnicalsWr successfully', function(done) {
        //uncomment below and update the code to test getCryptoPriceTechnicalsWr
        //instance.getCryptoPriceTechnicalsWr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoPrices', function() {
      it('should call getCryptoPrices successfully', function(done) {
        //uncomment below and update the code to test getCryptoPrices
        //instance.getCryptoPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoSnapshot', function() {
      it('should call getCryptoSnapshot successfully', function(done) {
        //uncomment below and update the code to test getCryptoSnapshot
        //instance.getCryptoSnapshot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCryptoStats', function() {
      it('should call getCryptoStats successfully', function(done) {
        //uncomment below and update the code to test getCryptoStats
        //instance.getCryptoStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
