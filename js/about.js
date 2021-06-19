const p = document.querySelectorAll(".paragraph");

let a = []

p.forEach( p => {
    console.log(p.innerHTML)
    a.push(p.innerHTML)
})

console.log();

a.reverse()

console.log(a);

const result = document.querySelector(".result")

result.innerHTML += a

