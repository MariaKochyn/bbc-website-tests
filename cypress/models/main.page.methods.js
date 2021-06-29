import main from "../page objects/main.page"
import moment from "moment";

const Main = new main();


export function date() {
    let date = new Date();
    Main.dateValue().should('contain', date.toLocaleDateString('en-us', {  weekday: 'long' }))
    Main.dateValue().should('contain', date.getDate())
    Main.dateValue().should('contain', date.toLocaleDateString('en-us', {  month: 'long' }))
}


export function city() {
    return `L'viv`
}

export function cityInWeatherPage() {
    Main.weatherLink().contains('Weather').should('be.visible').click()
    cy.url().should('contain', 'weather')
    Main.searchCityField().should('be.visible').clear().type(city())
    Main.searchForLocationBtn().should('be.visible').click()
    Main.weatherContainer().should('be.visible')
    Main.cityOnWeatherPage().should('be.visible').and('have.text', city()+' - Weather warnings issued')

}


