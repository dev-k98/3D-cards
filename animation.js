const card = document.querySelector(".card")
const container = document.querySelector(".main-container")

//collecting elements
const wings = document.querySelector(".wings img")
const title = document.querySelector(".info h2")
const tags = document.querySelector(".info")
const backdrop = document.querySelector(".backdrop")
const buttons = document.querySelector(".buttons button")

card.addEventListener("mousemove", e => {
	let x = -(window.innerWidth / 2 - e.pageX) / 25
	let y = (window.innerHeight / 2 - e.pageY) / 25

	card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
})
//leave animation
container.addEventListener("mouseleave", e => {
	card.style.transition = `all .3s ease-in`

	card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`
	wings.style.transform = `translateZ(${0}px)`
	backdrop.style.transform = `translateZ(${0}px)`
	title.style.transform = `translateZ(${0}px)`
	buttons.style.transform = `translateZ(${0}px)`
	tags.style.transform = `translateZ(${0}px)`
})

//enter animation
container.addEventListener("mouseenter", e => {
	card.style.transition = `none`

	//wings out in 3d
	wings.style.transform = `translateZ(${150}px) rotateX(${350}deg)`
	backdrop.style.transform = `translateZ(${50}px)`
	title.style.transform = `translateZ(${100}px)`
	buttons.style.transform = `translateZ(${100}px)`
	tags.style.transform = `translateZ(${100}px)`
})
