export default class FormPage {

    newsNavigationPanel() {
        return cy.get('.gs-o-list-ui--top-no-border.nw-c-nav__wide-sections')
    }
 
    coronavirusButton() {
        return cy.get('[href="/news/coronavirus"]')
    }
 
    coronavirusNavigationPanel() {
        return cy.get('.gs-o-list-ui--top-no-border.nw-c-nav__secondary-sections')
    }
 
    yourStoriesButton() {
        return cy.get('[href="/news/have_your_say"]')
    }
 
    getInTouchSection() {
        return cy.get('#nw-c-Getintouchwithus__title')
    }
 
    howToShareBlock() {
        return cy.get('[class="gel-layout__item gel-1/3@m gel-1/4@l gel-1/5@xxl nw-o-keyline nw-o-no-keyline@m"]').eq(0)
    }
 
    formWithInpust() {
        return cy.get('.embed-content-container')
    }

    tellUsYourStoryInput() {
        return cy.get('#hearken-embed-module-6173-1c0ee-0')

    }

    nameInputField() {
        return cy.get('[aria-label="Name"]')
    }

    emailInputField() {
        return cy.get('[aria-label="Email address"]')
    }

    numberInputField() {
        return cy.get('[aria-label="Contact number "]')
    }

    locationInputField() {
        return cy.get('[placeholder="Location "]')
    }

    acceptTermsCheckbox() {
        return cy.get('[type="checkbox"]').eq(1)
    }

    submitButton() {
        return cy.get('[class="button"]').contains('Submit')
    }

    invalidEmailError() {
        return cy.get('.input-error-message')
    }

    messageCantBeBlankError() {
        return cy.get('[class="input-error-message"]').eq(0)
    }

    NameCantBeBlankError() {
        return cy.get('[class="input-error-message"]').contains(`Name can't be blank`)
    }

    mustBeAcceptedError() {
        return cy.get('[class="input-error-message"]').contains('must be accepted')
    }
 
}