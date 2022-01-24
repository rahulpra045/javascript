function getmarks(){
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var english = Number(document.getElementById("english").value);
    var biology = Number(document.getElementById("biology").value);
    // console.log("This is working");
    // console.log(maths + physics +chemistry +english +biology);
    var total = 500;
    var marksobtained = maths + physics +chemistry +english +biology;
    var percentage = (marksobtained / total)*100;
    document.getElementById("percentage").innerHTML = percentage + "%";
    // console.log(percentage + "%");
    var grade = "";
    if(percentage > 90){
        grade = "A+";
    }else if(percentage <= 90 && percentage > 80){
        grade = "A";
    }
    else if(percentage <= 80 && percentage > 70){
        grade = "B+";
    }
    else if(percentage <= 70 && percentage > 60){
        grade = "B";
    }
    else if(percentage <= 60 && percentage > 50){
        grade = "c+";
    }
    else if(percentage <= 50 && percentage > 40){
        grade = "C";
    }
    else if(percentage <= 40 && percentage > 30){
        grade = "D";
    }
    else if(percentage <= 30 && percentage > 20){
        grade = "E";
    }
    else if(percentage <= 20 && percentage > 0){
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;
    if(percentage < 60){
        document.getElementById("pass").innerHTML = "Sorry! YOu Failed! Please try next time";
    }else{
        document.getElementById("pass").innerHTML = "Congratulation!! You have passed";
    }
}