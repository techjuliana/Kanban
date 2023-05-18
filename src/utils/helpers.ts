const colors = [
  'purple',
];

export function swap<T>(arr: T[], i: number, j: number): T[] {
  const copy = [...arr];
  const tmp = copy[i];
  copy[i] = copy[j];
  copy[j] = tmp;
  return copy;
}

export function pickChakraRandomColor(variant = '') {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color + variant;
}
