const { $ } = require('@wdio/globals')
const Page = require('./page');

class VerificationPage extends Page {
    
    get accountName () {
        return $('[Class*="loggedin-username"]');
    }
}

module.exports = new VerificationPage();
