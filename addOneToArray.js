/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

For example an array [2, 3, 9] equals 239, add one would return an array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

The array can't be empty and only positive, single digit integers are allowed. The function should return null if the array is empty or any of the array values are negative or more than 10.

[1, -9] would return null/nil/None (according to the language implemented).

*/

function upArray(arr){
  if (arr.length == 0) {
    return null
  }

  var rev_arr = arr.reverse()
  var add_one = true

  for(var i=0; i < rev_arr.length; i++){
    if (rev_arr[i] < 0 || rev_arr[i] > 9) { return null }
    if (add_one == true){
      rev_arr[i]++
      if (rev_arr[i] > 9){
        rev_arr[i] = 0
        add_one = true
      } else {
        add_one = false
      }
    }
  }

  if (add_one == true){
    rev_arr.push(1)
  }

  return rev_arr.reverse()
}
