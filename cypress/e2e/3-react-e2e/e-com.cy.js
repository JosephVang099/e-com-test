describe('check home page', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000/')
    })
    // Title
    it('display title', () => {
     
      cy.get('h1').contains('AZN BUZZIN ~_~')
    })
    // Address in footer
    it('display address in footer', () => {
         
        cy.get('div').contains('11823 Westminster Commons, Charlotte NC 28217')
      })
    // Discount Slider
      it('display messsage discount', () => {
         
        cy.get('div').contains('SOJU ON SALE!! ONLY LIMITED TIME!! FROM MAY 1st TO JULY 20th')
      })
    // Accouncement
       it('display accouncement', () => {
         
        cy.get('div').contains('! ! ! SUPER SOJU DEAL ! ! !')
      })
    // Email Address Contact
      it('display Contact Email in Footer', () => {
         
        cy.get('div').contains('contact@aznbuzzin.com')
      })
    })



    
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')

    //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')


    //   describe('Header Test', () => {
    //     beforeEach(() => {
    //       cy.visit('https://www.roadtohire.org/')
    //     })
    //     // Title
    //     it('display title', () => {
         
    //       cy.get('h1').contains('Road to Hire')
    //     })

    //     it('display address in footer', () => {
         
    //         cy.get('div').contains('11823 Westminster Commons, Charlotte NC 28217')
    //       })
    //     })







        // describe('Header Test', () => {
        //     it('Displays the header text', () => {
        //       cy.visit('https://www.roadtohire.org/')
        //       cy.get('.header-title').should('contain', 'Road to Hire')
        //     })
        //   })