// import React, { useEffect, Image } from "react-native";
import React, { useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Body() {
  const [image, setImage] = useState(null);
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //     uploadImage(result.uri);
  //   }
  // };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("esto es result", result);

    if (!result.canceled) {
      const formData = createFormData(result.assets[0].uri);
      uploadImage(formData);
      setImage(result.uri);
    }
  };

  // esta es la anterio
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     const formData = createFormData(result);
  //     uploadImage(formData);
  //     setImage(result.uri);
  //   }
  // };
  // const uploadImage = async (uri) => {
  //   let formData = createFormData(uri);
  //   formData.append("image", {
  //     uri: uri,
  //     type: "image/jpeg",
  //     name: "image.jpg",
  //   });
  //   fetch(
  //     " https://60a7-2800-484-387b-6600-c06c-4ead-be31-5acd.ngrok-free.app/upload",
  //     {
  //       method: "POST",
  //       body: formData,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Upload successful:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading image:", error);
  //     });
  // };

  // const uploadImage = async (uri) => {
  //   let formData = createFormData(uri);

  //   fetch(
  //     "https://60a7-2800-484-387b-6600-c06c-4ead-be31-5acd.ngrok-free.app/upload",
  //     {
  //       method: "POST",
  //       body: formData,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Upload successful:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading image:", error);
  //     });
  // };

  const uploadImage = (formData) => {
    return fetch(
      "https://60a7-2800-484-387b-6600-c06c-4ead-be31-5acd.ngrok-free.app/upload",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload successful:", data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const createFormData = (uri) => {
    console.log("esto es uri", uri);
    const fileName = uri.split("/").pop();
    const fileType = fileName.split(".").pop();
    const formData = new FormData();
    formData.append("image", {
      uri,
      name: fileName,
      type: `image/${fileType}`,
    });
    console.log("esto es formData", formData);
    return formData;
  };
  // const createFormData = (uri) => {
  //   const formData = new FormData();
  //   formData.append("image", {
  //     uri: uri,
  //     name: "image.jpg",
  //     type: "image/jpeg",
  //   });
  //   console.log("esto es formData", formData);
  //   return formData;
  // };
  // este es el anterior
  //   const createFormData = (image) => {
  //     const formData = new FormData();
  //     formData.append("image", image);
  //     return formData;
  //   };
  // const createFormData = (uri) => {
  //   const fileName = uri.split("/").pop();
  //   const fileType = fileName.split(".").pop();
  //   const formData = new FormData();
  //   formData.append("file", {
  //     uri,
  //     name: fileName,
  //     type: `image/${fileType}`,
  //   });

  //   return formData;
  // };

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          ) : (
            <Text style={styles.textSelect}>Select to Image</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "blue",
  },
  // placeholder: {
  //   color: "#999",
  //   textAlign: "center",
  //   fontSize: 16,
  // },
  textSelect: {
    // fontFamily: "outfit-regular",
    fontSize: 20,
  },
});
