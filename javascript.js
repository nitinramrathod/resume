


let skills = setInterval(() => {


    
// -----------------------HTML----------------------------

let htmlc = document.getElementById("htmlC"),
htmlp = document.getElementById("htmlP");

let htmlstart = 0,
htmlend = 90;
let speed = 50;

let html = setInterval(() => {
    htmlstart++
if (htmlstart > htmlend) {
    clearInterval(html)
}
else
    htmlp.innerText=`${htmlstart}%`
    htmlc.style.background = `conic-gradient(purple ${htmlstart * 3.6}deg, white 0deg)` 

}, speed);




// -------------------css=----------------

let cssc = document.getElementById("cssC"),
cssp = document.getElementById("cssP");

let cssstart = 0,
cssend = 87;


let css = setInterval(() => {
cssstart++
if (cssstart > cssend) {
    clearInterval(css)
}
else
    cssp.innerText=`${cssstart}%`
    cssc.style.background = `conic-gradient(purple ${cssstart * 3.6}deg, white 0deg)` 

}, speed);

// ----------------javascript-----------------
let jsc = document.getElementById("jsC"),
jsp = document.getElementById("jsP");

let jsstart = 0,
jsend = 85;


let js = setInterval(() => {
jsstart++
if (jsstart > jsend) {
    clearInterval(js)
}
else
    jsp.innerText=`${jsstart}%`
    jsc.style.background = `conic-gradient(purple ${jsstart * 3.6}deg, white 0deg)` 

}, speed);

// ----------------React JS-----------------
let rjsc = document.getElementById("rjsC"),
rjsp = document.getElementById("rjsP");

let rjsstart = 0,
rjsend = 86;


let rjs = setInterval(() => {
rjsstart++
if (rjsstart > rjsend) {
    clearInterval(rjs)
}
else
    rjsp.innerText=`${rjsstart}%`
    rjsc.style.background = `conic-gradient(purple ${rjsstart * 3.6}deg, white 0deg)` 

}, speed);

// ----------------SASS-----------------
let sassc = document.getElementById("sassC"),
sassp = document.getElementById("sassP");

let sassstart = 0,
sassend = 85;


let sass = setInterval(() => {
sassstart++
if (sassstart > sassend) {
    clearInterval(sass)
}
else
    sassp.innerText=`${sassstart}%`
    sassc.style.background = `conic-gradient(purple ${sassstart * 3.6}deg, white 0deg)` 

}, speed);

// ----------------bootstrap-----------------
let btc = document.getElementById("btC"),
btp = document.getElementById("btP");

let btstart = 0,
btend = 88;


let bt = setInterval(() => {
btstart++
if (btstart > btend) {
    clearInterval(bt)
}
else
    btp.innerText=`${btstart}%`
    btc.style.background = `conic-gradient(purple ${btstart * 3.6}deg, white 0deg)` 

}, speed);


// ----------------GitHub-----------------
let ghc = document.getElementById("ghC"),
ghp = document.getElementById("ghP");

let ghstart = 0,
ghend = 90;


let gh = setInterval(() => {
ghstart++
if (ghstart > ghend) {
    clearInterval(gh)
}
else
    ghp.innerText=`${ghstart}%`
    ghc.style.background = `conic-gradient(purple ${ghstart * 3.6}deg, white 0deg)` 

}, speed);

    
}, 15000);

gh();