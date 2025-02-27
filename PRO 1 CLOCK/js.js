const hourE1 = document.querySelector("#hour");
const minuteE1 = document.querySelector("#minutes");
const secondE1 = document.querySelector("#seconds");
const ampmE1 = document.querySelector("#ampm");  


function updateClock(){
  let h= new Date().getHours()
  let m= new Date().getMinutes()
  let s= new Date().getSeconds()
  let ampm = "AM"

   if(h> 12){
    h = h- 12
    ampm ="PM"
  }
  h = h<10 ? "0" + h : h ;
  m = m<10 ? "0" + m : m ;
  s = s<10 ? "0" + s : s ;

   
  hourE1.innerText = h;
  minuteE1.innerText = m;
  secondE1.innerText = s;
  ampmE1,(innerText = ampm);
  setTimeout(()=>
  {
    updateClock()
  },1000)

}
updateClock()