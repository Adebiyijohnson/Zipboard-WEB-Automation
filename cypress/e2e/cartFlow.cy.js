import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';
import CartPage from '../support/pageObjects/CartPage';

describe('TutorialsNinja Demo Site - Cart Flow (POM)', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('should not login with invalid credentials', () => {
    HomePage.clickMyAccount();
    HomePage.clickLogin();

    LoginPage.enterEmail('invalid@example.com');
    LoginPage.enterPassword('wrongpassword');
    LoginPage.submit();

    LoginPage.assertLoginError();
  });

  it('should login with valid credentials', () => {
    HomePage.clickMyAccount();
    HomePage.clickLogin();

    LoginPage.enterEmail('adebiyijohnson164@gmail.com');
    LoginPage.enterPassword('Password@1');
    LoginPage.submit();

    LoginPage.assertLoginSuccess();
  });

  it('should add a product to cart', () => {
    HomePage.addFirstProductToCart();
    CartPage.assertProductAdded();
  });

  it('should update quantity in cart', () => {
    CartPage.openCartDropdown();
    CartPage.viewCart();

    CartPage.updateFirstProductQty(2);
    CartPage.assertCartUpdated();
  });

  it('should remove product from cart', () => {
    CartPage.goToCart();
    CartPage.removeFirstProduct();
    CartPage.assertCartIsEmpty();
  });
});
