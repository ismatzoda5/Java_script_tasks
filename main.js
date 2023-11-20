//home task 1

let coor = (x,y) =>{
if (x > 0 && y < 0) {
    return("Точка находится в четвертой четверти");
  } else {
    return("Точка находится в первой четверти");
  }
}
  console.log(coor(2,1))

//home task 2

let iscube = (cube) =>{

    let a=cube*cube*cube;

    return a;
}
console.log(iscube(4))

// home task 3

let isrange = (range) =>{
    for(let i=50; i<=100; i++){
        if(range == i)
        {
            return true
        }   
    } 
    return false
}
console.log(isrange(100));

// home task 4 

let rating = (rate) =>{
if(rate>=0 && rate<=59 )
return ("Bad");
 else if(rate>=60 && rate<=74 )
return ("Good");
 else if(rate>=75 && rate<=89 )
return ("Great");
else (rate>=90 && rate<=100 )
return ("Excellent");

}
console.log(rating(90));



// home task 5

let leapyear = (year) =>{
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
       return("Leap year");
        } else {
       return("Not leap year");
        }
}
console.log(leapyear(2023))

// home task 6

let dollar = (euro) =>{
    let a=euro*0.85
    return a;
}
console.log(dollar(50));


