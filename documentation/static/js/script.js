const likeButton = document.querySelectorAll('.interactive-button');
let yesIcon = document.querySelector('#yesIcon');
let noIcon = document.querySelector('#noIcon');
let yesCount = document.querySelector('#yesCount');
let noCount = document.querySelector('#noCount');

likeButton.forEach(i => {
    i.addEventListener('click', e => {
        if (i.textContent.includes('YES')){
            let clicked = false;
            if (!clicked){
                clicked = true;
                yesIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`
                yesCount.textContent++
            }
            else{
                clicked = false;
                yesIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`
                yesCount.textContent--
            }
            }
        else{
            let clicked = false;
            if (!clicked){
                clicked = true;
                noIcon.innerHTML = `<i class="fas fa-thumbs-down"></i>`
                noCount.textContent++
            }
            else{
                clicked = false;
                noIcon.innerHTML = `<i class="far fa-thumbs-down"></i>`
                noCount.textContent--
        }
        }
    })
})

function moveUpFunc(){
    const screen = document.querySelector('.moveUpScreen')
    valueOfInput = document.getElementById("move-up").value    
    if (!valueOfInput || valueOfInput !== 'class = "move-up"'){
        screen.innerHTML = screen.innerHTML = "Not the correct code, ensure exact spacing compliance."   
    }

    else{
        screen.innerHTML = "I'm the screen"
    } 
}

function moveDownFunc(){
    const screen = document.querySelector('.moveDownScreen')
    valueOfInput = document.getElementById("move-down").value 

    if (!valueOfInput || valueOfInput !== 'class = "move-down"'){
        screen.innerHTML = screen.innerHTML = "Not the correct code, ensure exact spacing compliance."  
    }
    else{
        screen.innerHTML = "I'm the screen"
    } 
}


function moveLeftFunc(){
    const screen = document.querySelector('.moveLeftScreen')
    valueOfInput = document.getElementById("move-left").value 

    if (!valueOfInput || valueOfInput !== 'class = "move-left"'){
        screen.innerHTML = screen.innerHTML = "Not the correct code, ensure exact spacing compliance."  
    }
    else{
        screen.innerHTML = "I'm the screen"
    } 
}

function bounceFunc(){
    const screen = document.querySelector('.bounceScreen')
    valueOfInput = document.getElementById("bounce").value 

    if (!valueOfInput || valueOfInput !== 'class = "bounce"'){
        screen.innerHTML = screen.innerHTML = "Not the correct code, ensure exact spacing compliance."  
    }
    else{
        screen.innerHTML = "I'm the screen"
    } 
}

function moveRightFunc(){
    const screen = document.querySelector('.moveRightScreen')
    valueOfInput = document.getElementById("move-right").value 

    if (!valueOfInput || valueOfInput !== 'class = "move-right"'){
        screen.innerHTML = screen.innerHTML = "Not the correct code, ensure exact spacing compliance."  
    }
    else{
        screen.innerHTML = "I'm the screen"
    } 
}

function fadeInFunc(){
    const screen = document.querySelector('.fadeInScreen')
    valueOfInput = document.getElementById("fade-in").value 

    if (!valueOfInput || valueOfInput !== 'class = "fade-in"'){
        screen.innerHTML = screen.innerHTML = "Not the correct code, ensure exact spacing compliance."  
    }
    else{
        screen.innerHTML = "I'm the screen"
    } 
}

function fadeOutFunc(){
    const screen = document.querySelector('.fadeOutScreen')
    valueOfInput = document.getElementById("fade-out").value 

    if (!valueOfInput || valueOfInput !== 'class = "fade-out"'){
        screen.innerHTML = screen.innerHTML = "Not the correct code, ensure exact spacing compliance."  
    }
    else{
        screen.innerHTML = "I'm the screen"
    } 
}

