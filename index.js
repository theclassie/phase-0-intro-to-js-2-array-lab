// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function appendCat(name) {
  const newCatsArray = [...cats, name];
  return newCatsArray;
}
function prependCat(name) {
  const newCatsArray = [name, ...cats];
  return newCatsArray;
}
function removeLastCat() {
  const newRemoveLastCatArray = cats.slice(0, -1);
  return newRemoveLastCatArray;
}
function removeFirstCat() {
  const newRemoveFirstCatArray = cats.slice(1);
  return newRemoveFirstCatArray;
}
