import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Comment } from "../models/Comment";

/**
 * Used for communicating with the comment collection in firebase
 */
class CommentRepository {
  /**
   * adds a comment to the database
   * @param comment comment item to add to db
   */
  async createComment(comment: Comment) {
    try {
      const docRef = await addDoc(collection(db, "comment"), { comment });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async addTestData() {
    console.log("creating test comment");
    const testComment: Comment = {
      topicId: "123",
      profileName: "CocoBen",
      comment: "Boy oh boy, I love coconuts and I LOVE husks!",
      time: Date.now(),
      commentCount: 6
    };

    try {
      const docRef = await addDoc(collection(db, "comment"), { testComment });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

export const commentRepository = new CommentRepository();
