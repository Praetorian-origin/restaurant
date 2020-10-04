import styles from "./styles.lazy.css";

const homeDiv = document.createElement("div");
homeDiv.id = "home-div";

homeDiv.innerHTML = `
<p>Our garden restaurant is a place where your senses will be ignited, as much as taste, sight, smell and hearing.</p>
<img src="./assets/restaurant-table-min.jpg"></img>
<p>Come to our Eden where you'll be in a calm, peaceful place where you can relax coming from the busy towns.</p>`



export {homeDiv, styles as homeStyles};

