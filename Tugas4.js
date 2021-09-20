function tinggi(){
  var tinggiA = 160;
  var tinggiB = 110;
  var tinggiC = 190;

  if (tinggiA > tinggiB){
    if (tinggiA > tinggiC && tinggiB > tinggiC){
      console.log("A tertinggi pertama, B tertinggi kedua, dan C yang terpendek");
    } else if (tinggiA > tinggiC && tinggiB < tinggiC) {
      console.log("A tertinggi pertama, C tertinggi kedua, B yang terpendek");
    } else {
      console.log("C tertinggi pertama, A tertinggi kedua, B yang terpendek");
    }
  }else if (tinggiA > tinggiC) {
    console.log("B tertinggi pertama, A tertinggi kedua, C yang terpendek");
  } else if (tinggiB > tinggiC) {
    console.log("B tertinggi pertama, C tertinggi kedua, A yang terpendek");
  } else {
    console.log("C tertinggi pertama, B tertinggi kedua, A terpendek");
  }
  }


tinggi()
