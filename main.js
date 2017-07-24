const chordButton = document.querySelectorAll('.button__chord');
// console.log(chordButton)
let chordList = [];

const requestURL = 'https://raw.githubusercontent.com/westleyc30/gquiz/master/chords.json';
// const request = new XMLHttpRequest();
// // const thing = 'major'
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = () => {
//   chordList = request.response;
//   console.log(chordList.guitar.a.major.audio)
// }
fetch(requestURL)
  .then(blob => blob.json())
  .then(data => chordList = [...data])
// This function creates an array from chordButton querySelectorAll
// for each button in that array we add an event listener to play the chord audio
Array.from(chordButton).forEach(button => {
  button.addEventListener('click', function(e) {
    let currentChord = this.dataset.chord;
    // let okPlay = currentChord.toString();
    // console.log(e);
    // console.log(this);
    console.log(currentChord);
    // switch (currentChord) {
    //   case 'a.major':
    //     console.log(chordList.guitar.a.major.audio);
    //     break;
    //   case 'a.minor':
    //     console.log(chordList.guitar.a.minor.audio);
    //     break;
    
    //   default:
    //     break;
    // }
    // console.log(chordList.guitar);
    // console.log(currentChord);
  })
})