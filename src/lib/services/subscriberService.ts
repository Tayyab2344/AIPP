import { db } from "../firebase";
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    deleteDoc,
    doc,
    orderBy,
    serverTimestamp
} from "firebase/firestore";

import { Subscriber } from "@/types";

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
    },

    getSubscribers: async (): Promise<Subscriber[]> => {
        const q = query(collection(db, COLLECTION_NAME), orderBy("subscribedDate", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Subscriber[];
    },

    deleteSubscriber: async (id: string) => {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    }
};
