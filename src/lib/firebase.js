import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);

// import { ClerkProvider, useAuth } from "@clerk/clerk-react";
// import { getAuth, signInWithCustomToken } from "firebase/auth";

// function App() {
//   const { session } = useAuth();

//   async function handleFirebaseSignIn() {
//     if (session) {
//       const firebaseToken = await session.getToken({ template: "firebase" });
//       const auth = getAuth();
//       await signInWithCustomToken(auth, firebaseToken);
//     }
//   }

//   useEffect(() => {
//     handleFirebaseSignIn();
//   }, [session]);

//   return (
//     <ClerkProvider frontendApi="your-clerk-frontend-api">
//       {/* Your app components */}
//     </ClerkProvider>
//   );
// }

// export default App;

