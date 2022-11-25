const btnEl = document.querySelector("#btnEl");
const body = document.body;
const nazwa = document.querySelector(".nazwa");
const whiteTheme = document.querySelector("#btnElWhite");
btnEl.addEventListener("click",()=>{
    body.style.backgroundColor = 'black';
    body.style.color = "#e8e8e8";
    btnEl.style.color = "#e8e8e8";
    nazwa.style.color = "#e8e8e8";
    whiteTheme.style.color = "#e8e8e8";
})
whiteTheme.addEventListener("click",()=>{
    body.style.backgroundColor = '#e8e8e8';
    body.style.color = "#273d46";
    nazwa.style.color = "#273d46";
    btnEl.style.color = "#273d46";
    whiteTheme.style.color = "#273d46";
})