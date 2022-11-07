const array = [1, 2, 3, 4, 5, 6, 7];
const removeElement = (array, element) => array.splice(array.indexOf(element), 1)
removeElement(array, 5 );
console.log(array);
