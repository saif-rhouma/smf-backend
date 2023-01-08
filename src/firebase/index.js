// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebase = require('firebase');

import fbConfig from '../config/firebase.config';

class FirebaseDB {
  constructor(dbConfig) {
    this.dbConfig = dbConfig;
  }
  async connect() {
    this.app = firebase.initializeApp(this.dbConfig);
    this.db = firebase.database();
  }
  getDB() {
    return this.db;
  }
}

export default new FirebaseDB(fbConfig);
