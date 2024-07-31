export const bubbleSort = (arr: number[]): number[] => {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let swap = false;
    console.log(arr);
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];

        swap = true;
      }
    }

    if (!swap) break;
    len--;
  }
  return arr;
};
