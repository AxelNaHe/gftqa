// FCM for Web: must be served as JavaScript (not HTML) at the app origin root.
// Keep in sync with lib/firebase_options.dart (web) if you re-run flutterfire.
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyA34XXw8MI_yVsBG48qLLWO3PT1a5cSqIk",
  appId: "1:83819126869:web:eabe4ca7bb15459046f4dc",
  messagingSenderId: "83819126869",
  projectId: "giftara-405e2",
  authDomain: "giftara-405e2.firebaseapp.com",
  storageBucket: "giftara-405e2.firebasestorage.app",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] onBackgroundMessage", payload);
});
