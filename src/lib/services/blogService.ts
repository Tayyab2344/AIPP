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
    where,
    orderBy,
    serverTimestamp
} from "firebase/firestore";
import { BlogPost } from "../../types";

const COLLECTION_NAME = "blogs";

export const blogService = {
    getAll: async (): Promise<BlogPost[]> => {
        const q = query(collection(db, COLLECTION_NAME), orderBy("publishDate", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                publishDate: data.publishDate?.toDate() || new Date()
            } as BlogPost;
        });
    },

    getBySlug: async (slug: string): Promise<BlogPost | null> => {
        const q = query(collection(db, COLLECTION_NAME), where("slug", "==", slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                publishDate: data.publishDate?.toDate() || new Date()
            } as BlogPost;
        }
        return null;
    },

    getById: async (id: string): Promise<BlogPost | null> => {
        const docRef = doc(db, COLLECTION_NAME, id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            const data = snapshot.data();
            return {
                id: snapshot.id,
                ...data,
                publishDate: data.publishDate?.toDate() || new Date()
            } as BlogPost;
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
