let wrapper = document.getElementById("content-wrapper")

function run(){
    const gojuon = document.querySelectorAll('input[name="gojuon"]:checked').length
    const dakuon = document.querySelectorAll('input[name="dakuon"]:checked').length
    const handakuon = document.querySelectorAll('input[name="handakuon"]:checked').length
    const yoon = document.querySelectorAll('input[name="yoon"]:checked').length

    if(gojuon == 0 && dakuon == 0 && handakuon == 0 && yoon == 0){
        var c = document.createElement('h1');
        c.id = 'canswer';
        c.style.position = "relative";
        c.style.top = "200px"
        c.innerHTML = 'Pick 1';
        c.className = 'text-center';
        wrapper.appendChild(c);
    setTimeout(() => {
        c.remove(); 
      },1000)
    }else{
        localStorage.setItem("gojuon",gojuon);
localStorage.setItem("dakuon",dakuon);
localStorage.setItem("handakuon",handakuon);
localStorage.setItem("yoon",yoon);

window.location.href="./mainquiz.html"

    }

}

function getlocal(){
    let gojuon = localStorage.getItem("gojuon")
    let dakuon = localStorage.getItem("dakuon")
    let handakuon = localStorage.getItem("handakuon")
    let yoon = localStorage.getItem("yoon")

    console.log(gojuon)
    console.log(dakuon)
    console.log(handakuon)
    console.log(yoon)

}
function back(){
window.location.href="../index.html"

}