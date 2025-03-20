import firestore from '@react-native-firebase/firestore';

export type DocumentData = {
  id: string;
  [key: string]: any;
};

export interface CollectionListener {
  onData: (data: DocumentData[]) => void;
  onError: (error: Error) => void;
}

export const subscribeToCollection = (
  collectionName: string,
  { onData, onError }: CollectionListener
) => {
  try {
    const unsubscribe = firestore()
      .collection(collectionName)
      .onSnapshot(
        (querySnapshot) => {
          const data: DocumentData[] = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          onData(data);
        },
        (error) => {
          onError(error);
        }
      );

    return unsubscribe;
  } catch (error) {
    onError(error as Error);
    return () => {};
  }
};