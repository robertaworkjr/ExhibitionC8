import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LCCLogo from "../logos/LCC logo 2023 Landscp MASTER.jpg";
import GrantLogo from "../logos/grant_jpeg_black.jpg";
import FundedLogo from "../logos/funded-by-the-uk.jpg";
import CultureLogo from "../logos/Culturelogo_wht.png";

const AdHeader = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-2">
      <img src={LCCLogo} alt="LCC Logo" className="h-10" />
      <img src={GrantLogo} alt="Grant Logo" className="h-10" />
      <img src={FundedLogo} alt="Funded by the UK" className="h-10" />
      <img src={CultureLogo} alt="Culture Liverpool Logo" className="h-10" />
    </div>
  );
};

export default AdHeader;
