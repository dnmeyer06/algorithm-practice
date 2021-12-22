function anagram(s) {
  const stringArray = s.split("");
  if (stringArray.length % 2 !== 0) {
    return -1;
  }

  const firstHalf = stringArray.slice(0, stringArray.length / 2);
  const secondHalf = stringArray.slice(stringArray.length / 2);

  const firstHalfMap = new Map();

  for (let i = 0; i < firstHalf.length; i++) {
    firstHalfMap.set(
      firstHalf[i],
      firstHalfMap.has(firstHalf[i]) ? firstHalfMap.get(firstHalf[i]) + 1 : 1
    );
  }

  for (let i = 0; i < secondHalf.length; i++) {
    const letterPresent = firstHalfMap.has(secondHalf[i]);

    if (letterPresent) {
      firstHalfMap.set(secondHalf[i], firstHalfMap.get(secondHalf[i]) - 1);
    }
  }

  const mapArray = [...firstHalfMap.values()];
  const nonZeroArray = mapArray.filter((number) => number > 0);

  return nonZeroArray.reduce((previous, current) => previous + current, 0);
}
