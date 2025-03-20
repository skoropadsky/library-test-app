import { Text, View, StyleSheet, FlatList } from "react-native";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { subscribeToCollection, DocumentData } from "../services/api";

export default function Index() {
  const [data, setData] = useState<DocumentData[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToCollection('json_data', {
      onData: (newData) => {
        console.log("newData: ", newData);
        setData(newData);
      },
      onError: (err) => {
        setError(err);
      },
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }: { item: DocumentData }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{JSON.stringify(item)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
      </View>
      {error ? (
        <Text style={styles.errorText}>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 16,
  },
  title: {
    color: Colors.primary,
    fontFamily: "Nunito Sans",
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "bold",
  },
  list: {
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: Colors.primary,
  },
  errorText: {
    color: 'red',
    padding: 16,
    textAlign: 'center',
  },
});
