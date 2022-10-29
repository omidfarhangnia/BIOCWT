
// var DubAndJasan = [];
// for(var i = 0; i < Dub.length; i++){
//     DubAndJasan.push(Dub[i])
// }
// for(var i = 0; i < Jasan.length; i++){
//     DubAndJasan.push(Jasan[i])
// }
window.addEventListener("load" , startProcess)
async function startProcess () {
    let response = await fetch("https://raw.githubusercontent.com/omidfarhangnia/BIOCWT-Website/main/js%20files/data/Dub%20wood%20data.json")
    let data = response.json();
    return data
}
startProcess().then(function (ret){
    console.log(ret)
    // MakeHeaderForTable("Dub" , Dub , "Price__list__table__body--Dub");
    // MakeDataCellForTable(Dub , "Price__list__table__body--Dub");
    // MakeHeaderForTable("Jasan" , Jasan , "Price__list__table__body--Jasan");
    // MakeDataCellForTable(Jasan , "Price__list__table__body--Jasan");
})
function MakeHeaderForTable(arrayName , array , element) {
    var PriceListTableHead = document.getElementById(`${element}`);
    var StartingTr = `<tr>`;
    var allTds = "";
    var EndingTr = `</tr>`;
    var KeysForTableHead = Object.keys(array[0]).reverse();
    // man dar inja be dalil baraks vared kardan kilid ha majboram as reverse
    // estefade bokonam ta be halat aval bargardan
    for(let i = 0; i < KeysForTableHead.length; i++){
        allTds += `<th scope="col" class="table__headers">${KeysForTableHead[i]}</th>`;
    }
    PriceListTableHead.innerHTML = StartingTr + `<th rowspan="${array.length + 1}" class="table__headers">${arrayName}</th>` + allTds + EndingTr;
}
function MakeDataCellForTable(array , element) {
    var PriceListTableBody = document.getElementById(`${element}`);
    var StartingTr = `<tr>`;
    var allTds = "";
    var EndingTr = `</tr>`;
    for(let i = 0; i < array.length; i++){
        let priceKS = `<td class="table__datas Price__backgroundColor"> ${array[i].priceKS} </td>`;
        let priceM3 = `<td class="table__datas"> ${array[i].priceM3} </td>`;
        let m3 = `<td class="table__datas"> ${array[i].m3} </td>`;
        let thickness = `<td class="table__datas"> ${array[i].thickness} </td>`;
        let width = `<td class="table__datas"> ${array[i].width} </td>`;
        let length = `<td class="table__datas"> ${array[i].length} </td>`;
        let OneOfTds  = StartingTr + length + width + thickness + m3 + priceM3 + priceKS + EndingTr;
        allTds += OneOfTds;
    }
    PriceListTableBody.innerHTML += allTds;
}
// ReadMore And ReadLess Button for Prices tabels
const ReadMoreButtons = document.querySelectorAll(".read__more__btn");
const ReadLessButtons = document.querySelectorAll(".read__Less__btn");
ReadMoreButtons.forEach(AddEventToReadMore)
ReadLessButtons.forEach(AddEventToLessMore)
function AddEventToReadMore(element){
    element.addEventListener("click" , () => {
        MakeItActive(element)
        RemovingBtn(element)
    })
}
function AddEventToLessMore(element){
    element.addEventListener("click" , () => {
        MakeItINActive(element)
        RemovingBtn(element)  
    })
}
function MakeItActive(element){
    const Table = element.parentNode;
    Table.classList.add("Active__table")
}
function MakeItINActive(element){
    const Table = element.parentNode;
    Table.classList.remove("Active__table")
}
function RemovingBtn(element){
    element.classList.add("d-none");
    var NextElement = element.nextElementSibling;
    var PervElement = element.previousElementSibling;
    if(NextElement != null){
        NextElement.classList.remove("d-none");
    }else{
        PervElement.classList.remove("d-none");
    }
}
// Live Min And Max for Inputs

// const InputWoodSelecting = document.getElementById("InputWoodSelecting");
// const InputLengthSelecting = document.getElementById("InputLengthSelecting");
// const InputWidthSelecting = document.getElementById("InputWidthSelecting");
// const InputthicknessSelecting = document.getElementById("InputthicknessSelecting");

