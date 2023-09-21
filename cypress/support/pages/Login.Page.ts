class LoginPage {
	usernameInput: () => Cypress.Chainable<JQuery<HTMLElement>>;
	passwordInput: () => Cypress.Chainable<JQuery<HTMLElement>>;
	submitBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;
	forgotPassLink: () => Cypress.Chainable<undefined>;

	constructor() {
		this.usernameInput = () => cy.get('[name="username"]');
		this.passwordInput = () => cy.get('[type="password"]');
		this.submitBtn = () => cy.get('[type="submit"]');
		this.forgotPassLink = () => cy.contains('Forgot your password?');
	}

	//* Methods
	async enterUsername(text: string) {
		this.usernameInput().type(text);
	}
	async enterPassword(text: string) {
		this.passwordInput().type(text);
	}
	async submitLogin() {
		this.submitBtn().click();
	}
}
export const loginPage = new LoginPage();
