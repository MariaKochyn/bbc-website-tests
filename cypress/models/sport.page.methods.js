import sport from "../page objects/sport.page";
const Sport = new sport();


export function goToSportPage() {
    Sport.sportBtn().should('be.visible').contains('Sport').click()
    cy.url().should('contain', 'sport')
    Sport.sportNavigationPanel().should('be.visible')
    Sport.footballBtn().should('be.visible').click()
    cy.url().should('contain', 'sport/football')
    Sport.footballNavigationPanel().should('be.visible')
    Sport.scoresAndFixturesBtn().should('be.visible').click()
}


export function ChampionshipName() {
    return 'Scottish Championship'
}

export function searchCompetitionOrTeam() {
    Sport.teamOrCompetitionSearchField().should('be.visible').clear().type(ChampionshipName())
    Sport.searchChampionshipItem().should('be.visible').click()
    Sport.competitionOrTeamTitle().should('be.visible').contains(ChampionshipName() + ' Scores & Fixtures')
    Sport.mayInCalendar().should('be.visible').click()
}

let scores = ['3', '0'] //should be changed due to required scores

export function scoresCompare() {
    Sport.firstTeamScoreValue().should('be.visible').and('have.text', scores[0])
    Sport.secondTeamScoreValue().should('be.visible').and('have.text', scores[1])
    Sport.matchPage().click()
    cy.url().should('contain', 'sport/football/')
    Sport.matchPage().should('be.visible')
}

