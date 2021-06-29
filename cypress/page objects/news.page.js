export default class news {

    newsBtn() {
        return cy.get(`.orb-nav-newsdotcom`)
    }

    headlineArticle() {
        return cy.get('.nw-c-top-stories-primary__story')
    }

    headingTitle() {
        return cy.get('[class="gs-c-promo-heading__title gel-paragon-bold nw-o-link-split__text"]').eq(0)
    }


    secondaryArticles(){
        return [
            "[data-entityid='container-top-stories#2']",
            "[data-entityid='container-top-stories#3']",
            "[data-entityid='container-top-stories#4']",
            "[data-entityid='container-top-stories#5']",
            "[data-entityid='container-top-stories#6']"
        ]
    }

    // should be changed due to expired articles titles
    articlesTitles(){
        return [
            "Child labour: The hidden costs of Covid",
            "Deadly tornado wreaks havoc in Czech villages",
            "Belarus jet drama dissident moved to house arrest",
            "Travel bosses say UK green list is not enough",
            "Britney: 'Sorry for pretending I've been OK'"
        ]
    }
    
    // should be changed due to expired article
    articleRegionLink() {
        return cy.get('.gs-c-section-link.gs-c-section-link--truncate.nw-c-section-link.nw-o-link.nw-o-link--no-visited-state').eq(0)
    }
  
    searchField() {
        return cy.get('#orb-search-q')
    }

   foundArticle() {
       return cy.xpath(`//div[@class='ssrcss-1v7bxtk-StyledContainer enjd40x0']//div[@class='ssrcss-1ocoo3l-Wrap e42f8511']`)
   }

   foundArticleCategory() {
        return cy.xpath(`//div[@class='ssrcss-18k1qz4-Stack e1y4nx260']//div[2]//dd[1]`)
   }

    // should be changed due to expired article
   foundArticleRegion() {
       return cy.xpath(`//span[normalize-space()='Europe']`)
   }

  
}