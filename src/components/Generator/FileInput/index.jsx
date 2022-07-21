import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as s from "./index.module.scss";

const readImage = (file) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => res(e.target.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    }, 50);
  });
};

const FileInput = ({ setQrCodes = () => null }) => {
  const onDrop = async (acceptedFiles) => {
    const images = [];
    for (const file of acceptedFiles) {
      const image = await readImage(file);
      images.push(image);
    }
    setQrCodes(images);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={"d-print-none"}>
      <div {...getRootProps()} className={s.fie_input}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop your QA codes here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default FileInput;