// InputWoodSelecting.addEventListener("change" , () => {
//     var SelectedOption = InputWoodSelecting.value;
//     if(SelectedOption == "Not Selected"){
//         WoodIsSelected(DubAndJasan);
//     }
//     else if(SelectedOption == "Dub"){
//         WoodIsSelected(Dub)
//     }
//     else if(SelectedOption == "Jasan"){
//         WoodIsSelected(Jasan)
//     }
// })
// function WoodIsSelected(array){
//     var HighestAndLowest = FindHighestAndLowest(array);
//     ChooseMinAndMax(HighestAndLowest)
//     ChooseOptionsForThickness(HighestAndLowest)
// }
// function FindHighestAndLowest(array){
//     var HighestAndLowest = {
//         length : [],
//         width : [],
//         thicknessAvailable : [],
//         priceM3 : [],
//     };

//     HighestAndLowest.length = FindHighestAndLowestLength(array);
//     HighestAndLowest.width = FindHighestAndLowestWidth(array);
//     HighestAndLowest.thicknessAvailable = FindAllthicknessAvailable(array);
//     HighestAndLowest.priceM3 = FindHighestAndLowestPriceM3(array);

//     return HighestAndLowest;
// }
// function FindHighestAndLowestLength(array){
//     var LowestAndHighestLength = {
//         HighestLength : -Infinity ,
//         LowestLength : Infinity
//     }
//     for(var i = 0; i < array.length; i++){
//         if(LowestAndHighestLength.HighestLength <= Number(array[i].length)){
//             LowestAndHighestLength.HighestLength = array[i].length;
//         }
//         if(LowestAndHighestLength.LowestLength >= Number(array[i].length)){
//             LowestAndHighestLength.LowestLength = array[i].length;
//         }
//     }
//     return LowestAndHighestLength;
// }
// function FindHighestAndLowestWidth(array){
//     var LowestAndHighestWidth = {
//         HighestWidth : -Infinity ,
//         LowestWidth : Infinity
//     }
//     for(var i = 0; i < array.length; i++){
//         if(LowestAndHighestWidth.HighestWidth <= Number(array[i].width)){
//             LowestAndHighestWidth.HighestWidth = array[i].width;
//         }
//         if(LowestAndHighestWidth.LowestWidth >= Number(array[i].width)){
//             LowestAndHighestWidth.LowestWidth = array[i].width;
//         }
//     }
//     return LowestAndHighestWidth;
// }
// function FindAllthicknessAvailable(array){
//     var thicknessAvailable = new Set();
//     for(var i = 0 ; i < array.length; i++){
//         thicknessAvailable.add(array[i].thickness)
//     }
//     thicknessAvailable = [...thicknessAvailable]
//     return thicknessAvailable
// }
// function FindHighestAndLowestPriceM3(array){
//     var LowestAndHighestPriceM3 = {
//         HighestPriceM3 : -Infinity ,
//         LowestPriceM3 : Infinity
//     }
//     for(var i = 0; i < array.length; i++){
//         if(LowestAndHighestPriceM3.HighestPriceM3 <= Number(array[i].priceM3)){
//             LowestAndHighestPriceM3.HighestPriceM3 = array[i].priceM3;
//         }
//         if(LowestAndHighestPriceM3.LowestPriceM3 >= Number(array[i].priceM3)){
//             LowestAndHighestPriceM3.LowestPriceM3 = array[i].priceM3;
//         }
//     }
//     return LowestAndHighestPriceM3;
// }
// function ChooseMinAndMax(HighestAndLowest){
//     InputLengthSelecting.setAttribute("min" , HighestAndLowest.length.LowestLength);
//     InputLengthSelecting.setAttribute("value" , HighestAndLowest.length.LowestLength);
//     InputLengthSelecting.setAttribute("max" , HighestAndLowest.length.HighestLength);

//     InputWidthSelecting.setAttribute("min" , HighestAndLowest.width.LowestWidth);
//     InputWidthSelecting.setAttribute("value" , HighestAndLowest.width.LowestWidth);
//     InputWidthSelecting.setAttribute("max" , HighestAndLowest.width.HighestWidth);

