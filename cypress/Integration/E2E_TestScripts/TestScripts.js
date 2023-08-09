/// <reference types="Cypress" />
import 'cypress-file-upload';
import Login from "../POM/Login"

describe("Spatika end to end automation", () => {
    beforeEach("Login Application", () => {  // run before each scripts
        login()
    })
    // hooks
    function login()                                  // custom function 
    {
        cy.uncaught_exception()
        const login = new Login()
        cy.visit(Cypress.env("TestUrl"))    // property file 
        login.getEmailAddress()             // from pom class
        login.getPassword()
        login.clickOnLogin()
        cy.wait(15000)
    }
    //----------------------------------------------------------------------------------------------
    it.skip("Change the profile pictures", () => {  // uploading new pictures
        cy.uncaught_exception()
        cy.get(".header-right div:nth-of-type(2)").click()
        cy.contains('Profile Setting').click()
        cy.wait(3000)
        cy.get('.fullName').clear()
        cy.get('.fullName').type("Vinith Siuuuuuuu")
        cy.get('.update-button').click()
    })

    it.skip("Check Recent Requests", () => { // perform scrolldown, check in descending order and click
        cy.uncaught_exception()
        cy.xpath("//div[.='User Profile']").click()
        cy.wait(6000)
        cy.get('.ant-table-row:last-child').invoke('offset').then((postn) => {
            const left = postn.left
            const top = postn.top
            cy.get('.ant-table-row:last-child').scrollTo(left, top, { ensureScrollable: false })
        })
    })

    it.skip("Intercept the request and deactivate the user profile", () => {   // validate calender
        cy.uncaught_exception()
        cy.xpath("//div[.='User Profile']").click()
        cy.intercept({
            method: 'GET',
            url: 'https://vtcdkc6u02.execute-api.ap-south-1.amazonaws.com/test/admin/v1/users/?page=1&page_size=10&name=pradeep'
        }, {
            statusCode: 200,
            body:
            {
                "message": "Success",
                "data": {
                    "data": [
                        {
                            "admin_id": "129",
                            "is_activated": true,
                            "profile_photo": "",
                            "user_id": "2158",
                            "emp_id": "SP0400070",
                            "profile_creation_date": "22-02-2023",
                            "usertype": "Admin",
                            "email": "pradeep@getnada.com",
                            "first_name": "Pradeep",
                            "phone": "+918764578990",
                            "last_name": ""
                        }
                    ],
                    "count": 4,
                    "next": null,
                    "prev": null
                }
            }
        }).as('userProfileIntercepted')
        cy.xpath('//input[@placeholder="Search by Name"]').type('pradeep')
        cy.wait(5000)
        cy.wait('@userProfileIntercepted')
        if (cy.get('.toggleButton').should('be.enabled')) {
            cy.get('.toggleButton').click()
        } else {
            cy.get('.toggleButton').click()
        }
        cy.contains('Confirm').click()
        cy.wait(5000)
        cy.get('.ant-notification-notice-message').invoke('text').then((txt) => {
            expect(txt).to.equal('Updated')
        })
    })

    it.skip("Check calender is working", () => {   // validate calender
        cy.uncaught_exception()
        cy.xpath('//input[@placeholder="Start date"]').click()
        cy.get('.ant-picker-cell-today div').click()
        cy.get('.ant-picker-cell-today div').click({ force: true })
    })

    it("I click on astrologger feature, I click on ative and I should see astrologger lists with active status",()=>{  // grab dynamic values
        cy.uncaught_exception()
        cy.get('.ant-menu-item:nth-of-type(4)').click()
        cy.wait(5000)
        cy.get('.ant-select-selector').click({force:true})
        cy.contains('Active').click()
        cy.wait(4000)
    })

    // it("Check upcoming celebrations are in incremental order",()=>{ // perform scroll down , check ascending order and click

    // })
})

