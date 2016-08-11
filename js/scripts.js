var name;
var dob;
var training;
var spaceship;
var color;

var myFunction = function(value) {
  color = value;
}

$("form").submit(function(event){
  event.preventDefault();
});

$("#name").keyup(function(event){
  event.preventDefault();
  if (event.keyCode === 13) {
    name = $(this).val();
  }
});

$("#dob").keyup(function(event){
  event.preventDefault();
  if (event.keyCode === 13) {
    dob = $(this).val();
  }
});

$("#training").change(function(event){
  event.preventDefault();
  training = $(this).val();
});

$("input:radio[name=spaceship]").click(function(){
  spaceship = $(this).val();
});

$("button").click(function(event){
  alert("Thank you " + name + ".  Your application has been submitted with the following information: DOB:" + dob + " Training: " + training + " Spaceship: " + spaceship + " color: " + color + ".");
});
