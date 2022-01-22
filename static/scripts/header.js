window.addEventListener('DOMContentLoaded', () => {

    let hamburgerElem = document.querySelector('.hamburger-menu')
    let menuElem = document.querySelector('.menu')
    let closeElem = document.querySelector('.menu__close')
    let btnElem = document.querySelector('#btn__send-message')

    async function sendMessage(userName, userEmail, message) {


        let userData = {
            user: userName,
            Email: userEmail,
            message: message
        }

        let response = await fetch('http://localhost:8081/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData)
        })
        let result = await response.json()

        alert(`${result.user}, ваше сообщение отправлено, я скоро свяжусь с вами`)
        
        document.querySelector('#name').value=''
        document.querySelector('#email').value=''
        document.querySelector('#text').value=''

    }



    hamburgerElem.addEventListener('click', () => {
        menuElem.classList.add('active')
    })

    closeElem.addEventListener('click', () => {
        menuElem.classList.remove('active')
    })

    btnElem.addEventListener('click', () => {
        let userName = document.querySelector('#name').value
        let userEmail = document.querySelector('#email').value
        let message= document.querySelector('#text').value
        let nameInput=document.querySelector('#name')
        let emailInput=document.querySelector('#email')

        if (userName=='' || userEmail==''){
            if(userName==''){
                nameInput.classList.add('invalid')
            }else{
                emailInput.classList.add('invalid')
            }
            
        }else{
            nameInput.classList.remove('invalid')
            emailInput.classList.remove('invalid')
            sendMessage(userName, userEmail, message)
        }
        
    })




})

