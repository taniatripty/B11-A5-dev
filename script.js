// document.getElementById('btn-id').addEventListener('click',function(){
//     //console.log('clicked')
//     document.body.style.backgroundColor='gray';
// })
function setcolor(){
   let color='#'+ Math.floor(Math.random()*16777215).toString(16);
   return color
}
function getcolor(){
   let colors=setcolor();
   document.body.style.backgroundColor=colors;
}
document.getElementById('btn-id').addEventListener('click',getcolor);


document.getElementById('big-one').addEventListener('click',function(){
    window.location.href="./main.html"
})

function dynamicPart(){
   const btnDynamic=document.getElementById('btn-dynamic').innerText;
   
    const convertedbtndynamic=parseInt(btnDynamic);
    let newdy=convertedbtndynamic -1;
    document.getElementById('btn-dynamic').innerText=newdy
    const navId=document.getElementById('nav-id').innerText;
    const convertedNavId=parseInt(navId);
    let connav=convertedNavId+1;
    document.getElementById('nav-id').innerText=connav
}
 document.getElementById('comp1').addEventListener('click',function(){
    alert('Board updated sccessfully');
   
   dynamicPart();
    document.getElementById('comp1').disabled=true;
    const tittle1= document.getElementById('tittle1').innerText;
   
    const d=AMOrPM(new Date)
    const historyId=document.getElementById('History-id');
    const p=document.createElement('p');
    p.innerHTML= `
    <p class=bg-blue-100 >You have Complete The Task  ${tittle1} at ${d}</p>
    <br>
    
    `
    historyId.appendChild(p)
    

 })
 document.getElementById('comp2').addEventListener('click',function(){
    alert('Board updated sccessfully');
    dynamicPart();
    document.getElementById('comp2').disabled=true;
    const tittle1= document.getElementById('tittle2').innerText;
   
    const d=AMOrPM(new Date)
    const historyId=document.getElementById('History-id');
    const p=document.createElement('p');
    p.innerHTML= `
    <p class=bg-blue-100>You have Complete The Task  ${tittle1} at ${d}</p>
    <br>
    `
    historyId.appendChild(p)


 })
 document.getElementById('comp3').addEventListener('click',function(){
   alert('Board updated sccessfully');
   dynamicPart();
   document.getElementById('comp3').disabled=true;
   const tittle1= document.getElementById('tittle3').innerText;
   
    const d=AMOrPM(new Date)
    const historyId=document.getElementById('History-id');
    const p=document.createElement('p');
    p.innerHTML= `
    <p class=bg-blue-100>You have Complete The Task  ${tittle1} at ${d}</p>
    <br>
    `
    historyId.appendChild(p)


})
document.getElementById('comp4').addEventListener('click',function(){
   alert('Board updated sccessfully');
  dynamicPart();
   document.getElementById('comp4').disabled=true;
   const tittle1= document.getElementById('tittle4').innerText;
   
    const d=AMOrPM(new Date)
    const historyId=document.getElementById('History-id');
    const p=document.createElement('p');
    p.innerHTML= `
    <p class=bg-blue-100>You have Complete The Task  ${tittle1} at ${d}</p>
    <br>
    `
    historyId.appendChild(p)


})
document.getElementById('comp5').addEventListener('click',function(){
   alert('Board updated sccessfully');
  dynamicPart();
   document.getElementById('comp5').disabled=true;
   const tittle1= document.getElementById('tittle5').innerText;
   
    const d=AMOrPM(new Date)
    const historyId=document.getElementById('History-id');
    const p=document.createElement('p');
    p.innerHTML= `
    <p class=bg-blue-100>You have Complete The Task  ${tittle1} at ${d}</p>
    <br>
    `
    historyId.appendChild(p)


})
document.getElementById('comp6').addEventListener('click',function(){
   alert('Board updated sccessfully');
   const btnDynamic=document.getElementById('btn-dynamic').innerText;
   
   const convertedbtndynamic=parseInt(btnDynamic);
   let newdy=convertedbtndynamic -1;
   document.getElementById('btn-dynamic').innerText=newdy
   const navId=document.getElementById('nav-id').innerText;
   const convertedNavId=parseInt(navId);
   let connav=convertedNavId+1;
   document.getElementById('nav-id').innerText=connav;
   document.getElementById('comp6').disabled=true;
   const tittle1= document.getElementById('tittle6').innerText;
   
    const d=AMOrPM(new Date)
    const historyId=document.getElementById('History-id');
    const p=document.createElement('p');
    p.innerHTML= `
    <p class=bg-blue-100>You have Complete The Task  ${tittle1} at ${d}</p>
    <br>
    `
    historyId.appendChild(p)

   if(newdy===0){
      alert('congrates! you have completed all the current task')
   }


})


function AMOrPM(date){
   let hours=date.getHours();
   let Minutes=date.getMinutes();
   let seconds= date.getSeconds();
   let ampm= hours >=12 ? 'PM' :' AM'
   hours=hours%12;
   hours =hours? hours: 12;
   Minutes=Minutes<10 ? '0'+Minutes :Minutes
   let time=hours+":"+Minutes+":"+seconds +ampm;
   return time;

}
//console.log(AMOrPM(new Date))
document.getElementById('History-btn').addEventListener('click',function(){
   document.getElementById('History-id').innerText="";
})

const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
