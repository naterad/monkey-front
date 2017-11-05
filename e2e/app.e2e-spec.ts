import { NewFrontPage } from './app.po';

describe('new-front App', () => {
  let page: NewFrontPage;

  beforeEach(() => {
    page = new NewFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
