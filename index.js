



document.getElementById("circle").addEventListener("click", function(){
    
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (day === ""){
        document.getElementById("fieldday").innerHTML = "Field is required";

    }
    else if (day >= 32){
        document.getElementById("fieldday").innerHTML = "Must be valid day";
    } else if (isNaN(day)){
        document.getElementById("fieldday").innerHTML = "Enter a valid number";
    }
    else if (day <=0 ) {
        document.getElementById("fieldday").innerHTML = "Enter a valid number";
    } else {
        var date = new Date();
        var day1 = date.getDate() - day;

        document.getElementById("days").innerHTML = day1;
    }


    if (month === ""){
        document.getElementById("fieldmonth").innerHTML = "Field is required";

    }
    else if (month >= 13){
        document.getElementById("fieldmonth").innerHTML = "Must be a valid month";
    } 
    else if (isNaN(month)){
        document.getElementById("fieldmonth").innerHTML = "Enter a valid number";
    }
    else if (month <=0) {
        document.getElementById("fieldmonth").innerHTML = "Enter a valid number";
    }
    else if (month > (date.getMonth()+ 1)) {
        var currentMonth = 12 - ((month)- (date.getMonth() + 1));
        document.getElementById("months").innerHTML = currentMonth; 
    } 
    else if(month == (date.getMonth() + 1)){
        document.getElementById("months").innerHTML = "0";
        
    } 
    else {
        var mon = (date.getMonth()+1) - month;
        document.getElementById("months").innerHTML = mon;
    }




    if (year === ""){
        document.getElementById("fieldyear").innerHTML = "Field is required";
    }

    else if (year >= 2025){
        document.getElementById("fieldyear").innerHTML = "Must be in the past";
    } 
    else if (isNaN(year)){
        document.getElementById("fieldyear").innerHTML = "Enter a valid year";
    }
    else if (year <=1920) {
        document.getElementById("fieldyear").innerHTML = "Enter a valid number";
    } 
    else if (month > (date.getMonth() + 1)){
        var num = date.getFullYear() - year;
        var currentYear = num - 1;
        document.getElementById("years").innerHTML = currentYear;
    }
    else if(month == (date.getMonth() + 1)) {
        var current = num + 1;
        document.getElementById("years").innerHTML = current;
    }
    else {
        var num = date.getFullYear() - year;
        document.getElementById("years").innerHTML = num;
    }

    

    

    if (day === day && month === month && year === year){
        document.getElementById("circle").style.backgroundColor = "hsl(259, 100%, 65%)";
        }


    

});

function validate(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var status = false;

    if (day === ""){
        document.getElementById("label").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
        status = false;
    }
    else {
        document.getElementById("fieldday").innerHTML = "";
        document.getElementById("label").style.color = '';
        status = true;
    }

    if (month === ""){
        document.getElementById("label2").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
        status = false;
    }else{
        document.getElementById("fieldmonth").innerHTML = "";
        document.getElementById("label2").style.color ="";
        status = true;
    }

    if (year === ""){
        document.getElementById("label3").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
        status = false;
    }else{
        document.getElementById("fieldyear").innerHTML = "";
        document.getElementById("label3").style.color = "";
        status =  true;

    }
    return status

}


document.getElementById("day").addEventListener("click", function(){

    document.getElementById("day").style.borderColor = "hsl(259, 100%, 65%)";
});


document.getElementById("month").addEventListener("click", function(){

    document.getElementById("month").style.borderColor = "hsl(259, 100%, 65%)";
});


document.getElementById("year").addEventListener("click", function(){
    document.getElementById("year").style.borderColor = "hsl(259, 100%, 65%)";
});