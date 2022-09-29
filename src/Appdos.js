import { useState } from "react";
import * as React from "react";
import { storage } from "./firebaseconfig/firebase";

import Button from "@mui/material/Button";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileUploadIcon from "@mui/icons-material/FileUpload";
function Appdos() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className="Appdos">
      <form onSubmit={handleSubmit} className="form">
        <Button
          variant="contained"
          component="label"
          endIcon={<FileUploadIcon />}
          size="medium"
        >
          Cargar
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <br /> <br />
        <Button
          variant="contained"
          type="submit"
          size="large"
          endIcon={<CheckCircleIcon />}
        >
          Subir
        </Button>
        <br />
        <br />
      </form>
      {!imgUrl && (
        <div className="outerbar">
          <div className="innerbar" style={{ width: `${progresspercent}%` }}>
            {progresspercent}%
          </div>
        </div>
      )}
      {imgUrl && <img src={imgUrl} alt="Archivo subido" height={200} />}
    </div>
  );
}
export default Appdos;
