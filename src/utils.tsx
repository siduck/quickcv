import * as htmlToImage from "html-to-image";
import { setFormat, setLoaderIcon, showFormat } from "./components/navbar";

function generatePDF() {
  showFormat(false);
  setFormat("PDF");

  // mobiles
  if ("ontouchstart" in document.documentElement) {
    alert("WIP!");
  } // for pcs
  else {
    const element = document.getElementById("resumeResult");
    const stylesheet = document.styleSheets[0];

    // set @page's size = resume div's dimensions
    stylesheet.insertRule(
      `@page { size: ${element?.offsetWidth}px ${
        element?.offsetHeight + 1
      }px; }`,
      stylesheet.cssRules.length,
    );

    window.print();
  }
}

function generateSVG() {
  showFormat(false);
  setFormat("SVG");
  setLoaderIcon(true);

  setTimeout(() => {
    const node = document.getElementById("svgWrapper");

    htmlToImage.toSvg(node)
      .then((dataUrl) => {
        let link = document.createElement("a");
        link.download = "resume.svg";
        link.href = dataUrl;
        link.click();
        setLoaderIcon(false);
      });
  }, 0);
}

function generatePNG() {
  showFormat(false);
  setFormat("PNG");
  setLoaderIcon(true);

  setTimeout(() => {
    const node = document.getElementById("resumeResult");

    htmlToImage.toPng(node, { pixelRatio: 5 })
      .then(function (dataUrl) {
        let link = document.createElement("a");
        link.download = "resume.png";
        link.href = dataUrl;
        link.click();
        setLoaderIcon(false);
      });
  }, 0);
}

export { generatePDF, generatePNG, generateSVG };
