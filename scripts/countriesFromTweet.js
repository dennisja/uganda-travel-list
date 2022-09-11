const fs = require('fs');
const path = require('path');
const countries = require('../src/data/countries.json');

// Twee
// https://mobile.twitter.com/jonahkirabo/status/1547127420842647553

const countryCodes = Object.entries(countries).reduce(
  (a, [key, value]) => ((a[value] = key), a),
);

const MESSAGES = [
  `1.  Antigua and Barbuda - 1 month 
    2. Barbados - 6 months
    3. Burundi
    4. Bermuda - 6 months
    5. Bahamas- 3 months
    6. Botswana - 3 months 
    7. Belize - 1 month
    8. Cook Islands - 21 days 
    9. Dominica - 21 days`,

  `10.Ecuador - 3 months
  11.Eritrea - 1 month 
   12.Fiji - 4 months 
   13.Federated States of Micronesia - 1 month 
   14.Grenada - 3 months 
   15.Gambia - 3 months 
   16.Hong Kong- 1 month 
   17. Haiti - 3 months 
   18.Jamaica - 6 months 
   19.Kenya - 3 months
   20.Saint Kitts and Nevis - 3 months 
   2l.Lesotho - 14 days`,

  `22.Montserrat - 3 months 
  23.Mauritius - 2 months
   24.Malawi - 3 months 
   25.Malaysia - 2 months 
   26.Niue - 1 month
   27. Philippines - 21 days 
   28.Kosovo - 3 months 
   29.Rwanda - 6 months 
   30.Singapore - 1 month 
   3l.El Salvador
   32.Swaziland - 1 month
   33.Turks and Caicos Islands - 1 month`,

  `34.Tanzania - 3 months
35.Saint Vincent and the Grenadines - 1 month 
36. Virgin Islands (British)
37. Vanuatu - 1 month
38.Zambia - 3 months
 39.Nicaragua
40.Armenia - 120 Days
4l.Azerbaijan - 1 month
42.Bangladesh - 3 months
43.Belarus
44.Djibouti - 1 month`,

  `45.Egypt - 15 Days - (only valid for south Sinai resorts ONLY) 
  46.Georgia
47.Iraq
48.Jordan
49.Cambodia - 1 month
50.Comoros
5l.Laos - 1 month
52.Saint Lucia - 6 weeks
53.Madagascar - 3 months
54.Macau
55.Maldives - 30 Days
56.Mozambique
57.Nepal
58.Nauru
59.Palau - 1 month`,

  `60.Seychelles - 1 month
61.Sao Tome and Principe - 1 month - (reserve with airline) 
62.Togo - 1 week
63.East Timor - 1 month
64.Tuvalu - 1 month
65.Samoa - 2 months`,
];

const parseCountry = phrase => {
  const [country, duration = '', note = ''] = phrase.split('-');
  const [, countryName] = country.split('.');
  const [count, unit = ''] = duration.trim().split(' ');
  return {
    countryName: countryName.trim(),
    duration: {
      value: count.trim() && parseInt(count.trim()),
      unit: unit.trim().toLowerCase().replace('s', ''),
    },
    note: note.trim().replace(/[)(]/gi, ''),
    countryCode: countryCodes[countryName.trim()],
  };
};

const allCountries = MESSAGES.join('\n').split('\n').map(parseCountry);

fs.writeFileSync(
  path.join(__dirname, '../src/data/travelCountries.json'),
  JSON.stringify(allCountries),
  {
    flag: 'w',
    encoding: 'utf-8',
  },
);
