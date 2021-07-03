import homebg from './imgs/home-bg.jpg'

const homePage = (mainContainer) => {
	
	// const bgImg = document.createElement("img");
	// bgImg.classList = "bgimgs"
	// bgImg.id = "home-img";
	// bgImg.src = homebg;

	// mainContainer.appendChild(bgImg);
  
	const hmTxt = document.createElement("div");
	hmTxt.id = "home-text";

	const hmp1 = document.createElement("p");
	hmp1.textContent = "only";

	const hmp2 = document.createElement("p");
	hmp2.textContent = "the";

	const hmp3 = document.createElement("p");
	hmp3.textContent = "best.";

	hmTxt.append(hmp1,hmp2,hmp3);
	mainContainer.appendChild(hmTxt);
}


export default homePage;