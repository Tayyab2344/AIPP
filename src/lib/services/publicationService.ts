import { db } from '../firebase';
import {
    collection,
    getDocs,
    getDoc,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { Publication } from '@/types';

const COLLECTION_NAME = 'publications';

export const publicationService = {
    getAll: async () => {
        const q = query(collection(db, COLLECTION_NAME), orderBy('year', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Publication[];
    },

    getPublished: async () => {
        // Fetch all ordered by year to avoid index requirement for where + orderBy
        const q = query(
            collection(db, COLLECTION_NAME),
            orderBy('year', 'desc')
        );
        const snapshot = await getDocs(q);
        const all = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Publication[];

        // Filter for published status in-memory
        return all.filter(p => p.publishStatus === 'published');
    },

    getById: async (id: string) => {
        const docRef = doc(db, COLLECTION_NAME, id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() } as Publication;
        }
        return null;
    },

    create: async (publication: Omit<Publication, 'id'>) => {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...publication,
            createdAt: serverTimestamp()
        });
        return docRef.id;
    },

    update: async (id: string, publication: Partial<Publication>) => {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            ...publication,
            updatedAt: serverTimestamp()
        });
    },

    delete: async (id: string) => {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    }
};
