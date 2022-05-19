import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Certification } from "../models/Certification";

/**
 * Used for communicating with the Certification collection in firebase
 */
class CertificationRepository {
  /**
   * adds a Certification to the database
   * @param Certification Certification item to add to db
   */
  async createCertification(certification: Certification) {
    alert(`create cert called with ${certification.name} ${certification.description}`)
    try {
      const docRef = await addDoc(collection(db, "Certification"), {
        certification,
      });
      console.log("Certification written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding Certification: ", e);
    }
  }

  async addTestData() {
    console.log("creating test Certification");
    const testCertification: Certification = {
      name: "UTZ Eco Certified",
      description:
        "For coconut farms which have been through rigourous clean and green testing",
    };

    try {
      const docRef = await addDoc(collection(db, "Certification"), {
        testCertification,
      });
      console.log("Certification added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding certification: ", e);
    }
  }
}

export const certificationRepository = new CertificationRepository();
