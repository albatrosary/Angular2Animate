import { Angular2LiteStartPage } from './app.po';

describe('angular2-lite-start App', function() {
  let page: Angular2LiteStartPage;

  beforeEach(() => {
    page = new Angular2LiteStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
