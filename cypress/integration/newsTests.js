import news from "../page objects/newsElements";
import { goToNewsPage, headlineValue, example, secondaryValues, secondTitleText, articleCategory, } from "../models/news";
const nws = new news;

describe('Go to News page', () => {
    before(() => {
        goToNewsPage()
    })

    it('Check headline name', () => {
        headlineValue()
    });

    // probably will be failed because of article titles
    it('Check secondary titles', () => {
        secondaryValues(nws.secondaryArticles(), nws.articlesTitles())
    });

    it.only('First article in a category', () => {
        articleCategory()
    })

})