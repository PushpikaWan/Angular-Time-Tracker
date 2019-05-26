import { browser } from "protractor";
import { AppProjectPage } from "../pageObjects/app-project-page.po";

describe('workspace side bar nevigation', () => {
    let page: AppProjectPage;

    beforeEach(() => {
        page = new AppProjectPage();
    });
    it('should navigate to project page', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/projects");
    });

    it('should have project as a header content', () => {
        page.navigateTo();
        expect(page.getPageHeader().getText()).toEqual("Projects");
    });
});  