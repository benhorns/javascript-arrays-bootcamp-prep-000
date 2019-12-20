var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
  var otherarr = arr.slice()
  arr.unshift(element)
  return arr
 }
