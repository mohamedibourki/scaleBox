const outX = 4;
const outY = 3;
const inX = 2;
const inY = 2;

const widthScale = inX / outX;
const heightScale = inY / outY;

const scaleFactor = Math.min(widthScale, heightScale);

const newoutX = outX * scaleFactor;
const newoutY = outY * scaleFactor;

console.log("X:", newoutX);
console.log("Y:", newoutY);