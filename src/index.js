import {homeDiv, homeStyles} from './components/Home/Home';
import {menuDiv, menuStyles} from './components/Menu/Menu';
import {contactDiv, contactStyles} from './components/Contact/Contact';

const contentDiv = document.getElementById('content');
homeStyles.use();
contentDiv.append(homeDiv);
let activeCss = homeStyles;


const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');
const contactLink = document.getElementById('contact');


homeLink.addEventListener('click', (e) => {
    updateContent(homeDiv, homeStyles);

});

menuLink.addEventListener('click', (e) => {
    updateContent(menuDiv, menuStyles);
});

contactLink.addEventListener('click', (e) => {
    updateContent(contactDiv, contactStyles);
});


function updateContent(htmlDoc, cssToUse) {

    activeCss.unuse();
    activeCss = cssToUse;
    cssToUse.use();
    


    while(contentDiv.hasChildNodes()) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    contentDiv.appendChild(htmlDoc);
}

// function unuse all CSS
// store active page and unuse css before switching




