import React from "react";
import { GiCube } from "react-icons/gi";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
		name: "Charles Wooten",
		file: "/src/3DObjects/CWooten.stl.usdz",
		img: "/src/3DObjects/CWooten.stl.usdz",
		desc: "Charles Wooten was in Liverpool in 1919. He came from Bermuda and is a significant figure in the city's history. This 3D object commemorates his legacy.",
	},
	{
		name: "Prototype 1",
		file: "/3DObjects/01ac894b-7177-43b1-b129-57e5d815170d.usdz",
		img: "/images/01ac894b-7177-43b1-b129-57e5d815170d.png",
		desc: "PLA, 2025. First iteration using FDM printing.",
	},
	{
		name: "Prototype 2",
		file: "/3DObjects/08bef744-0596-4c4d-8c18-8cdfdea0ecec.usdz",
		img: "/images/08bef744-0596-4c4d-8c18-8cdfdea0ecec.png",
		desc: "Resin, 2025. Second iteration with improved detail.",
	},
	// ...add 3 more objects as needed...
];

const ThreeDPage = () => {
	return (
		<div className="max-w-3xl mx-auto py-8 px-4">
			<div className="flex items-center gap-3 mb-6">
				<GiCube size={32} className="text-blue-500" />
				<h1 className="text-2xl font-bold text-foreground">3D Objects & Research</h1>
			</div>
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-2 text-foreground">About the 3D Process</h2>
				<p className="text-muted-foreground">
					This page showcases 3D objects created for the exhibition, including
					details about the digital modeling process, material choices, and
					academic research. Iterations and prototypes are presented to
					illustrate the evolution of each piece.
				</p>
			</section>
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-2 text-foreground">Academic Research</h2>
				<p className="text-muted-foreground">
					The creation of these 3D objects was informed by research into
					digital fabrication, sustainable materials, and community engagement.
					Documentation and references are available for further reading.
				</p>
			</section>
			<section>
				<h2 className="text-xl font-semibold mb-2 text-foreground">3D Object Gallery</h2>
				<div className="border rounded-lg p-4 bg-card/50">
					<div className="flex items-center gap-2 mb-2">
						<GiCube size={24} className="text-teal-500" />
						<span className="font-semibold text-foreground">Prototypes Carousel</span>
					</div>
					<Carousel>
						<CarouselContent>
							{usdzObjects.map((obj, idx) => (
								<CarouselItem key={idx}>
									<div className="flex flex-col items-center gap-2">
										{obj.name === "Charles Wooten" ? (
											<model-viewer
												src={obj.file}
												alt={obj.name}
												className="model-viewer-9-16"
												ar
												ar-modes="webxr scene-viewer quick-look"
												camera-controls
												auto-rotate
											></model-viewer>
										) : (
											<img
												src={obj.img}
												alt={obj.name}
												className="model-viewer-9-16 object-contain bg-white rounded"
											/>
										)}
										<div className="font-semibold text-lg">{obj.name}</div>
										<div className="text-sm mb-2">{obj.desc}</div>
										<a
											href={obj.file}
											rel="ar"
											className="text-primary underline"
											download
										>
											View in AR (USDZ)
										</a>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</section>
		</div>
	);
};

export default ThreeDPage;
