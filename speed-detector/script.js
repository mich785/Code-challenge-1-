// speed generator code

function speedDetector(speed){
    if(speed >70){
     const kmPerDemeritPoint = 5
     let demeritPoints = 0
     demeritPoints = (speed - 70 ) / kmPerDemeritPoint

     // condition for demerit points 
     if (demeritPoints<12){
        return "Points:"+ demeritPoints;
     }
     else{
        return "License suspended";
     }
    }
    return "Ok";
}

