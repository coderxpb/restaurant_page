import pizza from './imgs/pizza.jpg';

function createMenuItem(reversed, itemImg, itemName, itemPrice) {
  const menuItemContainer = document.createElement('div');
  menuItemContainer.classList = `menu-item${reversed}`;
  const menuItemImg = document.createElement('img');
  menuItemImg.src = itemImg;
  menuItemImg.classList = 'menu-item-img';
  menuItemContainer.appendChild(menuItemImg);

  const menuItemText = document.createElement('div');
  const menuItemName = document.createElement('p');
  menuItemName.textContent = itemName;
  const menuItemPrice = document.createElement('p');
  menuItemPrice.textContent = itemPrice;

  menuItemText.append(menuItemName, menuItemPrice);
  menuItemText.classList = 'menu-item-text';
  menuItemContainer.appendChild(menuItemText);

  return menuItemContainer;
}

const menuPage = (mainContainer) => {
  const mainMenuContainer = document.createElement('div');
  const spacer = document.createElement('div');
  spacer.style = 'height: 120px;';
  const pizzaItem = createMenuItem('norev', pizza, 'Pizza', '$9');
  const pizzaItemRev = createMenuItem('rev', pizza, 'Pizza2', '$92');
  const pizzaItem2 = createMenuItem('norev', pizza, 'Pizza', '$9');
  const pizzaItemRev2 = createMenuItem('rev', pizza, 'Pizza2', '$92');

  mainMenuContainer.id = 'main-menu';

  mainMenuContainer.appendChild(spacer);
  mainMenuContainer.append(pizzaItem, pizzaItemRev, pizzaItem2, pizzaItemRev2);
  mainContainer.appendChild(mainMenuContainer);
};

export default menuPage;
