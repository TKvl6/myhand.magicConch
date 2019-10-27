var conchAudio = require('./conchAudio.js')
var console = require('console')

module.exports.function = function findConch(searchTerm) {
  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let conchAudioFound = []
  var decisionVal = 0;

  if (searchTerm) {
    console.log(searchTerm = encodeURI(searchTerm).replace(/%/gi, "").toLowerCase())
    for (let i = 0; i < searchTerm.length; i++) {
      decisionVal += searchTerm.charCodeAt(i)
    }
    decisionVal += doRandom(0, decisionVal)
    decisionVal %= conchAudio.audioItems.length;
  } 
  else {
    decisionVal = doRandom(0, conchAudio.audioItems.length)
  }
  
  return [conchAudio.audioItems[decisionVal]]
}

var doRandom = function (min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}
