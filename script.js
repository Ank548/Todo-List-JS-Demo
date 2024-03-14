let text = document.getElementById('text');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul');

btn.addEventListener('click',()=>{
    if(text.value===''){
        alert('You must write something');
    }
    else{
        let list = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML=text.value;
        ul.appendChild(list);
        list.appendChild(p)
        
        let span = document.createElement('span');
        span.innerHTML='&#10006';
        list.appendChild(span);
        text.value='';
        savecode();
    }
})

text.addEventListener("keypress", function(event) {
    // console.log(event)
    if (event.key === "Enter") {
    //   event.preventDefault();
      btn.click();
    }
  });

ul.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        savecode();
    }
    else if(e.target.tagName==='P'){
        e.target.parentElement.classList.toggle('checked')
        savecode();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savecode();
    }
})

function savecode(){
    localStorage.setItem('data',ul.innerHTML);
}

(function (){
    ul.innerHTML=localStorage.getItem('data');
})()

