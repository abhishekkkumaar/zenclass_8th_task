var request = new XMLHttpRequest();

request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

request.send();

request.onload=function(){
var data = JSON.parse(request.response);

// Print the total population of countries using reduce function

/* let totpop = data.reduce((old,curr)=>old+curr.population,0) 
console.log(totpop) */

//Print the following details name, capital, flag using forEach function.

/* data.forEach((element)=>{
  console.log(element.name,element.capital,element.flag);
}) */

/* let result=data.filter((d)=>{
    return d.type==="currencies";})
  console.log(result); */

  //Get all the countries from Asia continent /region using Filter function

/*  let continent = data.filter(function(element){
  if(element.region==="Asia")
  {
    return element.name;
  }
})
console.log(continent); */

//Print the country which uses US Dollars as currency.  


  /*       var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }  */

  
//Get all the countries with a population of less than 2 lakhs using Filter function    

   /*  let population=data.filter((element)=>{
        return element.population<200000;
      })
  console.log(population);
 */


}