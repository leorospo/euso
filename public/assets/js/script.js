var homeUrl = 'http://localhost:5000'

firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      //window.location.href = 'localhost:5000'
    }
});

function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = homeUrl
    }).catch(function(error) {
        console.error(error)
    });
}

function dbGetUserChats(userId) {
    return new Promise(function(resolve, reject) {
        var userRef = firebase.database().ref('users/' + userId + '/userChats')
        userRef.once("value").then(
            (dataSnapshot) => resolve(dataSnapshot)
        )
    })
}


//new Promise(function(resolve, reject) { ... });


/*
var userChatsRef = firebase.database().ref('chats/' + chatId + '/messages/');
readMessage.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});

function dbGetChats() {

}

var readMessage = firebase.database().ref('chats/' + chatId + '/messages/');
readMessage.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});*/