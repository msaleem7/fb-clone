import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyA1F2ZNrVqSZ7b2iVInyYZ0cu5wI9xm5vY',
	authDomain: 'fb-clone-8b393.firebaseapp.com',
	projectId: 'fb-clone-8b393',
	storageBucket: 'fb-clone-8b393.appspot.com',
	messagingSenderId: '233426844843',
	appId: '1:233426844843:web:b0be679e3a404852ab8bee',
	measurementId: 'G-YL9GXZ49KL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export { auth, googleProvider };
export default firestore;
