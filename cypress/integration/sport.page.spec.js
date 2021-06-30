import { goToForm } from "../models/coronavirusForm.methods";
import { openMainPage } from "../models/news.methods";
import { goToSportPage, scores, scoresCompare, scoresCompare2, searchCompetitionOrTeam, searchCompetitionOrTeam2 } from "../models/sport.page.methods";

describe('Testing football scores', () => {
    before(() => {
        openMainPage()
    })


    it('Scecking scores in football Scottish Championship', () => {
        goToSportPage()
        searchCompetitionOrTeam()
        scoresCompare()
    });

    it.only('Scecking scores in football Europa League', () => {
        goToSportPage()
        searchCompetitionOrTeam2()
        scoresCompare2()
    });

})