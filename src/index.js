import homePage from './homepg.js'
import contactPage from './contact.js';
import menuPage from './menu.js';
import './style.css';

const mainContainer = document.getElementById("main-con");

const menuDiv = document.createElement("div");
menuDiv.id = "menu-div";

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
	//mainContainer.appendChild(menuDiv);
	homePage(mainContainer);

})


contactBtn.addEventListener('click', (e) => {
	clearPage();
	//mainContainer.appendChild(menuDiv);
	contactPage(mainContainer);

})

rmenuBtn.addEventListener('click', (e) => {
	clearPage();
	//mainContainer.appendChild(menuDiv);
	menuPage(mainContainer);

})

const clearPage = () =>{
	while(mainContainer.lastChild){
		if(mainContainer.lastChild.id=="menu-div"){
			break;
		}
		mainContainer.removeChild(mainContainer.lastChild);
	}
}

menuButtons.forEach((item,index)=>{
	menuDiv.appendChild(item);
	item.classList.add("menu-button");
})

const createMenuButtons = (btnTextContent, pageFunction) =>{
	let newBtn = document.createElement("button");
	newBtn.textContent = btnTextContent;
	newBtn.addEventListener('click', (e)=>{
		clearPage();
		mainContainer.appendChild(menuDiv);
		pageFunction(mainContainer);
	})
	newBtn.classList.add("menu-button");
	menuDiv.appendChild(newBtn);
}

mainContainer.appendChild(menuDiv);
homePage(mainContainer);



