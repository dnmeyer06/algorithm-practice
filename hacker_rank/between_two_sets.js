function getTotalX(a, b) {
  const factorsOfInts = a;
  const factorOfInts = b;

  const maxOfFactors = Math.max(...factorsOfInts);
  const minOfFactor = Math.min(...factorOfInts);

  let isBetweenTwoArraysCount = 0;

  for (let i = maxOfFactors; i <= minOfFactor; i += maxOfFactors) {
    const isFactorsOfInts = factorsOfInts.reduce(
      (previous, current) => previous && i % current === 0,
      true
    );
    const isFactorOfInts = factorOfInts.reduce(
      (previous, current) => previous && current % i === 0,
      true
    );

    if (isFactorsOfInts && isFactorOfInts) {
      isBetweenTwoArraysCount++;
    }
  }

  return isBetweenTwoArraysCount;
}
