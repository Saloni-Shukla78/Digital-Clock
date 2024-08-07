const showTime=()=>{
    let date=new Date();
    let hrs=date.getHours();
    let min=date.getMinutes();
    let secs=date.getSeconds();

    let tm= ` ${hrs} : ${min} : ${secs} `;
    let tmbox=document.querySelector(".time");
    tmbox.innerText= tm;
};
setInterval(showTime,100);