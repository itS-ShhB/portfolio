import styles from "./UpSideDown.module.css";

function UpSideDown() {
  function flip() {
    Array.prototype.slice
      .call(document.querySelectorAll("div,p,span,img,a,body"))
      .map(function (tag) {
        tag.style["transform"] = "rotate(" + 180 + "deg)";
      });
  }
  function unflip() {
    Array.prototype.slice
      .call(document.querySelectorAll("div,p,span,img,a,body"))
      .map(function (tag) {
        tag.style["transform"] = "rotate(" + 0 + "deg)";
      });
  }
  return 
}

export default UpSideDown;
