import homePage from './homepg';
import contactPage from './contact';
import menuPage from './menu';
import './style.css';

const mainContainer = document.getElementById('main-con');

const menuDiv = document.createElement('div');
menuDiv.id = 'menu-div';
menuDiv.classList = 'menu-div';

const clearPage = () => {
  while (mainContainer.lastChild) {
    if (mainContainer.lastChild.id === 'menu-div') {
      break;
    }
    mainContainer.removeChild(mainContainer.lastChild);
  }
};

const createMenuButtons = (btnTextContent, pageFunction) => {
  const newBtn = document.createElement('button');
  newBtn.textContent = btnTextContent;
  newBtn.addEventListener('click', () => {
    clearPage();
    pageFunction(mainContainer);
  });

  newBtn.classList.add('menu-button');
  menuDiv.appendChild(newBtn);
};

createMenuButtons('home', homePage);
createMenuButtons('menu', menuPage);
createMenuButtons('contact', contactPage);

mainContainer.appendChild(menuDiv);
homePage(mainContainer);
