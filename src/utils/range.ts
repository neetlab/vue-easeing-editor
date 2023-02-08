export function* range(since: number, until: number) {
  let next = since;

  while (next < until) {
    yield next;
    next++;
  }
}
