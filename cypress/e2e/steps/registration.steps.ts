import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../pages/registerPage";

import {userdata} from  "../../fixtures/example.json";

const registerPage =  new RegisterPage();

const apiBaseUrl:String = 'https://reqres.in/api'

let userList:any;


Given('I am on register page', ()=> {
      registerPage.launch();
})

When('I enter all required fields details',  () =>  {
     registerPage.registerUser(userdata.fname,userdata.lname,userdata.email,
        userdata.telephone,userdata.password,userdata.cpassword);
})

Then('I should login sucessfully', () => {
    registerPage.selectSubmitButton();
})


Given('I GET list of users available', ()=> {
     cy.request('GET',`${apiBaseUrl}/users`).then((res) => {
        userList = JSON.stringify(res.body)
        console.log(userList);
     })
     
     console.log(userList);
})

When('I validate a response code to be 200',  () =>  {
    cy.request('GET',`${apiBaseUrl}/users`).then((res) => {
        expect(res.status).to.eq(200)
     })
})

Then('I should see specific data availble to me', () => {
   expect(userList).to.include("eve.holt@reqres.in")
})
