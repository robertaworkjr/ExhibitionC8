import React from 'react';
import LCCLogo from "../logos/LCC logo 2023 Landscp MASTER.jpg";
import GrantLogo from "../logos/grant_jpeg_black.jpg";
import FundedLogo from "../logos/funded-by-the-uk.jpg";
import CultureLogo from "../logos/Culturelogo_wht.png";

const AdFooter = () => {
  return (
    <footer className="flex items-center justify-center gap-8 py-4 bg-card/50 border-t border-border">
      <img src={LCCLogo} alt="LCC Logo" className="h-10" />
      <img src={GrantLogo} alt="Grant Logo" className="h-10" />
      <img src={FundedLogo} alt="Funded by the UK" className="h-10" />
      <img src={CultureLogo} alt="Culture Liverpool Logo" className="h-10" />
    </footer>
  );
};

export default AdFooter;
