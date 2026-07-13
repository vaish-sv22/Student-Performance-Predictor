// Login Page

document.getElementById("login-btn").addEventListener("click",function(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name=="" || email==""){
    alert("Please enter Name and Email");
    return;
}

document.getElementById("login-page").classList.remove("active");
document.getElementById("details-page").classList.add("active");

});


// Prediction Button

document.getElementById("predict-btn").addEventListener("click",function(){

let age=document.getElementById("age").value;
let gender=document.getElementById("gender").value;
let hours=parseFloat(document.getElementById("hours").value);
let attendance=parseFloat(document.getElementById("attendance").value);
let marks=parseFloat(document.getElementById("marks").value);
let goal=document.getElementById("goal").value;

if(age=="" || gender=="" || hours=="" || attendance=="" || marks=="" || goal==""){
    alert("Please fill all fields");
    return;
}

let predicted=(marks*0.6)+(attendance*0.2)+(hours*4);

if(predicted>100){
    predicted=100;
}

predicted=Math.round(predicted);

let grade="";
let level="";

if(predicted>=90){
    grade="A+";
    level="Excellent";
}
else if(predicted>=80){
    grade="A";
    level="Very Good";
}
else if(predicted>=70){
    grade="B";
    level="Good";
}
else if(predicted>=60){
    grade="C";
    level="Average";
}
else if(predicted>=50){
    grade="D";
    level="Needs Improvement";
}
else{
    grade="F";
    level="Poor";
}

let name=document.getElementById("name").value;

// Student Summary

document.getElementById("student-summary").innerHTML=
`
<p><b>Name:</b> ${name}</p>
<p><b>Age:</b> ${age}</p>
<p><b>Gender:</b> ${gender}</p>
<p><b>Study Hours:</b> ${hours} Hours/Day</p>
<p><b>Attendance:</b> ${attendance}%</p>
<p><b>Previous Marks:</b> ${marks}%</p>
`;


// Prediction

document.getElementById("prediction").innerHTML=
`
<p><b>Predicted Marks:</b> ${predicted}%</p>
<p><b>Expected Grade:</b> ${grade}</p>
<p><b>Performance Level:</b> ${level}</p>
`;


// Recommendations

let tips="";

if(predicted<50){

tips=`
<ul>
<li>Increase study hours daily.</li>
<li>Attend all classes regularly.</li>
<li>Revise basic concepts.</li>
<li>Practice previous year question papers.</li>
</ul>
`;

}

else if(predicted<70){

tips=`
<ul>
<li>Revise notes every day.</li>
<li>Focus on weak subjects.</li>
<li>Take weekly mock tests.</li>
<li>Improve time management.</li>
</ul>
`;

}

else if(predicted<85){

tips=`
<ul>
<li>Continue your current study routine.</li>
<li>Solve advanced problems.</li>
<li>Practice sample papers.</li>
<li>Stay consistent.</li>
</ul>
`;

}

else{

tips=`
<ul>
<li>Excellent performance!</li>
<li>Maintain consistency.</li>
<li>Help classmates in group study.</li>
<li>Keep practicing difficult questions.</li>
</ul>
`;

}

document.getElementById("tips").innerHTML=tips;


// Move to Result Page

document.getElementById("details-page").classList.remove("active");
document.getElementById("result-page").classList.add("active");

});



// Restart

document.getElementById("restart-btn").addEventListener("click",function(){

document.getElementById("result-page").classList.remove("active");
document.getElementById("login-page").classList.add("active");

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("age").value="";
document.getElementById("gender").value="";
document.getElementById("hours").value="";
document.getElementById("attendance").value="";
document.getElementById("marks").value="";
document.getElementById("goal").value="";

});