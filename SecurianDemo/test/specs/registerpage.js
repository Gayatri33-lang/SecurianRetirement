const utils = require('../../utils/elementsUtils');
const page = require('../../securianpages/page');

describe('Suite to register for retirement plan -- ', async () => {
	it('Navigating to Home page', async () => {
		await page.navigateToHomePage();
		await page.registerForRetirement();
	});
});
