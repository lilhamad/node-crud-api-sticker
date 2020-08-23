const knex = require('../db/knex');
const request = require('supertest');

const app = require('../app');
const expect = require('chai').expect;

const fixtures = require('./fixtures');


describe('CRUD Stickers', () => {
    before((done) => {
        knex.migrate.latest()
        .then(() => {
            return knex.seed.run();
        }).then(() => done());
    });

    it('Lists all records', (done) => {
        request(app)
            .get('/api/v1/stickers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                // console.log(response.body);
                expect(response.body).to.deep.equal(fixtures.stickers);
                done();
            });
    })

    it('Show a record by id', (done) => {
        request(app)
            .get('/api/v1/stickers/5')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.stickers[4]);
                done();
            });
    });

    it('Creates a record', (done) => {
        request(app)
        .post('/api/v1/stickers')
        .send(fixtures.sticker)
        .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body.title).to.deep.equal(fixtures.sticker.title);
                done();
            });
    })


});