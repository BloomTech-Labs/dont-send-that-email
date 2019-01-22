
//0.701269
//0.865316
////0.54706
watsonNumberCrunch = (num) => {
  //If the number is 75 or greater. Then the emotional response is definitely there.
  //If the number is less than 50. Then it's undetected.
  //So the range is 25 points. We round the watson score. Times it by 100 to get a whole number.
  //then divide by 75. 
  //Then we only return the first two decimal places.
  const number = Math.round(num * 100) / 75
  number.toFixed(2)

  if(number.toFixed(2) > 1) {
    return 1
  } else {
    return number.toFixed(2)
  }

}






module.exports = {

  watsonNumberCrunch

}

