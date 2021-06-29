import news from "../page objects/news.page";

const News = new news();
const envVariables = Cypress.env();

export function visitNewsPage() {
    cy.visit(envVariables.dev.url)
}

export function goToNewsPage() {
    News.newsBtn().should('be.visible').contains('News').click()
    cy.url().should('eq', 'https://www.bbc.com/news')
    News.headlineArticle().should('be.visible')
}


export function headlineValue() {
    News.headingTitle().should('have.text', 'Rescuers listen for signs of life in Miami rubble')
}


export function example(news, title) {
    cy.get(news).should('exist').and('contain', title);
}
export function secondaryValues(news, title) {
    for (let i = 0; i < news.length || i < title.length; i++) {
        example(news[i], title[i])
    }
}


export function articleCategory() {
    News.articleRegionLink().then((articleRegionLink) => {
         News.headingTitle().then(($temp) => {
              const txt = $temp.text()
         News.searchField().type(`${txt}`+'{enter}')
})
    cy.url().should('include', 'search?q=')
    News.foundArticle().should('be.visible')
    News.foundArticleCategory().should('be.visible').and('have.text', 'News')

        News.foundArticleRegion().then((foundArticleRegion) => {
            expect(articleRegionLink.text()).to.equal(foundArticleRegion.text())
        })
    })




}

