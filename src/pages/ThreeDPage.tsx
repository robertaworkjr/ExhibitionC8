import React, { useState } from "react";
import { Download, Eye, RotateCcw, Box } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
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

const usdzObjects = [
	{
		id: 1,
		name: "Charles Wooten",
		subtitle: "Digital Portrait - 2025",
		file: "/src/3DObjects/CWooten.stl.usdz",
		img: "/lovable-uploads/c13edb28-d455-42ce-b675-302a5a6f4ca1.png",
		material: "PLA Filament",
		technique: "FDM 3D Printing",
		dimensions: "15cm x 20cm x 8cm",
		description: "Charles Wooten was a 24-year-old Bermudan ship's fireman who became a victim of racial violence in Liverpool in 1919. This 3D portrait serves as a powerful memorial, preserving his likeness through advanced digital sculpting and 3D printing technology.",
		process: "Created using high-resolution photogrammetry data, digitally sculpted in Blender with sub-millimetre precision, and printed using biodegradable PLA material at 0.15mm layer height for exceptional detail.",
		significance: "This piece represents the intersection of memorial art and cutting-edge technology, ensuring that Charles Wooten's story and image are preserved for future generations as part of Liverpool's living history.",
		tags: ["Memorial", "Historical", "3D Printed", "PLA"]
	},
	{
		id: 2,
		name: "Prototype Series A",
		subtitle: "Experimental Form - 2025",
		file: "/3DObjects/01ac894b-7177-43b1-b129-57e5d815170d.usdz",
		img: "/lovable-uploads/01ac894b-7177-43b1-b129-57e5d815170d.png",
		material: "PLA Polymer",
		technique: "Fused Deposition Modeling",
		dimensions: "12cm x 15cm x 6cm",
		description: "First iteration in our experimental series exploring the boundaries between digital modeling and physical manifestation. This prototype investigates form, texture, and the translation of digital concepts into tangible objects.",
		process: "Developed through iterative design processes using parametric modeling, optimized for FDM printing with custom support structures and post-processing techniques to achieve smooth surface finishes.",
		significance: "Represents the foundational research phase of our 3D printing methodology, establishing the technical parameters and aesthetic guidelines for subsequent portrait productions.",
		tags: ["Prototype", "Experimental", "Research", "FDM"]
	},
	{
		id: 3,
		name: "Prototype Series B",
		subtitle: "Enhanced Detail Study - 2025",
		file: "/3DObjects/08bef744-0596-4c4d-8c18-8cdfdea0ecec.usdz",
		img: "/lovable-uploads/08bef744-0596-4c4d-8c18-8cdfdea0ecec.png",
		material: "Photopolymer Resin",
		technique: "Stereolithography (SLA)",
		dimensions: "10cm x 12cm x 5cm",
		description: "Second iteration featuring enhanced detail resolution through SLA printing technology. This prototype explores the capabilities of resin-based printing for capturing fine facial features and surface textures.",
		process: "Utilized high-resolution SLA printing at 0.05mm layer height, with specialized resin formulation and UV post-curing for optimal surface quality and dimensional accuracy.",
		significance: "Demonstrates the advancement in printing technology and material science, showcasing how different fabrication methods can achieve varying levels of detail and finish quality.",
		tags: ["High-Resolution", "SLA", "Detail Study", "Resin"]
	}
];

