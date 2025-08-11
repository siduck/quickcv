export const textAreaFormat = (x: string) =>
  x?.split("\n")?.map((l) => l?.slice(2));

export const generatePDF = () => {
  // mobiles
  if ("ontouchstart" in document.documentElement) {
    alert("WIP!");
  } // for pcs
  else {
    window.print();
  }
};

export const formatUrl = (url: any) => {
   if(url?.startsWith("https")) {
    return url?.replace("https://", "");
  }
  return url
}
