import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AdHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/CLLogo.png" 
              alt="CL Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/Culturelogo_wht.png" 
              alt="Culture Liverpool Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/Funded by UK Gov-stacked-white.png" 
              alt="Funded by UK Government Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/LCC logo 2023 Landscp MASTER.jpg" 
              alt="LCC Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/funded-by-the-uk.jpg" 
              alt="Funded by the UK Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/grant_jpeg_black.jpg" 
              alt="Grant JPEG Black Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/LCC logo 2023 Landscp WHITE.png" 
              alt="LCC Logo White" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 border-border hover:shadow-sm transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center h-12">
            <img 
              src="/grant_png_black.png" 
              alt="Grant PNG Black Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdHeader;
