import { browser, by, element } from 'protractor';

export class AppSideBarPage {
  navigateTo() {
    return browser.get('/');
  }

  getSideBarHeader() {
    return element(by.css('app-root app-side-bar h2'));
  }

  getSideBarListElements() {
    return element.all(by.css('app-root app-side-bar .list-group .list-group-item'));
  }

  
}
