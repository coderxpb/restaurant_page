import homePage from './homepg.js'
import contactPage from './contact.js';
import menuPage from './menu.js';
import './style.css';

const mainContainer = document.getElementById("content");
mainContainer.style.height = "100vh";
mainContainer.id = "main-con";
const menuDiv = document.createElement("div");
menuDiv.id = "menuDiv";

const homeBtn = document.createElement("button");
homeBtn.textContent = "home";

const rmenuBtn = document.createElement("button");
rmenuBtn.textContent = "menu";

const contactBtn = document.createElement("button");
contactBtn.textContent = "contact"

const menuButtons = [homeBtn, rmenuBtn, contactBtn];

function createClickButton(btnText,){

}

homeBtn.addEventListener('click', (e)=>{
	clearPage();
	mainContainer.appendChild(menuDiv);
	homePage(mainContainer);

})


contactBtn.addEventListener('click', (e) => {
	clearPage();
	mainContainer.appendChild(menuDiv);
	contactPage(mainContainer);

})

rmenuBtn.addEventListener('click', (e) => {
	clearPage();
	mainContainer.appendChild(menuDiv);
	menuPage(mainContainer);

})

const clearPage = () =>{
	while(mainContainer.lastChild){
		mainContainer.removeChild(mainContainer.firstChild);
	}
}

menuButtons.forEach((item,index)=>{
	menuDiv.appendChild(item);
	item.classList.add("menu-button");
})

mainContainer.appendChild(menuDiv);
homePage(mainContainer);



