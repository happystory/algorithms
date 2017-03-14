/*
 * @Author: liuyao5201314
 * @Date:   2017-03-14 21:45:44
 * @Last Modified by:   liuyao5201314
 * @Last Modified time: 2017-03-14 22:18:12
 */

'use strict';

var helper = require('./helper');

/**
 * 冒泡排序
 * @param  {Array} arr 待排序数组
 * @param  {Number} n   数组长度
 */
function bubbleSort(arr, n) {
    for (var i = 0; i < n - 1; i++) {

        // 相邻元素两两比较，较大的浮动到数组右侧
        for (var j = 0; j < n - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                helper.swap(arr, j, j + 1);
            }

            // 优化
            // var temp = arr[j+1];
            // if (arr[j] > arr[j+1]) {
            //     arr[j+1] = arr[j];
            // }
            // arr[j] = temp;
        }
    }
}

/**
 * 选择排序
 * @param  {Array} arr 待排序数组
 * @param  {Number} n   数组长度
 */
function selectionSort(arr, n) {
    for (var i = 0; i < n - 1; i++) {

        var minIndex = i;

        // 取出当前这一轮中最小值的索引
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        helper.swap(arr, i, minIndex);
    }
}

/**
 * 插入排序
 * @param  {Array} arr 待排序数组
 * @param  {Number} n   数组长度
 */
function insertionSort(arr, n) {
    for (var i = 1; i < n; i++) {

        // 与前面的元素比较，寻找元素arr[i]合适的插入位置
        for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            helper.swap(arr, j, j - 1);
        }

        // 优化
        // var temp = arr[i];
        // for (var j = i; j > 0 && arr[j-1] > temp; j--) {
        //     arr[j] = arr[j-1];
        // }
        // arr[j] = temp;
    }
}


var n = 10000;
var arr = helper.getnerateRandomArray(n, 0, n);

var arr1 = helper.copyArray(arr);
var arr2 = helper.copyArray(arr);
var arr3 = helper.copyArray(arr);

helper.testSort(bubbleSort, arr1);
helper.testSort(selectionSort, arr2);
helper.testSort(insertionSort, arr3);
