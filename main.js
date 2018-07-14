function loadJson(file,callback)
{
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){

		 callback(xhr.responseText);
		}


	
};
xhr.send();
}
loadJson("data.json", function(text){
	var data=JSON.parse(text);
	console.log(data);
	carrer(data.carrer);
	education(data.education);
	skills(data.skills);
})
var childTwo=document.querySelector(".child2");
function carrer(carrerInfo){
	var heading=document.createElement("h2");
	heading.textContent="CARRER OBJECTIVE";
	childTwo.appendChild(heading);
	var hr=document.createElement("hr");
	heading.appendChild(hr);
	var carrerP=document.createElement("P");
	carrerP.textContent=carrerInfo.info;
	childTwo.appendChild(carrerP);
}
function education(edu){
	var heading=document.createElement("h3");
	heading.textContent="EDUCATIONAL QUALIFICATIONS";
	childTwo.appendChild(heading);
	var hr=document.createElement("hr");
	heading.appendChild(hr);
    var table=document.createElement("table");
	childTwo.appendChild(table);
	table.border="1";
	var tr1="<tr><td>degree</td><td>institute</td><td>year of passing</td><td>percentage</td></tr>";
	
	var tr2="";
	for(var i=0;i<edu.length;i++){
		 tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].yearofpassing+"</td><td>"+edu[i].percentage+"</td></tr>";


	}
	table.innerHTML=tr1+tr2;

}
function skills(skil){
	var heading=document.createElement("h3");
	heading.textContent="SKILL-SET";
	childTwo.appendChild(heading);
	var hr=document.createElement("hr");
	heading.appendChild(hr);
	for(var i=0;i<skil.length;i++){
		var titleH=document.createElement("h3");
		titleH.textContent=skil[i].title;
		childTwo.appendChild(titleH);
		var ul=document.createElement("ul");
		childTwo.appendChild(ul);
		for(var j=0;j<skil[i].info.length;j++){
			var li=document.createElement("li");
			li.textContent=skil[i].info[j];
			ul.appendChild(li);
		}
	}

}