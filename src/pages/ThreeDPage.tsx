import React from "react";
import { Download, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";
import "@/assets/ThreeDPage.css";

declare global {
  namespace JSX {
        interface IntrinsicElements {
          'model-viewer': any;
        }
  }
}

// 3D Model Gallery Data
const modelGallery = [
        {
                id: "charles-wooten",
                name: "Charles Wooten",
                subtitle: "Digital Portrait Memorial - 2025",
                file: "/3DObjects/CharlesWooten.glb",
                material: "PLA Filament",
                technique: "FDM 3D Printing",
                dimensions: "15cm x 20cm x 8cm",
                description: "Charles Wooten was a 24-year-old Bermudan ship's fireman who became a victim of racial violence in Liverpool in 1919. This 3D portrait serves as a powerful memorial, preserving his likeness through advanced digital sculpting and 3D printing technology.\n\nThis piece represents the intersection of memorial art and cutting-edge technology, ensuring that Charles Wooten's story and image are preserved for future generations as part of Liverpool's living history.",
                process: "Created using high-resolution photogrammetry data, digitally sculpted in Blender with sub-millimetre precision, and printed using biodegradable PLA material at 0.15mm layer height for exceptional detail.",
                tags: ["Memorial", "Historical", "3D Printed", "PLA"]
        },
        // Note: These models need .glb files for web viewing. .usdz files only work for iOS AR
        // Using fallback to existing Charles Wooten model for demonstration
        {
                id: "joanne-anderson",
                name: "Joanne Anderson",
                subtitle: "Political Leadership and Representation - 2025",
                file: "/3DObjects/CharlesWooten.glb", // Temporary fallback until .glb version available
                material: "PLA Filament",
                technique: "3D Printing on Prusa XL",
                dimensions: "Custom portrait scale",
                description: "This 3D model of Joanne Anderson presents her in a contemplative stance, the form bathed in soft monochromatic tones that echo the dignity and focus she brought to her public role. The portrait blends the tactile realism of digital sculpture with an aura of calm strength.\n\nJoanne Anderson made history as Liverpool's first Black female mayor, guiding the city through complex challenges. Her leadership embodied resilience and representation, inspiring communities locally and nationally.\n\n[Note: This is using a placeholder 3D model. Replace with JoanneAnderson.glb when available]",
                process: "Image Capture: Careful lighting used to create a soft tonal range, matching the poised expression of the subject. Digital Sculpting: Modelled in Blender, focusing on subtle surface detail and symmetry. Model Preparation: Exported and sliced with 0.16 mm layers and moderate infill for balance between weight and detail. 3D Printing: Printed in PLA on the Prusa XL, using a slow extrusion for precise edge fidelity. Post-Processing: Buffed to a smooth matte finish to preserve the soft, monochrome-inspired aesthetic.",
                tags: ["Political", "Leadership", "Historical", "3D Printed", "PLA"]
        },
        {
                id: "bea-freeman",
                name: "Bea Freeman", 
                subtitle: "Cultural Pioneer and Media Voice - 2025",
                file: "/3DObjects/CharlesWooten.glb", // Temporary fallback until .glb version available
                material: "PLA Filament", 
                technique: "Digital Sculpting & 3D Printing",
                dimensions: "Portrait scale",
                description: "A finely detailed 3D portrait of Bea Freeman captures her confidence and presence, fusing the precision of digital imaging with the warmth of personal memory. Light and shadow are carefully sculpted to reflect her impact as a pioneering voice in Liverpool's cultural landscape.\n\nBea Freeman broke barriers as a television and media figure, amplifying underrepresented voices in the city. Her work reshaped the narrative of Liverpool's Black communities, leaving an enduring influence on how the city sees itself.\n\n[Note: This is using a placeholder 3D model. Replace with BeaFreeman.glb when available]",
                process: "Image Capture & Reference: Multiple high-resolution images were used to map her distinctive facial features, particularly her confident gaze and expressive contours. Digital Sculpting: Created in Blender with precise polygon detailing and digital paint layers to enhance lighting fidelity.",
                tags: ["Media", "Cultural", "Television", "3D Printed", "Pioneer"]
        },
        {
                id: "katy-gardener", 
                name: "Katy Gardener",
                subtitle: "Community Figure - 2025",
                file: "/3DObjects/CharlesWooten.glb", // Temporary fallback until .glb version available
                material: "PLA Filament",
                technique: "3D Printing",
                dimensions: "Portrait scale", 
                description: "3D portrait of Katy Gardener, representing her contribution to Liverpool's community. [Add your specific description and details about Katy Gardener here]\n\n[Note: This is using a placeholder 3D model. Replace with KatyGardener.glb when available]",
                process: "Digital sculpting and 3D printing process. [Add your specific process details here]",
                tags: ["Community", "3D Printed", "Portrait"]
        },
        {
                id: "john-archer",
                name: "John Archer", 
                subtitle: "Historical Figure - 2025",
                file: "/3DObjects/CharlesWooten.glb", // Temporary fallback until .glb version available
                material: "PLA Filament",
                technique: "3D Printing", 
                dimensions: "Portrait scale",
                description: "3D portrait of John Archer, capturing his significance in Liverpool's history. [Add your specific description and details about John Archer here]\n\n[Note: This is using a placeholder 3D model. Replace with JohnArcher.glb when available]",
                process: "Digital sculpting and 3D printing process. [Add your specific process details here]",
                tags: ["Historical", "3D Printed", "Portrait"]
        },
        // Test model - can be removed if not needed
        {
                id: "test-cube",
                name: "Test Cube",
                subtitle: "Technical Test Model - 2025",
                file: "/3DObjects/test-cube.glb",
                material: "Digital",
                technique: "3D Modeling",
                dimensions: "10cm x 10cm x 10cm",
                description: "A simple test cube model for demonstration purposes. This model can be used to verify the 3D viewer functionality and gallery system.",
                process: "Created as a basic geometric shape for testing 3D viewer compatibility and performance.",
                tags: ["Test", "Geometric", "3D Model", "Digital"]
        }
];

const ThreeDPage = () => {
        const [selectedModelId, setSelectedModelId] = React.useState(modelGallery[0].id);
        const [modelLoading, setModelLoading] = React.useState(true);
        const [modelError, setModelError] = React.useState(false);
        
        // Get currently selected model
        const currentModel = modelGallery.find(model => model.id === selectedModelId) || modelGallery[0];

        const handleDownload = () => {
                const link = document.createElement('a');
                link.href = currentModel.file;
                link.download = `${currentModel.name}.glb`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
        };

        const resetModelView = () => {
                const modelViewer = document.querySelector('model-viewer');
                if (modelViewer) {
                        try {
                                (modelViewer as any).resetTurntableRotation();
                                (modelViewer as any).jumpCameraToGoal();
                        } catch (error) {
                                console.log('Model viewer reset not available:', error);
                        }
                }
        };

        const optimizeModelView = () => {
                const modelViewer = document.querySelector('model-viewer') as any;
                if (modelViewer) {
                        try {
                                // Set optimal field of view for better sizing
                                modelViewer.fieldOfView = '45deg';
                                // Position camera at optimal distance and angle for centered view
                                modelViewer.cameraOrbit = '0deg 75deg 1.2m';
                                // Center the target slightly above origin for better centering
                                modelViewer.cameraTarget = '0m 0.1m 0m';
                                // Enhanced exposure for better visibility
                                modelViewer.exposure = 1.2;
                                // Force bounds to be tight
                                modelViewer.bounds = 'tight';
                                // Update the view
                                modelViewer.jumpCameraToGoal();
                        } catch (error) {
                                console.log('Model viewer optimization not available:', error);
                        }
                }
        };

        // Add effect to optimize view when component mounts
        React.useEffect(() => {
                // Wait for model-viewer to be defined
                const checkModelViewer = () => {
                        if (typeof customElements.get('model-viewer') !== 'undefined') {
                                initializeModelViewer();
                        } else {
                                setTimeout(checkModelViewer, 100);
                        }
                };
                
                const initializeModelViewer = () => {
                        const modelViewer = document.querySelector('model-viewer') as any;
                        
                        const handleModelLoad = () => {
                                console.log('Model loaded successfully');
                                setModelLoading(false);
                                setModelError(false);
                                // Initial optimization
                                optimizeModelView();
                                
                                // Additional optimization after a short delay to ensure model is fully loaded
                                setTimeout(() => {
                                        if (modelViewer) {
                                                try {
                                                        // Force the model to be perfectly centered
                                                        modelViewer.setAttribute('field-of-view', '65deg');
                                                        modelViewer.setAttribute('camera-orbit', '0deg 75deg 0.15m');
                                                        modelViewer.setAttribute('camera-target', '0m 0m 0m');
                                                        modelViewer.setAttribute('exposure', '1.5');
                                                        modelViewer.setAttribute('bounds', 'tight');
                                                        
                                                        // Try to trigger a view update
                                                        if (modelViewer.jumpCameraToGoal) {
                                                                modelViewer.jumpCameraToGoal();
                                                        }
                                                        
                                                        // Additional fallback for view fitting with centered camera
                                                        if (modelViewer.getCameraOrbit && modelViewer.setCameraOrbit) {
                                                                const currentOrbit = modelViewer.getCameraOrbit();
                                                                modelViewer.setCameraOrbit(currentOrbit.theta, 75, 0.15);
                                                        }
                                                        
                                                        // Try to force the canvas to scale up but keep centered
                                                        const canvas = modelViewer.querySelector('canvas');
                                                        if (canvas) {
                                                                canvas.style.transform = 'scale(1.1)';
                                                                canvas.style.transformOrigin = 'center center';
                                                        }
                                                } catch (error) {
                                                        console.log('Advanced model viewer optimization not available:', error);
                                                }
                                        }
                                }, 1000);
                        };

                        const handleModelError = (event: any) => {
                                console.error('Model failed to load:', event);
                                console.error('Model src:', currentModel.file);
                                setModelLoading(false);
                                setModelError(true);
                        };

                        if (modelViewer) {
                                // Listen for the model load event
                                modelViewer.addEventListener('load', handleModelLoad);
                                modelViewer.addEventListener('model-visibility', handleModelLoad);
                                modelViewer.addEventListener('error', handleModelError);
                                
                                // Also set a fallback timer in case the events don't fire
                                const timer = setTimeout(() => {
                                        console.log('Timer triggered, attempting to load model...');
                                        handleModelLoad();
                                }, 5000); // Increased timeout for large file
                                
                                return () => {
                                        modelViewer.removeEventListener('load', handleModelLoad);
                                        modelViewer.removeEventListener('model-visibility', handleModelLoad);
                                        modelViewer.removeEventListener('error', handleModelError);
                                        clearTimeout(timer);
                                };
                        } else {
                                console.error('Model viewer element not found');
                        }
                };
                
                checkModelViewer();
        }, [selectedModelId, currentModel.file]);

        return (
                <div className="min-h-screen bg-background">
                        <Navigation />
                        
                        {/* Add top padding to account for fixed navigation */}
                        <div className="pt-16">
                                {/* Header Ad */}
                                <div className="px-6 py-4">
                                        <AdHeader />
                                </div>

                                {/* Modern Animated Hero Section */}
                                <section className="relative py-20 px-6 bg-gradient-mesh overflow-hidden">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 bg-gradient-hero animate-gradient opacity-60"></div>
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
                                        
                                        {/* Content Container */}
                                        <div className="relative max-w-5xl mx-auto text-center">
                                                {/* Main Title */}
                                                <div className="animate-fade-in-up">
                                                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
                                                                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                                                                        3D Digital Memorial
                                                                </span>
                                                        </h1>
                                                </div>
                                                
                                                {/* Subtitle */}
                                                <div className="animate-fade-in-up delay-200">
                                                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
                                                                Experience our cutting-edge 3D memorial portraits that bring Liverpool's historical figures to life through innovative digital fabrication techniques.
                                                        </p>
                                                </div>
                                                
                                                {/* Feature Pills */}
                                                <div className="animate-fade-in-up delay-400 flex flex-wrap justify-center gap-4 mb-12">
                                                        <div className="glass-effect px-4 py-2 rounded-full border border-primary/20">
                                                                <span className="text-sm font-medium text-primary">✨ Interactive 3D Models</span>
                                                        </div>
                                                        <div className="glass-effect px-4 py-2 rounded-full border border-accent/20">
                                                                <span className="text-sm font-medium text-accent">🎧 Audio Narratives</span>
                                                        </div>
                                                        <div className="glass-effect px-4 py-2 rounded-full border border-primary/20">
                                                                <span className="text-sm font-medium text-primary">📱 AR Experience</span>
                                                        </div>
                                                </div>
                                                
                                                {/* Scroll Indicator */}
                                                <div className="animate-fade-in-up delay-600">
                                                        <div className="inline-flex items-center gap-2 text-muted-foreground">
                                                                <span className="text-sm">Scroll to explore</span>
                                                                <div className="animate-bounce">
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                                        </svg>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        
                                        {/* Floating Accent Elements */}
                                        <div className="absolute top-20 left-10 animate-float opacity-20">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent animate-glow"></div>
                                        </div>
                                        <div className="absolute bottom-20 right-10 animate-float delay-1000 opacity-20">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary animate-glow"></div>
                                        </div>
                                </section>

                                {/* Model Gallery Selection */}
                                <section className="px-6 py-6 bg-muted/30">
                                        <div className="container max-w-6xl mx-auto">
                                                <div className="mb-6">
                                                        <h2 className="text-2xl font-bold text-foreground mb-2">3D Model Gallery</h2>
                                                        <p className="text-muted-foreground">Select a model to view in 3D</p>
                                                </div>
                                                
                                                {/* Model Selection Grid */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {modelGallery.map((model) => (
                                                                <Card 
                                                                        key={model.id} 
                                                                        className={`cursor-pointer transition-all hover:shadow-lg ${
                                                                                selectedModelId === model.id 
                                                                                        ? 'ring-2 ring-primary bg-primary/5' 
                                                                                        : 'hover:bg-muted/50'
                                                                        }`}
                                                                        onClick={() => {
                                                                                setSelectedModelId(model.id);
                                                                                setModelLoading(true);
                                                                                setModelError(false);
                                                                        }}
                                                                >
                                                                        <CardHeader className="pb-3">
                                                                                <CardTitle className="text-lg">{model.name}</CardTitle>
                                                                                <p className="text-sm text-muted-foreground">{model.subtitle}</p>
                                                                        </CardHeader>
                                                                        <CardContent className="pt-0">
                                                                                <div className="flex flex-wrap gap-1 mb-3">
                                                                                        {model.tags.slice(0, 3).map((tag, index) => (
                                                                                                <span key={index} className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-secondary/50 text-secondary-foreground">
                                                                                                        {tag}
                                                                                                </span>
                                                                                        ))}
                                                                                </div>
                                                                                <div className="text-xs text-muted-foreground">
                                                                                        <div className="flex justify-between">
                                                                                                <span>{model.material}</span>
                                                                                                <span>{model.technique}</span>
                                                                                        </div>
                                                                                </div>
                                                                        </CardContent>
                                                                </Card>
                                                        ))}
                                                </div>
                                        </div>
                                </section>

                                {/* Main 3D Model Display */}
                                <section className="py-16 px-6">
                                        <div className="max-w-7xl mx-auto">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                                        
                                                        {/* 3D Model Viewer */}
                                                        <div className="order-2 lg:order-1">
                                                                <Card className="bg-card/80 border-border shadow-xl">
                                                                        <CardHeader className="text-center pb-4">
                                                                                <CardTitle className="text-2xl text-foreground">
                                                                                        Interactive 3D Model
                                                                                </CardTitle>
                                                                        </CardHeader>
                                                                        <CardContent className="p-8">
                                                                                <div className="bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl p-6 mb-6">
                                                                                        <div className="relative">
                                                                                                <div className="model-viewer-container-9-16">
                                                                                                        <model-viewer
                                                                                                                key={selectedModelId}
                                                                                                                src={currentModel.file}
                                                                                                                alt={currentModel.name}
                                                                                                                className="model-viewer-9-16"
                                                                                                                ar
                                                                                                                ar-modes="webxr scene-viewer quick-look"
                                                                                                                camera-controls
                                                                                                                auto-rotate
                                                                                                                loading="lazy"
                                                                                                                environment-image="neutral"
                                                                                                                shadow-intensity="0.7"
                                                                                                                shadow-softness="0.8"
                                                                                                                field-of-view="45deg"
                                                                                                                min-camera-orbit="auto auto 0.5m"
                                                                                                                max-camera-orbit="auto auto 2.5m"
                                                                                                                camera-orbit="0deg 75deg 1.2m"
                                                                                                                min-field-of-view="30deg"
                                                                                                                max-field-of-view="60deg"
                                                                                                                interaction-prompt="none"
                                                                                                                touch-action="pan-y"
                                                                                                                camera-target="0m 0.1m 0m"
                                                                                                                auto-rotate-delay="3000"
                                                                                                                exposure="1.2"
                                                                                                                bounds="tight"
                                                                                                        ></model-viewer>
                                                                                                        
                                                                                                        {modelLoading && (
                                                                                                                <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-xl">
                                                                                                                        <div className="text-center">
                                                                                                                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                                                                                                                                <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        )}
                                                                                                        
                                                                                                        {modelError && (
                                                                                                                <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-xl">
                                                                                                                        <div className="text-center">
                                                                                                                                <p className="text-sm text-red-600 mb-2">Failed to load 3D model</p>
                                                                                                                                <p className="text-xs text-muted-foreground">Please try refreshing the page</p>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        )}
                                                                                                </div>
                                                                                                <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">
                                                                                                        Interactive 3D Model
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                                
                                                                                {/* Technical Specs */}
                                                                                <div className="grid grid-cols-2 gap-4 mb-6">
                                                                                        <div>
                                                                                                <h4 className="font-semibold text-sm text-muted-foreground mb-1">Material</h4>
                                                                                                <p className="text-foreground">{currentModel.material}</p>
                                                                                        </div>
                                                                                        <div>
                                                                                                <h4 className="font-semibold text-sm text-muted-foreground mb-1">Technique</h4>
                                                                                                <p className="text-foreground">{currentModel.technique}</p>
                                                                                        </div>
                                                                                        <div className="col-span-2">
                                                                                                <h4 className="font-semibold text-sm text-muted-foreground mb-1">Dimensions</h4>
                                                                                                <p className="text-foreground">{currentModel.dimensions}</p>
                                                                                        </div>
                                                                                </div>

                                                                                {/* Action Buttons */}
                                                                                <div className="flex flex-col sm:flex-row gap-3">
                                                                                        <Button 
                                                                                                variant="default" 
                                                                                                className="flex-1 bg-primary hover:bg-primary/90"
                                                                                                onClick={handleDownload}
                                                                                        >
                                                                                                <Download className="h-4 w-4 mr-2" />
                                                                                                Download 3D Model
                                                                                        </Button>
                                                                                        <Button 
                                                                                                variant="outline" 
                                                                                                className="flex-1"
                                                                                                onClick={resetModelView}
                                                                                        >
                                                                                                <RotateCcw className="h-4 w-4 mr-2" />
                                                                                                Reset View
                                                                                        </Button>
                                                                                </div>
                                                                        </CardContent>
                                                                </Card>
                                                        </div>

                                                        {/* Content Information */}
                                                        <div className="order-1 lg:order-2">
                                                                <div className="sticky top-24">
                                                                        <div className="mb-8">
                                                                                <h1 className="text-4xl font-bold text-foreground mb-2">
                                                                                        {currentModel.name}
                                                                                </h1>
                                                                                <p className="text-xl text-muted-foreground mb-6">
                                                                                        {currentModel.subtitle}
                                                                                </p>
                                                                                
                                                                                {/* Tags */}
                                                                                <div className="flex flex-wrap gap-2 mb-6">
                                                                                        {currentModel.tags.map((tag, index) => (
                                                                                                <span key={index} className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-secondary text-secondary-foreground">
                                                                                                        {tag}
                                                                                                </span>
                                                                                        ))}
                                                                                </div>
                                                                        </div>

                                                                        {/* Description */}
                                                                        <Card className="bg-card/50 border-border mb-6">
                                                                                <CardContent className="p-6">
                                                                                        <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                                                                                <div className="w-1 h-6 bg-primary rounded-full"></div>
                                                                                                About This Memorial
                                                                                        </h3>
                                                                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                                                                                {currentModel.description}
                                                                                        </p>
                                                                                </CardContent>
                                                                        </Card>

                                                                        {/* Process */}
                                                                        <Card className="bg-card/50 border-border">
                                                                                <CardContent className="p-6">
                                                                                        <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                                                                                <div className="w-1 h-6 bg-accent rounded-full"></div>
                                                                                                Creation Process
                                                                                        </h3>
                                                                                        <p className="text-muted-foreground leading-relaxed">
                                                                                                {currentModel.process}
                                                                                        </p>
                                                                                </CardContent>
                                                                        </Card>
                                                                </div>
                                                        </div>

                                                </div>
                                        </div>
                                </section>

                                {/* Footer Ad */}
                                <div className="px-6 py-4">
                                        <AdFooter />
                                </div>
                        </div>
                </div>
        );
};

export default ThreeDPage;
