alert("Fullscreen Reccommended!! (Press F11)")
alert("You're Tom!! try to catch Jerry if you can!!!")
const evilbtn = document.getElementById('evilbtn')
const OFFSET = 100

evilbtn.addEventListener('click',()=>{
	alert("Nice Try")
	window.close()
})

document.addEventListener('mouseover',(e)=>{/*everytime the mouse moves run this function*/
	const x = e.pageX
	const y = e.pageY
	const btnbox = evilbtn.getBoundingClientRect()/* WE KNOW EXACTLY where this btn is*/
	const horizontalDistanceFrom = distanceFromCenter(btnbox.x,x,btnbox.width)
	const verticalDistanceFrom = distanceFromCenter(btnbox.y,y,btnbox.height)
	const horizontalOffset = btnbox.width / 2 + OFFSET
	const verticalOffset = btnbox.height / 2 + OFFSET
	if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
		setButtonPosition(
			btnbox.x + horizontalOffset / horizontalDistanceFrom * 10,
			btnbox.y + verticalOffset / verticalDistanceFrom * 10
			)
	}
})
function setButtonPosition(left,top) {
	const windowBox = document.body.getBoundingClientRect()
	const btnbox = evilbtn.getBoundingClientRect()

	if (distanceFromCenter(left, windowBox.left, btnbox.width)<0) {
		left = windowBox.right - btnbox.width - OFFSET
	}
	if (distanceFromCenter(left, windowBox.right, btnbox.width)>0) {
		left = windowBox.left + OFFSET
	}
	if (distanceFromCenter(top, windowBox.top, btnbox.height)<0) {
		top = windowBox.bottom - btnbox.height - OFFSET
	}
	if (distanceFromCenter(top, windowBox.bottom, btnbox.height)>0) {
		top = windowBox.top + OFFSET
	}
	evilbtn.style.left = `${left}px`
	evilbtn.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize){/* we're passing btn position mouse position and width of the btn*/
	return boxPosition - mousePosition + boxSize / 2 /*bcoz we want 2 get 2 the center of the box instead of the edges*/
}

function change(){
	var root = document.querySelector(':root');
	var chgbtn = document.getElementById("change").innerHTML;
	if (chgbtn=="Light Mode!") {
		root.style.setProperty('--day', '#FBD786');
		document.getElementById("change").innerHTML = "Dark Mode!";
		document.getElementById("change").style.background = 'linear-gradient(145deg, #e2c279, #ffe68f)'
		document.getElementById("change").style.color = 'black'
		document.getElementById("change").style.boxShadow = '6px 6px 12px #bfa366,-6px -6px 12px #ffffa6'
		root.style.setProperty('--back', '#FBD786');
		root.style.setProperty('--backShad', 'inset 6px 6px 12px #bfa366,inset -6px -6px 12px #ffffa6');
	}else{
		root.style.setProperty('--day', '#232526');
		document.getElementById("change").innerHTML = "Light Mode!";
		document.getElementById("change").style.background = 'linear-gradient(145deg, #202122, #252829)'
		document.getElementById("change").style.color = 'white'
		document.getElementById("change").style.boxShadow = '5px 5px 13px #1a1b1c,-5px -5px 13px #2c2f30'
		root.style.setProperty('--back', '#FBD786');
		root.style.setProperty('--backShad', 'inset 6px 6px 12px #bfa366,inset -6px -6px 12px #ffffa6');
		root.style.setProperty('--back', '#232526');
		root.style.setProperty('--backShad', 'inset 5px 5px 8px #1a1c1d,inset -5px -5px 8px #2c2e30');
	}
}