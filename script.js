function generate ()
{
	
	var container = document.createElement("div");
	container.setAttribute("class", "container"); //Have to append each of the following 

/*	var problem = fields[k].problem;
	var description = fields[k].description;*/

	var row = document.createElement("div");
	row.setAttribute("class", "row");
	
	var colm = document.createElement("div");
	colm.setAttribute("class", "col-sm");
	
	
	var labela = document.createElement("a");
	labela.setAttribute("onmouseover", problem.toString()+"()");

	labela.setAttribute("onmouseout", problem.toString()+"()");
	
	labela.setAttribute("class", "btn btn-primary");
	
	labela.setAttribute("type", "button");
	
	labela.setAttribute("data-toggle", "collapse");
	
	labela.setAttribute("href", "#map");
	
	
	
	var descriptDiv = document.createElement("div");
	descriptDiv.setAttribute("class", "collapse");
	descriptDiv.setAttribute("id", problem.toString());
	
	var descriptionString = document.createTextNode(description.toString());
	
	var scripts = document.createElement("script");
	scripts.text = "function" +problem.toString()+"toggle (){" +"$('#" + problem.toString() +").collapse('toggle');}";
	
	colm.appendChild(scripts);
	descriptDiv.appendChild(descriptionString);
	colm.appendChild(descriptDiv);
	colm.appendChild(labela);
	row.appendChild(colm);
	container.appendChild(row);
	
	///////////////////////
	document.body.append(container);

}