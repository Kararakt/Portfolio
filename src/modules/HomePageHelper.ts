export const scrollUpFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
window.onscroll = function () {
  scrollFunction();
};
const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("scrollUp")!.style.display = "block";
  } else {
    document.getElementById("scrollUp")!.style.display = "none";
  }
};
