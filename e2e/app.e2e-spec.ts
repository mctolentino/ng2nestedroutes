import { Ng2nestedPage } from './app.po';

describe('ng2nested App', function() {
  let page: Ng2nestedPage;

  beforeEach(() => {
    page = new Ng2nestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
