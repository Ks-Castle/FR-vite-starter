import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: `${process.env.VITE_REACT_API_KEY}`,
  authDomain: `${process.env.VITE_REACT_AUTH_DOMAIN}`,
  projectId: `${process.env.VITE_REACT_PROJECTID}`,
  storageBucket: `${process.env.VITE_REACT_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.VITE_REACT_MESSAGINGSENDERID}`,
  appId: `${process.env.VITE_REACT_APPID}`,
  measurementId: `${process.env.VITE_REACT_MEASUREMENTID}`
}

export const app = initializeApp(firebaseConfig)
let analytics

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage()
