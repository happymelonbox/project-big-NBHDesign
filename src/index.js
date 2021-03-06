
document.addEventListener('DOMContentLoaded', function(){loadPage()})

function loadPage(){
    navButtonClick()
    navButtonClickMobile()
    gitBut()
    fetchInsta()

    // Mobile
    mobileBars()
}

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
    let isClicked = true
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
    if(currentId != previousPage){
    document.getElementById(`${currentId}PageContainer`).removeAttribute('class', 'hidden')
    document.getElementById(`${previousPage}PageContainer`).setAttribute('class', 'hidden')
    }
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
    //normally this token WOULD NOT be saved in code. It is a serious security risk and is advised against.
    //I have created a fake account with fake details for this.
    const accessToken = 'IGQVJXQm5hdVRTbmN3SDlORHhXMDMyNExscFZAWVlFLd0k5OGp6NE50T01feG4tUVUxMzAzVXJyQ0tDbFYycXFUN2lXMnZAobmVEZAllaSFVhN1R1RUlHdzdWRnlUYkFRa1FTX0tmdGpB'
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
}
}

// Mobile functions

function navButtonClickMobile(){
    let mobNavButton = document.querySelectorAll('.myLinks')
    for(let i=0;i<mobNavButton.length;i++){
        let eachMobNavButton = mobNavButton[i]
        eachMobNavButton.style.cursor = "pointer"
        let home = document.getElementById('home-mob')
        isClicked = false
        eachMobNavButton.addEventListener('click', function(){
            changeNavDisplayMobile(mobNavButton[i])
        })
        home.setAttribute('class', 'navButtonSelectedMob')
    }
}

function changeNavDisplayMobile(element){
    let isClicked = true
    let newElement = element.id.split('-')
    if(isClicked){
        let previouslySelected = document.querySelectorAll('.navButtonSelectedMob')
        for(i=0;i<previouslySelected.length;i++){
            if (previouslySelected[i] != newElement){
            previouslySelected[i].removeAttribute('class', 'navButtonSelectedMob')
            previouslySelected[i].setAttribute('class', 'myLinks')
            previouslySelected = previouslySelected[i]
        }}
        element.setAttribute('class', 'navButtonSelectedMob')
        changeDisplayMob(element, previouslySelected)
        isClicked = false
    }
}
function changeDisplayMob(button, page){
    let buttonSplit = button.id.split('-')
    let currentId = buttonSplit[0]
    let pageSplit = page.id.split('-')
    let previousPage = pageSplit[0]
    if(currentId != previousPage){
    document.getElementById(`${currentId}PageContainer`).removeAttribute('class', 'hidden')
    document.getElementById(`${previousPage}PageContainer`).setAttribute('class', 'hidden')
    }
}

function mobileBars(){
    const bars = document.getElementById('bars')
    const mobileNavLinks = document.getElementById('myLinks')
    mobileNavLinks.style.display ='none'
    bars.addEventListener('click', function(){
        toggleMobileNav(mobileNavLinks)})
}

function toggleMobileNav(element){
    if (element.style.display === 'none'|| element.style.display === 'undefined'){
        element.style.display = 'block'
    } else if (element.style.display === 'block'){
        element.style.display = 'none'
    }
}



// function submitForm(){
//     const contactForm = document.getElementById('send')
//     contactForm.addEventListener('submit', function(event){
//         event.preventDefault()
//         const data = JSON.stringify({ name: this.state.name, email: this.state.emailInput, message: this.state.message })
//         fetch('/assets/contact.php', {
//           method: 'POST',
//           body: data
//         }).then((response) => {
//           if (response.ok) {
//             this.setState({ success: true })
//           }
//         })
//     })
// }
