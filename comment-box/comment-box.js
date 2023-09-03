var userComment = document.getElementById("userComment");
var result = document.getElementById("result");
var limit = 140;
result.textContent = 0 + "/" + limit;

userComment.addEventListener("input",function(){
    var textLength = userComment.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        userComment.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        userComment.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }

});

function myFunction(){
    let data = "";  let name = document.getElementById("userName").value
    let email = document.getElementById("userEmail").value
    let comment = document.getElementById("userComment").value
   
   data = "User name : "+name+"<br/>User email : "+email+ "<br/>User comment : "+comment
   
   document.getElementById("data").innerHTML = data 
   }
   
