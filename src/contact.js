

const contactPage = (mainContainer) => {
	
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
	
	subBtn.classList = "con-btn";

	formC.appendChild(subjF);
	formC.appendChild(mesF);
	formC.appendChild(subBtn);
	mainContainer.appendChild(formC);

}

export default contactPage;