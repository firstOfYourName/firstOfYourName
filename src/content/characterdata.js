//CONSTANTS
const axios = require('axios');
const _ = require('lodash');
const apiLink = "https://www.anapioficeandfire.com/api/";


//array of major characters and their urls for API searches
const majorCharsArr = [
  //first list is in the quotes game
  {"character": "jaime", "url": "characters/529"},
  {"character": "littlefinger", "url": "characters/823"},
  {"character": "cersei", "url": "characters/238"},
  {"character": "renly", "url": "characters/862"},
  {"character": "sansa", "url": "characters/957"},
  {"character": "tyrion", "url": "characters/1052"},
  {"character": "hound", "url": "characters/955"},
  {"character": "brynden", "url": "characters/223"},
  {"character": "varys", "url": "characters/2069"},
  {"character": "bronn", "url": "characters/217"},
  {"character": "olenna", "url": "characters/"}, //NOT IN API
//below characters are not in the quotes game
  // {"character": "oberyn", "url": "characters/1770"},
  // {"character": "margaery", "url": "characters/16"},
  // {"character": "jon", "url": "characters/583"},
  // {"character": "danaerys", "url": "characters/1303"},
  // {"character": "jorah", "url": "characters/1560"},
  // {"character": "theon", "url": "characters/1022"},
  // {"character": "ned", "url": "characters/339"},
  // {"character": "arya", "url": "characters/148"},
  // {"character": "stannis", "url": "characters/1963"},
  // {"character": "catelyn", "url": "characters/232"},
  // {"character": "brienne", "url": "characters/216"},
];

//object that will be populated with character data
let characterDataObj = {
  "name": "",
  "culture": "",
  "born": "",
  "died": "",
  "titles": [],
  "aliases": [],
  "playedBy": []
}

//FUNCTIONS

// export function getChosenCharacterUrl () {
//   //get characterURL from user input (dropdown)
//   let chosenCharacterUrl = apiLink;
//   let chosenCharacter = "cersei"; //for testing; this will come from dropdown
//   let characterArrUrl = _.find(majorCharactersArr, ['character', chosenCharacter]).url;
//   chosenCharacterUrl += characterArrUrl;
//   return chosenCharacterUrl;
// };

// export function getChosenCharacterData () {
//   axios.get(getChosenCharacterUrl()).then((response) => {
//     characterDataObj.name = response.data.name;
//     characterDataObj.culture = response.data.culture;
//     characterDataObj.born = response.data.born;
//     characterDataObj.died = response.data.died;
//     characterDataObj.titles = response.data.titles;
//     characterDataObj.aliases = response.data.aliases;
//     characterDataObj.playedBy = response.data.playedBy;
//     console.log(characterDataObj);
//     return characterDataObj;
//   })
// };
