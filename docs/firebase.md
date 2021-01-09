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







