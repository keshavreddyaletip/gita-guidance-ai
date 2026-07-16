import {

doc,

setDoc,

serverTimestamp,

} from "firebase/firestore";

import { db } from "../config/firebase";

export async function saveProfile(uid, profile){

await setDoc(

doc(db,"users",uid),

{

...profile,

createdAt:serverTimestamp(),

updatedAt:serverTimestamp(),

},

{

merge:true,

}

);

}