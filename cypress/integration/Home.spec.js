describe('Verify Home Screen', () => {
    it('Open Home Screen and check for content', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Home') // Check for Header text
        cy.get('.Weather')
        cy.get('.Lights')
        cy.get('.ToDo')
    })

    it('Test the lights', () => {
        cy.contains('Licht')
        const lights = ['Hell', 'Dämmerung', 'Abend', 'Chillen']
        //Loop over all lights, activate them and check if only the selected light is active
        lights.forEach((light, index) => {
            cy.contains(light).click()
            //Check if the current activated light is highlighted
            cy.contains(light).should('to.have.css','color', 'rgb(255, 165, 0)')
            
            lights.forEach((light2, index2) => {
                if(index !== index2) {
                    //Check if all other lights are switched off
                    cy.contains(light2).should('to.have.css','color', 'rgb(255, 255, 255)')
                }
            });
            //Check if the lights button showing that lights are on
        });
        
    })

    it('Add a new ToDo', () => {
        cy.contains('ToDo')
        cy.get('.ToDo').within(() => {
            cy.get('.HeaderIconAction').click()
        })
        //Confirm the dialog poped up by checking the title
        cy.contains('Neues ToDo')
        //Make sure placeholders are displayed
        cy.contains('Title')
        cy.contains('Ort')
        cy.contains('Datum')
        //Enter a new ToDO
        cy.get('.TextView').first().type('Treffen mit Max')
        cy.get('.TextView').eq(1).type('10:15')
        cy.get('.TextView').eq(2).type('TH Rosenheim')
        //Save
        cy.get('.ToDoModalSaveButton').click()

        //Assert a todo has been created
        cy.get('.ToDo').within(() => {
            cy.contains('Treffen mit Max')
        })
  })
})