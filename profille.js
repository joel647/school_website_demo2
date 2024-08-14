

function generateProfile(){
   let firstName= document.getElementById("myText").value   ;
   let lastName= document.getElementById("lastName").value;
   let age= document.getElementById("age").value;
   let genda= document.getElementById("genda").value;
   let course= document.getElementById("course").value;


    console.log("firstName");
    console.log(firstName);
    document.getElementById("plastName").innerHTML=  "Your lastname is"+ "  "+lastName;
    document.getElementById("pfirstName").innerHTML="Your firstname is"+ "  "+firstName;
    document.getElementById("page").innerHTML="Your age is"+ "  "+age;
    document.getElementById("pgenda").innerHTML="Your are a"+ "  "+genda;
    document.getElementById("pcourse").innerHTML="Your are sturdying"+ "  "+course;
    
}

    document.getElementById("submit").addEventListener('click',function(){
        document.getElementById("myForm").style.display='none';
        document.getElementById("myDiv").style.display='block';
    })




