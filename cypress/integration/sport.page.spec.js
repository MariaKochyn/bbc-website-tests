import { goToForm } from "../models/coronavirusForm.methods";
import { openMainPage } from "../models/news.methods";
import { goToSportPage, scores } from "../models/sport.page.methods";

describe('Testing football scores', () => {
    before(() => {
        openMainPage()
    })


    it('qwerty', () => {
        goToSportPage()
        scores()
    });

})