// speed generator code

function speedDetector(speed){
    if(speed >70){
     const kmPerDemeritPoint = 5
     let demeritPoints = 0
     demeritPoints = (speed - 70 ) / kmPerDemeritPoint
     if (demeritPoints<12){
        return demeritPoints;
     }
     else{
        return "License suspended";
     }
    }
    return "Ok";
}
console.log(speedDetector(135));