const ThreeDPage = () => {
	const [selectedObject, setSelectedObject] = useState(usdzObjects[0]);

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
					<div className="max-w-7xl mx-auto text-center">
						<div className="flex items-center justify-center gap-3 mb-6">
							<div className="p-3 bg-primary/10 rounded-full">
								<Box size={40} className="text-primary" />
							</div>
						</div>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							3D Objects & Digital Heritage
						</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Explore our cutting-edge 3D modeling and printing processes that bring Liverpool's historical figures to life through innovative digital fabrication techniques.
						</p>
					</div>
				</section>

				{/* Object Selection */}
				<section className="py-12 px-6 bg-card/30">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-2xl font-bold mb-8 text-center text-foreground">Select 3D Object</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							{usdzObjects.map((obj) => (
								<Card 
									key={obj.id}
									className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
										selectedObject.id === obj.id 
											? 'ring-2 ring-primary bg-primary/5' 
											: 'hover:shadow-md'
									}`}
									onClick={() => setSelectedObject(obj)}
								>
									<CardContent className="p-4">
										<div className="text-center">
											<img 
												src={obj.img} 
												alt={obj.name}
												className="w-20 h-24 object-cover mx-auto mb-3 rounded-lg shadow-sm"
											/>
											<h3 className="font-semibold text-foreground mb-1">{obj.name}</h3>
											<p className="text-sm text-muted-foreground">{obj.subtitle}</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Main Content - Side by Side Layout */}
				<section className="py-16 px-6">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
							
							{/* 3D Viewer Card */}
							<Card className="bg-card/80 border-border shadow-xl">
								<CardHeader className="text-center pb-4">
									<CardTitle className="flex items-center justify-center gap-3 text-foreground">
										<Eye className="h-6 w-6 text-primary" />
										3D Interactive Viewer
									</CardTitle>
								</CardHeader>
								<CardContent className="p-8">
									<div className="bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl p-6 mb-6">
										{selectedObject.name === "Charles Wooten" ? (
											<model-viewer
												src={selectedObject.file}
												alt={selectedObject.name}
												className="model-viewer-large"
												ar
												ar-modes="webxr scene-viewer quick-look"
												camera-controls
												auto-rotate
												loading="lazy"
											></model-viewer>
										) : (
											<div className="model-viewer-large flex items-center justify-center bg-white rounded-lg">
												<img
													src={selectedObject.img}
													alt={selectedObject.name}
													className="max-w-full max-h-full object-contain"
												/>
											</div>
										)}
									</div>
									
									{/* Technical Specs */}
									<div className="grid grid-cols-2 gap-4 mb-6">
										<div>
											<h4 className="font-semibold text-sm text-muted-foreground mb-1">Material</h4>
											<p className="text-foreground">{selectedObject.material}</p>
										</div>
										<div>
											<h4 className="font-semibold text-sm text-muted-foreground mb-1">Technique</h4>
											<p className="text-foreground">{selectedObject.technique}</p>
										</div>
										<div className="col-span-2">
											<h4 className="font-semibold text-sm text-muted-foreground mb-1">Dimensions</h4>
											<p className="text-foreground">{selectedObject.dimensions}</p>
										</div>
									</div>

									{/* Action Buttons */}
									<div className="flex flex-col sm:flex-row gap-3">
										<Button 
											variant="default" 
											className="flex-1 bg-primary hover:bg-primary/90"
											asChild
										>
											<a
												href={selectedObject.file}
												rel="ar"
												download
											>
												<Download className="h-4 w-4 mr-2" />
												Download AR File
											</a>
										</Button>
										<Button 
											variant="outline" 
											className="flex-1"
											onClick={() => {
												const viewer = document.querySelector('model-viewer') as any;
												if (viewer && viewer.cameraControls) {
													viewer.cameraControls.reset();
												}
											}}
										>
											<RotateCcw className="h-4 w-4 mr-2" />
											Reset View
										</Button>
									</div>
								</CardContent>
							</Card>

							{/* Content Card */}
							<Card className="bg-card/80 border-border shadow-xl">
								<CardHeader>
									<CardTitle className="text-2xl text-foreground mb-2">
										{selectedObject.name}
									</CardTitle>
									<p className="text-lg text-muted-foreground">{selectedObject.subtitle}</p>
									<div className="flex flex-wrap gap-2 mt-3">
										{selectedObject.tags.map((tag, index) => (
											<span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
												{tag}
											</span>
										))}
									</div>
								</CardHeader>
								<CardContent className="space-y-6">
									
									{/* Description */}
									<div>
										<h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
											<div className="w-1 h-6 bg-primary rounded-full"></div>
											About This Piece
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{selectedObject.description}
										</p>
									</div>

									{/* Divider */}
									<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

									{/* Process */}
									<div>
										<h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
											<div className="w-1 h-6 bg-accent rounded-full"></div>
											Creation Process
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{selectedObject.process}
										</p>
									</div>

									{/* Divider */}
									<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

									{/* Significance */}
									<div>
										<h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
											<div className="w-1 h-6 bg-primary rounded-full"></div>
											Cultural Significance
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{selectedObject.significance}
										</p>
									</div>

								</CardContent>
							</Card>

						</div>
					</div>
				</section>

				{/* Research Section */}
				<section className="py-16 px-6 bg-card/30">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-6 text-foreground">Research & Methodology</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<Card className="bg-card/50 border-border">
								<CardContent className="p-8">
									<h3 className="text-xl font-semibold text-foreground mb-4">Digital Fabrication</h3>
									<p className="text-muted-foreground leading-relaxed">
										Our 3D printing process combines traditional memorial practices with cutting-edge technology, using sustainable materials and precision engineering to create lasting tributes.
									</p>
								</CardContent>
							</Card>
							<Card className="bg-card/50 border-border">
								<CardContent className="p-8">
									<h3 className="text-xl font-semibold text-foreground mb-4">Heritage Preservation</h3>
									<p className="text-muted-foreground leading-relaxed">
										Each piece is informed by extensive historical research and community engagement, ensuring accurate representation and cultural sensitivity in our digital heritage work.
									</p>
								</CardContent>
							</Card>
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
