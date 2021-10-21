let btn = document.getElementById("btn")
let form = document.getElementById("form")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    let input = document.getElementById("input")
    let text = document.getElementById("text")
    let select = document.getElementById("select").value

    let options = document.getElementsByClassName("option");

    for (let i = 0; i < options.length; i++) {
        console.log(options[i].value);
        if(options[i].value == select){
            console.log(options[i]);
        }        
    }
    // console.log(input.value);
    // console.log(text.value);
})