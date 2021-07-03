var conv = require("hepburn");

let gojuon = localStorage.getItem("gojuon")
let dakuon = localStorage.getItem("dakuon")
let handakuon = localStorage.getItem("handakuon")
let yoon = localStorage.getItem("yoon")

let inv
function randomize(){
    function hira() {
        let array = []
        if(gojuon == 1){
            array.push('ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン',)
        }if(dakuon == 1){
            array.push('ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', )
        }if(handakuon == 1){
            array.push('パ', 'ピ', 'プ', 'ペ', 'ポ',)
        }if(yoon == 1){
            array.push('キャ','キュ','キョ', 'シャ','シュ','ショ', 'チャ','チュ','チョ', 'ニャ','ニュ','ニョ', 'ヒャ','ヒュ','ヒョ', 'ミャ','ミュ','ミョ', 'リャ','リュ','リョ', 'ギャ','ギュ','ギョ', 'ジャ','ジュ','ジョ', 'ジャ','ジュ','ジョ', 'ビャ','ビュ','ビョ', 'ピャ','ピュ','ピョ',)
        }   if(gojuon == 0 && dakuon == 0 && handakuon == 0 && yoon == 0){
            // array.push("You Must Pick Atleast One")
                        const errdiv = document.getElementById("err")
                errdiv.innerHTML = "You Must Pick At least One"
        }
        return array[Math.floor(Math.random()*array.length)];
        }
        
        const box = document.getElementById("Hira")
        box.style.fontSize = 10
        box.innerText = hira()
        
}
// let wrapper = document.getElementById("content-wrapper")
function answer(){
const box = document.getElementById("Hira").innerText;

const convdone = conv.fromKana(box).toLowerCase();

const theanswer = document.getElementById("WIT").value;
// console.log(box)
console.log(theanswer)
console.log(convdone)
if(inv == true){

}else{
if(theanswer.toLowerCase() == convdone) {
    
    console.log("your answer is correct") 
    const cans = document.getElementById("ca")

    cans.innerHTML++
    var c = document.createElement('div');
    c.id = 'canswer';
    c.style.position = "relative";
    c.style.top = "200px"
    c.innerHTML = 'Correct!';
    c.className = 'Text1';
    c.align = "center"
    wrapper.appendChild(c);
    

    // inp.readonly = "readonly"
    setTimeout(() => {
        c.remove(); 
      },1000)

    randomize()
    const thans = document.getElementById("WIT");

thans.value = ""

    
}else if(theanswer.toLowerCase !== convdone){
    if (!theanswer){

    }else{
    console.log("your answer is Wrong") 
    const wans = document.getElementById("wa")

const convdone = conv.fromKana(box).toLowerCase();

    wans.innerHTML++
    var c = document.createElement('div');
    c.id = 'canswer';
    c.style.position = "relative";
    c.style.top = "200px"
    c.innerHTML = `Wrong!, the "${box}" answer is "${convdone}"`;
    c.className = 'Text1';
    c.align = "center"
    wrapper.appendChild(c);
    

    // inp.readonly = "readonly"
    setTimeout(() => {
        c.remove(); 
      },3000)

    randomize()
    
    // console.log("wrong")
    const thans = document.getElementById("WIT");

thans.value = ""

}}
const thans = document.getElementById("WIT");

thans.value = ""

}
const thans = document.getElementById("WIT");

thans.value = ""

}

const theanswer = document.getElementById("WIT");


theanswer.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        answer()
        theanswer.value = ""
      }
})

function hira() {
    let array = []
    if(gojuon == "1"){
        array.push('ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン',)
    }if(dakuon == 1){
        array.push('ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', )
    }if(handakuon == 1){
        array.push('パ', 'ピ', 'プ', 'ペ', 'ポ',)
    }if(yoon == 1){
        array.push('キャ','キュ','キョ', 'シャ','シュ','ショ', 'チャ','チュ','チョ', 'ニャ','ニュ','ニョ', 'ヒャ','ヒュ','ヒョ', 'ミャ','ミュ','ミョ', 'リャ','リュ','リョ', 'ギャ','ギュ','ギョ', 'ジャ','ジュ','ジョ', 'ジャ','ジュ','ジョ', 'ビャ','ビュ','ビョ', 'ピャ','ピュ','ピョ',)
    }   if(gojuon == 0 && dakuon == 0 && handakuon == 0 && yoon == 0){
        // array.push("You Must Pick Atleast One")
                    const errdiv = document.getElementById("err")
            errdiv.innerHTML = "You Must Pick At least One"
            inv = true
            
    }

                                    
return array[Math.floor(Math.random()*array.length)];
}


// box.innerText = "む"

    const box = document.getElementById("Hira")
    box.innerText = hira()