import React from "react";
import '../style/landing.css'
import { Svg } from "./Svg";
export const Landing = () => {
  return (
    <main id="landing-wrp">
      <div className="lnding-content">
        <h2>
          The only way you can conquer me is via love, and there I am happily
          conquered.
        </h2>
        <p className="krishna"> <i> ~ Lord Krishna 💙 </i> </p>
      </div>
      <Svg/>
    </main>
  );
};
