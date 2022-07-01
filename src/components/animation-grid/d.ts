interface Layout {
  key: string;
  w: number;
  h: number;
}

interface ElementSize {
  [k: string]: { width: number; height: number };
}
