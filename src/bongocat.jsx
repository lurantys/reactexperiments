import bongoCat from './assets/cat1.png';
import bongoCat2 from './assets/cat2.png';
import textbox from "./typeholder.jsx";
const textInput = document.getElementById("textbox");
const bongo = document.querySelector(".bongo-cat");
let isCat1 = true;
textInput.addEventListener("input", () => {
  if (isCat1) {
    bongo.innerHTML = `<img src=${bongoCat2} alt="Bongo Cat" />`;
  } else {
    bongo.innerHTML = `<img src=${bongoCat} alt="Bongo Cat" />`;
  }
  isCat1 = !isCat1;
});
function BongoCat() {
  return (
    <div className='bongo-cat'>
      <img src={bongoCat} alt="Bongo Cat" />
    </div>
  );
}
export default BongoCat;