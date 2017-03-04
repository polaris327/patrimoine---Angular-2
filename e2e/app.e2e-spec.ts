import { PatrimoinePage } from './app.po';

describe('patrimoine App', () => {
  let page: PatrimoinePage;

  beforeEach(() => {
    page = new PatrimoinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
