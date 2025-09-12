const changeBackgorund = ()=>{
    const hex ="0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];    
    }
    document.body.style.backgroundColor = color;
    console.log(color);
}
let StopInterval;
document.querySelector('#start').addEventListener('click',function(){
    if(!StopInterval)StopInterval = setInterval(changeBackgorund,1000)
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(StopInterval)
    StopInterval = null;
})