const utils = require('../utils/elementsUtils');
const WebDriver = require('webdriver');

class HomePageRegister {
	locators = {
		currentAge: 'input[id="current-age"]',
		retirementAge: 'input[id="retirement-age"]',
		currentIncome: 'input[id="current-income"]',
		spouseIncome: 'input[id="spouse-income"]',
		currentRetirementSavingBalance: 'input[id="current-total-savings"]',
		currentAnnualSaving: 'input[id="current-annual-savings"]',
		savingIncreaseRate: 'input[id="savings-increase-rate"]',
		socialSecurityIncome: 'label[for="yes-social-benefits"]',
		maritalStatus: 'label[for="married"]',
		socialSecurityOverride: 'input[id="social-security-override"]',
		adjustDefaultValues: '//a[contains(text(),"Adjust default values")]',
		additionalIncome: 'input[id="additional-income"]',
		retirementDurantion: 'input[id="retirement-duration"]',
		includeInflation: 'label[for="include-inflation"]',
		retirementannualincome: 'input[id="retirement-annual-income"]',
		preRetirementRoi: 'input[id="pre-retirement-roi"]',
		postRetriementRoi: 'input[id="post-retirement-roi"]',
		saveChanges: '//button[contains(text(),"Save changes")]',
		calculate: '//button[contains(text(),"Calculate")]',
	};

	async navigateToHomePage() {
		await utils.visitPage('https://www.securian.com/insights-tools/retirement-calculator.html');
		await utils.maximizeBrowserWindow();
	}

	async registerForRetirement() {
		
		await utils.enterText(this.locators.currentAge, '29');		
		await utils.enterText(this.locators.retirementAge, '58');		
		await utils.clickElement(this.locators.currentIncome);
		await utils.enterText(this.locators.currentIncome, 2000);		
		await utils.clickElement(this.locators.spouseIncome);
		await utils.enterText(this.locators.spouseIncome, 2500);		
		await utils.clickElement(this.locators.currentRetirementSavingBalance);
		await utils.enterText(this.locators.currentRetirementSavingBalance, 1000);		
		await utils.clickElement(this.locators.currentAnnualSaving);
		await utils.enterText(this.locators.currentAnnualSaving, 3000);		
		await utils.clickElement(this.locators.savingIncreaseRate);
		await utils.enterText(this.locators.savingIncreaseRate, 200);		
		await utils.clickElement(this.locators.socialSecurityIncome);		
		await utils.clickElement(this.locators.maritalStatus);		
		await utils.clickElement(this.locators.socialSecurityOverride);
		await utils.enterText(this.locators.socialSecurityOverride, 200);		
		await utils.clickElement(this.locators.adjustDefaultValues);		
		await utils.clickElement(this.locators.additionalIncome);
		await utils.enterText(this.locators.additionalIncome, 12);		
		await utils.clickElement(this.locators.retirementDurantion);
		await utils.enterText(this.locators.retirementDurantion, 10);		
		await utils.clickElement(this.locators.includeInflation);		
		await utils.clickElement(this.locators.retirementannualincome);
		await utils.enterText(this.locators.retirementannualincome, 12);		
		await utils.clickElement(this.locators.preRetirementRoi);
		await utils.enterText(this.locators.preRetirementRoi, 12);	
		await utils.clickElement(this.locators.postRetriementRoi);
		await utils.enterText(this.locators.postRetriementRoi, 15);		
		await utils.clickElement(this.locators.saveChanges);	
		await utils.clickElement(this.locators.calculate);
	}
}
module.exports = new HomePageRegister();
