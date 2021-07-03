var conv = require("hepburn");
var kanji = require("kanji");
var electron = require("electron")
// var ipc = new electron.ipcRenderer

function submitrom() {

var rom = document.getElementById("romaji").value;

if(rom == "" || rom == undefined){

}else{

const hira = conv.toHiragana(rom)
const kata = conv.toKatakana(rom)

const reshira = document.getElementById("hira")
reshira.innerText = hira

const reskata = document.getElementById("kata")
reskata.innerText = kata

var rom = document.getElementById("romaji")

rom.value = ""
}
}

var rom = document.getElementById("kana");
if(rom){
rom.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        reverse()
        rom.value = ""
      }
})
}
var rom1 = document.getElementById("romaji");
if(rom1){
rom1.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitrom()
        rom.value = ""
      }
})
}




function reverse() {

var input = document.getElementById("kana").value;

var kana = conv.fromKana(input)

const res = document.getElementById("result")
res.innerText = kana
}

function getkanji() {
    //remove the previous button 
    const but = document.getElementById("butid")
if(but){
    but.remove()
}
var kanj = document.getElementById("kanjiafb").value;

const thekan = kanji.readings(kanj)
const onyo = thekan.on
const kunyo = thekan.kun
const nanori = thekan.nanori

const JishoAPI = require("unofficial-jisho-api")
const jisho = new JishoAPI()

jisho.searchForKanji(kanj).then(result => {
// console.log(result.uri)

    const mean = document.getElementById("mean")
    mean.innerText = result.meaning.split(',').join(' /')
    var button = document.createElement('BUTTON');
    button.className = "Button"
    button.innerText = "Learn More About This"
    button.style.position = "relative"
    button.style.top = "150px"
    button.onclick = function (){
        const electron = require("electron")
        console.log(result.uri)
        // .shell.openExternal(YOUR_URL_HERE);
        // electron.shell.openExternal("https://google.com")
        electron.shell.openExternal(result.uri)

    }
    button.style.alignContent = "center"
    button.id = "butid"
    button.style.left = "25px"
    const but = document.getElementById("butid")
    if(!but){
    document.body.append(button)
    }else {}
const jlpte = document.getElementById("jlpt")
if(result.jlptLevel == undefined){ jlpte.innerText = "I Cant See The Jlpt Level, Maybe You Can See It Here : " + result.uri}else{    
jlpte.innerText = result.jlptLevel }
const nfre = document.getElementById("nfr")
if(result.newspaperFrequencyRank == undefined){ nfre.innerText = "I Cant See The NFR, Maybe You Can See It Here : " + result.uri}else{
    nfre.innerText = result.newspaperFrequencyRank
    }
}).catch(err => {
    const jlpte = document.getElementById("jlpt")
const nfre = document.getElementById("nfr")

    if(err == "Error: Network Error"){
        
        console.log("No Network Detected So I Can Open Jisho")
        mean.innerText = "No Network Detected, I cant Open Jisho (Error: Network Error)"
        jlpte.innerText = "No Network Detected, I cant Open Jisho (Error: Network Error)"
        nfre.innerText = "No Network Detected, I cant Open Jisho (Error: Network Error)"
    }else{
    mean.innerText = err
    jlpte.innerText = err
    nfre.innerText = err
}
})


const electron = require("electron")

const reson = document.getElementById("on")
// reson.innerText = onyo
if(onyo == ""){ reson.innerText = "No ONYOMI Found" }else{ reson.innerText = onyo.join(" Or ") }
const reskun = document.getElementById("kun")
// reskun.innerText = kunyo
if(kunyo == ""){ reskun.innerText = "No KUNYOMI Found" }else{ reskun.innerText = kunyo.join(" Or ") }
const resna = document.getElementById("nanori")
if(nanori == ""){ resna.innerText = "No NANORI Found" }else{ resna.innerText = nanori.join(" Or ")   }
{/* <a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a>  */}

}

function openwin(){
    const electron = require("electron")
    // .shell.openExternal(YOUR_URL_HERE);
    electron.shell.openExternal("https://google.com")
}