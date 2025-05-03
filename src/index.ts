import { SegmentTree } from "./segment-tree";

const arr = [3, 7, 1, 9, 0, 6, 4, 2, 8, 5];
let seg = new SegmentTree(arr.length);
seg.buildTree(arr);

console.log(seg.rangeQuery(1, 2));
console.log(seg.rangeQuery(4, 4));
