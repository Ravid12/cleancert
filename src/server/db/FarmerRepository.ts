import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../utils/firebase"

try {
  const docRef = await addDoc(collection(db, "farmer"), {
    name: "CocoLanes",
    description: "You ever craved a collection of big brown balls which yield highly nutritious milk? Well, look no further! Welcome to CocoLanes! We got a lifetime supply of big ol hairy bowling balls (coconuts), and that's right, you guessed it they're FAIR TRADE and UTZ Eco-certified! Help save our big blue ball by choose our hairy brown balls!",
    websiteUrl: "ravid12.github.io/portfolio/"
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}