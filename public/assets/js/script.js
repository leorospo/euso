function createNewChat(participants, title) {
    var chatRef = firebase.database().ref('chats/')
    var randomChatKey = chatRef.push().key
    var prefix = "chat"
    var newChatKey = prefix + randomChatKey
    var newChatRef = firebase.database().ref('chats/' + newChatKey).set({
        participants: participants,
        title: title
    })
}



