var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
  var otherarr = arr.slice()
  otherarr.unshift(element)
  return otherarr
 }

 function destructivelyAddElementToBeginningOfArray (arr, element){
   arr.unshift(element)
   return arr
 }

function addElementToEndOfArray (arr, element){
  return [... arr, element]
}

function destructivelyAddElementToEndOfArray (array, element){
   array.push(element)
   return array
}

function accessElementInArray (a, i){
  return (a[2])
}
