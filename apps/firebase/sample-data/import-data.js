const fs = require('fs');
const admin = require('firebase-admin');

/**
 * See doc at root of repo ./docs/firebase.md
 */
const serviceAccount = require('../../../../torqata-service-keys/torqata-movies-firebase-adminsdk-bcwf7-671c36cc8c.json');

const firestorePath = 'movies/netflix/titles';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://torqata-movies.firebaseapp.com',
});

const devDb = admin.firestore();

let data = fs.readFileSync('./data/netflix_titles.json', 'utf8');
data = JSON.parse(data);

data.forEach((movieTitle) => {
  if (movieTitle) {
    devDb
      .collection(firestorePath)
      .doc(movieTitle.show_id.toString())
      .set(movieTitle)
      .then(() => {
        console.log('movie tile: ', movieTitle.title, 'written');
      });
  }
});
