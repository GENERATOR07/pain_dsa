const partition = (l: number, h: number, arr: number[]): number => {
  let pivot = arr[l];
  let i = l;
  let j = h;
  while (i < j) {
    do i++;
    while (arr[i] <= pivot);
    do j--;
    while (arr[j] > pivot);

    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
};
export const quickSort = (arr: number[]): number[] => {
  const sort = (l: number, h: number) => {
    if (l >= h) return;
    let pivotIndex = partition(l, h, arr);

    sort(l, pivotIndex);
    sort(pivotIndex + 1, h);
  };
  sort(0, arr.length);
  return arr;
};
