// Contact Form Page, Simple Contact Form

import styles from './styles.lazy.css';


const contactDiv = document.createElement('div');
contactDiv.id='contact-div';

contactDiv.innerHTML = `
<div id="location">
<p>Location :</p>
<img src="./assets/map.jpg" alt="location"></img>
<p>Mars - 19 Road Alien Street</p>
</div>

<div>
<p>Contact for more information :</p>
<form id="contact">
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname"><br>
<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname"><br>
<label for="email">email:</label>
<input type="email" id="email" name="email"><br>
<input type="submit" value="Submit">
</form>
</div>`;



export {contactDiv, styles as contactStyles};