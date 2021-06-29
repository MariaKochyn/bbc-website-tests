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

export function Championship() {
    return 'Scottish Championship'
}
export function scores() {
    Sport.teamOrCompetitionSearchField().should('be.visible').clear().type(Championship())
    Sport.ScottishChampionshipItem().should('be.visible').click()
    Sport.competitionOrTeamTitle().should('be.visible').contains(Championship() + ' Scores & Fixtures')
}