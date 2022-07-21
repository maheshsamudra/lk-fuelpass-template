import React, { useState } from "react";
import FileInput from "./FileInput";

const Generator = () => {
  const [qrCodes, setQrCodes] = useState([]);

  console.log(qrCodes);

  return (
    <div>
      <FileInput
        addImage={(qr) => {
          console.log("adding file", qrCodes.length);
          setQrCodes([...qrCodes, qr]);
        }}
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
