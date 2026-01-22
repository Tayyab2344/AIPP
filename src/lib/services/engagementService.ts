import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    deleteDoc,
    doc,
    updateDoc,
    where,
    Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { Collaboration, EngagementType } from '@/types';

const COLLECTION_NAME = 'collaborations';

export const engagementService = {
    async submitApplication(data: Omit<Collaboration, 'id' | 'createdAt' | 'status'>) {
        try {
            const docRef = await addDoc(collection(db, COLLECTION_NAME), {
                ...data,
                status: 'pending',
                createdAt: Timestamp.now(),
            });

            // Trigger email notification via API
            await fetch('/api/collaborate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: docRef.id,
                    ...data
                })
            });

            return docRef.id;
        } catch (error) {
            console.error("Error submitting collaboration:", error);
            throw error;
        }
    },

    async getAll() {
        const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate(),
        })) as Collaboration[];
    },

    async updateStatus(id: string, status: Collaboration['status']) {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, { status });
    },

    async delete(id: string) {
        await deleteDoc(doc(db, COLLECTION_NAME, id));
    }
};
