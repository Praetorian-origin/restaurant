import styles from "./styles.lazy.css";

const menuDiv = document.createElement("div");
menuDiv.id = "menu-div";

menuDiv.innerHTML = `
<div class="food-menu">
<div class="food-item">
<p>Avocado - 4€</p>
<img src="./assets/avocado-min.jpg" alt="avocado"></img>
</div>
<div class="food-item">
<p>Salad - 2€</p>
<img src="./assets/salad-min.jpg" alt="salad"></img>
</div>
<div class="food-item">
<p>Tacos - 5€</p>
<img src="./assets/tacos-min.jpg" alt="tacos"></img>
</div>
<div class="food-item">
<p>Brochet - 5€</p>
<img src="./assets/brochet-vegetables-min.jpg" alt="Brochet"></img>
</div>
</div>
`;

export { menuDiv, styles as menuStyles };
