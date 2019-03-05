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