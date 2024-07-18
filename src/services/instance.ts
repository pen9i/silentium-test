/* eslint-disable no-console */
import ky from 'ky';

// const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}/`;
const prefixUrl = 'https://hacker-news.firebaseio.com/v0/';

export const instance = ky.extend({
	prefixUrl,
	headers: {
		Accept: 'application/json',
	},
	hooks: {
		beforeRequest: [
			request => {
				// Highlight the request details
				console.log(
					'%cMaking request to:',
					'color: blue; font-weight: bold;',
					request.url,
				);
			},
		],
	},
	throwHttpErrors: true,
});
