export function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return null;});
  return images;
}

export function queryMatch(query, text) {
  return text.toLowerCase().indexOf(query) !== -1;
}

export function queryMatchArray(query, textArray) {
  for (var i in textArray) {
    if (textArray[i].toLowerCase().indexOf(query) !== -1) {
        return true;
    }
  }
  return false;
}