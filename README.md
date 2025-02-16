# React Native FlatList Performance Issue

This repository demonstrates a common performance problem in React Native when using FlatList with a large dataset. The initial implementation renders all items at once, leading to significant performance degradation. The solution showcases how to improve performance by implementing pagination or windowing techniques.

## Problem

The `LargeListBug.js` file contains a FlatList that renders a large number of items.  Scrolling is slow and jerky, particularly on lower-end devices.  This is due to the inefficient rendering of all items simultaneously.

## Solution

The `LargeListSolution.js` file demonstrates a solution using `windowSize` and `initialNumToRender` to limit the number of items rendered at a time.  This significantly improves performance.  Consider additional optimization strategies like virtualization libraries for even more complex scenarios.