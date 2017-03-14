/*
* @Author: liuyao5201314
* @Date:   2017-03-14 21:40:25
* @Last Modified by:   liuyao5201314
* @Last Modified time: 2017-03-14 21:45:21
*/

'use strict';

function copyArray(arr) {
    return arr.slice();
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function getnerateRandomArray(n, l, r) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = Math.floor(l + Math.random() * (r - l + 1));
    }
    return arr;
}

function _isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

function testSort(sortName, arr) {
    var label = sortName.name + ' Array(' + arr.length + ')排序耗时';

    // 耗时
    console.time(label);
    sortName(arr, arr.length);
    console.timeEnd(label);

    // 断言
    require('assert')(_isSorted(arr), '排序失败');
}

exports.copyArray = copyArray;
exports.swap = swap;
exports.getnerateRandomArray = getnerateRandomArray;
exports.testSort = testSort;