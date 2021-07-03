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
            array.push('あ', 'い', 'う', 'え', 'お',
            'か', 'き', 'く', 'け', 'こ',
            'さ', 'し', 'す', 'せ', 'そ',
            'た', 'ち', 'つ', 'て', 'と',
            'な', 'に', 'ぬ', 'ね', 'の',
            'は', 'ひ', 'ふ', 'へ', 'ほ',
            'ま', 'み', 'む', 'め', 'も',
            'や',      'ゆ',      'よ',
            'ら', 'り', 'る', 'れ', 'ろ',
            'わ',                  'を',
                                'ん',)
        }if(dakuon == 1){
            array.push('が', 'ぎ', 'ぐ', 'げ', 'ご',
            'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
            'だ', 'ぢ', 'づ', 'で', 'ど',
            'ば', 'び', 'ぶ', 'べ', 'ぼ',)
        }if(handakuon == 1){
            array.push('ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',)
        }if(yoon == 1){
            array.push(            'きゃ','きゅ','きょ',
            'しゃ','しゅ','しょ',
            'ちゃ','ちゅ','ちょ',
            'にゃ','にゅ','にょ',
            'ひゃ','ひゅ','ひょ',
            'みゃ','みゅ','みょ',
            'りゃ','りゅ','りょ',
            'ぎゃ','ぎゅ','ぎょ',
            'じゃ','じゅ','じょ',
            'じゃ','じゅ','じょ',
            'びゃ','びゅ','びょ',
            'ぴゃ','ぴゅ','ぴょ')
        }
        if(gojuon == 0 && dakuon == 0 && handakuon == 0 && yoon == 0){
            // array.push("You Must Pick Atleast One")
            const errdiv = document.getElementById("err")
            errdiv.innerHTML = "You Must Pick Atleast One"
        }
        return array[Math.floor(Math.random()*array.length)];
        }
        
        const box = document.getElementById("Hira")
        box.style.fontSize = 10
        box.innerText = hira()
        
}
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
        array.push('あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ',
        'さ', 'し', 'す', 'せ', 'そ',
        'た', 'ち', 'つ', 'て', 'と',
        'な', 'に', 'ぬ', 'ね', 'の',
        'は', 'ひ', 'ふ', 'へ', 'ほ',
        'ま', 'み', 'む', 'め', 'も',
        'や',      'ゆ',      'よ',
        'ら', 'り', 'る', 'れ', 'ろ',
        'わ',                  'を',
                            'ん',)
    }if(dakuon == 1){
        array.push('が', 'ぎ', 'ぐ', 'げ', 'ご',
        'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
        'だ', 'ぢ', 'づ', 'で', 'ど',
        'ば', 'び', 'ぶ', 'べ', 'ぼ',)
    }if(handakuon == 1){
        array.push('ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',)
    }if(yoon == 1){
        array.push(            'きゃ','きゅ','きょ',
        'しゃ','しゅ','しょ',
        'ちゃ','ちゅ','ちょ',
        'にゃ','にゅ','にょ',
        'ひゃ','ひゅ','ひょ',
        'みゃ','みゅ','みょ',
        'りゃ','りゅ','りょ',
        'ぎゃ','ぎゅ','ぎょ',
        'じゃ','じゅ','じょ',
        'じゃ','じゅ','じょ',
        'びゃ','びゅ','びょ',
        'ぴゃ','ぴゅ','ぴょ')
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