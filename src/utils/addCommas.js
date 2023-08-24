function addCommas(numberString, interval = 3) {
  const parts = [];
  
  for (let i = numberString.length; i > 0; i -= interval) {
    parts.unshift(numberString.slice(Math.max(i - interval, 0), i));
  }
  
  return parts.join(',');
}

export default addCommas;
