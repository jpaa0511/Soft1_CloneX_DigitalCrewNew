import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebase";

export function uploadFile(file, folder = "avatar") {
  return new Promise((resolve, reject) => {
    if (!file) {
      console.error("No se seleccionó ningún archivo");
      reject(new Error("No se seleccionó ningún archivo"));
      return;
    }

    const uniqueId = uuidv4();
    const fileExtension = file.name.split(".").pop();
    const uniqueFileName = `${uniqueId}.${fileExtension}`;
    const storageRef = ref(storage, `${folder}/${uniqueFileName}`);

    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Archivo subido exitosamente!", snapshot);
        return getDownloadURL(snapshot.ref);
      })
      .then((downloadURL) => {
        console.log("URL de descarga:", downloadURL);
        resolve(downloadURL);
      })
      .catch((error) => {
        console.error("Error al subir el archivo:", error);
        reject(error);
      });
  });
}
