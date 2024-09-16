import React from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import { useCallback } from "react";
type props = {

  html?: React.RefObject<HTMLDivElement>;

};

const GeneratePdf: React.FC<props> = ({ html }) => {
  const generateImage = useCallback(() => {
    if (html!.current === null) {
      return
    }

    toPng(html!.current, { cacheBust: true, })
      .then((dataUrl) => {
        const doc = new jsPDF();
        doc.addImage(dataUrl,'PNG',5,22,200,300);
        doc.save();
      })
      .catch((err) => {
        console.log(err)
      })
  }, [html])

  return (

    <div className="button-container">
      <button onClick={generateImage} className="download-button">
        Download as PDF
      </button>
    </div>

  );
};

export default GeneratePdf;