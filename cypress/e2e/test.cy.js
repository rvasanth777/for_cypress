describe('test',()=>{
    it('drpdwn',()=>{
        Cypress.on('uncaught:exception',()=>{
            return false
        })
        cy.visit('https://www.changepond.com/')
        //cy.get('[class="nav-link dropdown-toggle"]').eq(0).should('be.visible')
    })
})