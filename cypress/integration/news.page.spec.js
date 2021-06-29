import news from "../page objects/news.page";
import { goToNewsPage, headlineValue, example, secondaryValues, secondTitleText, articleCategory, visitNewsPage, } from "../models/news.methods";
const nws = new news;

describe('Testing articles on the News page', () => {
    before(() => {
        visitNewsPage()
    })

    it('Check headline name', () => {
        goToNewsPage()
        headlineValue()
    });

    // probably will be failed because of articles titles
    it('Check secondary titles', () => {
        secondaryValues(nws.secondaryArticles(), nws.articlesTitles())
    });

    it('First article in a category', () => {
        articleCategory()
    })

    
  

})