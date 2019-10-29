var conchAudio = require('./conchAudio.js')
var console = require('console')

module.exports.function = function findConch(searchTerm) {
  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let conchAudioFound = []
  const probability = { 'yes': 0.35, 'again':0.40, 'no': 1 }
  var decisionVal = 0;
  var topic = '';
  var temp = Math.random();
  searchTerm = searchTerm[0];
  console.log(temp)

  if(temp <= probability.yes){
    console.log("돼")
    topic = 'yes'; //안돼
  }
  else if(temp <= probability.again){
    console.log("다시")
    topic = 'again'
  }
  else if(temp <= probability.no){
    console.log("안돼")
    topic = 'no'
  }
  if (searchTerm) {
    console.log(searchTerm = encodeURI(searchTerm).replace(/%/gi, "").toLowerCase())
    for (let i = 0; i < searchTerm.length; i++) {
      decisionVal += searchTerm.charCodeAt(i)
    }
    decisionVal += doRandom(0, decisionVal)
    decisionVal %= (conchAudio.audioItems.length - 2);
    while((topic == 'yes' && decisionVal >= 2) || (topic == 'no' && decisionVal < 2)){
      console.log(topic + " 인데 decisionVal : " + decisionVal + "이라서 다시 돌림")
      decisionVal += doRandom(0, decisionVal)
      decisionVal %= (conchAudio.audioItems.length - 2);
    }
  }
  else {
    if(topic == 'yes')
      decisionVal = doRandom(0, 1)
    else if(topic == 'no')
      decisionVal = doRandom(3, 11-2) // 둘다, 굶어 제외
    else if(topic == 'again')
      decisionVal = 2
  }
  console.log("decisionVal : " + decisionVal)
  return [conchAudio.audioItems[decisionVal]]
}

var doRandom = function (min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}
