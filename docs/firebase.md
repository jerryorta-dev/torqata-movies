# Firebase ( Firestore )

Using firebase as an abstraction over firestore and Google App Engine

1. Install the latest firebase tools

  ```bash
  npm install -g firebase-tools@latest
  ```

2. Create a new project in the [Firebase Console](https://console.firebase.google.com/)

- name `torqata-movies`
- [ ] set up hosting
- [ ] set up authentication with email and google ( for now )
- [ ] set up firestore

2. Init Firebase

- [ ] login into firebase `firebase login`
- [ ] `mkdir apps/firebase` to contain firebase files
- [ ] `cd apps/firebase`  
- [ ] run `firebase init`
- [ ] select project `torqata-movies` when prompted
- [ ] set up github action [deploy-to-firebase](https://github.com/marketplace/actions/deploy-to-firebase-hosting#options)

To test, create a PR and you should see a github action in the PR set up a review environment. Merge the PR and you should see the app deployed to the main firebase host.

## Mock Data

Use working directory `./apps/firebase/sample-data`;

- [ ] install firebase-import by running `npm install -g firebase-import`
- [ ] Download data from [here](https://www.kaggle.com/shivamb/netflix-shows)
- [ ] Set up [firebase service account key](https://console.firebase.google.com/project/torqata-movies/settings/serviceaccounts/adminsdk)
- [ ] Download service account json file external to this repo.
- [ ] Convert CSV data to json using [node-csvtojson](https://github.com/Keyang/node-csvtojson) by running `node node csv-to-json.js`.
- [ ] Import to firestore by running 









