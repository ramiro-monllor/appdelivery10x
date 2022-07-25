// Given start time and finish time, find how many times each digit appeared on the clock during the period from start time to finish time inclusive.

// Note that the time on clocks is shown as follows: HH:MM:SS, so leading zeros are also supposed to be counted.

// Example

// For startTime = [13, 24, 5] and finishTime = [13, 24, 20], the output should be
// solution(startTime, finishTime) = [7, 27, 18, 17, 17, 2, 2, 2, 2, 2].

// The time on clocks during the given period will be shown as follows:

// 13:24:05
// 13:24:06
// 13:24:07
// 13:24:08
// 13:24:09
// 13:24:10
// 13:24:11
// 13:24:12
// 13:24:13
// 13:24:14
// 13:24:15
// 13:24:16
// 13:24:17
// 13:24:18
// 13:24:19
// 13:24:20
// You can calculate the number of each digit yourself and double-check that it equals to the corresponding element of the output array.

// For startTime = [23, 59, 58] and finishTime = [23, 59, 59], the output should be
// solution(startTime, finishTime) = [0, 0, 2, 2, 0, 4, 0, 0, 1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer startTime

// Guaranteed constraints:
// startTime.length = 3,
// 0 ≤ startTime[0] ≤ 23,
// 0 ≤ startTime[1] ≤ 59,
// 0 ≤ startTime[2] ≤ 59.

// [input] array.integer finishTime

// Time is represented as follows [hours, minutes, seconds]. Time on the clocks is shown as follows: HH:MM:SS. It is supposed that both time stamps refer to the same day.

// Guaranteed constraints:
// finishTime.length = 3,
// startTime[0] ≤ finishTime[0] ≤ 23,
// 0 ≤ finishTime[1] ≤ 59,
// 0 ≤ finishTime[2] ≤ 59,
// startTime < finishTime.

// [output] array.integer

// Array ith element of which contains the number of occurrences of digit i on the clock during the period from startTime to finishTime inclusive.

function solution(startTime, finishTime) {
  
    
    var start = startTime[0]*3600 + startTime[1]*60 + startTime[2];
    var finish = finishTime[0]*3600 + finishTime[1]*60 + finishTime[2];
    var result = [];
    var i;
    for(i=0;i<10;i++){
        result.push(0);
    }
    for(i=start;i<=finish;i++){
        var temp = i;
        while(temp>0){
            result[temp%10]++;
            temp = Math.floor(temp/10);
        }
    }
    return result;

}