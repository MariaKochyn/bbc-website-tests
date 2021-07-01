import SportPage from "../page objects/sport.page";
const sport = new SportPage();
let envVariables = Cypress.env(Cypress.env('environment'));


Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('n.isMounted')) {
      return false
    }
})

export function goToSportPage() {
    sport.sportBtn().eq(0).should('be.visible').contains('Sport').click()
    cy.url().should('contain', 'sport')
    sport.sportNavigationPanel().should('be.visible')
    sport.footballBtn().eq(0).should('be.visible').click()
    cy.url().should('contain', 'sport/football')
    sport.footballNavigationPanel().should('be.visible')
    sport.scoresAndFixturesBtn().eq(0).should('be.visible').click()

}


export function searchCompetitionOrTeam() {
    sport.teamOrCompetitionSearchField().should('be.visible').clear().type(envVariables.scottish_championship)
    sport.searchChampionshipItem().eq(0).should('be.visible').click()
    cy.url().should('contain', '/scores-fixtures')
    sport.competitionOrTeamTitle().should('be.visible').contains(envVariables.scottish_championship + ' Scores & Fixtures')
    sport.monthInCalendar().contains('MAY').should('be.visible').click()

}

let scores = ['3', '0'] 

export function scoresCompare() {
    sport.firstTeamScoreValue().eq(0).should('be.visible').and('have.text', scores[0])
    sport.secondTeamScoreValue().eq(0).should('be.visible').and('have.text', scores[1])
    sport.firstTeamScoreValue().eq(0).click()
    cy.url().should('contain', 'sport/football/')
    sport.matchPage().eq(0).should('be.visible')
    sport.firstScoresOnMatchPage().eq(0).should('have.text', scores[0])
    sport.secondScoreOnMatchPage().eq(0).should('have.text', scores[1])
}

// export function ChampionshipName2() {
//     return 'Europa League'
// } 

export function searchCompetitionOrTeam2() {
    sport.teamOrCompetitionSearchField().should('be.visible').clear().type(envVariables.Europa_League)
    sport.searchChampionshipItem().eq(0).should('be.visible').click()
    cy.url().should('contain', '/scores-fixtures')
    sport.competitionOrTeamTitle().should('be.visible').contains(envVariables.Europa_League + ' Scores & Fixtures')
    sport.monthInCalendar().contains('APR').should('be.visible').click()
}

let scores2 = ['6', '2'] 

export function scoresCompare2() {
    sport.firstTeamScoreValue().eq(0).should('be.visible').and('have.text', scores2[0])
    sport.secondTeamScoreValue().eq(0).should('be.visible').and('have.text', scores2[1])
    sport.firstTeamScoreValue().eq(0).click()
    cy.url().should('contain', 'sport/football/')
    sport.matchPage().eq(0).should('be.visible')
    sport.firstScoresOnMatchPage().eq(0).should('have.text', scores2[0])
    sport.secondScoreOnMatchPage().eq(0).should('have.text', scores2[1])
}



// export function ChampionshipName3() {
//     return 'Liverpool'
// } 

export function searchCompetitionOrTeam3() {
    sport.teamOrCompetitionSearchField().should('be.visible').clear().type(envVariables.Liverpool)
    sport.searchChampionshipItem().eq(0).should('be.visible').click()
    cy.url().should('contain', '/scores-fixtures')
    sport.competitionOrTeamTitle().should('be.visible').contains(envVariables.Liverpool + ' Scores & Fixtures')
    sport.monthInCalendar().contains('MAR').should('be.visible').click()
}

let scores3 = ['0', '1'] 

export function scoresCompare3() {
    sport.firstTeamScoreValue().eq(0).should('be.visible').and('have.text', scores3[0])
    sport.secondTeamScoreValue().eq(0).should('be.visible').and('have.text', scores3[1])
    sport.firstTeamScoreValue().eq(0).click()
    cy.url().should('contain', 'sport/football/')
    sport.matchPage().eq(0).should('be.visible')
    sport.firstScoresOnMatchPage().eq(0).should('have.text', scores3[0])
    sport.secondScoreOnMatchPage().eq(0).should('have.text', scores3[1])
}



// export function ChampionshipName4() {
//     return 'Levante'
// } 

export function searchCompetitionOrTeam4() {
    sport.teamOrCompetitionSearchField().should('be.visible').clear().type(envVariables.Levante)
    sport.searchChampionshipItem().eq(0).should('be.visible').click()
    cy.url().should('contain', '/scores-fixtures')
    sport.competitionOrTeamTitle().should('be.visible').contains(envVariables.Levante + ' Scores & Fixtures')
    sport.monthInCalendar().contains('FEB').should('be.visible').click()
}

let scores4 = ['1', '1'] 

export function scoresCompare4() {
    sport.firstTeamScoreValue().eq(0).should('be.visible').and('have.text', scores4[0])
    sport.secondTeamScoreValue().eq(0).should('be.visible').and('have.text', scores4[1])
    sport.firstTeamScoreValue().eq(0).click()
    cy.url().should('contain', 'sport/football/')
    sport.matchPage().eq(0).should('be.visible')
    sport.firstScoresOnMatchPage().eq(0).should('have.text', scores4[0])
    sport.secondScoreOnMatchPage().eq(0).should('have.text', scores4[1])
}



// export function ChampionshipName5() {
//     return 'French Coupe de France'
// } 

export function searchCompetitionOrTeam5() {
    sport.teamOrCompetitionSearchField().should('be.visible').clear().type(envVariables.French_Coupe_de_France)
    sport.searchChampionshipItem().eq(0).should('be.visible').click()
    cy.url().should('contain', '/scores-fixtures')
    sport.competitionOrTeamTitle().should('be.visible').contains(envVariables.French_Coupe_de_France + ' Scores & Fixtures')
    sport.monthInCalendar().contains('JAN').should('be.visible').click()
}

let scores5 = ['1', '1'] 

export function scoresCompare5() {
    sport.firstTeamScoreValue().eq(0).should('be.visible').and('have.text', scores5[0])
    sport.secondTeamScoreValue().eq(0).should('be.visible').and('have.text', scores5[1])
    sport.firstTeamScoreValue().eq(0).click()
    cy.url().should('contain', 'sport/football/')
    sport.matchPage().eq(0).should('be.visible')
    sport.firstScoresOnMatchPage().eq(0).should('have.text', scores5[0])
    sport.secondScoreOnMatchPage().eq(0).should('have.text', scores5[1])
}

