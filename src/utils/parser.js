

const stringToArray = (string) => {
  return string.split(',').map((name) => name.trim());
}

const deleteEmptyValue = (strArray) => {
  return strArray.filter((element) => element !== '');
}

const parser = {
  stringToArray,
  deleteEmptyValue,
}

export default parser;
