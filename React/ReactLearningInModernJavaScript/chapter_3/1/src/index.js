// getElementById 사용
const title1 = document.getElementById("title")
console.log(title1)
// <h1 id="title">Hello World!</h1>

// querySelctor 사용
const title2 = document.querySelector("#title")
console.log(title2)
// <h1 id="title">Hello World!</h1>

// getElementsByClassName 사용
const containers = document.getElementsByClassName("container")
console.log(containers)

// querySelectorAll 사용
const allContainers = document.querySelectorAll(".container")
console.log(allContainers)