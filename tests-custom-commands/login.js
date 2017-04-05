
exports.command = function() {

    var URL = 'https://shipvio.qestapp.cz/';
    var URL_BUILD = 'http://localhost:8080/hauler/signIn';
    var EMAIL = 'kubis.honza@gmail.com';
    var PASSWORD = 'hesloheslo';

    this
        .url(URL)
        .setValue('#name', EMAIL)
        .setValue('#password', PASSWORD)
        .click('button[type=submit]')
        return this;
};
