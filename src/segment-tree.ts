export class SegmentTree {
  st: number[];
  private lazy: number[];
  private size: number;
  constructor(l: number) {
    this.st = new Array(4 * l + 1).fill(0);
    this.size = l;
    this.lazy = new Array(4 * l + 1).fill(0);
  }

  private build(arr: number[], low: number, high: number, ind: number): void {
    if (low == high) {
      this.st[ind] = arr[low];
      return;
    }

    const mid = Math.floor((low + high) / 2);

    this.build(arr, low, mid, 2 * ind + 1);
    this.build(arr, mid + 1, high, 2 * ind + 2);

    this.st[ind] = Math.min(this.st[2 * ind + 1], this.st[2 * ind + 2]);
  }
  buildTree(arr: number[]) {
    this.size = arr.length;
    return this.build(arr, 0, this.size - 1, 0);
  }
  private query(
    lr: number,
    hr: number,
    ind: number,
    low: number,
    high: number
  ): number {
    if (high < lr || low > hr) return Number.POSITIVE_INFINITY;
    else if (lr <= low && hr >= high) return this.st[ind];
    else {
      let mid = Math.floor((low + high) / 2);
      let l = this.query(lr, hr, 2 * ind + 1, low, mid);
      let r = this.query(lr, hr, 2 * ind + 2, mid + 1, high);
      return Math.min(l, r);
    }
  }

  rangeQuery(lr: number, hr: number) {
    this.checkRange(lr, hr);
    return this.query(lr, hr, 0, 0, this.size - 1);
  }

  private update(val: number, ind: number, l: number, h: number, id: number) {
    if (l == h) {
      this.st[ind] = val;
      return;
    }

    const mid = Math.floor((l + h) / 2);

    if (id <= mid) {
      this.update(val, 2 * ind + 1, l, mid, id);
    } else this.update(val, 2 * ind + 2, mid + 1, h, id);

    this.st[ind] = Math.min(this.st[2 * ind + 1], this.st[2 * ind + 2]);
  }

  updateValue(val: number, index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error("Update index out of bounds.");
    }

    return this.update(val, 0, 0, this.size - 1, index);
  }

  private rangeUpdate(
    lr: number,
    hr: number,
    val: number,
    ind: number,
    low: number,
    high: number
  ) {
    if (this.lazy[ind] != 0) {
      let prevVal = this.lazy[ind];
      this.st[ind] += prevVal * (high - low + 1);
      if (low !== high) {
        this.lazy[2 * ind + 1] += prevVal;
        this.lazy[2 * ind + 2] += prevVal;
      }
      this.lazy[ind] = 0;
    }

    if (lr > high || hr < low) return;

    if (lr <= low && hr >= high) {
      this.st[ind] += (high - low + 1) * val;
      if (low != high) {
        this.lazy[2 * ind + 1] += val;
        this.lazy[2 * ind + 2] += val;
      }

      return;
    }

    const mid = Math.floor((low + high) / 2);

    this.rangeUpdate(lr, hr, val, 2 * ind + 1, low, mid);

    this.rangeUpdate(lr, hr, val, 2 * ind + 2, mid + 1, high);

    this.st[ind] = Math.min(this.st[2 * ind + 1], this.st[2 * ind + 2]);

    return;
  }

  updateRangeValue(lr: number, hr: number, val: number) {
    this.checkRange(lr, hr);
    return this.rangeUpdate(lr, hr, val, 0, 0, this.size - 1);
  }
  private checkRange(lr: number, hr: number) {
    if (lr < 0 || hr >= this.size || lr > hr) {
      throw new Error("Invalid range for update.");
    }
  }
}
