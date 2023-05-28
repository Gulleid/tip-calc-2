function calculateTip(bi) {
    let tip;
    if (bi >= 80 && bi <= 300) {
      tip = bi * 0.15;
    } else {
      tip = bi * 0.2;
    }
    return tip;
  }
  
  const bi1 = 400;
  const bi2 = 300;
  const tip1 = calculateTip(bi1);
  const tip2 = calculateTip(bi2);
  console.log(`For bill of ${bi1}, the tip is ${tip1}`);
  console.log(`For bill of ${bi2}, the tip is ${tip2}`);