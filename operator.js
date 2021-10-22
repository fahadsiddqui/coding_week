var date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("today").innerHTML = "Today is : "+days[date.getDay()];
document.getElementById("time").innerHTML = "Current time is : "+date.getHours() +":"+date.getMinutes() +":"+date.getSeconds();

function getDate(){
    var date = new Date();
    document.getElementById("current_date").innerHTML = "Current date is : "+ date.getDate()+"-"+ date.getMonth()+"-"+ date.getFullYear()
    +" , "+date.getDate()+"/"+ date.getMonth()+"/"+ date.getFullYear();
}

function getArea() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1)  * (s - side2) * (s - side3)));
    document.getElementById("result").value = area;
}

function Calculation(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var operator = document.getElementById("operator").value;
    var cal_result ="";
    if(operator == "+")
    {
        cal_result = num1+num2;
    }
    else if(operator == "-")
    {
        cal_result = num1-num2;        
    }
    else if(operator == "*")
    {
        cal_result = num1*num2;
    }
    else
    {
        cal_result = num1/num2;
    }
    document.getElementById("cal_result").value = cal_result;
}

function getReverse(){
    var text = "Saylani";
    var len = text.length;
    var textar =[];
    for (let i = len; i >= 0; i--) {
        textar.push(text.charAt(i))    
    }
    var rev = textar.join('');
    document.getElementById('rotate_text').innerHTML=rev;
}

function getLeapYear() {
    var year = document.getElementById('leap_year').value;
    var res="";
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        res =year + ' is a leap year';
    } else {
        res = year + ' is not a leap year';
    }
    document.getElementById('result_leap_year').innerHTML = res;
}

function getSunday() {
    var res="";
    for (var year = 2014; year <= 2050; year++) {
      var d = new Date(year, 0, 1);
      if (d.getDay() === 0) {
        res += year +'</br>';
      }
    }
    document.getElementById('result_sunday').innerHTML = res;
  }


  function getGuessNo(){
      var guess_no = document.getElementById('guess_no').value;
      var res="";

 const num = Math.ceil(Math.random() * 10);
  if (guess_no == num)
    res ='Good Work';
   else
    res ='Not matched no is '+ num;
  
  document.getElementById('result_guess_no').innerHTML = res;
  }

  function get14August(){
    var res = "";
    today=new Date();
    console.log(today.getFullYear());
    var aug14=new Date(today.getFullYear(), 7, 14);
    if (today.getMonth() >7 && today.getDate()>14) 
    {
    aug14.setFullYear(aug14.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    res = Math.ceil((aug14.getTime()-today.getTime())/(one_day))+" days left until 14 August!";
    document.getElementById('result_14_august').innerHTML = res;
  }

  function getTriple() {
    var num1 = parseFloat(document.getElementById("t_num1").value);
    var num2 = parseFloat(document.getElementById("t_num2").value);
    
    var result ="";
    if (num1 == num2) {
      result = 3 * (num1 + num2);
      } 
     else
     {
      result =(num1 + num2);
     }
     document.getElementById('result_triple').value = result;

   }

   function getThree() 
   {
      var num1 = parseFloat(document.getElementById("l_num1").value);
      var num2 = parseFloat(document.getElementById("l_num2").value);
      var num3 = parseFloat(document.getElementById("l_num3").value);
  
    max_val = 0;
    if (num1 > num2)
    {
      max_val = num1;
    } else
    {
      max_val = num2;
    }
    if (num3 > max_val) 
    {
      max_val = num3;
    }
    document.getElementById('result_l').value = max_val;
  }
  function getCapitalize() 
{
    var str = document.getElementById("letter").value;
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    str = str.join(" ");
    document.getElementById('letter').value = str;
}
function getHours(){
    var days = parseInt(document.getElementById("days").value);

    var hours = days * 24;
    var mins = hours * 60;
    var res =   "Hours is "+hours+" Minutes is "+mins;
    document.getElementById('result_days').innerHTML = res;
}