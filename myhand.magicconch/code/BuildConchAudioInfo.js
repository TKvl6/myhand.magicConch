var console = require('console')

module.exports.function = function buildMeowAudioInfo(conchAudio) {
  var audioInfo = {};
  console.log(conchAudio + "conchAudio")
  /* Since meowAudio are already in audioItem format this mapping is not necessary, but
  this demonstrates how to build the right structure for audioItem and audioInfo */
  audioInfo.audioItem = conchAudio.map(function (audioItem) {
    let audioItemStructure = { //required properties of audioItem
      id: audioItem.id,
      stream: audioItem.stream,
      title: audioItem.title,
      artist:audioItem.artist,
      albumArtUrl: audioItem.albumArtUrl,
      desc : audioItem.desc
    }
    //optional properties of audioItem
    if (audioItem.subtitle) {
      audioItemStructure.subtitle = audioItem.subtitle
    }
    if (audioItem.albumName) {
      audioItemStructure.albumName = audioItem.albumName
    }
    if (audioItem.duration) {
      audioItemStructure.duration = audioItem.duration
    }
    if (audioItem.desc) {
      audioItemStructure.desc = audioItem.desc
    }
    return audioItemStructure
  });
  audioInfo.category = 'RADIO';
  audioInfo.displayName = 'Conch Capsule';
  audioInfo.repeatMode = 'OFF';
  audioInfo.doNotWaitForTTS = true;

  console.log(audioInfo)
  return audioInfo;
}

