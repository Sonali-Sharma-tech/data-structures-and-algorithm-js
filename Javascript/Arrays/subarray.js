/**
 * Given an array Arr[] of N integers.
 *  Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
 * Input:
    N = 5
    Arr[] = {1,2,3,-2,5,-3}
    Output:
    9

     arr = {-2, -3, 4, -1, -2, 1, 5, -3}
 */

// input - array
// output - number
function maxSubarray(arr) {
    let max_sum = 0;
    let cur_sum = 0;
    for(let i = 0; i < arr.length; i++) {
       cur_sum = cur_sum + arr[i];
       if(cur_sum < 0) {
           cur_sum = 0;
       }
       if (max_sum < cur_sum) {
           max_sum = cur_sum;
       }
    return max_sum;
    }
}