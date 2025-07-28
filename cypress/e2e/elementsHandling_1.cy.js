describe('elementsHandling_1',()=>{
    beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.visit('/')
    })
    //using unique locator
    it('radioBtn',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[value="radio1"]').should('be.visible') //to check the visiblity

        cy.get('[value="radio1"]').check().should('be.checked')
        //cy.wait(500)
        cy.get('[value="radio2"]').check().should('be.checked')
        //cy.wait(500)
        cy.get('[value="radio3"]').check().should('be.checked')
    })

    //using common locator
    it('Radiobtn1',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.radioButton').eq(0).should('be.visible') //to check visiblity

        cy.get('.radioButton').eq(0).check().should('be.checked')
        //cy.wait(1000)
        cy.get('.radioButton').eq(1).check().should('be.checked')
        //cy.wait(1000)
        cy.get('.radioButton').eq(2).check().should('be.checked')
    })

    //Dropdown using locator #ID
    it('dropDown',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('option1')
        //cy.wait(2000)
        cy.get('#dropdown-class-example').select('option2')
        //cy.wait(2000)
        cy.get('#dropdown-class-example').select('option3')
    })

    //Checkbox using unique locator #Id
    it('checkBox',()=>{

        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')
    })

    //suggession class example
    it('suggessionClassEx',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[class="inputs ui-autocomplete-input"]').type('in')
        cy.get('.ui-menu-item-wrapper').each(($countries)=>{
            if($countries.text().includes('India')){
                cy.wrap($countries).click({force:true})
            }
        })
    })

    //to open new tab
    it('open tab handling',()=>{
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
		cy.get('[id="opentab"]').invoke('removeAttr','target').click()
	})

    /*it.only('suggessionClass_2',()=>{
        cy.get('.ui-autocomplete-input').type('ne')
        cy.get('.ui-menu-item-wrapper').each(($ne_countries)=>{
            if($ne_countries.text().includes('Netherlands')){
                cy.wrap($ne_countries).click({force:true})
            }
        })
    })*/
   it('AlrtPopup',()=>{
        cy.get('[class="inputs"]').type('cypress')
        cy.on('windows:alert',(textvalue)=>{
            expect(textvalue).to.eq('Hello cypress, share this practice page and share your knowledge')
            return true;
        })
        cy.get('#alertbtn').click()
   })

   it('confirmAlrt',()=>{
        cy.get('[class="inputs"]').type('cypress')
        cy.on('windows:confirm',(txtVal)=>{
            expect(txtVal).to.eq('Hello cypress, Are you sure you want to confirm?')
            return false;
        })
        cy.get('#confirmbtn').click()
        //cy.screenshot()
   })
})