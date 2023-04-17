function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
  
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let text;

    if(d1 > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    if (isNaN(d1) || d1 < 1 || d1 > 31) {
      text = "Must be a valid day";
      document.getElementById('cal-day').innerHTML = "--";
    } else {
      text = "";
      document.getElementById('cal-day').innerHTML = +d;
    }
    document.getElementById("demo").innerHTML = text;

    if (isNaN(m1) || m1 < 1 || m1 > 12) {
      text = "Must be a valid month";
      document.getElementById('cal-month').innerHTML = "--";
    } else {
      text = "";
      document.getElementById('cal-month').innerHTML = +m;
    }
    document.getElementById("demo-m").innerHTML = text;

    if (isNaN(y1) || y1 < 1950 ) {
      text = "Input not valid";
      document.getElementById('cal-year').innerHTML = "--";
    } else if (y1 > 2023) {
      text = "Must be in the past";
      document.getElementById('cal-year').innerHTML = "--";
    } else {
      text = "";
      document.getElementById('cal-year').innerHTML = +y;
    }
    document.getElementById("demo-y").innerHTML = text;
  
   
    
   
  }