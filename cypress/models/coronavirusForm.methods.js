import FormPage from "../page objects/coronavirusForm.page";


const form = new FormPage(); 

export function goToForm() {
    form.newsNavigationPanel().should('be.visible')
    form.coronavirusButton().invoke('attr', 'href').then(href => {cy.visit(href);})
    cy.url().should('contain', '/news/coronavirus')
    form.coronavirusNavigationPanel().should('be.visible')
    form.yourStoriesButton().invoke('attr', 'href').then(href => {cy.visit(href);})
    cy.url().should('contain', '/news/have_your_say')
    form.getInTouchSection().should('be.visible')
    form.howToShareBlock().should('exist').click()
    cy.url().should('contain', 'news/10725415')
    form.formWithInpust().should('be.visible')
}

export function submitForm() {
    form.formWithInpust().find('.text-input--long').click().type('kbfd;vijbearijvbawierbvaiejbrva;ejbvr;aojebrv;ja')
    form.nameInputField().clear()
    form.numberInputField().clear().type('0672536453')
    form.locationInputField().clear().type('dfdfgdfgdf')
    form.acceptTermsCheckbox().check()
    form.submitButton().click()
    cy.url().should('contain', 'news/10725415')
    form.submitButton().should('be.enabled')
}

export function emptyStoryField() {
    form.formWithInpust().find('.text-input--long').should('be.visible').clear()
    form.nameInputField().clear().type('name')
    form.acceptTermsCheckbox().check()
    form.submitButton().click()
    cy.wait(5000)
    form.messageCantBeBlankError().should('exist')
    cy.url().should('contain', 'news/10725415')
    form.submitButton().should('be.enabled')
}

export function invalidEmail() {
    cy.reload()
    form.formWithInpust().find('.text-input--long').click().type('kbfd;vijbear')
    form.nameInputField().clear().type('name')
    form.emailInputField().clear().type('123')
    form.acceptTermsCheckbox().check()
    form.submitButton().click()
    cy.wait(5000)
    form.invalidEmailError().should('exist')
    cy.url().should('contain', 'news/10725415')
    form.submitButton().should('be.enabled')
}

export function uncheckedCheckbox() {
    cy.reload()
    form.formWithInpust().find('.text-input--long').click().clear().type('kbfd;vijbear')
    form.nameInputField().clear().type('name')
    form.submitButton().click()
    cy.wait(5000)
    form.mustBeAcceptedError().should('exist')
    cy.url().should('contain', 'news/10725415')
    form.submitButton().should('be.enabled')
}

