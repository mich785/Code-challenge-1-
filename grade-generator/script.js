// function that prompts the mark as the arguement and returns the grade as the output

function gradeGenerator(mark) {
  // for any mark >100 or <0 return invalid   
  if (mark > 100 || mark < 0) {
    return "Invalid input";
  } else if (mark > 79) {
    return "A";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= 49) {
    return "C";
  } else if (mark >= 40) {
    return "D";
  } else {
    return "E";
  }
}



