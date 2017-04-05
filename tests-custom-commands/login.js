
exports.command = function() {

    var URL = '';
    var EMAIL = '';
    var PASSWORD = '';

    this
        .url(URL)
        .setValue('', EMAIL)
        .setValue('', PASSWORD)
        .click('')
        return this;
};
