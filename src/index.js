import homePage from './homepg.js'
import contactPage from './contact.js';

const mainContainer = document.getElementById("content");
const menuDiv = document.createElement("div");
menuDiv.id = "menuDiv";


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



