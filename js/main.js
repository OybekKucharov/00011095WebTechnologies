//getting necessary elements by Id as variables
let form=document.getElementById("formSubmission");

let table=document.getElementById("data");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    submit();
})

//main method and logic, to get data from inputs
const submit=()=>{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let checkInDate = document.getElementById("CheckInDate").value;
    let checkOutDate = document.getElementById("CheckOutDate").value;
    let hotel = document.getElementById("hotel").value;
    let comment = document.getElementById("Room").value;

    // process of creating new ul in html page and setting data there
    var ul = document.createElement("ul");
    let newArray = [firstName, lastName, checkInDate, checkOutDate, hotel, comment];
    newArray.forEach((item)=>{
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        ul.appendChild(li);
        li.appendChild(text);
        table.appendChild(ul);
    })
    //clearing form for new record
    form.reset();
}