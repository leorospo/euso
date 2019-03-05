<<<<<<< HEAD
var database = firebase.database();


function writeMessage(userId, time, text, chatId) {
var messagesRef = firebase.database().ref('chats/' + chatId + '/messages/');
messagesRef.push({
senderId:userId,
time:time,
text:text
});
}
=======
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

>>>>>>> 2e1c3ed4f932c5aa82f732faab4e1c452923c4ae
