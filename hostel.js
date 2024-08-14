function hostel(){
    let Name= document.getElementById("Name").value;
    let Hall= document.getElementById("Hall").value;
    let Bednumber= document.getElementById("Bednumber").value;
    let Buncker= document.getElementById("Buncker").value;
    
   if(Name&&Hall&&Bednumber&&Buncker){
      alert("succesful");
   }else{
      alert("complete your regstraton")
   }

}


