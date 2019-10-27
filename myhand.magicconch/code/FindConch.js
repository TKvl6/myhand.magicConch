var conchAudio = require('./conchAudio.js')
var console = require('console')

module.exports.function = function findMeow(searchTerm) {
  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let conchAudioFound = []
  var decisionVal = 0;

  if (searchTerm) {
    console.log(searchTerm = encodeURI(searchTerm).replace(/%/gi, "").toLowerCase())
    for (let i = 0; i < searchTerm.length; i++) {
      decisionVal += searchTerm.charCodeAt(i)
    }
    decisionVal %= conchAudio.audioItems.length;
  } 
  else {
    decisionVal = doRandom(0, conchAudio.audioItems.length)
  }
  
  console.log("decisionVal : " + decisionVal)
  return conchAudio[decisionVal]
}

var doRandom = function (min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}
