/**
 * collection_1: sorted descending (max -> min)
 * collection_2: sorted ascending (min -> max)
 * collection_3: sorted ascending (min -> max)
 *
 * Returns one ascending array. No sort function allowed,
 * so we walk all three with pointers and pick the smallest each step.
 * For collection_1 we walk from the tail because that side holds the smaller values.
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const total = collection_1.length + collection_2.length + collection_3.length;
  const result: number[] = new Array(total);

  let i = collection_1.length - 1;
  let j = 0;
  let k = 0;
  let out = 0;

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    const v1 = i >= 0 ? collection_1[i] : Number.POSITIVE_INFINITY;
    const v2 = j < collection_2.length ? collection_2[j] : Number.POSITIVE_INFINITY;
    const v3 = k < collection_3.length ? collection_3[k] : Number.POSITIVE_INFINITY;

    if (v1 <= v2 && v1 <= v3) {
      result[out++] = v1;
      i--;
    } else if (v2 <= v3) {
      result[out++] = v2;
      j++;
    } else {
      result[out++] = v3;
      k++;
    }
  }

  return result;
}
