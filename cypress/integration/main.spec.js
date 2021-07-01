import { cityInWeatherPage, date } from "../models/main.methods"; 
import { openMainPage } from "../models/news.methods";

describe('Tests for the main page', () => {
    before(() => {
        openMainPage()
    })

    it('Checking date on the page to correspond current date', () => {
        date()
    });

    it('Checking city in the Weather page', () => {
        cityInWeatherPage()
    });
})