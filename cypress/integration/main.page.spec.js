import main from "../page objects/main.page";
import { cityInWeatherPage, date } from "../models/main.page.methods"; 
import { openMainPage } from "../models/news.methods";

describe('Tests for the main page', () => {
    before(() => {
        openMainPage()
    })

    it('Checking date on the page to correspond current date', () => {
        date()
    });


    it.only('Checking city in the Weather page', () => {
        cityInWeatherPage()
    });
})