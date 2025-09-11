import React from "react";
import { Download, RotateCcw, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";
import useEmblaCarousel from 'embla-carousel-react'
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
                file: "/3DObjects/JoanneAndersonModel_1757620150150.glb",
                material: "PLA Filament",
                technique: "3D Printing on Prusa XL",
                dimensions: "Custom portrait scale",
                description: "This 3D model of Joanne Anderson presents her in a contemplative stance, the form bathed in soft monochromatic tones that echo the dignity and focus she brought to her public role. The portrait blends the tactile realism of digital sculpture with an aura of calm strength.\n\nJoanne Anderson made history as Liverpool's first Black female mayor, guiding the city through complex challenges. Her leadership embodied resilience and representation, inspiring communities locally and nationally.",
                process: "Image Capture: Careful lighting used to create a soft tonal range, matching the poised expression of the subject. Digital Sculpting: Modelled in Blender, focusing on subtle surface detail and symmetry. Model Preparation: Exported and sliced with 0.16 mm layers and moderate infill for balance between weight and detail. 3D Printing: Printed in PLA on the Prusa XL, using a slow extrusion for precise edge fidelity. Post-Processing: Buffed to a smooth matte finish to preserve the soft, monochrome-inspired aesthetic.",
                tags: ["Political", "Leadership", "Historical", "3D Printed", "PLA"]
        },
        {
                id: "bea-freeman",
                name: "Bea Freeman", 
                subtitle: "Cultural Pioneer and Media Voice - 2025",
                file: "/3DObjects/BeafreemanModel_1757620168981.glb",
                material: "PLA Filament", 
                technique: "Digital Sculpting & 3D Printing",
                dimensions: "Portrait scale",
                description: "A finely detailed 3D portrait of Bea Freeman captures her confidence and presence, fusing the precision of digital imaging with the warmth of personal memory. Light and shadow are carefully sculpted to reflect her impact as a pioneering voice in Liverpool's cultural landscape.\n\nBea Freeman broke barriers as a television and media figure, amplifying underrepresented voices in the city. Her work reshaped the narrative of Liverpool's Black communities, leaving an enduring influence on how the city sees itself.",
                process: "Image Capture & Reference: Multiple high-resolution images were used to map her distinctive facial features, particularly her confident gaze and expressive contours. Digital Sculpting: Created in Blender with precise polygon detailing and digital paint layers to enhance lighting fidelity.",
                tags: ["Media", "Cultural", "Television", "3D Printed", "Pioneer"]
        },
        {
                id: "katy-gardener", 
                name: "Katy Gardener",
                subtitle: "Community Figure - 2025",
                file: "/3DObjects/KatyGardenerModel_1757620150152.glb",
                material: "PLA Filament",
                technique: "3D Printing",
                dimensions: "Portrait scale", 
                description: "3D portrait of Katy Gardener, representing her contribution to Liverpool's community and her significant role in the local heritage and cultural preservation efforts.",
                process: "Digital sculpting and 3D printing process. [Add your specific process details here]",
                tags: ["Community", "3D Printed", "Portrait"]
        },
        {
                id: "john-archer",
                name: "John Archer", 
                subtitle: "Historical Figure - 2025",
                file: "/3DObjects/JohnArcherModel_1757620150151.glb",
                material: "PLA Filament",
                technique: "3D Printing", 
                dimensions: "Portrait scale",
                description: "3D portrait of John Archer, capturing his significance in Liverpool's history and his contributions to the community's social and cultural development.",
                process: "Digital sculpting and 3D printing process. [Add your specific process details here]",
                tags: ["Historical", "3D Printed", "Portrait"]
        },
        {
                id: "alan-williams",
                name: "Alan Williams", 
                subtitle: "Community Leader - 2025",
                file: "/3DObjects/AlanWilliamsModel_1757620168981.glb",
                material: "PLA Filament",
                technique: "3D Printing", 
                dimensions: "Portrait scale",
                description: "3D portrait of Alan Williams, celebrating his leadership and commitment to Liverpool's community development and social progress.",
                process: "Carefully crafted through digital sculpting techniques, capturing the essence and character of this important community figure.",
                tags: ["Community", "Leadership", "3D Printed", "Portrait"]
        },
        {
                id: "leroy-cooper",
                name: "Leroy Cooper", 
                subtitle: "Cultural Figure - 2025",
                file: "/3DObjects/LeroyCooperModel_1757620150152.glb",
                material: "PLA Filament",
                technique: "3D Printing", 
                dimensions: "Portrait scale",
                description: "3D portrait of Leroy Cooper, honoring his contributions to Liverpool's cultural landscape and community engagement.",
                process: "Created using advanced 3D modeling techniques to preserve his likeness and legacy for future generations.",
                tags: ["Cultural", "Community", "3D Printed", "Portrait"]
        },
        {
                id: "jacob-baptista",
                name: "Jacob Baptista", 
                subtitle: "Historical Figure - 2025",
                file: "/3DObjects/JacobBaptistaModel_1757620168983.glb",
                material: "PLA Filament",
                technique: "3D Printing", 
                dimensions: "Portrait scale",
                description: "3D portrait of Jacob Baptista, preserving his place in Liverpool's rich historical narrative and cultural heritage.",
                process: "Meticulously crafted digital sculpture ensuring accurate representation and historical preservation.",
                tags: ["Historical", "Heritage", "3D Printed", "Portrait"]
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
        
        // Embla Carousel state
        const [emblaRef, emblaApi] = useEmblaCarousel({ 
                loop: true, 
                align: 'start',
                slidesToScroll: 1
        });
        const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
        const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);
        const [selectedIndex, setSelectedIndex] = React.useState(0);
        const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

        const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
        const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
        const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

        const onSelect = React.useCallback(() => {
                if (!emblaApi) return;
                setSelectedIndex(emblaApi.selectedScrollSnap());
                setPrevBtnEnabled(emblaApi.canScrollPrev());
                setNextBtnEnabled(emblaApi.canScrollNext());
        }, [emblaApi]);

        React.useEffect(() => {
                if (!emblaApi) return;
                onSelect();
                setScrollSnaps(emblaApi.scrollSnapList());
                emblaApi.on('select', onSelect);
                emblaApi.on('reInit', onSelect);
        }, [emblaApi, onSelect]);
        
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
                let cleanup: (() => void) | undefined;
                let loadingTimeout: NodeJS.Timeout | undefined;
                let isComponentMounted = true;
                
                // Wait for model-viewer to be defined
                const checkModelViewer = () => {
                        if (typeof customElements.get('model-viewer') !== 'undefined') {
                                initializeModelViewer();
                        } else {
                                if (isComponentMounted) {
                                        setTimeout(checkModelViewer, 100);
                                }
                        }
                };
                
                const initializeModelViewer = () => {
                        const modelViewer = document.querySelector('model-viewer') as any;
                        
                        if (!modelViewer) {
                                console.error('Model viewer element not found');
                                if (isComponentMounted) {
                                        setModelError(true);
                                        setModelLoading(false);
                                }
                                return;
                        }
                        
                        const handleModelLoad = () => {
                                if (!isComponentMounted) return;
                                
                                // Clear loading timeout since model loaded successfully
                                if (loadingTimeout) {
                                        clearTimeout(loadingTimeout);
                                        loadingTimeout = undefined;
                                }
                                
                                // Verify the model actually loaded by checking model-viewer properties
                                try {
                                        const hasModel = modelViewer.model;
                                        const isLoaded = modelViewer.loaded;
                                        const hasSource = modelViewer.src && modelViewer.src === currentModel.file;
                                        
                                        if (hasModel && isLoaded && hasSource) {
                                                console.log('Model loaded and verified successfully:', {
                                                        src: modelViewer.src,
                                                        hasModel: !!hasModel,
                                                        loaded: isLoaded
                                                });
                                                setModelLoading(false);
                                                setModelError(false);
                                                
                                                // Initial optimization
                                                optimizeModelView();
                                        } else {
                                                console.warn('Model load event fired but verification failed:', {
                                                        hasModel: !!hasModel,
                                                        isLoaded,
                                                        hasSource,
                                                        expectedSrc: currentModel.file,
                                                        actualSrc: modelViewer.src
                                                });
                                                // Don't set error immediately, give it another chance
                                                return;
                                        }
                                } catch (error) {
                                        console.error('Error verifying model load:', error);
                                        setModelLoading(false);
                                        setModelError(true);
                                        return;
                                }
                                
                                // Additional optimization after a short delay to ensure model is fully loaded
                                setTimeout(() => {
                                        if (modelViewer && isComponentMounted) {
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
                                if (!isComponentMounted) return;
                                
                                // Clear loading timeout since we got a definitive error
                                if (loadingTimeout) {
                                        clearTimeout(loadingTimeout);
                                        loadingTimeout = undefined;
                                }
                                
                                console.error('Model failed to load:', event);
                                console.error('Model src:', currentModel.file);
                                console.error('Event details:', event.target, event.type);
                                setModelLoading(false);
                                setModelError(true);
                        };
                        
                        const handleLoadingTimeout = () => {
                                if (!isComponentMounted) return;
                                
                                console.warn('Model loading timeout after 15 seconds, performing comprehensive status check...');
                                
                                // Perform comprehensive model status check
                                if (modelViewer) {
                                        try {
                                                // Check multiple indicators of successful loading
                                                const model = modelViewer.model;
                                                const loaded = modelViewer.loaded;
                                                const hasValidSrc = modelViewer.src === currentModel.file;
                                                const hasCanvas = modelViewer.querySelector('canvas');
                                                const loadingAttribute = modelViewer.getAttribute('loading');
                                                
                                                console.log('Timeout status check:', {
                                                        hasModel: !!model,
                                                        loaded,
                                                        hasValidSrc,
                                                        hasCanvas: !!hasCanvas,
                                                        loadingAttribute,
                                                        currentSrc: modelViewer.src,
                                                        expectedSrc: currentModel.file
                                                });
                                                
                                                // If model appears to be loaded, call success handler
                                                if (model && loaded && hasValidSrc) {
                                                        console.log('Model detected as loaded during timeout check, marking as successful');
                                                        handleModelLoad();
                                                } else if (!hasValidSrc) {
                                                        console.error('Model source mismatch detected:', {
                                                                expected: currentModel.file,
                                                                actual: modelViewer.src
                                                        });
                                                        setModelLoading(false);
                                                        setModelError(true);
                                                } else {
                                                        console.error('Model failed to load within timeout period:', {
                                                                hasModel: !!model,
                                                                loaded,
                                                                file: currentModel.file
                                                        });
                                                        setModelLoading(false);
                                                        setModelError(true);
                                                }
                                        } catch (error) {
                                                console.error('Error during timeout status check:', error);
                                                setModelLoading(false);
                                                setModelError(true);
                                        }
                                } else {
                                        console.error('Model viewer element missing during timeout check');
                                        setModelLoading(false);
                                        setModelError(true);
                                }
                        };

                        // Listen for comprehensive model load and error events
                        modelViewer.addEventListener('load', handleModelLoad);
                        modelViewer.addEventListener('model-visibility', handleModelLoad);
                        modelViewer.addEventListener('progress', (event: any) => {
                                if (isComponentMounted && event.detail?.totalProgress !== undefined) {
                                        const progress = Math.round(event.detail.totalProgress * 100);
                                        console.log(`Model loading progress: ${progress}%`);
                                }
                        });
                        modelViewer.addEventListener('error', handleModelError);
                        
                        // Also listen for specific model-viewer error events
                        modelViewer.addEventListener('model-error', handleModelError);
                        
                        // Additional comprehensive error detection
                        const checkModelHealth = () => {
                                if (!isComponentMounted || !modelViewer) return;
                                
                                try {
                                        // Check if there's an error state we missed
                                        const hasError = modelViewer.getAttribute('data-error');
                                        const srcAttribute = modelViewer.getAttribute('src');
                                        
                                        if (hasError || (srcAttribute && srcAttribute !== currentModel.file)) {
                                                console.warn('Model health check detected issues:', {
                                                        hasError,
                                                        srcMismatch: srcAttribute !== currentModel.file
                                                });
                                                if (isComponentMounted) {
                                                        handleModelError({ type: 'health-check', target: modelViewer });
                                                }
                                        }
                                } catch (error) {
                                        console.error('Error during model health check:', error);
                                }
                        };
                        
                        // Run health check after a brief delay
                        setTimeout(checkModelHealth, 2000);
                        
                        // Set a reasonable loading timeout that actually checks if the model loaded
                        loadingTimeout = setTimeout(handleLoadingTimeout, 15000);
                        
                        cleanup = () => {
                                if (loadingTimeout) {
                                        clearTimeout(loadingTimeout);
                                        loadingTimeout = undefined;
                                }
                                
                                if (modelViewer) {
                                        modelViewer.removeEventListener('load', handleModelLoad);
                                        modelViewer.removeEventListener('model-visibility', handleModelLoad);
                                        modelViewer.removeEventListener('progress', () => {});
                                        modelViewer.removeEventListener('error', handleModelError);
                                        modelViewer.removeEventListener('model-error', handleModelError);
                                }
                        };
                };
                
                checkModelViewer();
                
                return () => {
                        isComponentMounted = false;
                        if (cleanup) {
                                cleanup();
                        }
                };
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

                                {/* Modern Gallery Carousel */}
                                <section className="py-16 px-6 bg-gradient-to-b from-muted/30 to-background">
                                        <div className="max-w-7xl mx-auto">
                                                {/* Gallery Header */}
                                                <div className="text-center mb-12 animate-fade-in-up">
                                                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                                                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                                                        Historical Figures
                                                                </span>
                                                        </h2>
                                                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                                                Discover Liverpool's pioneering voices through interactive 3D portraits
                                                        </p>
                                                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
                                                </div>
                                                
                                                {/* Carousel Container */}
                                                <div className="relative animate-fade-in-up delay-200">
                                                        <div className="overflow-hidden" ref={emblaRef}>
                                                                <div className="flex gap-6 pb-4">
                                                                        {modelGallery.map((model) => (
                                                                                <div 
                                                                                        key={model.id}
                                                                                        className="flex-none w-80 md:w-96"
                                                                                >
                                                                                        <Card 
                                                                                                className={`h-full cursor-pointer group transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                                                                                                        selectedModelId === model.id 
                                                                                                                ? 'ring-2 ring-primary bg-gradient-to-br from-primary/10 to-accent/5 shadow-xl animate-glow' 
                                                                                                                : 'bg-card/80 backdrop-blur-sm hover:bg-card'
                                                                                                }`}
                                                                                                onClick={() => {
                                                                                                        setSelectedModelId(model.id);
                                                                                                        setModelLoading(true);
                                                                                                        setModelError(false);
                                                                                                }}
                                                                                        >
                                                                                                {/* Card Visual Header */}
                                                                                                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-t-lg relative overflow-hidden">
                                                                                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
                                                                                                        <div className="absolute bottom-4 left-4">
                                                                                                                <div className="flex gap-2">
                                                                                                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                                                                                                                                3D Model
                                                                                                                        </Badge>
                                                                                                                        {selectedModelId === model.id && (
                                                                                                                                <Badge variant="default" className="bg-primary/90 text-primary-foreground animate-pulse">
                                                                                                                                        Selected
                                                                                                                                </Badge>
                                                                                                                        )}
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        <div className="absolute top-4 right-4">
                                                                                                                <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                                                                        <Download className="w-5 h-5 text-primary" />
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Card Content */}
                                                                                                <CardHeader className="pb-3">
                                                                                                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                                                                                                {model.name}
                                                                                                        </CardTitle>
                                                                                                        <p className="text-sm text-muted-foreground font-medium">
                                                                                                                {model.subtitle}
                                                                                                        </p>
                                                                                                </CardHeader>
                                                                                                
                                                                                                <CardContent className="pt-0 space-y-4">
                                                                                                        {/* Tags */}
                                                                                                        <div className="flex flex-wrap gap-2">
                                                                                                                {model.tags.slice(0, 3).map((tag, index) => (
                                                                                                                        <Badge 
                                                                                                                                key={index} 
                                                                                                                                variant="outline"
                                                                                                                                className="text-xs px-2 py-1 border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                                                                                                                        >
                                                                                                                                {tag}
                                                                                                                        </Badge>
                                                                                                                ))}
                                                                                                        </div>
                                                                                                        
                                                                                                        {/* Technical Details */}
                                                                                                        <div className="space-y-2 text-sm text-muted-foreground">
                                                                                                                <div className="flex justify-between">
                                                                                                                        <span className="font-medium">Material:</span>
                                                                                                                        <span>{model.material}</span>
                                                                                                                </div>
                                                                                                                <div className="flex justify-between">
                                                                                                                        <span className="font-medium">Technique:</span>
                                                                                                                        <span className="text-right">{model.technique}</span>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        
                                                                                                        {/* Action Button */}
                                                                                                        <Button 
                                                                                                                variant={selectedModelId === model.id ? "default" : "outline"}
                                                                                                                className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                                                                                                                onClick={(e) => {
                                                                                                                        e.stopPropagation();
                                                                                                                        setSelectedModelId(model.id);
                                                                                                                        setModelLoading(true);
                                                                                                                        setModelError(false);
                                                                                                                }}
                                                                                                        >
                                                                                                                {selectedModelId === model.id ? "Currently Viewing" : "View in 3D"}
                                                                                                        </Button>
                                                                                                </CardContent>
                                                                                        </Card>
                                                                                </div>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                        
                                                        {/* Carousel Navigation */}
                                                        <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-xl transition-all duration-300 hover:scale-110"
                                                                onClick={scrollPrev}
                                                                disabled={!prevBtnEnabled}
                                                        >
                                                                <ChevronLeft className="w-5 h-5" />
                                                        </Button>
                                                        <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-xl transition-all duration-300 hover:scale-110"
                                                                onClick={scrollNext}
                                                                disabled={!nextBtnEnabled}
                                                        >
                                                                <ChevronRight className="w-5 h-5" />
                                                        </Button>
                                                        
                                                        {/* Carousel Indicators */}
                                                        <div className="flex justify-center mt-8 gap-2">
                                                                {scrollSnaps.map((_, index) => (
                                                                        <button
                                                                                key={index}
                                                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                                                        index === selectedIndex 
                                                                                                ? 'bg-primary scale-110' 
                                                                                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                                                                                }`}
                                                                                onClick={() => scrollTo(index)}
                                                                        />
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                {/* Enhanced 3D Model Display */}
                                <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/10">
                                        <div className="max-w-7xl mx-auto">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                                        
                                                        {/* Enhanced 3D Model Viewer */}
                                                        <div className="order-2 lg:order-1 animate-fade-in-up delay-200">
                                                                <Card className="glass-effect border border-primary/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                                                                        <CardContent className="p-0">
                                                                        {/* Model Header */}
                                                                        <div className="text-center mb-8">
                                                                                <div className="inline-flex items-center gap-2 mb-4">
                                                                                        <div className={`w-3 h-3 rounded-full ${
                                                                                                modelLoading ? 'bg-yellow-400 animate-pulse' : 
                                                                                                modelError ? 'bg-red-400' : 
                                                                                                'bg-green-400'
                                                                                        }`}></div>
                                                                                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                                                                                {modelLoading ? 'Loading...' : modelError ? 'Error' : 'Interactive 3D'}
                                                                                        </Badge>
                                                                                </div>
                                                                                <h3 className="text-3xl font-bold text-foreground mb-2">
                                                                                        {currentModel.name}
                                                                                </h3>
                                                                                <p className="text-lg text-muted-foreground">
                                                                                        Interactive Digital Portrait
                                                                                </p>
                                                                        </div>

                                                                        {/* Enhanced Model Viewer Container */}
                                                                        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl p-8 mb-8">
                                                                                <div className="relative">
                                                                                        <div className="model-viewer-container-9-16 relative overflow-hidden rounded-xl">
                                                                                                <model-viewer
                                                                                                        key={selectedModelId}
                                                                                                        src={currentModel.file}
                                                                                                        alt={`Interactive 3D portrait of ${currentModel.name}`}
                                                                                                        className="model-viewer-9-16 w-full h-full"
                                                                                                        ar
                                                                                                        ar-modes="webxr scene-viewer quick-look"
                                                                                                        camera-controls
                                                                                                        auto-rotate
                                                                                                        loading="eager"
                                                                                                        environment-image="neutral"
                                                                                                        shadow-intensity="1"
                                                                                                        shadow-softness="0.8"
                                                                                                        field-of-view="45deg"
                                                                                                        min-camera-orbit="auto auto 0.5m"
                                                                                                        max-camera-orbit="auto auto 2.5m"
                                                                                                        camera-orbit="0deg 75deg 1.2m"
                                                                                                        min-field-of-view="30deg"
                                                                                                        max-field-of-view="60deg"
                                                                                                        interaction-prompt="auto"
                                                                                                        interaction-prompt-threshold="2500"
                                                                                                        touch-action="pan-y"
                                                                                                        camera-target="0m 0.1m 0m"
                                                                                                        auto-rotate-delay="4000"
                                                                                                        exposure="1.3"
                                                                                                        bounds="tight"
                                                                                                        tone-mapping="neutral"
                                                                                                ></model-viewer>
                                                                                                
                                                                                                {/* Enhanced Loading State */}
                                                                                                {modelLoading && (
                                                                                                        <div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-lg rounded-xl z-30">
                                                                                                                <div className="text-center space-y-6">
                                                                                                                        <div className="relative">
                                                                                                                                <div className="w-20 h-20 mx-auto">
                                                                                                                                        <div className="animate-spin rounded-full h-20 w-20 border-4 border-primary/20"></div>
                                                                                                                                        <div className="absolute inset-0 animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-primary [animation-duration:1s]"></div>
                                                                                                                                        <div className="absolute inset-2 animate-spin rounded-full h-16 w-16 border-4 border-transparent border-r-accent [animation-duration:2s]"></div>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div className="space-y-3">
                                                                                                                                <h4 className="text-xl font-semibold text-foreground">Loading Portrait</h4>
                                                                                                                                <p className="text-sm text-muted-foreground">Preparing your interactive 3D experience...</p>
                                                                                                                                <div className="w-48 h-2 bg-muted/30 rounded-full mx-auto overflow-hidden">
                                                                                                                                        <div className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-shimmer"></div>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                )}
                                                                                                
                                                                                                {/* Enhanced Error State */}
                                                                                                {modelError && (
                                                                                                        <div className="absolute inset-0 flex items-center justify-center bg-destructive/5 backdrop-blur-lg rounded-xl z-30">
                                                                                                                <div className="text-center space-y-6 p-8">
                                                                                                                        <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
                                                                                                                                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
                                                                                                                                        <span className="text-destructive text-2xl">⚠</span>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div className="space-y-4">
                                                                                                                                <h4 className="text-lg font-semibold text-destructive">3D Model Unavailable</h4>
                                                                                                                                <div className="space-y-2">
                                                                                                                                        <p className="text-sm text-muted-foreground">This model requires .glb format for web viewing</p>
                                                                                                                                        <p className="text-xs text-muted-foreground opacity-75">Using temporary fallback model</p>
                                                                                                                                </div>
                                                                                                                                <Button 
                                                                                                                                        variant="outline" 
                                                                                                                                        size="sm"
                                                                                                                                        onClick={() => {
                                                                                                                                                setModelError(false);
                                                                                                                                                setModelLoading(true);
                                                                                                                                        }}
                                                                                                                                        className="border-primary/30 hover:bg-primary/10 hover:text-primary"
                                                                                                                                >
                                                                                                                                        Try Again
                                                                                                                                </Button>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                )}
                                                                                                
                                                                                                {/* Interaction Hints */}
                                                                                                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                                                                                                        <div className="glass-effect px-3 py-2 rounded-lg border border-primary/20 text-xs text-muted-foreground">
                                                                                                                <div className="flex items-center gap-2">
                                                                                                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                                                                                                        <span>Drag • Zoom • Rotate</span>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        {!modelLoading && !modelError && (
                                                                                                                <div className="glass-effect px-2 py-1 rounded-lg border border-accent/20 text-xs text-accent">
                                                                                                                        <span>AR Ready</span>
                                                                                                                </div>
                                                                                                        )}
                                                                                                </div>
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
