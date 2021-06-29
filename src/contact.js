import contactBg from './imgs/contact-bg.jpg'

const contactPage = (mainContainer) => {
	mainContainer.style.height = "100vh";

	const bgImg = document.createElement("img");
	bgImg.classList = "bgimgs";
	bgImg.id = "contact-img";
	bgImg.src = contactBg;

	mainContainer.appendChild(bgImg);

	const formC = document.createElement("form");
	formC.id = "con-form";
	
	const subjF = document.createElement("input")
	subjF.style = "height: 5%; "
	subjF.setAttribute("type","text");
	subjF.classList = "con-field";

	const mesF = document.createElement("input")
	mesF.style = "height: 55%; "
	mesF.setAttribute("type", "text");
	mesF.classList = "con-field";

	const subBtn = document.createElement("button")
	subBtn.style = "height: 5%; width: 200px;"
	
	subBtn.classList = "con-field";

	formC.appendChild(subjF);
	formC.appendChild(mesF);
	formC.appendChild(subBtn);
	mainContainer.appendChild(formC);

}

export default contactPage;