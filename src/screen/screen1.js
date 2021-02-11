import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import album from "../api";

const GameScreen = ({ route }) => {
  const [albumId, setAlbum] = useState([]);
  const [title, setTitle] = useState(null);
  const [image, setImg] = useState([]);

  const getAlbum = async () => {
    const newAlbum = await album(albumId,98);

    setAlbum(newAlbum);
  };

  getAlbum();
  
  const getTitle = async () => {
    const titulo = await title(title,98);

    setTitle(titulo);
  };

  getTitle();

  const getImage = async () => {
    const imagen = await album(image,98);

    setImg(imagen);
  };

  getImage();
  return (
    <View>
        <ScrollView>

        </ScrollView>
    </View>
  );
};


export default GameScreen;
