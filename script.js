

let input = document.querySelector("#input");
let btn = document.querySelector(".button")
let box = document.querySelector("#activ")

let active = document.getElementById('activ')

function createElem (text){
   let newElem = document.createElement("li");
   let deleteElem = document.createElement("span");
   deleteElem.className = 'delete_element'
   deleteElem.textContent = "delete"
   newElem.className = 'newElem_creation'
   newElem.textContent = text
   newElem.appendChild(deleteElem);
     deleteElem.addEventListener('click', function(){
         
         box.removeChild(newElem)
         input.value = ''
         
     })
     
      newElem.addEventListener("click" , function(){
          if(newElem.style.backgroundColor != 'green'){
          newElem.style.backgroundColor = 'green'
          newElem.removeChild(deleteElem)
          newElem.style.textDecoration = 'line-through'}
          else{
            newElem.appendChild(deleteElem);
            newElem.className = 'newElem_creation'
            newElem.style.textDecoration = 'none'
            newElem.style.backgroundColor = 'lightblue'
          }
      })

   box.appendChild(newElem)

};

btn.addEventListener("click", function(e){
   e.preventDefault();
   if(!(input.value === "")){
       createElem(input.value)
   }else{
       alert('empty')
   }

})
let input1 = document.getElementById('input') 
input1.addEventListener('keyup', function(e){
    e.preventDefault();
    if(input.value != ''){
        if(e.keyCode === 13){
      createElem(input.value)
      input.value = ''
      } 
    }else if(e.keyCode === 13 && input.value === ''){
        alert('empty')
    }
})

btn.addEventListener('click',function(e){
    e.preventDefault();
    input.value = ''
})