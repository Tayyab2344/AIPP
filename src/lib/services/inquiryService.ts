import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp } from "firebase/firestore";

export interface ContactInquiry {
    fullName: string;
    email: string;
    affiliation?: string;
    natureOfInquiry: string;
    message: string;
}

export const inquiryService = {
    async submitInquiry(data: ContactInquiry) {
        try {
            const inquiriesRef = collection(db, "inquiries");
            await addDoc(inquiriesRef, {
                ...data,
                createdAt: serverTimestamp(),
                status: 'new'
            });

            // Trigger email notification
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            return { success: true };
        } catch (error: any) {
            console.error("Error submitting inquiry:", error);
            throw new Error(error.message || "Failed to submit inquiry. Please try again later.");
        }
    },

    async getInquiries() {
        const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate() || new Date()
        }));
    },

    async deleteInquiry(id: string) {
        const docRef = doc(db, "inquiries", id);
        await deleteDoc(docRef);
    }
};
