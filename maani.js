let b = document.querySelector("#b")
let t = document.querySelector("#t")
let j = document.querySelector("#j")
let x = document.querySelector("#x")

let bValue = 0;
t.addEventListener("click", () =>{
    bValue ++;
    b.textContent = bValue
    if(bValue == 10){
        b.style.color = "red"

    }
    else{
          b.style.color = "black"
    }
})


j.addEventListener("click", () =>{
    bValue =0;
    b.textContent = bValue
    b.style.color ="red"
})

x.addEventListener("click", () =>{
    if(bValue > 0)
    bValue --;
    b.textContent = bValue

    if(bValue == 10){
        b.style.color = "red"

    }
    else{
          b.style.color = "black"
    }
})

t.addEventListener("mouseover", () =>{
    t.style.backgroundColor = "blue"
})
t.addEventListener("mouseout", () =>{
    t.style.backgroundColor = "green"
})
  

j.addEventListener("mouseover", () =>{
    j.style.backgroundColor = "red"
})
j.addEventListener("mouseout", () =>{
    j.style.backgroundColor = "blue"
})

x.addEventListener("mouseover", () =>{
    x.style.backgroundColor = "black"
})
x.addEventListener("mouseout", () =>{
    x.style.backgroundColor = "red"
})




