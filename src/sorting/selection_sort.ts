export const selectionSort = (arr: number[]): number[] => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};
