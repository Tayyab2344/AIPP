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
import { Program } from "../../types";

const COLLECTION_NAME = "programs";

export const programService = {
    getAll: async (): Promise<Program[]> => {
        const q = query(collection(db, COLLECTION_NAME), orderBy("createdDate", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                createdDate: data.createdDate?.toDate() || new Date()
            } as Program;
        });
    },

    getById: async (id: string): Promise<Program | null> => {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                ...data,
                createdDate: data.createdDate?.toDate() || new Date()
            } as Program;
        }
        return null;
    },

    getPublished: async (): Promise<Program[]> => {
        const q = query(
            collection(db, COLLECTION_NAME),
            orderBy("createdDate", "desc")
        );
        const snapshot = await getDocs(q);
        const all = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                createdDate: data.createdDate?.toDate() || new Date()
            } as Program;
        });

        return all.filter(p => p.status === 'PUBLISHED');
    },

    create: async (data: Omit<Program, "id">): Promise<string> => {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...data,
            createdDate: serverTimestamp(),
        });
        return docRef.id;
    },

    update: async (id: string, data: Partial<Program>): Promise<void> => {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        });
    },

    delete: async (id: string): Promise<void> => {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    }
};
