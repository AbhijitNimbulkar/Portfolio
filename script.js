let hrs=document.getElementById("hrs");
let min=document.getElementById("min");


let currentTime=new Date();

hrs.innerHTML=currentTime.getHours();
min.innerHTML=currentTime.getMinutes();



function downloadfile(){
    const link = document.createElement('a');
    link.href="Abhijit_Resume.pdf";
    link.download='Abhijit_Resume';
    link.click();
}



var parentContainer =document.querySelector('.project');
parentContainer.addEventListener('click', event=>{
    const current =event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.content');

    currentText.classList.toggle('content--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read More..." : "Read Less...";
})

var parentContainer =document.querySelector('.projects');
parentContainer.addEventListener('click', event=>{
    const current =event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.content');

    currentText.classList.toggle('content--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read More..." : "Read Less...";
})


function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}

