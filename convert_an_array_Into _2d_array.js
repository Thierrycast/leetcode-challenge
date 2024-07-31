/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  let list = []
  for(let num of nums){
      let present = false
      for(let row of list){
          if(!row.includes(num)){
              row.push(num)
              present = true
              break
          }
      }
      if(!present){
          list.push([num])
      }
  }
  return list;
};


//https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/