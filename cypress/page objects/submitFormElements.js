export default class form {

    newsNavigationPanel() {
        return cy.xpath(`//ul[@class='gs-o-list-ui--top-no-border nw-c-nav__wide-sections']`)
    }
 
    coronavirusButton() {
        return cy.get('[href="/news/coronavirus"]')
    }
 
    coronavirusNavigationPanel() {
        return cy.xpath(`//li[@class='gs-o-list-ui__item--flush gel-long-primer gs-u-display-block gs-u-float-left nw-c-nav__selected nw-c-nav__wide-menuitem-container']//a[@class='nw-o-link']`)
    }
 
    yourStoriesButton() {
        return cy.get('[href="/news/have_your_say"]')
    }
 
    getInTouchSection() {
        return cy.xpath(`//body/div[@id='orb-modules']/div[@id='site-container']/div[@id='index-page']/div[@class='gel-wrap gs-u-box-size ']/div[2]/div[1]/div[1]`)
    }
 
    howToShareBlock() {
        return cy.xpath(`//body/div[@id='orb-modules']/div[@id='site-container']/div[@id='index-page']/div[contains(@class,'gel-wrap gs-u-box-size')]/div[2]/div[2]/div[1]`)
    }
 
    formWithInpust() {
        return cy.get('.embed-content-container')
    }

    tellUsYourStoryInput() {
        return cy.get('#hearken-embed-module-6173-1c0ee-0')

    }

    nameInputField() {
        return cy.xpath(`//input[@placeholder='Name']`)
    }

    emailInputField() {
        return cy.xpath(`//input[@placeholder='Email address']`)
    }

    numberInputField() {
        return cy.xpath(`//input[@placeholder='Contact number ']`)
    }

    locationInputField() {
        return cy.xpath(`//input[@placeholder='Location ']`)
    }

    acceptTermsCheckbox() {
        return cy.xpath(`//div[6]//label[1]//input[1]`)
    }

    submitButton() {
        return cy.xpath(`//button[normalize-space()='Submit']`)
    }

    invalidEmailError() {
        return cy.get('.input-error-message')
    }
 
}