import 'cypress-xpath'


class Login
{
getEmailAddress(){
    return cy.xpath('//input[@name="email"]').type(Cypress.env('username'))
}
getPassword(){
    return cy.xpath('//input[@name="password"]').type(Cypress.env('password'))
}
clickOnLogin(){
    return cy.xpath("//button[.='Login']").click()
}


}

export default Login;