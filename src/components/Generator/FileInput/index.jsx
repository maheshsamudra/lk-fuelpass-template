import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as s from "./index.module.scss";

const FileInput = ({ setQrCodes = () => null, qrCodes = [] }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    setFiles(acceptedFiles);
    for (const file of acceptedFiles) {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        // Do whatever you want with the file contents
        const base64 = reader.result;
        console.log(base64);
        files.push(base64);
        setQrCodes([...qrCodes, base64]);
      };
      await reader.readAsDataURL(file);
    }
  }, []);

  console.log("files", files);
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
