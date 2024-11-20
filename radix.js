function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums) {
    if (nums.length === 0) return nums;

    let maxDigitCount = mostDigits(nums);

    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);

        for (let num of nums) {
            let digit = getDigit(num, i);
            digitBuckets[digit].push(num);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort};