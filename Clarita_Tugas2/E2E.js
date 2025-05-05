require('dotenv').config();

const request = require("supertest");
const expect = require("chai").expect;

let url = "https://restful-booker.herokuapp.com";
let auth_token ="/auth"
let endpoint = "/booking"
let token;
let bookingID;
const dataBooking = require('./dataBooking.json')
let header = {"Content-Type":"application/json"}

describe('E2E Booking', async function(){
    this.timeout(60000);

    it('Create Booking', async function(){

        const response = await request(url)
        .post(endpoint)
        .set(header)
        .send(dataBooking);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('bookingid');
        bookingID = response.body.bookingid;
        console.log("Booking ID:", bookingID);
        
    })

    it('Get Booking', async function () {
       let newEndpoint =`${endpoint}/${bookingID}`
     
       const response = await request(url)
       .get(newEndpoint)
       .set(header);

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.include(dataBooking);
        console.log("Booking Data:", response.body);
    
    })

    it('Get Token for Delete', async function (){
        let bodyAuth ={
            username: process.env.username,
            password: process.env.password
        };
        const response = await request(url)
        .post(auth_token)
        .set(header)
        .send(bodyAuth);

        expect(response.status).to.equal(200);
        token = response.body.token;
        console.log("Token:", token);

    })
    
    it('Delete Booking', async function () {
        let newEndpoint =`${endpoint}/${bookingID}`

        const response = await request(url)
        .delete(newEndpoint)
        .set('Cookie', `token=${token}`);

        expect(response.status).to.equal(201);
        console.log("Deleted Booking ID:", bookingID);
    })

});
