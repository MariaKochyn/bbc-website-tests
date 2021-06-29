export default class sport {

    sportBtn() {
        return cy.get('.orb-nav-sport').eq(0)
    }

    sportNavigationPanel() {
        return cy.get('.gel-wrap.sp-c-sport-navigation__wrapper')
    }

    footballBtn() {
        return cy.get('[data-stat-title="Football"]').eq(0)
    }

    footballNavigationPanel() {
        return cy.get('#sp-nav-secondary')
    }

    scoresAndFixturesBtn() {
        return cy.get('.sp-c-sport-navigation__link.sp-c-sport-navigation__link--secondary.qa-secondary-item.sp-nav-click-stat').eq(0)
    }

    teamOrCompetitionSearchField() {
        return cy.get('#downshift-0-input')
    }

    competitionOrTeamTitle() {
        return cy.get('#page')
    }

    ScottishChampionshipItem() {
        return cy.get('.sp-c-search__result-item')
    }
}