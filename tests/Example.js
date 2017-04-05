
var URL = 'https://www.google.cz/?gfe_rd=cr&ei=5cTkWNrPIcnV8gf0xIawBA';
var searchBar = '#lst-ib';
var vyhledat = '#_fZl';

module.exports = {

  'Vyhledat neco v google search' : function (client) {
    client
      .url(URL)
      .setValue(searchBar, 'goooooooglleeeee')
      .click(vyhledat)
      .end();
  }
};
