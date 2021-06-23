import news from "../page objects/newsElements";
import form from "../page objects/submitFormElements";
import { goToNewsPage } from "../models/news";
import { goToForm, submitForm } from "../models/submitForm";
const nws = new news;
const frm = new form;

describe('Go to News page', () => {
    before(() => {
        goToNewsPage()
    })

    it('Go to Form', () => {
        goToForm()
    });

    it('Submit Form', () => {
        submitForm()
    });


})