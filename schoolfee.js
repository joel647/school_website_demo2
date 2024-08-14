
// }

let card=document.getElementById("card-element").value;
let paywithcard=document.getElementById("cardhold").value;
let paymentDiv=document.getElementById("payment-container");

function pay(){
    // alert("messadr")
    // alert(card);
    // console.log(card);
    // console.log(card-element);
    // console.log("done")
    if(card&&paywithcard){
        paymentDiv.innerHTML='<p>\fy<p>'
        // paymentDiv.innerHTML=' <div id="payment" class="payment" style="display:block;">   <p>add yourpayment</p> <button class="bt"> <a href="https://www.opayweb.com/csr" target="_blank">Paywith opayweb  </button>   <h4>Acc no:09076320757</h4>      <p class="acc">Acc name:school fees payment DEMO</p>      </div>'
    }else{
        alert("chek")
    }
}