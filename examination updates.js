//using addEventListener directly element id

// document.getElementById("departments").addEventListener('click',function(){
//     alert("padding?")
// })

//using addEventListener with variable saved to do more tahn one job

// let departments = document.getElementById("departments");

// departments.addEventListener('click',function(){
//     alert("Do")
// })

// departments.addEventListener('click',function(){
//     alert("love")
// })

// departments.addEventListener('click',function(){
//     alert("me?")
// })

try{
let departments = document.getElementById("departments");
departments.addEventListener("mouseover", myFirstfunction);
departments.addEventListener("click", mySecondfunction);
departments.addEventListener("mouseout", myThirdfunction);  

function myFirstfunction(){
     document.getElementById("departments").style.backgroundColor="linear-gradient(127deg, rgba(106, 106, 127, 0.619), #1e4091ef)";
     document.getElementById("test").innerHTML="welcome to exam hall ";
}

function mySecondfunction(){
    document.getElementById("test").innerHTML="Get to work"+ "<br>";throw "error ocuuered"
    document.getElementById("departments").style.backgroundColor="grey";
}

function myThirdfunction(){
    document.getElementById("test").innerHTML=" Best of luck!"; throw 'error has occured'
    document.getElementById("departments").style.background="linear-gradient(12deg, rgba(106, 106, 97, 0.619), #1e4091ef)";
}
}catch(err){
        alert(err)
}


let btn=document.getElementById("table");
btn.addEventListener('click',function(){
document.getElementById("tables").style.display="none";
document.getElementById("tables").style.display="block";
})

// console.log(btn)

let timetable=document.getElementById("timetable");
    timetable.addEventListener('mouseout',function(){
          alert('clicked')
        document.getElementById("btn").style.backgroundColor="linear-gradient(127deg, rgba(106, 106, 97, 0.619), #1e4091ef)";
        }) 



function removeScience(){
    const parentDiv=document.getElementById("depart");
    document.getElementById("remove").remove();
    document.getElementById("rem").remove();
    document.getElementById("timetable").remove();
    document.getElementById("container").remove();

}



function removeCommerce(){
    document.getElementById("rem").remove();
    document.getElementById("timetable").remove();
    document.getElementById("container").remove();

}

function removeTimetableWithCommerce(){
    document.getElementById("container").remove();
    document.getElementById("timetable").remove();
}


