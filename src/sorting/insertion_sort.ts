export const insertionSort = (arr: number[]): number[] => {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    console.log(arr);
    let curr = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > curr) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = curr;
  }
  return arr;
};
