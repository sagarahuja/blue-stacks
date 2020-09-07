const arr = [1, 3, 5, 7, 9];

const mapfunction = (arr, fun) => {
  return arr.forEach((value)=>fun(value))
};
mapfunction(arr, () => {});
