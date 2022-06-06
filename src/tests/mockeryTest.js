'use strict';
const chai = require('chai');
const mockery = require("../mockery");
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

describe('Mockery Tests: ', () => {
    it('Can get random Clarinets', function(done){
        const instruments = mockery.getClarinetsSync();
        expect(instruments).to.be.an('array');
        done();
    });

    it('Can get random Brass', function(done){
        const instruments = mockery.getBrassSync();
        expect(instruments).to.be.an('array');
        done();
    });

    it('Can get random Brass', function(done){
        const instruments = mockery.getSaxophonesSync();
        expect(instruments).to.be.an('array');
        done();
    });
});