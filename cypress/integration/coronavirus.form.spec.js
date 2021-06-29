import news from "../page objects/news.page";
import form from "../page objects/coronavirusForm.page";
import { goToNewsPage } from "../models/news.methods";
import { emptyStoryField, goToForm, invalidEmail, submitForm, uncheckedCheckbox } from "../models/coronavirusForm.methods";
const nws = new news;
const frm = new form;

describe('Coronavirus form tests', () => {
    before(() => {
        goToNewsPage()
    })

    it('Go to Form', () => {
        goToForm()
    });

    it('Submit Form', () => {
        submitForm()
    });

    it('Empty Tell us your story text area (negative)', () => {
        emptyStoryField()
    });

    it('Invalid email (negative)', () => {
        invalidEmail()
    });

    it('Unchecked checkbox (negative)', () => {
        uncheckedCheckbox()
    });


})