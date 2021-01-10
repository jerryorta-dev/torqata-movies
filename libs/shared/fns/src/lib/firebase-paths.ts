/**
 * Firestore Paths
 * @param uidHash
 */

export function firebaseUserAccountPath(uidHash: string) {
  return `users/${uidHash}`;
}
