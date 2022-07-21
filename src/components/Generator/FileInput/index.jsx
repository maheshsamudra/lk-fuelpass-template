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

const FileInput = ({ addImage = () => null }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      const image = await readImage(file);
      addImage(image);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
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
