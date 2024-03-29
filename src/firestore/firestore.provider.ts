import { ApplicationDocument } from "./documents/applications";
import { UsersDocument } from "./documents/users";

export const FirestoreDatabaseProvider = "firestoredb";
export const FirestoreOptionsProvider = "firestoreOptions";
export const FirestoreCollectionProviders: string[] = [
  UsersDocument.collectionName,
  ApplicationDocument.collectionName,
];
