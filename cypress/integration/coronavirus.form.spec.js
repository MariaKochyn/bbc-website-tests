import { goToNewsPage, openMainPage } from "../models/news.methods";
import { emptyStoryField, goToForm, invalidEmail, submitForm, uncheckedCheckbox } from "../models/coronavirusForm.methods";


describe('Coronavirus form tests', () => {
    before(() => {
        openMainPage()
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