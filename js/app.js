
      const bars= document.getElementById('bar-icon');
      bars.addEventListener('click', ()=>{
     let ul = document.querySelector('.main-column');
     console.log('click');
     ul.style.left = '0';
     ul.style.top ='0';
     // document.querySelector('#main-nav').style.marginLeft ='50%';
     document.getElementsByTagName('body')[0].style.marginLeft ='50%';
 })
 
 const close = document.querySelector('.close');
 close.addEventListener('click', ()=>{let ul = document.querySelector('.main-column');
 
 const userText = document.querySelector('.userText');
 document.getElementsByTagName('body')[0].style.marginLeft ='0';
 
 ul.style.left ='-100%';
 close.style.display='flex';
 
     
     
 })
 const btn = document.getElementById('scroll-up').addEventListener('click', ()=>{
     window.scrollTo(0, 0);
 })
 window.addEventListener('scroll', ()=>{
     btn.classList.add('activated');
 })
// window.addEventListener('click', ()=>{let ul = document.querySelector('.main-column');

// const userText = document.querySelector('.userText');
// document.getElementsByTagName('body')[0].style.marginLeft ='0';

// ul.style.left ='-100%';
// close.style.display='flex';

// })