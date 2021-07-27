console.log("Great success!");

function editProfile() {
    let change = document.querySelector(".header");
    change.innerHTML = "JANE DOE";
    change.style.fontSize = "32px"
    change.style.fontWeight = "bold";
}

function removeIcon(element) {
    let newNumber = document.getElementById("requests");
    let deleteRow = element.parentNode;
    let count = document.getElementById("requests").innerHTML;
    count--;
    document.getElementById("requests").innerHTML = count;
    let connect = document.getElementById("connections").innerHTML;
    connect++;
    document.getElementById("connections").innerHTML = connect;
    deleteRow.remove();
}