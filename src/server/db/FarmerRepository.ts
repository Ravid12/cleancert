import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Farmer } from "../models/Farmer";

/**
 * Used for communicating with the farmer collection in firebase
 */
class FarmerRepository {
  /**
   * adds a farmer to the database
   * @param farmer farmer item to add to db
   */
  async createFarmer(farmer: Farmer) {
    try {
      const docRef = await addDoc(collection(db, "farmer"), { farmer });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async addTestData() {
    console.log("creating test farmer");
    const testFarmer: Farmer = {
      id: "test",
      name: "CocoLanes",
      description:
        "You ever craved a collection of big brown balls which yield highly nutritious milk? Well, look no further! Welcome to CocoLanes! We got a lifetime supply of big ol hairy bowling balls (coconuts), and that's right, you guessed it they're FAIR TRADE and UTZ Eco-certified! Help save our big blue ball by choose our hairy brown balls!",
      approvedCertifications: [],
      pendingCertifications: [],
      websiteUrl: "ravid12.github.io/portfolio/",
    };

    try {
      const docRef = await addDoc(collection(db, "farmer"), { testFarmer });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

export const farmerRepository = new FarmerRepository();
