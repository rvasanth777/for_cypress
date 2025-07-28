describe('tstElements',()=>{
    beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    //test all the radioBtn
    it('radioBtn',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.radioButton').should('be.visible')
        cy.get('[value="radio1"]').check().should('be.checked')
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio3"]').check().should('be.checked')
    })

    //to test indivudial radioBtn
    it('RadioBtn_Single',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.radioButton').eq(0).check().should('be.checked')
        //cy.wait(1000)
        cy.get('.radioButton').eq(1).check().should('be.checked')
        //cy.wait(1000)
        cy.get('.radioButton').eq(2).check().should('be.checked')
    })

    it('dropDwn',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option1')
        //cy.wait(1000)
        cy.get('#dropdown-class-example').select('option2')
        //cy.wait(1000)
        cy.get('#dropdown-class-example').select('option3')
    })

    it('checkBox',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')
    })

    it('suggestionClsEx',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="inputs ui-autocomplete-input"]').type('sw')
        cy.get('.ui-menu-item-wrapper').each(($countries)=>{
            if($countries.text().includes('Switzerland')){
                cy.wrap($countries).click()
            }
        })
    })

    it('openTabHandling',()=>{
        cy.get('[id="opentab"]').invoke('removeAttr','target').click()
    })

    it('openNewWindow',()=>{
        /*cy.get('[id="openwindow"]').click()
        cy.url().should('contain','https://www.qaclickacademy.com/')
        cy.contains('info@qaclickacademy.com').should('be.visible')*/
        cy.get('#openwindow').click().then(()=>{
            //cy.should('contain.text','be.visible')
            cy.contains('Home').click()
        })
    })
})