function createNewChat(participants, title) {
    var participants = [];
    var title = "";
    var chatRef = firebase.database().ref('chats/')
    var randomChatKey = chatRef.push().key
    var prefix = "chat"
    var newChatKey = prefix + randomChatKey
    if (title != null) {
        var newChatRef = firebase.database().ref('chats/' + newChatKey).set({
            participants: participants,
            title: title
        })
    } else console.error(err)
}



// controllo array, string, no title = no db