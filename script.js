

let input = document.querySelector("#input");
let btn = document.querySelector(".button");
let box = document.querySelector("#activ");
let arr = [];
let active = document.getElementById('activ');
let search = document.getElementById('search')

function createElem (text){
    let newElem = document.createElement("li");
    let deleteElem = document.createElement("span");
    
   deleteElem.className = 'delete_element'
   deleteElem.textContent = "delete"
   newElem.className = 'newElem_creation'
   if(!(arr.includes(text))){
    newElem.textContent = text
    newElem.appendChild(deleteElem);
    box.appendChild(newElem)
    arr.push(text)
   }else{
       alert('Mentioned note exesist')
   }
   
     deleteElem.addEventListener('click', function(){
         let txt = newElem.innerText
         let txt1 = txt.slice(0,txt.length-7)
         if(confirm('Are you sure you want to delete')){
         let index = arr.indexOf(txt1)
         arr.splice(index,1)
         box.removeChild(newElem)
         input.value = ''
         }else{
            event.stopPropagation()
            alert('Rejected')
         }
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

   

};

btn.addEventListener("click", function(e){
   e.preventDefault();
   if(!(input.value === "")){
       createElem(input.value)
       input.value = ''
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


let timeout = null;



function searchFn(){
     console.log('a')
    let allLiItems = active.getElementsByClassName('newElem_creation')
    for(key of allLiItems){
        let item1 = key.textContent;
        let text1 = item1.slice(0,item1.length-6)
       if(text1.includes(search.value)){
           key.classList.remove('disp')
       }else{
           key.classList.add('disp')
       }
    }

}


search.addEventListener('input',function(){
    clearTimeout(timeout);
    timeout = setTimeout(searchFn,1000)
})

