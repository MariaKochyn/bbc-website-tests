import news from "../page objects/newsElements";
import form from "../page objects/submitFormElements";
import { goToNewsPage } from "../models/news";
import { emptyStoryField, goToForm, invalidEmail, submitForm, uncheckedCheckbox } from "../models/submitForm";
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