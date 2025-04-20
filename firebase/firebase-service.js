import { db } from "./firebase-config.js";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";

// Function to add user to Firestore
export async function addUser(uid, name, email) {
    try {
        await addDoc(collection(db, "users"), {
            uid: uid,
            name: name,
            email: email,
            createdAt: new Date()
        });
        console.log("User added successfully!");
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

import { db } from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

// Function to add car service record
export async function addServiceRecord(userId, carModel, lastServiceDate, mileage, nextServiceDate) {
    try {
        await addDoc(collection(db, "services"), {
            userId: userId,
            carModel: carModel,
            lastServiceDate: lastServiceDate,
            mileage: mileage,
            nextServiceDate: nextServiceDate,
            createdAt: new Date()
        });
        console.log("Service record added successfully!");
    } catch (error) {
        console.error("Error adding service record:", error);
    }
}

import { db } from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

// Function to book a car service appointment
export async function bookServiceAppointment(userId, carModel, serviceDate, serviceCenter) {
    try {
        await addDoc(collection(db, "appointments"), {
            userId: userId,
            carModel: carModel,
            serviceDate: serviceDate,
            serviceCenter: serviceCenter,
            createdAt: new Date()
        });
        console.log("Service appointment booked successfully!");
    } catch (error) {
        console.error("Error booking service appointment:", error);
    }
}

import { db } from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

// Function to add user feedback
export async function submitFeedback(userId, feedbackText) {
    try {
        await addDoc(collection(db, "feedback"), {
            userId: userId,
            feedback: feedbackText,
            timestamp: new Date()
        });
        console.log("Feedback submitted successfully!");
    } catch (error) {
        console.error("Error submitting feedback:", error);
    }
}

import { db } from "./firebase-config.js";
import { collection, query, where, getDocs } from "firebase/firestore";

// Function to fetch service history for a user
export async function getServiceHistory(userId) {
    try {
        const q = query(collection(db, "services"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        let serviceHistory = [];
        querySnapshot.forEach((doc) => {
            serviceHistory.push({ id: doc.id, ...doc.data() });
        });

        return serviceHistory; // Return fetched data
    } catch (error) {
        console.error("Error fetching service history:", error);
    }
}

import { db } from "./firebase-config.js";
import { doc, updateDoc } from "firebase/firestore";

// Function to update service record
export async function updateServiceRecord(serviceId, nextServiceDate) {
    try {
        const serviceRef = doc(db, "services", serviceId);
        await updateDoc(serviceRef, {
            nextServiceDate: nextServiceDate,
            updatedAt: new Date()
        });

        console.log("Service record updated successfully!");
    } catch (error) {
        console.error("Error updating service record:", error);
    }
}

import { db } from "./firebase-config.js";
import { doc, deleteDoc } from "firebase/firestore";

// Function to delete a service record
export async function deleteServiceRecord(serviceId) {
    try {
        await deleteDoc(doc(db, "services", serviceId));
        console.log("Service record deleted successfully!");
    } catch (error) {
        console.error("Error deleting service record:", error);
    }
}
