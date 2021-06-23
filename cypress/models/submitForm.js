import form from "../page objects/submitFormElements";

const Form = new form(); 

export function goToForm() {
    Form.newsNavigationPanel().should('be.visible')
    Form.coronavirusButton().invoke('attr', 'href').then(href => {cy.visit(href);})
    cy.url().should('contain', '/news/coronavirus')
    Form.coronavirusNavigationPanel().should('be.visible')
    Form.yourStoriesButton().invoke('attr', 'href').then(href => {cy.visit(href);})
    cy.url().should('contain', '/news/have_your_say')
    Form.getInTouchSection().should('be.visible')
    Form.howToShareBlock().should('exist').click()
    cy.url().should('contain', 'news/10725415')
    Form.formWithInpust().should('be.visible')
}

export function submitForm() {
    Form.formWithInpust().find('.text-input--long').click().type('kbfd;vijbearijvbawierbvaiejbrva;ejbvr;aojebrv;ja')
    Form.nameInputField().clear().type('name')
    Form.emailInputField().clear().type('email')
    Form.numberInputField().clear().type('0672536453')
    Form.locationInputField().clear().type('dfdfgdfgdf')
    Form.acceptTermsCheckbox().check()
    Form.submitButton().click()
    cy.wait(5000)
    Form.invalidEmailError().should('exist')
    cy.url().should('contain', 'news/10725415')
    Form.submitButton().should('be.enabled')
}

