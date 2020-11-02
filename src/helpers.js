export function gboi(array, index) {
  //getByOverflownIndex
  return index < 0
    ? array[array.length - (Math.abs(index) % array.length)]
    : index >= array.length
    ? array[index % array.length]
    : array[index];
}

export function goi(array, index) {
  //getOwerflownIndex
  return index < 0
    ? array.length - (Math.abs(index) % array.length)
    : index >= array.length
    ? index % array.length
    : index;
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  let i;
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
