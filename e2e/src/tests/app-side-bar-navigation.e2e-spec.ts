import { browser, by, element, ElementArrayFinder } from 'protractor';
import { AppSideBarPage } from '../pageObjects/app-side-bar.po';

describe('workspace side bar nevigation', () => {
  let page: AppSideBarPage;

  beforeEach(() => {
    page = new AppSideBarPage();
  });

  it('should display Cambio Time Tracker header as the first item', () => {
    page.navigateTo();
    expect(page.getSideBarHeader().getText()).toEqual('Cambio Time Tracker');
  });

  it('should display side bar item name correctly', () => {
    page.navigateTo();
    let list : ElementArrayFinder  = page.getSideBarListElements();
    expect(list.count()).toBe(6);
    expect(list.get(0).getText()).toBe('Dashboard');
    expect(list.get(1).getText()).toBe('Overview');
    expect(list.get(2).getText()).toBe('Projects');
    expect(list.get(3).getText()).toBe('Tags');
    expect(list.get(4).getText()).toBe('Profile');
    expect(list.get(5).getText()).toBe('Settings');
  });

  it('should nevigate tasks page when click dashboard item in sidebar', () => {
    page.navigateTo();
    let list : ElementArrayFinder  = page.getSideBarListElements();
    list.get(0).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/tasks");
  });

  it('should nevigate tasks page when click overview item in sidebar', () => {
    page.navigateTo();
    let list : ElementArrayFinder  = page.getSideBarListElements();
    list.get(1).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/tasks");
  });

  it('should nevigate projects page when click project item in sidebar', () => {
    page.navigateTo();
    let list : ElementArrayFinder  = page.getSideBarListElements();
    list.get(2).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/projects");
  });

  it('should nevigate tags page when click tag item in sidebar', () => {
    page.navigateTo();
    let list : ElementArrayFinder  = page.getSideBarListElements();
    list.get(3).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/tags");
  });

  it('should nevigate profile page when click profile item in sidebar', () => {
    page.navigateTo();
    let list : ElementArrayFinder  = page.getSideBarListElements();
    list.get(4).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/profile");
  });

  it('should nevigate to settings page when click setting item in sidebar', () => {
    page.navigateTo();
    let list : ElementArrayFinder  = page.getSideBarListElements();
    list.get(5).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/settings");
  });
});
