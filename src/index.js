import '@babel/polyfill';
import './css/main.css';

const startNode = document.createElement('h1');
startNode.innerHTML = 'Is this the real life? Is this just fantasy?';

document.body.appendChild(startNode);

const bemDemo = `
<div class="something">
    Blue
    <p class="something__prop">Red</p>
</div>

<div class="something something--modifier">
    Purple
    <p class="something__prop something__prop--other-modifier">Green</p>
</div>
`;
document.body.insertAdjacentHTML('beforeend', bemDemo);
