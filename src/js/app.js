export default function orderByProps(obj, [one, two]) {
  let newObj = [];
  for (const key in obj) {
    if (key == one) {
      newObj.unshift({ key: key, value: obj[key] });
    }
    if (key == two) {
      newObj.push({ key: key, value: obj[key] });
    }
  }
  for (const key in obj) {
    if (key !== one && key !== two) {
      newObj.push({ key: key, value: obj[key] });
    }
  }
  return newObj;
}