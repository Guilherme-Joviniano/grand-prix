const chatbot = document.querySelector('.chatbot')
const likes = document.querySelectorAll('.fa-heart');

likes.forEach((like) => like.addEventListener('click', () => {
    const isLiked = like.classList.contains('fa-regular')
    if (isLiked) {
        like.classList.remove('fa-regular')
        like.classList.add('fa-solid')
    } else {
        like.classList.remove('fa-solid')
        like.classList.add('fa-regular')
    }
}))

chatbot.addEventListener('click', () => {
    const chatbotBody = document.querySelector('.chatbody')
    console.log(chatbotBody.classList)
    if (chatbotBody.classList.contains(`hide`)) {
        chatbotBody.classList.remove(`hide`)
    } else {
        chatbotBody.classList.add('hide')
    }
})

