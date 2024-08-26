import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Controla la imagen seleccionada
  const [modalVisible, setModalVisible] = useState(false); // Controla la visibilidad del modal

  // Función para manejar la selección del personaje
  const handleCharacterPress = (imageSource) => {
    setSelectedCharacter(imageSource);
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedCharacter(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Contenedor de menú */}
      <View style={styles.menuContainer}>
      </View>

      {/* Contenedor del póster */}
      <View style={styles.posterContainer}>
        <Image
          source={require("./Image/Poster.jpg")} // Reemplaza con la ruta de tu póster
          style={styles.poster}
        />
        <View style={styles.posterOverlay}>
          <Text style={styles.posterText}>Jujutsu Kaisen</Text>
        </View>
      </View>

      {/* Contenedor de personajes */}
      <View style={styles.charactersContainer}>
        <TouchableOpacity
          onPress={() => handleCharacterPress(require("./Image/Pj1.jpg"))}
        >
          <Image source={require("./Image/Pj1.jpg")} style={styles.character} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCharacterPress(require("./Image/Pj2.jpg"))}
        >
          <Image source={require("./Image/Pj2.jpg")} style={styles.character} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCharacterPress(require("./Image/Pj3.jpg"))}
        >
          <Image source={require("./Image/Pj3.jpg")} style={styles.character} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCharacterPress(require("./Image/Pj4.jpg"))}
        >
          <Image source={require("./Image/Pj4.jpg")} style={styles.character} />
        </TouchableOpacity>
      </View>

      {/* Modal para mostrar la imagen ampliada */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalBackground} onPress={closeModal}>
            {selectedCharacter && (
              <Image
                source={selectedCharacter}
                style={styles.enlargedCharacter}
              />
            )}
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1C1C1E",
    paddingBottom: 20,
  },
  menuContainer: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#2E2E38",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  menuText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F0F0F0",
  },
  posterContainer: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    width: "90%",
  },
  poster: {
    width: "100%",
    height: 500,
  },
  posterOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 10,
  },
  posterText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  charactersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 30,
    paddingVertical: 10,
    backgroundColor: "#2E2E38",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  character: {
    borderRadius: 10,
    width: 70,
    height: 70,
    borderColor: "#F0F0F0",
    borderWidth: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  enlargedCharacter: {
    width: 300,
    height: 300,
    borderRadius: 15, 
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
});
