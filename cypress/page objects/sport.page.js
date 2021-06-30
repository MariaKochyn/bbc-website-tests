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

    searchChampionshipItem() {
        return cy.get('.sp-c-search__result.gs-o-list-ui__item.gs-o-list-ui__item--flush').eq(0)
    }

    mayInCalendar() {
        return cy.get('#sp-timeline-past-dates>.sp-c-date-picker-timeline__item:nth-child(12)')
    }

    firstTeamScoreValue() {
        return cy.get('.sp-c-fixture__number--home.sp-c-fixture__number--ft').eq(0)
    }

    secondTeamScoreValue() {
        return cy.get('.sp-c-fixture__number.sp-c-fixture__number--away.sp-c-fixture__number--ft').eq(0)
    }

    matchPage() {
        return cy.get('.sp-c-fixture__block-link').eq(0)
    }

    matchHeader() {
        return cy.get('.sp-c-fixture.sp-c-fixture--live-session-header.gel-wrap')
    }


}

