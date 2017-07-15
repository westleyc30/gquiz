const chordButton = document.querySelectorAll('.button__chord');
// console.log(chordButton)
let chordList = {};

const requestURL = 'https://raw.githubusercontent.com/westleyc30/gquiz/master/chords.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = () => {
  chordList = request.response;
  console.log(chordList.guitar.a.major.audio)
}

// This function creates an array from chordButton querySelectorAll
// for each button in that array we add an event listener to play the chord audio
Array.from(chordButton).forEach(button => {
  button.addEventListener('click', function(e) {
    let currentChord = this.dataset.chord;
    // console.log(this);
    // console.log(chordList.guitar.a.major.audio);
    // console.log(chordList.guitar[currentChord].audio);
    console.log(currentChord);
  })
})