const Name = document.querySelector(".header upper")
const input = document.getElementById("input-field")
const btn_add = document.getElementById("btn-save")
const color_box = document.querySelectorAll(".color-box")
const listed = document.getElementById("listed")
const btn_delete = document.getElementById("btn-delete")
color_box.forEach(function(colorbox) {
    colorbox.addEventListener("click", function(event) {
        const Back_ground = event.target.style.backgroundColor
        input.style.backgroundColor = Back_ground
    })
})

function Add_box() {
    if(input.value === '') {
        input.placeholder = 'please enter world'
    }
    else {

        const Box = document.createElement('div')
        const p = document.createElement("p")
        Box.className = "card shadow-sm rounded"
        Box.style.backgroundColor = input.style.backgroundColor
        Box.addEventListener("click", Remove_item)
        p.className = "card-text p-3"
        p.innerHTML = input.value
        Box.appendChild(p)
        listed.appendChild(Box)        
    }
    
}


function Delet_input_value() {
    input.value = ''
    input.placeholder = 'Something here..'
}

function Remove_item(event) {
    event.target.parentElement.remove()
}

btn_delete.addEventListener("click", Delet_input_value) 
btn_add.addEventListener("click", Add_box)


document.addEventListener("DOMContentLoaded", function() {  ///////////////////// !!! بیشتر برای تست است
    const Name = prompt("What's your name?")
    Name.innerHTML = "Hello, " + Name + "!"
    document.body.appendChild(Name)
})