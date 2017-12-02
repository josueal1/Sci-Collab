function generate ()
{
	document.getElementById("test").innerHTML="";
	
	var container = document.createElement("div");
	container.setAttribute("class", "container"); //Have to append each of the following 

	var row = document.createElement("div");
	row.setAttribute("class", "row");

		for (var x =0; x< 3; x++)
	{
		var problem = "problemname"; //have to fix this
		var description = "problem description";
				
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
	}
	
	document.getElementById("test").appendChild(container);
	///////////////////////
//	document.body.append(container);

}