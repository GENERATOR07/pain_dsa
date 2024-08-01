const merge = (a: number[], b: number[]): number[] => {
  let result: number[] = [];
  let length_A = a.length;
  let length_B = b.length;
  let i = 0,
    j = 0,
    k = 0;
  while (i < length_A && j < length_B) {
    if (a[i] <= b[j]) {
      result[k] = a[i];
      i++;
    } else {
      result[k] = b[j];
      j++;
    }
    k++;
  }
  while (i < length_A) {
    result[k] = a[i];
    i++;
    k++;
  }
  while (j < length_B) {
    result[k] = b[j];
    j++;
    k++;
  }
  return result;
};

export const mergeSort = (arr: number[]): number[] => {
  let high = arr.length - 1;
  const sort = (l: number, h: number): number[] => {
    if (l == h) return [arr[l]];
    let mid = Math.floor((l + h) / 2);
    let leftSubArray = sort(l, mid);
    let rightSubArray = sort(mid + 1, h);
    return merge(leftSubArray, rightSubArray);
  };

  return sort(0, high);
};
