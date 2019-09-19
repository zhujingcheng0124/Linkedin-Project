import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDBV00Eft02bGgqHCLZv6Nb0N8kiohOdVY",
    authDomain: "mylinkedin-61579.firebaseapp.com",
    databaseURL: "https://mylinkedin-61579.firebaseio.com",
    projectId: "mylinkedin-61579",
    storageBucket: "mylinkedin-61579.appspot.com",
    messagingSenderId: "820894638648",
    appId: "1:820894638648:web:34189952c11ad08e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();

export const saveJobsIntoDB = (jobs) => {
    console.log('save');
    jobs.forEach(job => {
        database.ref(`jobs/${job.id}`).set({
            type: job.type,
            url: job.how_to_apply.match(/href="(.*?)"/)[1],
            created_at: job.created_at,
            company: job.company,
            location: job.location,
            title: job.title,
            description: job.description,
            company_logo: job.company_logo
        });
    });
};

export const saveSingleUserInfoIntoDB = (userId, key, value) => {
    database.ref(`users/${userId}/profile/${key}`).set(value);
};

export const saveUserInfoIntoDB = (userId, userInfo) => {
    database.ref(`users/${userId}/profile`).set(userInfo);
}

export const getUserInfoFromDB = async (userId) => {
    return await database.ref(`users/${userId}/profile`).once('value');
} 
