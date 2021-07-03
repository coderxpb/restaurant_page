import menuBg from './imgs/menu-bg2.jpg'
import pizza from './imgs/pizza.jpg'

const menuPage = (mainContainer) =>{
	
	let mainMenuContainer = document.createElement("div");
	let spacer = document.createElement("div");
	spacer.style = "height: 120px;"
	const pizzaItem = createMenuItem("norev", pizza, "Pizza", "$9");
	const pizzaItemRev = createMenuItem("rev", pizza, "Pizza2", "$92");
	const pizzaItem2 = createMenuItem("norev", pizza, "Pizza", "$9");
	const pizzaItemRev2 = createMenuItem("rev", pizza, "Pizza2", "$92");

	mainMenuContainer.id = "main-menu";

	mainMenuContainer.appendChild(spacer);
	mainMenuContainer.append(pizzaItem, pizzaItemRev, pizzaItem2, pizzaItemRev2);
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

	menuItemText.append(menuItemName,menuItemPrice);
	menuItemText.classList = "menu-item-text";
	menuItemContainer.appendChild(menuItemText);

	return menuItemContainer;
}

export default menuPage;