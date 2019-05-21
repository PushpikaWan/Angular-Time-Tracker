import { browser, by, element } from 'protractor';

export class AppTaskPage {
  navigateTo() {
    return browser.get('/tasks');
  }

  getSideBarHeader() {
    return element(by.css('app-root app-side-bar h2'));
  }

  private getTaskInputForm(){
    return element(by.css('app-root app-task-page app-task-input form'));
  }

  getSavedTaskItemList(){
    return element.all(by.css('app-root app-task-page app-task-list app-task-item'));
  }

  getTaskInputSectionDescriptionInputField() {
    return this.getTaskInputForm().element(by.css('.task-input-item'));
  }

  getTaskInputProjectSelector() {
    return this.getTaskInputForm().element(by.id('projectField'));
  }
  getTaskInputStartButton() {
    return this.getTaskInputForm().element(by.css('button'));
  }

  getSavedTaskDescriptionField(){
    return this.getSavedTaskItemList().get(0).element(by.css('input'));
  }

  getDeleteItemFromTask(){
    return this.getSavedTaskItemList().get(0).element(by.cssContainingText('mat-icon','delete'));
  }

  browserSleep(milli: number){
    browser.sleep(milli);
  }
   
}
