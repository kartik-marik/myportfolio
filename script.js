document.querySelector('.cross').style.display='none';
document.querySelector('.hamberg').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.hamm').style.display='inline'
        document.querySelector('.cross').style.display='none'

    }else{
        document.querySelector('.hamm').style.display='none'
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline'

        },350);

    }
})
