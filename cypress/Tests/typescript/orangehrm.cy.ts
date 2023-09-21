import { buzz } from '@pages/Buzz.Page';
const page = Cypress.env('ep') as Cypress.page;

describe('Testing Orange', () => {
	beforeEach('', () => {
		cy.loginSucessful();
		cy.visit(page.buzz);
	});
	it('Validate Post a Message', () => {
		const givenMessage = 'Testing in Blackhole';
		const firtIndeed = 0;

		buzz.postNewMessage(givenMessage);
		buzz.getPost(firtIndeed).within(() => {
			buzz.getPostMsjValue().then(actualMessage => {
				cy.log(actualMessage);
				expect(actualMessage).equal(givenMessage);
			});
		});
	});
});
