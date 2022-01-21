window.addEventListener('DOMContentLoaded', () => {

    let hamburgerElem = document.querySelector('.hamburger-menu')
    let menuElem = document.querySelector('.menu')
    let closeElem = document.querySelector('.menu__close')
    let userName = document.querySelector('#name').value
    let userEmail = document.querySelector('#email').value
    let btnElem = document.querySelector('#btn__send-message')

    async function sendMessage() {

        let userData = {
            user: userName,
            Email: userEmail
        }

        let response = await fetch('http://localhost:8081/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData)
        })
        let result = await response.json()
        console.log(result.user)
    }



    hamburgerElem.addEventListener('click', () => {
        menuElem.classList.add('active')
    })

    closeElem.addEventListener('click', () => {
        menuElem.classList.remove('active')
    })

    btnElem.addEventListener('click', () => {
        sendMessage()
    })




})

