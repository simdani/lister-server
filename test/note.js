// set environment to test
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

// load note model
const Note = require('../models/Note');

chai.use(chaiHttp);

describe('Notes', () => {
  beforeEach((done) => {
    Note.remove({}, (err) => {
      done();
    });
  });

  describe('/GET all notes', () => {
    it('it should get all notes', (done) => {
      chai.request(server)
        .get('/notes')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
});
