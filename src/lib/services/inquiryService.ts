import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
            return { success: true };
        } catch (error: any) {
            console.error("Error submitting inquiry:", error);
            throw new Error(error.message || "Failed to submit inquiry. Please try again later.");
        }
    }
};
