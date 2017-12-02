var mainText=document.getElementById("maintext");
var discipline=document.getElementById("discipline");
var problemName=document.getElementById("problemname");
var submits=document.getElementById("submit");

function submitting(){
var firebaseRef = firebase.database().ref(discipline.value);
var data={
problem: problemName.value,
description: mainText.value 
}
firebaseRef.push(data);
}

function retrieve(){
var firebaseRef = firebase.database().ref(discipline.value);
firebaseRef.on('value',gotData,errData);

}

function gotData(data){
document.getElementById("listproblem").innerHTML="";
console.log(data.val());
var fields =data.val();
var keys=Object.keys(fields);
for (var i=0; i<keys.length; i++){
var k=keys[i];
var problem=fields[k].problem;
var description=fields[k].description;

//window.alert(problem + ": " + description);
//document.write(problem + ": " + description);
//document.getElementById("listproblem").innerHTML=document.getElementById("listproblem").innerHTML + (i+1)+". "+problem + ": " + description + "<br>";
//var li=document.createElement('li', problem);
//console.log(li);
//document.createElement("problemlist").appendChlid(li);
}
}

function errData(err){
console.log('Error!');
console.log(err);
}