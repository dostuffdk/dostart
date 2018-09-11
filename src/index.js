import '@babel/polyfill';
import './css/main.css';

import lampImage from './images/lamps.png';
import birdImage from './images/bird.png';

// Title
const startNode = document.createElement('h1');
startNode.innerHTML = 'Is this the real life? Is this just fantasy?';
document.body.appendChild(startNode);

// An image
const lampImg = document.createElement('img');
lampImg.src = lampImage;
document.body.appendChild(lampImg);

// An image that is transformed to inline loading
const birdImg = document.createElement('img');
birdImg.src = birdImage;
document.body.appendChild(birdImg);

// Some BEM HTML that corresponds to BEM CSS in main.css
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
