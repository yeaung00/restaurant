import createNavBar from "./nav";

const createMenu = () => {
    createNavBar();
    const main = document.createElement('main');
    const content = document.createElement('div');
    const menuContainer = document.createElement('div');
    let menuItems = [];
    let itemTitle = [];
    let itemTitles = [
                        "BEEF BRISKET PHỞ\r\n",
                        "STEAK WITH GARLIC PHỞ\r\n",
                        "STEAK PHỞ\r\n",
                        "BEEF COMBO PHỞ\r\n",
                        "CHICKEN BREAST PHỞ\r\n",
                        "KING PRAWNS PHỞ\r\n",
                        "TOFU & MUSHROOM PHỞ\r\n",
                        "3 MUSHROOMS PHỞ\r\n",
                    ];
    let itemDescription = [];
    let itemDescriptions = [
                            "Tender brisket (a bit like roast beef) slow cooked in our broth",
                            "Flash fried steak with garlic (Hanoi style) in beef broth",
                            "Thinly sliced steak in beef broth",                       
                            "Steak, brisket & meatballs in beef broth",
                            "Chicken breast in chicken broth",
                            "Tiger prawns in chicken or veggie broth",
                            "Tofu & button mushrooms in chicken or veggie broth",
                            "Enoki, shiitake & button mushrooms in chicken or veggie both",
                        ];

    content.id = 'content';
    menuContainer.classList.add('menuContainer');

    for (let i = 0; i < 8; i++) {
        menuItems = document.createElement('div');
        menuItems.classList.add('menuItems');

        itemTitle[i] = document.createElement('h3');
        itemTitle[i].classList.add('itemTitle');
        itemTitle[i].classList.add('black');
        itemTitle[i].classList.add('white-bg');
        itemTitle[i].textContent = itemTitles[i];
        menuItems.appendChild(itemTitle[i]);

        itemDescription[i] = document.createElement('p');
        itemDescription[i].classList.add('itemDescription');
        itemDescription[i].classList.add('black');
        itemDescription[i].classList.add('white-bg');
        itemDescription[i].textContent = itemDescriptions[i];
        menuItems.appendChild(itemDescription[i]);

        menuContainer.appendChild(menuItems);
    }
 
    content.appendChild(menuContainer);
    main.appendChild(content);

    document.body.appendChild(main);
}

export default createMenu;
