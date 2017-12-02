var mainText=document.getElementById("maintext");
var discipline=document.getElementById("discipline");
var problemName=document.getElementById("problemname");
var submits=document.getElementById("submit");

function submitting(){
var firebaseRef = firebase.database().ref(discipline.value);
var count=Math.random();
var data={
problem: problemName.value,
description: mainText.value,
counter: count
}

firebaseRef.push(data);
}

function retrieve(){
var firebaseRef = firebase.database().ref(discipline.value);
firebaseRef.on('value',gotData,errData);

}

function gotData(data){
//document.getElementById("listproblem").innerHTML="";
console.log(data.val());
var fields =data.val();
var keys=Object.keys(fields);
document.getElementById("retrieveddata").innerHTML="";
for (var i=0; i<keys.length; i++){
var k=keys[i];
var problem=fields[k].problem;
var description=fields[k].description;

	
	var container = document.createElement("div");
	container.setAttribute("class", "container"); //Have to append each of the following 

	var row = document.createElement("div");
	row.setAttribute("class", "row");
				
		var scripts = document.createElement("script");
		scripts.text = "function " +problem.toString()+"toggle (){" +"$('#" + problem.toString() +"').collapse('toggle');}";
		document.head.appendChild(scripts);

		
		
		var colm = document.createElement("div");
		colm.setAttribute("class", "col-sm");
		
		
		var labela = document.createElement("a");
		labela.setAttribute("onmouseover", problem.toString()+"toggle()");

		labela.setAttribute("onmouseout", problem.toString()+"toggle()");
		
		labela.setAttribute("class", "btn btn-primary");
		
		labela.setAttribute("type", "button");
		
		labela.setAttribute("data-toggle", "collapse");
		
		labela.setAttribute("href", "#map");
		
		var problemDescriptionLabel = document.createTextNode(problem.toString());
		
		labela.appendChild(problemDescriptionLabel);
		
		var descriptDiv = document.createElement("div");
		descriptDiv.setAttribute("class", "collapse");
		descriptDiv.setAttribute("id", problem.toString());
		
		var descriptionString = document.createTextNode(description.toString());
		
		container.appendChild(row);
		row.appendChild(colm);
		colm.appendChild(labela);
		colm.appendChild(descriptDiv);
		descriptDiv.appendChild(descriptionString);
		colm.appendChild(scripts);

	
	document.getElementById("retrieveddata").appendChild(container);
	///////////////////////
//	document.body.append(container);
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