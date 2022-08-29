// این اسکریپت برای حذف لودینگ و دیدن صفحه میباشد
const PageLoader = document.getElementById("PageLoaderContainer")
const WebPage = document.getElementById("WebPage")
const TimeOutForRemovingLoader = setTimeout(RemoveLoader, 3000);
function RemoveLoader(){
    PageLoader.classList.add("d-none");
    WebPage.classList.remove("d-none");
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// من با این اسکریپت میخواهم اگر کسی آفکانواس را باز کرد و بعد صفحه را از حالت
// مجاز آفکانواس باز تر کرد آفکانواس به صورت خودکار حدف شود
window.addEventListener("resize" , CheckTheValidSizeForOffcanvas)
var headerNavOffcanvas = document.getElementById("headerNavOffcanvas");
function CheckTheValidSizeForOffcanvas(){
    let WindowWidth = window.innerWidth; 
    if(WindowWidth >= 768){
        headerNavOffcanvas.classList.remove("show");
    }
}

// form Validtion Scripts 
var FormBtn = document.getElementById("form__submit__btn");
var NameInput = document.getElementById("name__input");
var TelePhoneInput = document.getElementById("telephone__input");
var TextAreaInput = document.getElementById("text__area__input");
FormBtn.addEventListener("click" , () => {
    let IsTheNameInputCorrect = CheckTheNameInput();
    let IsTheTelInputCorrect  = CheckTheTelInput();
    let IsTheTextAreaInputCorrect  = CheckingTheAreaInput();

    if(IsTheNameInputCorrect){
        InputIsValid(NameInput)
    }else{
        InputIsNotValid(NameInput)
    }
    if(IsTheTelInputCorrect){
        InputIsValid(TelePhoneInput)
    }else{
        InputIsNotValid(TelePhoneInput)
    }
    if(IsTheTextAreaInputCorrect){
        InputIsValid(TextAreaInput)
    }else{
        InputIsNotValid(TextAreaInput)
    }

    ShowToast(IsTheNameInputCorrect , IsTheTelInputCorrect , IsTheTextAreaInputCorrect);
})
function CheckTheNameInput(){
    let NameInputValue = NameInput.value.toLowerCase();
    NameInput.value = NameInputValue;
    const NameInputAcceptableValue = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];    
    let CorrectWords = 0;
    if(NameInputValue.length == 0){
        return false;
    }
    else{
        for(var i = 0; i < NameInputAcceptableValue.length; i++){
            for(var j = 0; j < NameInputValue.length; j++){
                if(NameInputValue[j] == NameInputAcceptableValue[i]){
                    CorrectWords++;
                }
            }
        }
    }
    if(CorrectWords == NameInputValue.length){
        return true;
    }else{
        return false;
    }
}
function CheckTheTelInput(){
    let TelInputValue = TelePhoneInput.value;
    let TelInputAcceptableValue = [
        0 ,
        1 , 
        2 , 
        3 , 
        4 , 
        5 , 
        6 , 
        7 ,
        8 , 
        9 ,
    ]
    let CorrectNumbers = 0;
    if(TelInputValue.length !== 11){
        return false;

    }
    for(var i = 0; i < TelInputAcceptableValue.length; i++){
        for(var j = 0; j < TelInputValue.length; j++){
            if(TelInputValue[j] == TelInputAcceptableValue[i]){
                CorrectNumbers++;
            }
        }
    }
    if(CorrectNumbers == TelInputValue.length){
        return true;
    }else{
        return false;
    }
}
function CheckingTheAreaInput(){
    let TextAreaInputValue = TextAreaInput.value;
    if(TextAreaInputValue.length <= 10){
        return false;
    }
    else{
        return true;
    }
}
function InputIsValid(element){
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
}
function InputIsNotValid(element){
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
}
function ShowToast(IsTheNameInputCorrect , IsTheTelInputCorrect , IsTheTextAreaInputCorrect){
    let SuccessMassageToast = document.getElementById("success__massage__toast");

    if(IsTheNameInputCorrect == true && 
       IsTheTelInputCorrect == true && 
       IsTheTextAreaInputCorrect == true){
        const toast = new bootstrap.Toast(SuccessMassageToast)
        toast.show()
       }
}