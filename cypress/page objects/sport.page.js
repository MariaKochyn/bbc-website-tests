export default class sport {

    sportBtn() {
        return cy.get('.orb-nav-sport')
    }

    sportNavigationPanel() {
        return cy.get('.gel-wrap.sp-c-sport-navigation__wrapper')
    }

    footballBtn() {
        return cy.get('[data-stat-title="Football"]')
    }

    footballNavigationPanel() {
        return cy.get('#sp-nav-secondary')
    }

    scoresAndFixturesBtn() {
        return cy.get('.sp-c-sport-navigation__link.sp-c-sport-navigation__link--secondary.qa-secondary-item.sp-nav-click-stat')
    }

    teamOrCompetitionSearchField() {
        return cy.get('#downshift-0-input')
    }

    competitionOrTeamTitle() {
        return cy.get('#page')
    }

    searchChampionshipItem() {
        return cy.get('.sp-c-search__result.gs-o-list-ui__item.gs-o-list-ui__item--flush')
    }

    mayInCalendar() {
        return cy.get('.gel-long-primer-bold.gs-u-display-block')
    }

    firstTeamScoreValue() {
        return cy.get('.sp-c-fixture__number--home.sp-c-fixture__number--ft')
    }

    secondTeamScoreValue() {
        return cy.get('.sp-c-fixture__number.sp-c-fixture__number--away.sp-c-fixture__number--ft')
    }

    matchPage() {
        return cy.get('.sp-c-fixture__wrapper')
    }

    matchHeader() {
        return cy.get('.sp-c-fixture.sp-c-fixture--live-session-header.gel-wrap')
    }

    firstScoresOnMatchPage() {
        return cy.get('.sp-c-fixture__number.sp-c-fixture__number--home.sp-c-fixture__number--ft')
    }

    secondScoreOnMatchPage() {
        return cy.get('.sp-c-fixture__number.sp-c-fixture__number--away.sp-c-fixture__number--ft')
    }

    aprilInCalendar() {
        return cy.get('.sp-c-date-picker-timeline__item-inner.false')
    }
    

}

