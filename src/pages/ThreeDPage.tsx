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

// Charles Wooten 3D model data
const charlesWootenModel = {
	name: "Charles Wooten",
	subtitle: "Digital Portrait Memorial - 2025",
	file: "/3DObjects/CharlesWooten.glb",
	material: "PLA Filament",
	technique: "FDM 3D Printing",
	dimensions: "15cm x 20cm x 8cm",
	description: "Charles Wooten was a 24-year-old Bermudan ship's fireman who became a victim of racial violence in Liverpool in 1919. This 3D portrait serves as a powerful memorial, preserving his likeness through advanced digital sculpting and 3D printing technology.\n\nThis piece represents the intersection of memorial art and cutting-edge technology, ensuring that Charles Wooten's story and image are preserved for future generations as part of Liverpool's living history.",
	process: "Created using high-resolution photogrammetry data, digitally sculpted in Blender with sub-millimetre precision, and printed using biodegradable PLA material at 0.15mm layer height for exceptional detail.",
	tags: ["Memorial", "Historical", "3D Printed", "PLA"]
};

const ThreeDPage = () => {
	const [modelLoading, setModelLoading] = React.useState(true);
	const [modelError, setModelError] = React.useState(false);

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = charlesWootenModel.file;
		link.download = `${charlesWootenModel.name}.glb`;
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
				// Set optimal field of view for good visibility
				modelViewer.fieldOfView = '65deg';
				// Position camera at optimal distance and angle for centered view
				modelViewer.cameraOrbit = '0deg 75deg 0.15m';
				// Center the target at origin for perfect centering
				modelViewer.cameraTarget = '0m 0m 0m';
				// Balanced exposure for good visibility
				modelViewer.exposure = 1.5;
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
				console.error('Model src:', charlesWootenModel.file);
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
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			
			{/* Add top padding to account for fixed navigation */}
			<div className="pt-16">
				{/* Header Ad */}
				<div className="px-6 py-4">
					<AdHeader />
				</div>

				{/* Hero Section */}
				<section className="py-16 px-6 bg-gradient-hero">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							3D Digital Memorial
						</h1>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							Experience our cutting-edge 3D memorial portrait that brings Liverpool's historical figures to life through innovative digital fabrication techniques.
						</p>
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
														src={charlesWootenModel.file}
														alt={charlesWootenModel.name}
														className="model-viewer-9-16"
														ar
														ar-modes="webxr scene-viewer quick-look"
														camera-controls
														auto-rotate
														loading="lazy"
														environment-image="neutral"
														shadow-intensity="1"
														shadow-softness="0.5"
														field-of-view="65deg"
														min-camera-orbit="auto auto 0.08m"
														max-camera-orbit="auto auto 0.5m"
														camera-orbit="0deg 75deg 0.15m"
														min-field-of-view="50deg"
														max-field-of-view="80deg"
														interaction-prompt="none"
														touch-action="pan-y"
														camera-target="0m 0m 0m"
														auto-rotate-delay="3000"
														exposure="1.5"
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
												<p className="text-foreground">{charlesWootenModel.material}</p>
											</div>
											<div>
												<h4 className="font-semibold text-sm text-muted-foreground mb-1">Technique</h4>
												<p className="text-foreground">{charlesWootenModel.technique}</p>
											</div>
											<div className="col-span-2">
												<h4 className="font-semibold text-sm text-muted-foreground mb-1">Dimensions</h4>
												<p className="text-foreground">{charlesWootenModel.dimensions}</p>
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
											{charlesWootenModel.name}
										</h1>
										<p className="text-xl text-muted-foreground mb-6">
											{charlesWootenModel.subtitle}
										</p>
										
										{/* Tags */}
										<div className="flex flex-wrap gap-2 mb-6">
											{charlesWootenModel.tags.map((tag, index) => (
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
												{charlesWootenModel.description}
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
												{charlesWootenModel.process}
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
