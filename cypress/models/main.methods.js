import MainPage from "../page objects/main.page"
const main = new MainPage();

export function date() {
    let date = new Date();
    main.dateValue().should('contain', date.toLocaleDateString('en-us', {  weekday: 'long' }))
    main.dateValue().should('contain', date.getDate())
    main.dateValue().should('contain', date.toLocaleDateString('en-us', {  month: 'long' }))
}

export function city() {
    return `L'viv`
}

export function cityInWeatherPage() {
    main.weatherLink().contains('Weather').should('be.visible').click()
    cy.url().should('contain', 'weather')
    main.searchCityField().should('be.visible').clear().type(city())
    main.searchForLocationBtn().should('be.visible').click()
    main.weatherContainer().should('be.visible')
    main.cityOnWeatherPage().should('be.visible').and('have.text', city()+' - Weather warnings issued')
}

