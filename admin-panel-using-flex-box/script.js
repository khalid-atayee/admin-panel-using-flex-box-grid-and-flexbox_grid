const burgar = document.querySelector('#humburgar')
const aside = document.querySelector('.aside')

const headerIcons = document.querySelector('.icons')
const threedots = document.querySelector('#threedots')

const search_input = document.querySelector('#search_input')
const searchBar = document.querySelector('#searchBar')

const profile = document.querySelector('.profile')
const profileContainer = document.querySelector('.btn-container')


document.addEventListener(('click'),(e)=>{
    if(e.target===burgar){
        slider()
    }
    if(e.target===threedots){
        headerBar()
    }
    if(e.target===searchBar){
        showInputField()

    }
    if(e.target===profile){
        showProfile()


    }

})





function slider(){

    aside.classList.toggle('aside')
}

function headerBar(){
    
        headerIcons.classList.toggle('header-icons')
}

function showInputField(){
    search_input.classList.toggle('showInput');
   
}

function showProfile(){
    profileContainer.classList.toggle('toggle-container')

}