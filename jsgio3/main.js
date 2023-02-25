function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  const shedegi = power(2, 3);
  console.log(shedegi)
  



  




 function areulimnish(...args) {
    const mxolodRicxvebi = args.filter(arg => typeof arg === 'number');
    const moqmedebebi = mxolodRicxvebi.map(number => {
        if (number % 2 === 0) {
            return number / 2;
        }
        else {
            return Math.pow(number, 2);
        }
    })
    const jami = moqmedebebi.reduce((acc, cur) => acc + cur, 0);
    return Math.round(jami / 2);
 }

 const saboloo = areulimnish (2, 'hello', 3, {}, 4, 5, 'world', 6);
 console.log(saboloo)



 let ricxvebi = [4, 5, 11, 2, 9, 99, 1092, 1]

 ricxvebi.sort((a, b) => a - b);
console.log(ricxvebi.join(' '));