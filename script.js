console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements
let loc = document.querySelector("#location1")
let button = document.querySelector("#button")

button.addEventListener("click", function(event){
  console.log("1300 Boynton Ave (moving soon!)")
  loc.textContent = "1300 Boynton Ave (moving soon!)"
})






// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence

let sc1 = document.querySelector("#sc1")

sc1.addEventListener("click", function(event){
  console.log("Self-Awarness")
  sc1.textContent = "Self-Awarness"
})

let sc2 = document.querySelector("#sc2")

sc2.addEventListener("click", function(event){
  console.log("Consistency")
  sc2.textContent = "Consistency"
})

let sc3 = document.querySelector("#sc3")

sc3.addEventListener("click", function(event){
  console.log("Ownership")
  sc3.textContent = "Ownership"
})

let sc4 = document.querySelector("#sc4")

sc4.addEventListener("click", function(event){
  console.log("Resilience")
  sc4.textContent = "Resilience"
})

let sc5 = document.querySelector("#sc5")

sc5.addEventListener("click", function(event){
  console.log("Excellence")
  sc5.textContent = "Excellence"
})

// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
img1.addEventListener("mouseover", function(event){
  console.log("joggers-front.webp")
  img1.src = "joggers-front.webp"
})
img1.addEventListener("mouseout", function(event){
  console.log("joggers-back.webp")
  img1.src = "joggers-back.webp"
})


img2.addEventListener("mouseover", function(event){
  console.log("sweater-front.webp")
  img2.src = "sweater-front.webp"
})
img2.addEventListener("mouseout", function(event){
  console.log("sweater-back.webp")
  img2.src = "sweater-back.webp"
})







// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)




sc1.addEventListener("mouseover", function(event){
  sc1.style.color = "#3ab54b"
})
sc1.addEventListener("mouseout", function(event){
  sc1.style.color = "black"
})

sc2.addEventListener("mouseover", function(event){
  sc2.style.color = "#3ab54b"
})
sc2.addEventListener("mouseout", function(event){
  sc2.style.color = "black"
})

sc3.addEventListener("mouseover", function(event){
  sc3.style.color = "#3ab54b"
})
sc3.addEventListener("mouseout", function(event){
  sc3.style.color = "black"
})

sc4.addEventListener("mouseover", function(event){
  sc4.style.color = "#3ab54b"
})
sc4.addEventListener("mouseout", function(event){
  sc4.style.color = "black"
})

sc5.addEventListener("mouseover", function(event){
  sc5.style.color = "#3ab54b"
})
sc5.addEventListener("mouseout", function(event){
  sc5.style.color = "black"
})

console.log("Piece Of Cake!")