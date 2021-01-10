export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  appId: string;
  messagingSenderId: string;
}

export interface IEnvironment {
  production: boolean;
  firebase: FirebaseConfig;
}

const firebase: FirebaseConfig = {
  apiKey: 'AIzaSyBO2MI7gcT4DG5UHeMDXLvkNK3HsbvMh9o',
  authDomain: 'torqata-movies.firebaseapp.com',
  projectId: 'torqata-movies',
  storageBucket: 'torqata-movies.appspot.com',
  messagingSenderId: '1055169738808',
  appId: '1:1055169738808:web:592348b90f72c306a88ecd'
}


export const devEnvironment: IEnvironment = {
  production: false,
  firebase,
};

export const prodEnvironment: IEnvironment = {
  production: true,
  firebase,
}
