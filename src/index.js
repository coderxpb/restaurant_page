import homePage from './homepg.js'
import contactPage from './contact.js';
import menuPage from './menu.js';
import './style.css';

const mainContainer = document.getElementById("main-con");

const menuDiv = document.createElement("div");
menuDiv.id = "menu-div";


const createMenuButtons = (btnTextContent, pageFunction) => {
	let newBtn = document.createElement("button");
	newBtn.textContent = btnTextContent;
	newBtn.addEventListener('click', (e) => {
		clearPage();
		pageFunction(mainContainer);
	})

	newBtn.classList.add("menu-button");
	menuDiv.appendChild(newBtn);
}

createMenuButtons("home",homePage);
createMenuButtons("menu", menuPage);
createMenuButtons("contact", contactPage);

const clearPage = () =>{
	while(mainContainer.lastChild){
		if(mainContainer.lastChild.id=="menu-div"){
			break;
		}
		mainContainer.removeChild(mainContainer.lastChild);
	}
}

mainContainer.appendChild(menuDiv);
homePage(mainContainer);



