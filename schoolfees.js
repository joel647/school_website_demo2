function pay(){
    let card=document.getElementById("card").value;
    let credit=document.getElementById("card-element").value;



    if(card||credit===""){
    //    alert("input your the followmg field")
       document.getElementById('error-message').textContent='insert the fields'
       
    }
    if(isNaN(credit)){
        // alert("insert your card Number")
       try{
        // document.getElementsById('animate').textContent='toor';   
        function pay(){
        document.getElementsById('animate').style.display='block';   
        }    
        document.getElementById('error-message').textContent='insert your card Number';
        document.getElementById('error-message').style.display='block';
       }catch(error){
        alert(error)
       }
    }
     else if(credit&&card){
        // document.getElementById("submit").addEventListener('click',function(){
        //     event.preventDefault;
            document.getElementById("payment-container").style.display='none';
            document.getElementById("payment").style.display='block';
        // })
        // function pay(){
            // document.getElementById("payment-container").style.display='none';
            // document.getElementById("payment").style.display='block';
        
    }
}

// function pay(){
//             document.getElementById("payment-container").style.display='none';
//              document.getElementById("payment").style.display='block';
// }

// &#128540
// &#128523



let sticer = document.getElementById('pp');
let test = document.getElementById('test');
sticer.addEventListener('mouseover', function1);
sticer.addEventListener('click', function2);
sticer.addEventListener('mouseout', function3);


function function1(){
    sticer.innerHTML='&#128523';   
    test.textContent='your children';
    test.style.display='block'
}

function function2(){
    sticer.innerHTML='&#128540';
    test.textContent=' is your future';
    // sticer.style.backgroundColor='blue';
}

function function3(){
    sticer.innerHTML='&#128536';   
    test.textContent='invest in them';
}


// let animate=document.getElementsByClassName('animate');
// animate.addEventListener()