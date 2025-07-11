/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

function twoSum(nums: number[], target: number): number[] {
    let pair_index: number[] = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const currentValue = nums[i]
            const nextValue = nums[j]

            if (currentValue + nextValue === target) {
                pair_index.push(i)
                pair_index.push(j)
                break
            }
        }

        if (pair_index.length) {
            break
        }
    }

    return pair_index
}

twoSum([2, 7, 11, 15], 9)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)
twoSum([3, 2, 3], 6)
