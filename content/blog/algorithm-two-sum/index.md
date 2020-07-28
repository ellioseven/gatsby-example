---
title: "Algorithm: Two Sum"
date: "2020-07-17T00:00:00.000Z"
---
Given an array of integers, return indices of the two numbers such that they
add up to a specific target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

Answer:

```js
const twoSum = (nums, target) => {
  const result = []

  let j = 0
  let found = false

  while (nums.length) {
    let i = nums.length - 1

    if (i !== j && nums[i] + nums[j] === target) {
      if (!found) result.push(i)
      found = true
      result.push(j)
    }

    j++
    if (j === nums.length) {
      nums.pop()
      found = false
      j = 0
    }
  }

  return result.reverse()
}
```
