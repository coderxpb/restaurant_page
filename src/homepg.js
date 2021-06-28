import homebg from './imgs/home-bg.jpg'

const homePage = (mainContainer) => {
	mainContainer.style.height = "100vh";
	const bgImg = document.createElement("img");
	bgImg.id = "homeImg";
	bgImg.src = homebg;
	bgImg.style = "height: 100vh; width: 100vw;object-fit: cover;"
	mainContainer.appendChild(bgImg);
}

export default homePage;