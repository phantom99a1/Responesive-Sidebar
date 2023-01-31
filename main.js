const sidebar=document.querySelector('.sidebar')
const sidebarToggleBtn=document.querySelector('.sidebar-toggle')

sidebarToggleBtn.onclick=(e)=>{
    e.preventDefault()
    sidebar.classList.toggle('sidebar-small')
}
window.onresize=()=>{
    if(window.innerWidth<600){
        sidebar.classList.add('sidebar-small')
    }
    else{
        sidebar.classList.remove('sidebar-small')
    }
}
