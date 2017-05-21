import { NgSpinPage } from './app.po';

describe('ng-spin App', () => {
  let page: NgSpinPage;

  beforeEach(() => {
    page = new NgSpinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
