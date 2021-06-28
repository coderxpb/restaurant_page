import homePage from './homepg.js'

const mainContainer = document.getElementById("content");
const menuDiv = document.createElement("div");
menuDiv.style = "position: absolute; top:5px; right: 5px; display: flex; gap: 10px;"

const homeBtn = document.createElement("button");
homeBtn.textContent = "home";

const rmenuBtn = document.createElement("button");
rmenuBtn.textContent = "menu";

const contactBtn = document.createElement("button");
contactBtn.textContent = "contact"

const menuButtons = [homeBtn, rmenuBtn, contactBtn];

menuButtons.forEach((item,index)=>{
	menuDiv.appendChild(item);
	item.classList.add("menu-button");
})


mainContainer.appendChild(menuDiv);
homePage(mainContainer);
