
document.addEventListener('DOMContentLoaded', function(){loadPage()})
function loadPage(){

    let isClicked

    navButtonClick()
    gitBut()
    fetchInsta()
    // instaFeed()
    
    // submitForm()

function navButtonClick(){
    let navButton = document.querySelectorAll('a.navButton')
    for(let i=0;i<navButton.length;i++){
        let eachNavButton = navButton[i]
        eachNavButton.style.cursor = "pointer"
        let home = document.getElementById('home')
        // let why = document.getElementById('why')
        // let git = document.getElementById('git')
        // let whatWeDo = document.getElementById('whatwedo')
        // let whatWeveDone = document.getElementById('whatwevedone')
        isClicked = false
        eachNavButton.addEventListener('click', function(){
            changeNavDisplay(navButton[i])
        })
        home.setAttribute('class', 'navButtonSelected')
    }
}

function changeNavDisplay(element){
    isClicked = true
    if(isClicked){
        let previouslySelected = document.querySelectorAll('.navButtonSelected')
        for(i=0;i<previouslySelected.length;i++){
            if (previouslySelected[i] != element){
            previouslySelected[i].removeAttribute('class', 'navButtonSelected')
            previouslySelected[i].setAttribute('class', 'navButton')
            previouslySelected = previouslySelected[i]
        }}
        element.setAttribute('class', 'navButtonSelected')
        changeDisplay(element, previouslySelected)
        isClicked = false
    }
}

function changeDisplay(button, page){
    let currentId = button.id
    let previousPage = page.id
    document.getElementById(`${currentId}PageContainer`).removeAttribute('class', 'hidden')
    document.getElementById(`${previousPage}PageContainer`).setAttribute('class', 'hidden')
}

function gitBut(){
    const gitButton = document.getElementById('gitbut')
    gitButton.addEventListener('click', function(e){
        e.preventDefault()
        clickGitBut()})
}

function clickGitBut(){
    const git = document.getElementById('git')
    changeNavDisplay(git)
}

function fetchInsta(){
    const accessToken = 'IGQVJWbkUzQ21BaXB6VlFxTHJKYXVlUWU3NDhtVGpmODNOdWxEU0d3VXhZAVi1mWk13SU1oSXIxNVhkOTVxNjQ4OTdlMVVjZAHJpZAURLZAk1EN0hRV0loNllzN1dlNU1lMzFoaXN2YU93'
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`)
    .then(resp=>resp.json())
    .then(data=>displayInsta(data))
}

function displayInsta(feed){
    const userFeed = Object.values(feed)[0]
    const instaDiv = document.getElementById("instCont")
    for(i=0;i<18;i++){
    let eachImg = userFeed[i].media_url
    let newImgDiv = instaDiv.appendChild(document.createElement('div'))
    newImgDiv.setAttribute('class', 'instaImgDiv')
    let instaImg = newImgDiv.appendChild(document.createElement('img'))
    instaImg.setAttribute('src', `${eachImg}`)
    instaImg.setAttribute('class', 'instaImg')
    instaImg.setAttribute('alt', 'Image from Instagram')
}}

function submitForm(){
    const contactForm = document.getElementById('send')

    contactForm.addEventListener('submit', function(event){
        event.preventDefault()

        const formData = new FormData(this)

        fetch("/assets/php/contact.php",{
            method: 'POST',
            body: formData
        })
        .then(resp=>resp.text())
        .then(text=>console.log(text))
        .catch(error=>console.error(error))
    })
}
}