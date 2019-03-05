var database = firebase.database();


function writeMessage(userId, time, text, chatId) {
var messagesRef = firebase.database().ref('chats/' + chatId + '/messages/');
messagesRef.push({
senderId:userId,
time:time,
text:text
});
}
