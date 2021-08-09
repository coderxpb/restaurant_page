const contactPage = (mainContainer) => {
  const formC = document.createElement('form');
  formC.id = 'con-form';
  formC.classList = 'con-form';

  const subjF = document.createElement('input');
  subjF.style = 'height: 5%; ';
  subjF.setAttribute('type', 'text');
  subjF.setAttribute('placeholder', 'subject');
  subjF.classList = 'con-field con-subj';

  const mesF = document.createElement('textarea');
  mesF.style = 'height: 30%; ';
  mesF.setAttribute('placeholder', 'type your message here');
  // mesF.setAttribute("type", "textarea");
  mesF.classList = 'con-field con-textarea';

  const subBtn = document.createElement('button');
  subBtn.textContent = 'send';
  subBtn.classList = 'con-btn';

  formC.appendChild(subjF);
  formC.appendChild(mesF);
  formC.appendChild(subBtn);
  mainContainer.appendChild(formC);
};

export default contactPage;
