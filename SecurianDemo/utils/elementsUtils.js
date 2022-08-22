const path = require('path');
var os = require('os');

class ElementUtil {
	async clickElement(element, extraTime) {
		const webElement = await $(element);
		await this.waitUntilElementIsDisplayed(element);
		await this.waitUntilElementIsClickable(element);
		await webElement.click();
		if (extraTime !== null && typeof extraTime === 'number') await this.waitFor(extraTime);
		else await this.waitFor(1000);
	}

	async enterText(element, value) {
		const webElement = await $(element);
		await this.waitUntilElementIsDisplayed(element);
		await webElement.setValue(value);
		await this.waitFor(1000);
	}

	async visitPage(path) {
		await browser.url(path);
	}
	async waitForElementToDisplay(element) {
		const webElement = await $(element);
		await webElement.waitForDisplayed({ timeout: 10000 });
	}

	async waitUntilElementIsDisplayed(element) {
		const webElement = await $(element);
		await browser.waitUntil(
			async () => {
				return (await webElement.isDisplayed()) === true;
			},
			10000,
			`Waited for element "${element}" for 10 seconds`
		);
	}

	async maximizeBrowserWindow() {
		await browser.maximizeWindow();
	}

	async waitUntilElementIsClickable(element) {
		const webElement = await $(element);
		await browser.waitUntil(
			async () => {
				return (await webElement.isClickable()) === true;
			},
			10000,
			`Waited for element "${element}" for 10 seconds`
		);
	}

	async waitFor(timeOut) {
		await browser.pause(timeOut);
	}
}

module.exports = new ElementUtil();
