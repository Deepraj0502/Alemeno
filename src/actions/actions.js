import {
  collection,
  getDocs,
  query,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";

import { app } from "../components/FirebaseConfig";

const db = getFirestore(app);

export const fetchObjectsRequest = () => ({
  type: "FETCH_OBJECTS_REQUEST",
});

export const fetchObjectsSuccess = (objectsData) => ({
  type: "FETCH_OBJECTS_SUCCESS",
  payload: objectsData,
});

export const fetchObjectsFailure = () => ({
  type: "FETCH_OBJECTS_FAILURE",
});
export const updateObjectRequest = () => ({
  type: "UPDATE_OBJECT_REQUEST",
});

export const updateObjectSuccess = () => ({
  type: "UPDATE_OBJECT_SUCCESS",
});

export const updateObjectFailure = () => ({
  type: "UPDATE_OBJECT_FAILURE",
});
export const fetchObjectsFromFirestore = () => {
  return async (dispatch) => {
    dispatch(fetchObjectsRequest());
    const objectsData = [];
    const q = query(collection(db, "courses"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      objectsData.push({ id: doc.id, ...doc.data() });
    });
    dispatch(fetchObjectsSuccess(objectsData));
  };
};
export const updateObjectInFirestore = (objectId) => {
  return async (dispatch) => {
    dispatch(updateObjectRequest());
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((dat) => {
      if (dat.data()["id"] === objectId) {
        const scoreRef = doc(db, "courses", dat.id);
        updateDoc(scoreRef, {
          likes: parseInt(dat.data()["likes"]) + 1,
        });
      }
    });
    dispatch(updateObjectSuccess());
    dispatch(fetchObjectsFromFirestore());
  };
};
