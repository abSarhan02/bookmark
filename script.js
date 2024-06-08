let siteName = document.getElementById("site-name");
let siteUrl = document.getElementById("site-url");
let submit = document.getElementById("submit");
let output = document.getElementById("output");

//ALL BOOKMARKS LIST
let allBookMarks = [];

//SUBMIT EVENT
submit.addEventListener("click", function (event) {
    add();
    console.log(allBookMarks);
});

if (localStorage.getItem("bookMark") !== null) {
    allBookMarks = JSON.parse(localStorage.getItem("bookMark"));
    display();
}

//ADD
function add() {
    let bookMark = "";
    if (siteName.value.length < 3 || siteUrl.value.length < 3) {
        console.log("Inserire almeno 3 caratteri!");
    } else {
        bookMark = {
            name: siteName.value,
            url: siteUrl.value
        };
        allBookMarks.push(bookMark);
        clear();
        display();
        localStorage.setItem("bookMark", JSON.stringify(allBookMarks));
    }
}

//DISPLAY
function display() {
    let box = "";
    for (let i = 0; i < allBookMarks.length; i++) {
        box += ` <tr class="text-center align-middle">
        <th scope="row">${i + 1}</th>
        <td>${allBookMarks[i].name}</td>
        <td><button class="btn btn-success"><a href="${'https://www.'+allBookMarks[i].url}" class="text-white text-decoration-none" ><i class="fa-solid fa-eye pe-1"></i>Visit</a></button></td>
        <td><button class="btn btn-danger" onclick="deleteBookmark(${i})"><i class="fa-solid fa-trash-can pe-1 "></i> Delete</button></td>
      </tr>`
    }
    output.innerHTML = box;
}

//CLEAR
function clear() {
    siteName.value = "";
    siteUrl.value = "";
}

//DELETE
function deleteBookmark(index) {
    allBookMarks.splice(index, 1);
    localStorage.setItem("bookMark", JSON.stringify(allBookMarks));
    display();
}

