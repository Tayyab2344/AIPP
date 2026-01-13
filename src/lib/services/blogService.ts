import { db } from "../firebase";
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    serverTimestamp
} from "firebase/firestore";
import { BlogPost } from "../../types";

const COLLECTION_NAME = "blogs";

export const blogService = {
    getAll: async (): Promise<BlogPost[]> => {
        const q = query(collection(db, COLLECTION_NAME), orderBy("publishDate", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
    },

    getById: async (id: string): Promise<BlogPost | null> => {
        const docRef = doc(db, COLLECTION_NAME, id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() } as BlogPost;
        }
        return null;
    },

    create: async (data: Omit<BlogPost, "id">): Promise<string> => {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...data,
            publishDate: serverTimestamp(),
        });
        return docRef.id;
    },

    update: async (id: string, data: Partial<BlogPost>): Promise<void> => {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, data);
    },

    delete: async (id: string): Promise<void> => {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    }
};
