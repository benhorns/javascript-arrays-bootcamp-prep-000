var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
  var otherarr = arr.slice()
  otherarr.unshift(element)
  return arr
 }
