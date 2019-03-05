var database = firebase.database();
function writeMessage(userId, time, text, chatId) {
    var messagesRef = firebase.database().ref('chats/' + chatId + '/messages/');
    var messageId = messagesRef.push().key
    var prefix = 'msg'
    var newMessageId = prefix + messageId

    var newMessageRef = firebase.database().ref('chats/' + chatId + '/messages/'+ newMessageId)
    newMessageRef.set({
        senderId:userId,
        time:time,
        text:text
    })

}



var readMessage = firebase.database().ref('chats/' + chatId + '/messages/');
readMessage.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});
