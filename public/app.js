const chatbot = document.querySelector('.chatbot')

chatbot.addEventListener('click', () => {
    const chatbotBody = document.querySelector('.chatbody')
    console.log(chatbotBody.classList)
    if (chatbotBody.classList.contains(`hide`)) {
        chatbotBody.classList.remove(`hide`)
    } else {
        chatbotBody.classList.add('hide')
    }
})