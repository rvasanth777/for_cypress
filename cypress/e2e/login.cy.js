describe('traditional_login',()=>{
    it('postiveLogin',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.title().should('contain','Test Login')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.contains('Submit').click()
   })
})