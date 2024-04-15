// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithPopup,
    FacebookAuthProvider,
    GoogleAuthProvider,
    linkWithCredential
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3GEiaeW_MvXh1vjMGkEDVXZmYTmJRLU8",
    authDomain: "e-commerce-dd54b.firebaseapp.com",
    projectId: "e-commerce-dd54b",
    storageBucket: "e-commerce-dd54b.appspot.com",
    messagingSenderId: "354222545514",
    appId: "1:354222545514:web:d90ab84a18d7d7f34e4813",
    measurementId: "G-H97TPENFFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();
console.log("provider", facebookProvider);
const googleProvider = new GoogleAuthProvider();
console.log("googleProvider", googleProvider);
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
            // Xử lý khi tài khoản đã tồn tại với một phương thức xác thực khác
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            await linkAccountWithCredential(email, credential);
        } else {
            // Xử lý các lỗi khác
            console.error(error);
        }
    }
};

export const signInWithFacebook = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        return result;
    } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
            // Xử lý khi tài khoản đã tồn tại với một phương thức xác thực khác
            const email = error.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
            await linkAccountWithCredential(email, credential);
        } else {
            // Xử lý các lỗi khác
            console.error(error);
        }
    }
};

const linkAccountWithCredential = async (email, credential) => {
    try {
        const user = auth.currentUser;
        await linkWithCredential(user, credential);
        // Sau khi liên kết tài khoản, bạn có thể thực hiện các hành động khác, ví dụ: đăng nhập người dùng
    } catch (error) {
        console.error("Error linking account with credential:", error);
    }
};