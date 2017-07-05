$(document).ready(function(){
  $("#meow").click(function(){
    $("#meow + p").append("<p>Meow meow!!</p>");
    $("#bark + p").append("<p>Ruff Ruff!!</p>");
  });
  $("#bark").click(function(){
    $("#bark + p").prepend("<p>Leave me alone!!</p>");
    $("#meow + p").append("<p>Hisssssss!!</p>");
  });
  $("#kitty").click(function(){
    alert("fuck off");
  });
  $("#doggy").click(function(){
    $("#bark + p").append("<img src='img/fatCat.jpg'>");
    $("#doggy").click(function(){
      $("img").toggle();
    });
  });
});
