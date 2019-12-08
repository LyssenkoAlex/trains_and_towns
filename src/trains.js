const GRAPH_SCHEMA =
    {
      AB: 5,
      BC: 4,
      CD: 8,
      DC: 8,
      DE: 6,
      AD: 5,
      CE: 2,
      EB: 3,
      AE: 7
    };
const getPathWeight = (path) => {
  const pathArray = path.split('');

  let startPos = pathArray.shift();
  let total = 0;
  let stopCount = 0;

  pathArray.forEach((x) => {
    if (GRAPH_SCHEMA[startPos + x] !== undefined) {
      total += GRAPH_SCHEMA[startPos + x];
      startPos = x;
      // eslint-disable-next-line no-plusplus
      stopCount++;
    }
  });

  return stopCount === pathArray.length ? total : 'NO SUCH ROUTE';
};

console.log(getPathWeight('ABC'));
console.log(getPathWeight('AD'));
console.log(getPathWeight('ADC'));
console.log(getPathWeight('AEBCD'));
console.log(getPathWeight('AED'));
