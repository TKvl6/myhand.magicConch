var conchAudio = require('./conchAudio.js')

module.exports.function = function findMeow(searchTerm) {
    const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
    let conchAudioFound = []

    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        conchAudioFound = conchAudio.audioItems.filter(function (audioItem) {
            keysToSearchOn.some(function (key) {
                return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
            })
        })
    } else {
        conchAudioFound = conchAudio.audioItems
    }
    return conchAudioFound
}