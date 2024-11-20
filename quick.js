/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    let pivotVal = arr[start];
    let swapInd = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotVal) {
            swapInd++;
            [arr[i], arr[swapInd]] = [arr[swapInd], arr[i]];
        }
    }

    [arr[start], arr[swapInd]] = [arr[swapInd], arr[start]]

    return swapInd;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotInd = pivot(arr, left, right);

        quickSort(arr, left, pivotInd - 1);
        quickSort(arr, pivotInd + 1, right);
    }

    return arr;
}

module.exports = { pivot, quickSort};