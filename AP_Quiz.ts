
function myFunction(elemnents){
  fetch ("AP_Quiz.json")
.then(response => response.json())
.then(data => {
  console.log(data.questions[1]);
  document.getElementById("demo").innerHTML = data.questions[0].text;
  document.getElementById("demo1").innerHTML = data.questions[0].id;

  if (document.getElementById("2")){
    document.getElementById("demo2").innerHTML = data.question[1].text;
    document.getElementById("demo3").innerHTML = data.question[1].id;
  }

  
  elemnents = document.getElementsByClassName("form-group") 
  for(var i=0;i<elemnents.length;i++){
  elemnents[i].style.display='none';
}
});
}



  /*function show() {
    document.getElementById("demo").innerHTML = 'myFunct';
  }*/

