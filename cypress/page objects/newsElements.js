export default class news {

    newsBtn() {
        return cy.get(`div[id='orb-nav-links'] li[class='orb-nav-newsdotcom'] a`)
    }

    headlineArticle() {
        return cy.xpath(`//div[@class='gs-c-promo-body gs-u-display-none gs-u-display-inline-block@m gs-u-mt@xs gs-u-mt0@m gel-1/3@m']//div//a[@class='gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-paragon-bold nw-o-link-split__anchor']`)
    }

    headingTitle() {
        return cy.xpath(`//div[@class='gs-c-promo-body gs-u-display-none gs-u-display-inline-block@m gs-u-mt@xs gs-u-mt0@m gel-1/3@m']//div//h3[@class='gs-c-promo-heading__title gel-paragon-bold nw-o-link-split__text'][normalize-space()='Russian jets and ships target British warship']`)
    }


    secondaryArticles(){
        return [
            "//div[@class='gel-layout__item nw-c-top-stories__secondary-item gel-1/1 gel-1/3@m gel-1/4@l nw-o-keyline nw-o-no-keyline@m gs-u-float-left nw-c-top-stories__secondary-item--1 gel-3/16@xxl gs-u-float-none@xxl gs-u-mt gs-u-mt0@xs']",
            "//div[@class='gel-layout__item nw-c-top-stories__secondary-item gel-1/1 gel-1/3@m gel-1/4@l nw-o-keyline nw-o-no-keyline@m gs-u-float-left nw-c-top-stories__secondary-item--2 gel-1/5@xxl']",
            "//div[@class='gel-layout__item nw-c-top-stories__secondary-item gel-1/1 gel-1/3@m gel-1/4@l nw-o-keyline nw-o-no-keyline@m gs-u-float-left nw-c-top-stories__secondary-item--3 gel-1/5@xxl']",
            "//div[@class='gel-layout__item nw-c-top-stories__secondary-item gel-1/1 gel-1/3@m gel-1/4@l nw-o-keyline nw-o-no-keyline@m gs-u-float-left nw-c-top-stories__secondary-item--4 gel-1/5@xxl']",
            "//div[@class='gel-layout__item nw-c-top-stories__secondary-item gel-1/1 gel-1/3@m gel-1/4@l nw-o-keyline nw-o-no-keyline@m gs-u-float-left nw-c-top-stories__secondary-item--5 gel-1/5@xxl']"
        ]
    }

    // should be changed due to expired articles titles
    articlesTitles(){
        return [
            "Russia says warning shots fired at British warship",
            "'Heartbreaking' conditions at US migrant camp",
            "US government blocks Iran-affiliated news websites",
            "‘Heartless’ state bars family from dying father",
            "Chris Brown accused of hitting woman in LA"
        ]
    }
    
    // should be changed due to expired article
    articleRegionLink() {
        return cy.xpath(`//div[@class='gs-c-promo-body gs-u-display-none gs-u-display-inline-block@m gs-u-mt@xs gs-u-mt0@m gel-1/3@m']//span[@aria-hidden='true'][normalize-space()='Europe']`)
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