import { SinapsiPage } from './app.po';

describe('sinapsi App', () => {
  let page: SinapsiPage;

  beforeEach(() => {
    page = new SinapsiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
