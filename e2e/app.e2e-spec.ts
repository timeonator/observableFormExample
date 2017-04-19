import { ObservableFoormExamplePage } from './app.po';

describe('observable-foorm-example App', function() {
  let page: ObservableFoormExamplePage;

  beforeEach(() => {
    page = new ObservableFoormExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
