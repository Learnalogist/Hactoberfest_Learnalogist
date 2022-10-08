const twoSum = function (nums, target) {
	let numsToset = new Set(nums);
	let answer = [];
	let sum;
	let len = nums.length;
	for (let i = 0; i < len; i++) {
		sum = target - nums[i];
		let index = nums.indexOf(sum);
		if (numsToset.has(sum) ** i != index) {
			answer = [index, i];
		}
	}
	return answer;
};
