document.getElementById('btn-id').addEventListener('click',function(){
    //console.log('clicked')
    document.body.style.backgroundColor='gray';
})

document.getElementById('big-one').addEventListener('click',function(){
    window.location.href="./main.html"
})
 document.getElementById('comp1').addEventListener('click',function(){
    alert('hello');
    const btnDynamic=document.getElementById('btn-dynamic').innerText;
    //console.log(typeof btnDynamic)
    const convertedbtndynamic=parseInt(btnDynamic);
    let newdy=convertedbtndynamic -1;
    document.getElementById('btn-dynamic').innerText=newdy
    const navId=document.getElementById('nav-id').innerText;
    const convertedNavId=parseInt(navId);
    let connav=convertedNavId-1;
    document.getElementById('nav-id').innerText=connav
    document.getElementById('comp1').disabled=true;
    
    

 })
 document.getElementById('comp2').addEventListener('click',function(){
    alert('hello');
    const btnDynamic=document.getElementById('btn-dynamic').innerText;
    //console.log(typeof btnDynamic)
    const convertedbtndynamic=parseInt(btnDynamic);
    let newdy=convertedbtndynamic -1;
    document.getElementById('btn-dynamic').innerText=newdy
    const navId=document.getElementById('nav-id').innerText;
    const convertedNavId=parseInt(navId);
    let connav=convertedNavId-1;
    document.getElementById('nav-id').innerText=connav;
    document.getElementById('comp2').disabled=true;


 })
 document.getElementById('comp3').addEventListener('click',function(){
   alert('hello');
   const btnDynamic=document.getElementById('btn-dynamic').innerText;
   //console.log(typeof btnDynamic)
   const convertedbtndynamic=parseInt(btnDynamic);
   let newdy=convertedbtndynamic -1;
   document.getElementById('btn-dynamic').innerText=newdy
   const navId=document.getElementById('nav-id').innerText;
   const convertedNavId=parseInt(navId);
   let connav=convertedNavId-1;
   document.getElementById('nav-id').innerText=connav;
   document.getElementById('comp3').disabled=true;


})
document.getElementById('comp4').addEventListener('click',function(){
   alert('hello');
   const btnDynamic=document.getElementById('btn-dynamic').innerText;
   //console.log(typeof btnDynamic)
   const convertedbtndynamic=parseInt(btnDynamic);
   let newdy=convertedbtndynamic -1;
   document.getElementById('btn-dynamic').innerText=newdy
   const navId=document.getElementById('nav-id').innerText;
   const convertedNavId=parseInt(navId);
   let connav=convertedNavId-1;
   document.getElementById('nav-id').innerText=connav;
   document.getElementById('comp4').disabled=true;


})
document.getElementById('comp5').addEventListener('click',function(){
   alert('hello');
   const btnDynamic=document.getElementById('btn-dynamic').innerText;
   //console.log(typeof btnDynamic)
   const convertedbtndynamic=parseInt(btnDynamic);
   let newdy=convertedbtndynamic -1;
   document.getElementById('btn-dynamic').innerText=newdy
   const navId=document.getElementById('nav-id').innerText;
   const convertedNavId=parseInt(navId);
   let connav=convertedNavId-1;
   document.getElementById('nav-id').innerText=connav;
   document.getElementById('comp5').disabled=true;


})
document.getElementById('comp6').addEventListener('click',function(){
   alert('hello');
   const btnDynamic=document.getElementById('btn-dynamic').innerText;
   //console.log(typeof btnDynamic)
   const convertedbtndynamic=parseInt(btnDynamic);
   let newdy=convertedbtndynamic -1;
   document.getElementById('btn-dynamic').innerText=newdy
   const navId=document.getElementById('nav-id').innerText;
   const convertedNavId=parseInt(navId);
   let connav=convertedNavId-1;
   document.getElementById('nav-id').innerText=connav;
   document.getElementById('comp6').disabled=true;


})




//  function getInputId(id){
//     const id=document.getElementById(id).innerText;
//     const convertedId=parseInt(id);
//     return convertedId
//  }