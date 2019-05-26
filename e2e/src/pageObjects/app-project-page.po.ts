import { browser, by, element } from 'protractor';

export class AppProjectPage {
  navigateTo() {
    return browser.get('/projects');
  }

  getPageHeader() {
    return element(by.css('app-root app-project-page h5'));
  }

  
}