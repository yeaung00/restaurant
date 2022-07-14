import createNavBar from "./nav";
import createLocation from "./locations";
import createMenu from "./menu";
import clearPage from "./clear";

const createHome = () => {
    createNavBar();
    const main = document.createElement('main');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const buttonDiv = document.createElement('div');
  
    content.id = 'content';
    title.id = 'title';
    buttonDiv.classList.add('buttonContainer');
  
    title.textContent = "Vietnamese Restaurant";
  
    const bookTableButton = document.createElement('button');
    bookTableButton.classList.add('divBtns');
    bookTableButton.textContent = "Book a Table";
    buttonDiv.appendChild(bookTableButton);

    bookTableButton.addEventListener('click', () => {
        clearPage();
        createLocation();
    });
  
    const orderToGoButton = document.createElement('button');
    orderToGoButton.classList.add('divBtns');
    orderToGoButton.textContent = "Order ToGo";
    buttonDiv.appendChild(orderToGoButton);

    orderToGoButton.addEventListener('click', () => {
        clearPage();
        createLocation();
    });
  
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.classList.add('divBtns');
    buttonDiv.appendChild(menuButton);

    menuButton.addEventListener('click', () => {
        clearPage();
        createMenu();
    });
  
    content.appendChild(title);
    content.appendChild(buttonDiv);
    
    main.appendChild(content);
    document.body.appendChild(main);
}

export default createHome