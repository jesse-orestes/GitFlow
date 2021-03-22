const request = require("supertest");
const app = require("../server");
const joi = require("../services/joi");
const {...models} = require('../app/models');


describe('Test routes the district', () => {   
    it("Test return empty route the district", function(done) {        
         request(app)
        .get('/api/district')
        .set('Accept', 'application/json')      
        .expect('Content-Type', /json/)  
        .expect(200, done);
    });    
    it("test create record in district route", function(done){
        request(app)
        .post("/api/district")
        .set('Content-Type', 'application/json')
        .send([{
            "district": "Santa Rita",
            "amount": 5
        },{
            "district": "Cohab",
            "amount": 5
        }])
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    });  
});