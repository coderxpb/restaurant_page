import menuBg from './imgs/menu-bg2.jpg'
import pizza from './imgs/pizza.jpg'

const menuPage = (mainContainer) =>{
	
	const bgImg = document.createElement("img");
	bgImg.classList = "menubg"
	bgImg.id = "menu-img";
	bgImg.src = menuBg;

	mainContainer.appendChild(bgImg);

	let mainMenuContainer = document.createElement("div");
	const pizzaItem = createMenuItem("norev", pizza, "Pizza", "$9");
	const pizzaItemRev = createMenuItem("rev", pizza, "Pizza2", "$92");
	const pizzaItem2 = createMenuItem("norev", pizza, "Pizza", "$9");
	const pizzaItemRev2 = createMenuItem("rev", pizza, "Pizza2", "$92");
	const pizzaItem3 = createMenuItem("norev", pizza, "Pizza", "$9");
	const pizzaItemRev3 = createMenuItem("rev", pizza, "Pizza2", "$92");
	mainMenuContainer.id = "main-menu";
	mainMenuContainer.appendChild(pizzaItem);
	mainMenuContainer.appendChild(pizzaItemRev);
	mainMenuContainer.appendChild(pizzaItem2);
	mainMenuContainer.appendChild(pizzaItemRev2);
	mainMenuContainer.appendChild(pizzaItem3);
	mainMenuContainer.appendChild(pizzaItemRev3);

	mainContainer.appendChild(mainMenuContainer);

}

function createMenuItem(reversed, itemImg, itemName, itemPrice){
	let menuItemContainer = document.createElement("div");
	menuItemContainer.classList = "menu-item"+reversed;
	let menuItemImg = document.createElement("img");
	menuItemImg.src = itemImg;
	menuItemImg.classList = "menu-item-img";
	menuItemContainer.appendChild(menuItemImg);

	let menuItemText = document.createElement("div");
	let menuItemName = document.createElement("p");
	menuItemName.textContent = itemName;
	let menuItemPrice = document.createElement("p");
	menuItemPrice.textContent = itemPrice;

	menuItemText.appendChild(menuItemName);
	menuItemText.appendChild(menuItemPrice);
	menuItemText.classList = "menu-item-text";
	menuItemContainer.appendChild(menuItemText);

	return menuItemContainer;
}

export default menuPage;