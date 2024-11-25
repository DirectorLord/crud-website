// var for the bookmark name
var booknameInput = document.getElementById("bookname");
// var for the bookmark url
var weburlInput = document.getElementById("weburl");
// var list for the websites
var webList;
// condition for the web list
if(localStorage.getItem("Websites")==null){
    webList =[];
}
else{
    webList= JSON.parse(localStorage.getItem("Websites"));
    display();
}
// add function
function addWeb(){
    // if for the validation
    if(booknameInput.classList.contains("is-valid")&&
    weburlInput.classList.contains("is-valid")){
            // object for the urls
    var url = {
        Sname: booknameInput.value,
        website: weburlInput.value
    }
    webList.push(url);
    console.log(webList);
    // local storage
    localStorage.setItem("Websites", JSON.stringify(webList));
    clear();
    display();
    }
    else{alert("not valid data");}

}
// clear function
function clear(){
    booknameInput.value =null;
    weburlInput.value = null;
}
// display function
function display(){
    var view = "";
    for (var i =0; i<webList.length;i++){
        view +=`<div class="col-3 p-2">
                    <p class="fs-5">
                        ${i}
                    </p>
                </div>
                <div class="col-3 p-2">
                    <p class="fs-5">
                        ${webList[i].Sname}
                    </p>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <button class="btn btn-primary w-50"> <i class="fa-regular fa-eye pe-2"></i>Visit</button>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <button onclick="webdelete(${i})" class="btn bg-danger w-50 text-white"><span><i class="fa-solid fa-trash p-2"></i></span>Delete</button>
                </div>`
    }
    document.getElementById("view").innerHTML = view;
}
// delete function
function webdelete(webdeleted){
    webList.splice(webdeleted,1);
    display();
    localStorage.setItem("Websites", JSON.stringify(webList));
    console.log(webList);
    
}
// validation for the name
function validInput(input){
    // console.log(input.id, input.value);
    var regex={
        bookname: /^[A-z][a-z]{2,}[0-9]{0,5}$/,
        weburl: /^https:\/\/[a-z0-9\-\.]{3,150}\.com$/i
    }
    if(regex[input.id].test(input.value) ==true){
        // add the class
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        input.nextElementSibling.classList.add("d-none");
    }
    else{input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        input.nextElementSibling.classList.remove("d-none");
    }





    // var regex = /^[A-z][a-z]{2,}$/;
    // var valid= booknameInput.value;
    // var result = regex.test(valid);
    // // if condition
    // if(result == true){
    //     console.log("match");
    // }
    // else{console.log("not match");
    // }
}
// // button function

// document.getElementById("goButton").addEventListener("click", () => {
//     var url = prompt("Enter a website URL (including https://):");
//     if (url) {
//         localStorage.setItem("Websites", JSON.stringify(weblist));
//         window.location.href = url;
//     }
// });
