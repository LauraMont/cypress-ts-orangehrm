/// <reference types="cypress" />

import { loginPage } from '@pages/Login.Page';

// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add('login', (username: string, password: string) => {
	cy.session('login', () => {
		//* POM
		cy.visit('/');
		//todo: Enter username
		loginPage.enterUsername(username);
		//todo: Enter password
		loginPage.enterPassword(password);
		//todo: Submit to Login
		loginPage.submitLogin();
		//todo: Validate we are logged in
		cy.url().should('contain', 'dashboard/index');
	});
});
Cypress.Commands.add('loginSucessful', () => {
	cy.login('Admin', 'admin123');
});
