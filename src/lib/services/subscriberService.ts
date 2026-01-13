import { db } from "../firebase";
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    serverTimestamp
} from "firebase/firestore";

const COLLECTION_NAME = "subscribers";

export const subscriberService = {
    subscribe: async (email: string) => {
        // Check if already exists
        const q = query(collection(db, COLLECTION_NAME), where("email", "==", email));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            throw new Error("Already subscribed");
        }

        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            email,
            subscribedDate: serverTimestamp(),
            status: 'active'
        });

        // Trigger email via API route
        await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        return docRef.id;
    }
};
