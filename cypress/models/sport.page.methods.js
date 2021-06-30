import sport from "../page objects/sport.page";
const Sport = new sport();


export function goToSportPage() {
    Sport.sportBtn().eq(0).should('be.visible').contains('Sport').click()
    cy.url().should('contain', 'sport')
    Sport.sportNavigationPanel().should('be.visible')
    Sport.footballBtn().eq(0).should('be.visible').click()
    cy.url().should('contain', 'sport/football')
    Sport.footballNavigationPanel().should('be.visible')
    Sport.scoresAndFixturesBtn().eq(0).should('be.visible').click()
}


export function ChampionshipName() {
    return 'Scottish Championship'
}

export function searchCompetitionOrTeam() {
    Sport.teamOrCompetitionSearchField().should('be.visible').clear().type(ChampionshipName())
    Sport.searchChampionshipItem().eq(0).should('be.visible').click()
    cy.url().should('contain', '/scores-fixtures')
    Sport.competitionOrTeamTitle().should('be.visible').contains(ChampionshipName() + ' Scores & Fixtures')
    Sport.mayInCalendar().contains('MAY').should('be.visible').click()
}

let scores = ['3', '0'] 

export function scoresCompare() {
    Sport.firstTeamScoreValue().eq(0).should('be.visible').and('have.text', scores[0])
    Sport.secondTeamScoreValue().eq(0).should('be.visible').and('have.text', scores[1])
    Sport.firstTeamScoreValue().eq(0).click()
    cy.url().should('contain', 'sport/football/')
    Sport.matchPage().eq(0).should('be.visible')
    Sport.firstScoresOnMatchPage().eq(0).should('have.text', scores[0])
    Sport.secondScoreOnMatchPage().eq(0).should('have.text', scores[1])
}

export function ChampionshipName2() {
    return 'Europa League'
} 

export function searchCompetitionOrTeam2() {
    Sport.teamOrCompetitionSearchField().should('be.visible').clear().type(ChampionshipName2())
    Sport.searchChampionshipItem().eq(0).should('be.visible').click()
    cy.url().should('contain', '/scores-fixtures')
    Sport.competitionOrTeamTitle().should('be.visible').contains(ChampionshipName2() + ' Scores & Fixtures')
    Sport.aprilInCalendar().contains('APR').should('be.visible').click()
}

let scores2 = ['6', '2'] 

export function scoresCompare2() {
    Sport.firstTeamScoreValue().eq(0).should('be.visible').and('have.text', scores2[0])
    Sport.secondTeamScoreValue().eq(0).should('be.visible').and('have.text', scores2[1])
    Sport.firstTeamScoreValue().eq(0).click()
    cy.url().should('contain', 'sport/football/')
    Sport.matchPage().eq(0).should('be.visible')
    Sport.firstScoresOnMatchPage().eq(0).should('have.text', scores2[0])
    Sport.secondScoreOnMatchPage().eq(0).should('have.text', scores2[1])
}


