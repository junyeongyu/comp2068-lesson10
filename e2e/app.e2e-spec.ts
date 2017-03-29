import { Comp2068Lesson10Page } from './app.po';

describe('comp2068-lesson10 App', () => {
  let page: Comp2068Lesson10Page;

  beforeEach(() => {
    page = new Comp2068Lesson10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
