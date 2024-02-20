const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const VerificationPage = require('../pageobjects/verification.page')

describe('Travelio - Authentication Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        if(await LoginPage.dismissPopup.isDisplayed()){
            await LoginPage.dismissPopup.click()
        }
        await LoginPage.loginPageButton.click()
        await LoginPage.login('abdiansyahzexu@gmail.com', 'Bismillah123')
        expect(await VerificationPage.accountName.getText()).toBe('Abdiansyah')
    })
})

