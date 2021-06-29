export default class main {
    
    dateValue() {
        return cy.xpath(`//section[@class='module module--header']//h2[@class='module__title']`)
    }

    weatherLink() {
        return cy.get(`div[class='orb-footer-primary-links'] li[class='orb-nav-weather`)
    }

    searchCityField() {
        return cy.get('#ls-c-search__input-label')
    }

    cityOnWeatherPage() {
        return cy.get('.wr-c-location__name.gel-paragon')
    }

    weatherContainer() {
        return cy.get('#wr-forecast')
    }

    searchForLocationBtn() {
        return cy.get('.ls-c-search__submit')
    }

}