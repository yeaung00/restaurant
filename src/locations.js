import createNavBar from "./nav";

const createLocation = () => {
    createNavBar();
    const main = document.createElement('main');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const form = document.createElement('form');
    const inputText = document.createElement('input');
    const inputButton = document.createElement('div');
    const inputIcon = document.createElement('i');
    const homeButton = document.getElementById('homeButton');
    const locationButton = document.getElementById('locationButton');
    
    content.id = 'content';
    form.id = 'form';
    title.id = 'title';
    homeButton.classList.remove('selected');
    locationButton.classList.add('selected');
    inputText.classList.add('inputText');
    inputButton.classList.add('hamBurgerContainer');
    inputIcon.classList.add('fa');
    inputIcon.classList.add('fa-search');
    inputIcon.classList.add('white');

    title.textContent = "Find your Pho";
    inputText.type = "text";
    inputText.placeholder = "Enter location";
    inputButton.type = "button";
    inputButton.value = 'Submit'

    inputButton.appendChild(inputIcon);
    form.appendChild(inputText);
    form.appendChild(inputButton);

    content.appendChild(title);
    content.appendChild(form);
 
    main.appendChild(content);
    document.body.appendChild(main);
}

export default createLocation;
