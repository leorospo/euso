function createNewChat(name, user, description, image) {
    var chatRef = firebase.database().ref('chats/')
    var randomChatKey = chatRef.push().key
    var prefix = "chat"
    var newChatKey = prefix + randomChatKey
    var newChatRef = firebase.database().ref('chats/' + newChatKey).set({
        name: name,
        user: user,
        description: description,
        image: image
    })
}

