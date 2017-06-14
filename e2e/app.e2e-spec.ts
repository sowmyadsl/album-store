import { AlbumStorePage } from './app.po';

describe('album-store App', () => {
  let page: AlbumStorePage;

  beforeEach(() => {
    page = new AlbumStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
