const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchdword = document.getElementById("search-word");
const partofspeech = document.getElementById("pos");
const text = document.getElementById("text");
const worddefine = document.getElementById("word-defination");
const button = document.getElementById("btn");
const sound = document.getElementById("sound");
const result = document.getElementById("result");
button.addEventListener("click", () => {
    //to add eventlistner event name and call back
    const inptext = document.getElementById("inp-word").value;//when user click on btn it will listen for inp text
    // console.log(inptext);
    fetch(`${url}${inptext}`)
        .then((response) => response.json())//convert data to json format
        .then((data) => {
            if (`${inptext}` != data[0]) {
                result.style.margin = "20px";
                result.innerHTML = "<h2>Word not found!!</h2>";
            }
            result.innerHTML = `
                <div class="word">
                    <h3 id="search-word">${data[0].word}</h3>
                    <button  onclick="playsound(); iconchange();" class="sound-icn"><i class="fa-solid fa-volume-xmark"></i></button>
                </div>
                <div class="word-verb">
                    <p id="pos">${data[0].meanings[0].partOfSpeech}</p>
                    <p id="text"> ${data[0].phonetics[1].text} </p>
                </div>
                <div class="defination">
                    <p id="word-defination">${data[0].meanings[0].definitions[0].definition}</p>
                </div>`
            console.log(data);
            // searchdword.innerHTML = ;
            // partofspeech.innerHTML = data[0].meanings[0].partOfSpeech;
            // text.innerHTML = data[0].phonetics[1].text;
            // worddefine.innerHTML = data[0].meanings[0].definitions[0].definition;
            // wordexmple.innerHTML = data[0].meanings[0].definitions[0].example || " ";
            sound.setAttribute("src", data[0].phonetics[0].audio);
        })
})
function iconchange() {

    // Change the icon to high volume icon
    const soundIcon = document.querySelector(".sound-icn i");
    soundIcon.className = "fa-solid fa-volume-high";

}

function playsound() {

    sound.play();
}
