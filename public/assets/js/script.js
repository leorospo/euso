document.getElementsByClassName("button").addEventListener("click", createNewChat)


function createNewChat(participants, title) {
    if (typeof participants == "object") {
        var chatRef = firebase.database().ref('chats/')
        var randomChatKey = chatRef.push().key
        var prefix = "chat"
        var newChatKey = prefix + randomChatKey
        var newChatRef = firebase.database().ref('chats/' + newChatKey)
        if (typeof title == "string") {
            newChatRef.set({
                participants: participants,
                title: title
            })
        } else {
            newChatRef.set({
                participants: participants,
            })
        }
    }
}
