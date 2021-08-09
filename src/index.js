
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix) {
    matrix.forEach((element, index) => {
      // console.log(element);
      if (index % 2 == 0) {
        result = result.concat(element);
      } else {
        result = result.concat(element.reverse());
      }

      // console.log("Result: ", result);
    });
  }

  return result;
}
