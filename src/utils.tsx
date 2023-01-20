import * as htmlToImage from "html-to-image";

function generatePDF() {
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
  const node = document.getElementById("svgWrapper");

  htmlToImage.toSvg(node)
    .then((dataUrl) => {
      let link = document.createElement("a");
      link.download = "resume.svg";
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

export { generatePDF, generateSVG };
