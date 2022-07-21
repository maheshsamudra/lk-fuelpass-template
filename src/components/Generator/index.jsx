import React, { useState } from "react";
import FileInput from "./FileInput";

const Generator = () => {
  const [qrCodes, setQrCodes] = useState([]);

  return (
    <div>
      <FileInput
        setQrCodes={(qr) => {
          console.log("adding file");
          setQrCodes(qr);
        }}
        qrCodes={qrCodes}
      />
      {qrCodes.map((qr, idx) => (
        <div key={idx}>
          <img src={qr} alt="QR Code" width={372} height={377} />
        </div>
      ))}
    </div>
  );
};

export default Generator;
