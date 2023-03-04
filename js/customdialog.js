const likeBtn = document.getElementById("button_like");
const dialog_favPartDialog = document.getElementById("dialog_favPartDialog");
const output_favPartDialog = document.getElementById("output_favPartDialog");
const confirmBtn_favPartDialog = document.getElementById("confirmBtn_favPartDialog");

likeBtn.addEventListener("click", ()=>{
    dialog_favPartDialog.showModal();
});

dialog_favPartDialog.addEventListener("close", ()=> {
    output_favPartDialog.value = "Thank you!";


    // returnValue_favDialog_purified = DOMPurify.sanitize(favDialog.returnValue); 
    // output_favPartDialog.value = 'ReturnValue: ${returnValue_favDialog_purified}.';
});