import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Partner, Testimonial } from "@/types";

export const impactService = {
    getPartners: async () => {
        const q = query(collection(db, "partners"), orderBy("order", "asc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Partner[];
    },

    getTestimonials: async () => {
        const q = query(collection(db, "testimonials"), orderBy("order", "asc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Testimonial[];
    }
};
