/**

You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
 * @param {number[]} nums
 * @return {number[]}
 */


var countSmaller = function(nums) {
    
  // create output array 
  let counts = [];
  for (let i=0; i <= nums.length -1; i++) {
      let currentCount = 0;
      for (let j=i; j <= nums.length -1; j++){
          if (nums[j] < nums[i]) {
              currentCount ++;
              console.log(currentCount);
          }
      }
      counts.push(currentCount)
      //console.log("pushed" + currentCount);
  }
  
  return counts;
};