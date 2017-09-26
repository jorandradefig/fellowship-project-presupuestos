import { Presupuestos.RedPage } from './app.po';

describe('presupuestos.red App', () => {
  let page: Presupuestos.RedPage;

  beforeEach(() => {
    page = new Presupuestos.RedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