//     InputthicknessSelecting.setAttribute("min" , HighestAndLowest.priceM3.LowestPriceM3);
//     InputthicknessSelecting.setAttribute("value" , HighestAndLowest.priceM3.LowestPriceM3);
//     InputthicknessSelecting.setAttribute("max" , HighestAndLowest.priceM3.HighestPriceM3);
// } 
// function ChooseOptionsForThickness(HighestAndLowest){
//     var OptionOpenTag = `<option>`;
//     var ThicknessInputOptions = `<option selected>Not Selected</option>`;
//     var OptionCloseTag = `</option>`;
//     for(var i = 0; i < HighestAndLowest.thicknessAvailable.length; i++){
//         ThicknessInputOptions += `${OptionOpenTag} ${HighestAndLowest.thicknessAvailable[i]} ${OptionCloseTag}`
//     }
//     InputthicknessSelecting.innerHTML = ThicknessInputOptions;

// }
// // giving filter data and set them
// const PriceListTablesFilter = document.getElementById("Price__list__table__body--filter");
// const FilterIsEmptyMessage = document.getElementById("Filter__IsEmpty__Message")
// const InputPriceM3Selecting = document.getElementById("InputPriceM3Selecting");
// const InputPriceKSSelecting = document.getElementById("InputPriceKSSelecting");
// const SetFilterBtn = document.getElementById("SetFilterBtn");

// SetFilterBtn.addEventListener("click" , () => {
//     let InputValues = GetValues();
//     let ArraysWithThisFilter = CheckTheFilter(InputValues);

//     if(ArraysWithThisFilter.length != 0){
//         FilterIsEmptyMessage.classList.add("d-none");
//         PriceListTablesFilter.classList.remove("d-none");
//         MakeHeaderForTable(InputValues.TheSelectedWoodName , ArraysWithThisFilter , "Price__list__table__body--filter");
//         MakeDataCellForTable(ArraysWithThisFilter , "Price__list__table__body--filter");
//     }else{
//         FilterIsEmptyMessage.classList.remove("d-none");
//         PriceListTablesFilter.classList.add("d-none");
//         PriceListTablesFilter.innerHTML = "<span></span>";
//     }
// })
// function GetValues(){
//     let InputValueContainer = {
//         TheSelectedWoodName : '' ,
//         TheObjectOfSelectWood : {},
//         length : '',
//         width : '',
//         thickness : '',
//         priceM3 : '',
//         priceKS : '',
//     }
//     InputValueContainer.TheSelectedWoodName = (InputWoodSelecting.value == "Not Selected") ? "Dub & Jasan" : InputWoodSelecting.value;
//     InputValueContainer.TheObjectOfSelectWood = FindTheSelectedWood()
//     InputValueContainer.length = InputLengthSelecting.value;
//     InputValueContainer.width = InputWidthSelecting.value;
//     InputValueContainer.thickness = InputthicknessSelecting.value;
//     InputValueContainer.priceM3 = InputPriceM3Selecting.value;
//     InputValueContainer.priceKS = InputPriceKSSelecting.value;
//     return InputValueContainer;
// }
// function FindTheSelectedWood(){
//     var SelectedValue = InputWoodSelecting.value;
//     if(SelectedValue == "Dub"){
//         return Dub;
//     }
//     else if(SelectedValue == "Jasan"){
//         return Jasan;
//     }
//     else{
//         return DubAndJasan;
//     }
// }
// function CheckTheFilter(InputValues){
//     let ArraysWithThisFilter = []
//     for(var i = 0; i < InputValues.TheObjectOfSelectWood.length; i++){
//         if(InputValues.TheObjectOfSelectWood[i].length == InputValues.length ||  InputValues.length == ""){
//             if(InputValues.TheObjectOfSelectWood[i].width == InputValues.width || InputValues.width == ""){
//                 if(InputValues.TheObjectOfSelectWood[i].thickness == InputValues.thickness || InputValues.thickness == "Not Selected"){
//                     if(InputValues.TheObjectOfSelectWood[i].priceM3 == InputValues.priceM3 || InputValues.priceM3 == ""){
//                         if(InputValues.TheObjectOfSelectWood[i].priceKS == InputValues.priceKS || InputValues.priceKS == ""){
//                             ArraysWithThisFilter.push(InputValues.TheObjectOfSelectWood[i])
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return ArraysWithThisFilter;
// }