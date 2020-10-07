function getSeason(date) {
  
  console.log(date)
  console.log(date.getFullYear())
  console.log(date.getMonth())
  console.log(date.getDate())


  let month = date.getMonth()
let day = date.getDate()

if(month >= 6 && month <9) return 'summer'
else if (month >= 9 && month <12)  return 'autumn'
else if (month >= 12 && month <3)  return 'winter'
else if (month >= 3 && month <6)  return 'spring'
  
}

console.log(getSeason(new Date(new Date(2019, 11, 22, 23, 45, 11, 500))))
console.log(getSeason(new Date(2018, 4, 17, 11, 27, 4, 321)));
console.log(getSeason(new Date(2017, 6, 11, 23, 45, 11, 500)));
console.log(getSeason(new Date(1994, 8, 26, 3, 0, 11, 500)));