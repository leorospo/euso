function createNewChat(name, user, description, image) {
    firebase.database().ref('chats/').push({
        name: name,
        user: user,
        description: description,
        image: image
    })
}