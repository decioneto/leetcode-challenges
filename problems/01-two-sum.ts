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

function two_sum(listNumbers: number[], target: number): number[] {
    let pair_index: number[] = []
    for (let i = 0; i < listNumbers.length; i++) {
        const currentValue = listNumbers[i]
        const nextValue = listNumbers[i + 1]

        if (currentValue + nextValue === target) {
            pair_index.push(i)
            pair_index.push(i + 1)
        }
    }

    console.log(pair_index)
    return pair_index
}

two_sum([2, 7, 11, 15], 9)
two_sum([3, 2, 4], 6)
two_sum([3, 3], 6)
