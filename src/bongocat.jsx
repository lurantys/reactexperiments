import { useState, useEffect } from 'react';
import bongoCat from './assets/cat1.png';
import bongoCat2 from './assets/cat2.png';

function BongoCat() {
  const [isCat1, setIsCat1] = useState(true);

  useEffect(() => {
    const textInput = document.getElementById("textbox");
    const handleInput = () => {
      setIsCat1(prev => !prev);
    };
    
    textInput?.addEventListener("input", handleInput);
    return () => textInput?.removeEventListener("input", handleInput);
  }, []);

  return (
    <div className='bongo-cat'>
      <img src={isCat1 ? bongoCat : bongoCat2} alt="Bongo Cat" />
    </div>
  );
}

export default BongoCat;