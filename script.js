
let text = document.querySelector('.text');
let spans = text.innerText.split('').map((letter, i) => {
    return `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 50}deg);">${letter}</span>`
}).join('');

text.innerHTML = spans;
console.log(spans);
