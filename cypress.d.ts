import { mount } from 'cypress/react';

declare global {
	namespace Cypress {
		interface Chainable {
			mount: typeof mount;

			login(username: string, password: string): void;
			loginSucessful(): void;
		}

		interface page {
			buzz: '/buzz/viewBuzz';
		}

		interface api {
			domain: 'https://api.ilovepdf.com/v1';
			auth: '/auth';
			start: '/start';
			upload: '/upload';
			process: '/process';
			download: '/download';
		}
	}
}
