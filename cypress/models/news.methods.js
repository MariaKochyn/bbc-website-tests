import NewsPage from "../page objects/news.page";

const news = new NewsPage();
const envVariables = Cypress.env();

export function openMainPage() {
    cy.visit(envVariables.dev.url)
}

export function goToNewsPage() {
    news.newsBtn().should('be.visible').contains('News').click()
    cy.url().should('eq', 'https://www.bbc.com/news')
    news.headlineArticle().should('be.visible')
}


export function headlineValue() {
    news.headingTitle().should('have.text', 'Rescuers listen for signs of life in Miami rubble')
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
    news.articleRegionLink().then((articleRegionLink) => {
         news.headingTitle().then(($temp) => {
              const txt = $temp.text()
         news.searchField().type(`${txt}`+'{enter}')
})
    cy.url().should('include', 'search?q=')
    news.foundArticle().should('be.visible')
    news.foundArticleCategory().should('be.visible').and('have.text', 'News')

        news.foundArticleRegion().then((foundArticleRegion) => {
            expect(articleRegionLink.text()).to.equal(foundArticleRegion.text())
        })
    })




}

