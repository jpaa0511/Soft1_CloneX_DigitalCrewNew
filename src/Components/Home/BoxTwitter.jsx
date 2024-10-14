import { useState } from "react";
import { Boxtwitter, Avatar, Div, Form, DivIcon, File, DivURL } from "./styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PollIcon from "@mui/icons-material/Poll";
import { Button } from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../Connecting_to_Firebase/firebase";
import User from "../../Img/user.png";

export const BoxTwitter = () => {
  const [fileImg, setFileImg] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const handleSubir = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storageRef = ref(storage, `/avatar/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setFileUrl(url);
      console.log("Imagen subida exitosamente. URL:", url);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      alert("Hubo un error al subir la imagen.");
      return;
    }
  };

  return (
    <Boxtwitter>
      <Form>
        <Div>
          <Avatar
            src="https://randomuser.me/api/portraits/women/17.jpg"
            alt=""
          ></Avatar>
          <File type="file" className="primary" onChange={handleSubir} />
          <div className="columbus">
            <input type="text" placeholder="¿Qué está pasando?" />
            <input type="text" placeholder="Usuario" />
          </div>
        </Div>
      </Form>
      <Div>
        <DivIcon>
          <File type="file" className="secondary" />
          <AddPhotoAlternateIcon />
          <GifIcon />
          <File type="file" className="tertiary" />
          <EmojiEmotionsIcon />
          <PollIcon />
        </DivIcon>
        <DivURL>
          <input type="text" placeholder="URL: Opcional de imeg" />
          <Button type="submit">Tweet</Button>
        </DivURL>
      </Div>
    </Boxtwitter>
  );
};
