{
  let n: number = 10;
  for (let j = 1; j <= n; j++) {
    if (j % 2 !== 0) {
      continue;
    }
    console.log(j);
  }

  let x: number = 10;
  while (x <= 100) {
    console.log(`dem so ${x}`);
    x += 10;
  }

  let myName: string = "Nguyen Hoang";
  for (let k = 0; k < myName.length; k++) {
    console.log(myName[k]);
  }

  // * Hạn chế sử dụng type: any, unknown
}
