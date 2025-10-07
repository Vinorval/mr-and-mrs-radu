import { useEffect, useState } from 'react';

import Promo from '../promo/Promo';
import Newlyweds from '../newlyweds/Newlyweds';
import Maps from '../maps/Maps';
import Ruls from '../rules/Rules';

function App() {
  const targetDate = new Date('2026-01-16T12:00:00');

  const calculateTimeLeft = () => { 
    const now = new Date(); 
    const diff = targetDate - now; 
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => { 
    const id = setInterval(() => { setTimeLeft(calculateTimeLeft()); }, 1000); 
    return () => clearInterval(id); 
  }, []);

  return (
    <div className="App">
      <Promo timer={timeLeft} />
      <Newlyweds />
      <Maps />
      <Ruls />
    </div>
  );
}

export default App;
