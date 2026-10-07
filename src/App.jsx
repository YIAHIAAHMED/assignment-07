import { useState } from "react";
import heroImg from "./assets/hero.png"; // নিশ্চিত করুন ফাইল নাম এবং এক্সটেনশন ঠিক আছে

function App() {
  return (
    <div>
      <img src={heroImg} alt="Hero" />
    </div>
  );
}

export default App;