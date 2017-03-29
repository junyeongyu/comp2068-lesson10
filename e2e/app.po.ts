import { browser, element, by } from 'protractor';

export class Comp2068Lesson10Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
