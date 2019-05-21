import { browser, by, element, ElementArrayFinder } from 'protractor';
import { AppTaskPage } from '../pageObjects/app-task-page.po';
import { Alert } from 'selenium-webdriver';

describe('workspace side bar nevigation', () => {
  let page: AppTaskPage;

  beforeEach(() => {
    page = new AppTaskPage();
  });
  
  afterEach(function() {
    // browser.executeScript('window.sessionStorage.clear();');
    // browser.executeScript('window.localStorage.clear();');
    browser.restart();
  });

  it('should navigate to task page', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/tasks");
  });

  it('should description input field contains entered value', () => {
    page.navigateTo();
    page.getTaskInputSectionDescriptionInputField().sendKeys("Test Description");
    expect(page.getTaskInputSectionDescriptionInputField().getAttribute('value')).toEqual("Test Description");
  });

  it('should project picker field contains selected value', () => {
    page.navigateTo();
    page.getTaskInputProjectSelector().click();
    // expect(page.getTaskInputProjectSelector().getText()).toEqual("No Project");
    // expect(page.getTaskInputProjectSelector().getAttribute('value')).toEqual("Test Description");
  });

  it('should tag picker field contains selected value', () => {
    page.navigateTo();
    page.getTaskInputProjectSelector().click();
    // expect(page.getTaskInputProjectSelector().getText()).toEqual("No Project");
    // expect(page.getTaskInputProjectSelector().getAttribute('value')).toEqual("Test Description");
  });

  it('should save task data equal to input task data', () => {
    browser.ignoreSynchronization = true
    page.navigateTo();
     //before check task list size
    expect(page.getSavedTaskItemList().count()).toEqual(0);
    page.getTaskInputSectionDescriptionInputField().sendKeys("Test Description");
    page.getTaskInputStartButton().click();
    browser.sleep(3000);
    page.getTaskInputStartButton().click();
    browser.sleep(5000);
    //after check task list size
    expect(page.getSavedTaskItemList().count()).toEqual(1);
    //check saved item description
    expect(page.getSavedTaskDescriptionField().getAttribute('value')).toEqual("Test Description");
  });

  it('should delete task when delete clicked', () => {
    browser.ignoreSynchronization = true
    page.navigateTo();
     //before check task list size
    expect(page.getSavedTaskItemList().count()).toEqual(0);
    page.getTaskInputSectionDescriptionInputField().sendKeys("Test Description");
    page.getTaskInputStartButton().click();
    browser.sleep(3000);
    page.getTaskInputStartButton().click();
    browser.sleep(8000);
    //after check task list size
    expect(page.getSavedTaskItemList().count()).toEqual(1);
    page.getDeleteItemButtonFromTask().click();
    browser.sleep(3000);
    let ale:Alert = browser.switchTo().alert();
    ale.accept();
    browser.sleep(5000);
     //after delete - check task list size
     expect(page.getSavedTaskItemList().count()).toEqual(0);

  });

  it('should restart saved task and create new task when save it', () => {
    browser.ignoreSynchronization = true
    page.navigateTo();
     //before check task list size
    expect(page.getSavedTaskItemList().count()).toEqual(0);
    page.getTaskInputSectionDescriptionInputField().sendKeys("Test Description");
    page.getTaskInputStartButton().click();
    browser.sleep(3000);
    page.getTaskInputStartButton().click();
    browser.sleep(5000);
    //after check task list size
    expect(page.getSavedTaskItemList().count()).toEqual(1);
    //check saved item description
    expect(page.getSavedTaskDescriptionField().getAttribute('value')).toEqual("Test Description");

    //restart task
    page.getStartItemButtonFromTask().click();
    browser.sleep(3000);
    page.getTaskInputSectionDescriptionInputField().sendKeys(" new...");
    page.getTaskInputStartButton().click();
    browser.sleep(3000);
    page.getTaskInputStartButton().click();
    browser.sleep(5000);

    //after check task list size should be 2
    expect(page.getSavedTaskItemList().count()).toEqual(2);
     //check saved item descriptions - test those two entries as well by match any
    //  expect(page.getSavedTaskDescriptionField().getAttribute('value')).toEqual("Test Description new...");
  });
 
});