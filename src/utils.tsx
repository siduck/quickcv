export const generatePDF = () => {
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
};
