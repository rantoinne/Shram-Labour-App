import LocalizedStrings from 'react-native-localization';

let StringsEN, StringsIN;

StringsEN = require('./english.json')
StringsIN = require('./hindi.json')

let Strings = new LocalizedStrings({
  English: StringsEN,
  Hindi: StringsIN
});

module.exports = { Strings };