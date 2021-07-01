import news from "../page objects/news.page";
import { goToNewsPage, headlineValue, example, secondaryValues, secondTitleText, articleCategory, visitNewsPage, openMainPage, } from "../models/news.methods";
const News = new news;

describe('Testing articles on the News page', () => {
    before(() => {
        openMainPage()
    })

    it('Check headline name', () => {
        goToNewsPage()
        headlineValue()
    });

    // probably will be failed because of articles titles
    it('Check secondary titles', () => {
        secondaryValues(News.secondaryArticles(), News.articlesTitles())
    });

    it('First article in a category', () => {
        articleCategory()
    })

})