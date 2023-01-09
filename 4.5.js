const leapYear = (year) => {
  if ((year % 4 == 0 && year % 100 > 0) || year % 400 == 0) {
    console.log(`The year: ${year} is indeed a leap year`);
  } else {
    console.log(`The year: ${year} is not indeed a leap year`);
  }
};

//test
leapYear(2004);
leapYear(1900);
leapYear(2000);
leapYear(2022);


