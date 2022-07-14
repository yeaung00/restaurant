import clearPage from "./clear";
import createLocation from "./locations";
import createMenu from "./menu";
import createHome from "./home";

const createNavBar = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.id = 'homeButton';
    homeButton.classList.add('navButtons');
    homeButton.classList.add('selected');
    homeButton.textContent = "Home";

    homeButton.addEventListener('click',() => {
        homeButton.classList.add('selected');
        locationButton.classList.remove('selected');
        storyButton.classList.remove('selected');
        clearPage();
        createHome();
    });

    const locationButton = document.createElement('button');
    locationButton.id = 'locationButton';
    locationButton.classList.add('navButtons');
    locationButton.textContent = "Locations";

    locationButton.addEventListener('click',() => {
        homeButton.classList.remove('selected');
        locationButton.classList.add('selected');
        storyButton.classList.remove('selected');
        clearPage();
        createLocation();
    });

    const storyButton = document.createElement('button');
    storyButton.id = 'storyButton';
    storyButton.classList.add('navButtons');
    storyButton.textContent = "Our Story";

    storyButton.addEventListener('click',() => {
        homeButton.classList.remove('selected');
        locationButton.classList.remove('selected');
        storyButton.classList.add('selected');
        clearContent();
        createStory();
    });

    nav.appendChild(homeButton);
    nav.appendChild(locationButton);
    nav.appendChild(storyButton);
    nav.appendChild(createDropDownMenu());

    header.appendChild(nav);
    document.body.appendChild(header);
}

const createDropDownMenu = () => {
    const hamBurgerContainer = document.createElement('div');
    const hamBurger = document.createElement('div');
    const lineTop = document.createElement('div');
    const lineMid = document.createElement('div');
    const lineBottom = document.createElement('div');
  
    hamBurgerContainer.classList.add('hamBurgerContainer')
    hamBurger.classList.add('hamBurger');
    lineTop.classList.add('line');
    lineMid.classList.add('line');
    lineBottom.classList.add('line');
  
    hamBurger.appendChild(lineTop);
    hamBurger.appendChild(lineMid);
    hamBurger.appendChild(lineBottom);
    hamBurgerContainer.appendChild(hamBurger);
  
    hamBurgerContainer.addEventListener('mouseenter', (e) => {  
      hamBurger.style.transition = "0.3s";
      hamBurger.style.height = "2.2em";
    });
    hamBurgerContainer.addEventListener('mouseleave', (e) => {  
      hamBurger.style.transition = "0.3s";
      hamBurger.style.height = "1.7em";
    });
  
    hamBurgerContainer.addEventListener('click', (e) => {  
      clearPage();
      createDropDownMenuLayout();
    });
  
    return hamBurgerContainer;
  }
  
  const createDropDownMenuLayout = () => {
    const row = document.createElement('div');
    const dropDownContent = document.createElement('div');
    const picture = document.createElement('div');
    const exitContainer = document.createElement('div');
  
    row.id = 'row';
    picture.id = 'picture';
    dropDownContent.id = 'dropDownContent';
    exitContainer.classList.add('exitContainer');
    exitContainer.classList.add('black-bg');
  
    const homeButton = document.createElement('button');
    homeButton.classList.add('exitButton');
    homeButton.textContent = "X";
  
    homeButton.addEventListener('click',() => {
      clearPage();
      createHome();
    });
    exitContainer.appendChild(homeButton);
  
    const locationButton = document.createElement('button');
    locationButton.classList.add('burgerButtons');
    locationButton.classList.add('blackText');
    locationButton.textContent = "Locations";
  
    locationButton.addEventListener('click',() => {
      clearPage();
      createLocation();
    });
  
    const storyButton = document.createElement('button');
    storyButton.classList.add('burgerButtons');
    storyButton.classList.add('blackText');
    storyButton.textContent = "Our Story";
  
    storyButton.addEventListener('click',() => {
      clearContent();
      createStory();
    });
  
    const bookTableButton = document.createElement('button');
    bookTableButton.classList.add('burgerButtons');
    bookTableButton.classList.add('blackText');
    bookTableButton.textContent = "Book a Table";
  
    bookTableButton.addEventListener('click',() => {
      clearPage();
      createLocation();
    });
  
    const orderToGoButton = document.createElement('button');
    orderToGoButton.classList.add('burgerButtons');
    orderToGoButton.classList.add('blackText');
    orderToGoButton.textContent = "Order ToGo";
  
    orderToGoButton.addEventListener('click',() => {
      clearPage();
      createLocation();
    });
  
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.classList.add('burgerButtons');
    menuButton.classList.add('blackText');
  
    menuButton.addEventListener('click',() => {
      clearPage();
      createMenu();
    });
  
    dropDownContent.appendChild(exitContainer);
    dropDownContent.appendChild(locationButton);
    dropDownContent.appendChild(storyButton);
    dropDownContent.appendChild(bookTableButton);
    dropDownContent.appendChild(orderToGoButton);
    dropDownContent.appendChild(menuButton);
  
    row.appendChild(picture);
    row.appendChild(dropDownContent);
  
    document.body.appendChild(row);
}

export default createNavBar;