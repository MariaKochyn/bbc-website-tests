import { openMainPage } from "../models/news.methods";
import { goToSportPage, scoresCompare, scoresCompare2, scoresCompare3, scoresCompare4, scoresCompare5, searchCompetitionOrTeam, searchCompetitionOrTeam2, searchCompetitionOrTeam3, searchCompetitionOrTeam4, searchCompetitionOrTeam5 } from "../models/sport.methods";

describe('Testing football scores', () => {
    before(() => {
        openMainPage()
    })

    it('Verify scores in football Scottish Championship', () => {
        goToSportPage()
        searchCompetitionOrTeam()
        scoresCompare()
    });

    it('Verify scores in football Europa League', () => {
        goToSportPage()
        searchCompetitionOrTeam2()
        scoresCompare2()
    });

    it('Verify scores in football Liverpool', () => {
        goToSportPage()
        searchCompetitionOrTeam3()
        scoresCompare3()
    });

    it('Verify scores in football Levante', () => {
        goToSportPage()
        searchCompetitionOrTeam4()
        scoresCompare4()
    });

    it('Verify scores in football French Coupe de France', () => {
        goToSportPage()
        searchCompetitionOrTeam5()
        scoresCompare5()
    });

})