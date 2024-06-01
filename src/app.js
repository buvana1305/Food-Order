import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponents from "./components/header";
import FooterComponents from "./components/footer";
import MainComponents from "./components/maincomponents";

createPage();
function createPage() {
  const page = (
    <div className="mainTest">
      <div>
        <HeaderComponents />
      </div>
      <div>
        <MainComponents />
      </div>
      <div>
        <FooterComponents></FooterComponents>
      </div>
    </div>
  );
  const root = ReactDOM.createRoot(document.getElementById("mainPage"));
  root.render(page);
}
