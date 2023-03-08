// refers to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog


const likeBtn = document.getElementById("button_like");
const dialog_favPartDialog = document.getElementById("dialog_favPartDialog");
const output_favPartDialog = document.getElementById("output_favPartDialog");
const confirmBtn_favPartDialog = document.getElementById("confirmBtn_favPartDialog");
const form_favPartDialog = document.getElementById("form_favPartDialog");
const select_favPartDialog = document.getElementById("select_favPartDialog");



likeBtn.addEventListener('click', ()=>{
    dialog_favPartDialog.showModal();
});

// The guide gives (e) \\\\\\\\\\\\\\\\\\ WHY
// select_favPartDialog.addEventListener('change', (e)=> {
select_favPartDialog.addEventListener('change', ()=> {
    confirmBtn_favPartDialog.value = select_favPartDialog.value;
});

dialog_favPartDialog.addEventListener('close', ()=> {
    // output_favPartDialog.innerText = "Thank you!"+${dialog_favPartDialog.returnValue};
    // output_favPartDialog.innerHTML= `Thank you! ${dialog_favPartDialog.returnValue}`;
    output_favPartDialog.value= `Thank you! ${dialog_favPartDialog.returnValue}`;
    // returnValue_favDialog_purified = DOMPurify.sanitize(favDialog.returnValue); 
    // output_favPartDialog.value = 'ReturnValue: ${returnValue_favDialog_purified}.';
});