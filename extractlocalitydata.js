//Used this to extract locality data from http://www.propertykhazana.com/localities/pune

var string = "";
listItems = $("#localitylist").find("a").each(function(){
   string += '\n'+$(this).text();
});
console.log(string);