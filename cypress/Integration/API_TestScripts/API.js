/// <reference types="Cypress" />

describe("suite",()=>{

const baseUrl='https://dev.leewardx.com/AUTHENTICATE?'
it("test",()=>{

cy.request({ 
url:baseUrl+'CMD=doAuthenticate&email=qatest1@fivermail.com&textPW=test1234&distributorID=QKI-CLR',
failOnStatusCode: false   // expected output is 403 so I added to make test case pass
}).then((response)=>{
    expect(response.status).to.eq(403)
})

})
})