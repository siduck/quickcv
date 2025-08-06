export const textAreaFormat = (x: string) => x.split("\n").map((l) => l.slice(2));

export const generatePDF = () => {
  // mobiles
  if ("ontouchstart" in document.documentElement) {
    alert("WIP!");
  } // for pcs
  else {
    window.print();
  }
};

