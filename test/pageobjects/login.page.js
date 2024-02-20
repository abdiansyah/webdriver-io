const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get dismissPopup () {
        return $('[Class*="fa fa-close"]')
    }

    get loginPageButton () {
        return $('#loginBtn')
    }

    get inputEmail () {
        return $('#login-email');
    }

    get inputPassword () {
        return $('#login-password');
    }

    get loginButton () {
        return $('#login-modal-btn');
    }

    async login (username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();