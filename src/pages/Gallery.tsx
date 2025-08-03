import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Download, Maximize2, X, Play, Pause } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";

const galleryData = [
	{
		id: 1,
		title: "Charles Wooten",
		imageUrl: "/lovable-uploads/c13edb28-d455-42ce-b675-302a5a6f4ca1.png",
		description:
			"A striking urban silhouette captured charles the city he lived, showcasing the his likeness of face and shadow in visual 3D photography.",
		audioUrl: "/audio/CharlesWooten.mp3",
	},
	{
		id: 2,
		title: "Bea Freeman",
		imageUrl: "/lovable-uploads/08bef744-0596-4c4d-8c18-8cdfdea0ecec.png",
		description:
			"A pioneer in the world of media and television captured Bea the city she lived, showcasing her likeness in visual 3D photography.",
		audioUrl: "",
	},
	{
		id: 3,
		title: "Joanne Anderson",
		imageUrl: "/lovable-uploads/c4a65cb4-1f9f-46a9-953b-98e8a08b8e24.png",
		description:
			"A contemplative portrait showcasing the subtle nuances of human expression and the artistry of monochromatic photography.",
		audioUrl: "/audio/JoanneAnderson.mp3",
	},
	{
		id: 4,
		title: "Leroy Cooper",
		imageUrl: "/lovable-uploads/01ac894b-7177-43b1-b129-57e5d815170d.png",
		description:
			"A beautifully crafted classical sculpture bust demonstrating traditional artistic techniques and attention to detail in three-dimensional form.",
		audioUrl: "/audio/LeroyCopper.mp3",
	},
	{
		id: 5,
		title: "Margret Simey",
		imageUrl: "/lovable-uploads/307d02bf-74fb-40e4-a422-fc8ee8fe12c2.png",
		description:
			"A curated collection of sculptural works showcasing various artistic styles and the mastery of form in three-dimensional art.",
		audioUrl: "/audio/MargretSimey.mp3",
	},
	// Blank people
	{
		id: 6,
		title: "Jimi Jagne",
		imageUrl: "/placeholder.svg",
		description: "A creative force in Liverpool's cultural scene, Jimi Jagne is known for his pioneering work in music, community activism, and the arts, inspiring generations with his vision and leadership.",
		audioUrl: "/audio/jimmiJagne.mp3",
	},
	{
		id: 7,
		title: "Jacob Baptista",
		imageUrl: "/placeholder.svg",
		description: "A young community member who was a promising footballer and advocate, and mentor for young people at the Belv Boxing Gym L8.",
		audioUrl: "",
	},
	{
		id: 8,
		title: "John Archer",
		imageUrl: "/placeholder.svg",
		description: "",
		audioUrl: "",
	},
	{
		id: 9,
		title: "Jerome Priest",
		imageUrl: "/placeholder.svg",
		description: "",
		audioUrl: "",
	},
	{
		id: 10,
		title: "Person 10",
		imageUrl: "/placeholder.svg",
		description: "",
		audioUrl: "",
	},
	{
		id: 11,
		title: "Person 11",
		imageUrl: "/placeholder.svg",
		description: "",
		audioUrl: "",
	},
	{
		id: 12,
		title: "Person 12",
		imageUrl: "/placeholder.svg",
		description: "",
		audioUrl: "",
	},
];

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [playingAudio, setPlayingAudio] = useState<number | null>(null);
	const [progress, setProgress] = useState<{ [key: number]: number }>({});
	const { toast } = useToast();

	const handleAudioToggle = useCallback(
		(audioId: number, audioElement: HTMLAudioElement) => {
			if (playingAudio === audioId) {
				// Pause current audio
				audioElement.pause();
				setPlayingAudio(null);
			} else {
				// Stop any currently playing audio
				if (playingAudio !== null) {
					const currentAudio = document.querySelector(
						`audio[data-id="${playingAudio}"]`
					) as HTMLAudioElement;
					if (currentAudio) {
						currentAudio.pause();
					}
				}
				// Play new audio
				audioElement.play();
				setPlayingAudio(audioId);
			}
		},
		[playingAudio]
	);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleCloseDialog = () => {
		setSelectedImage(null);
	};

	const handleDownload = () => {
		if (selectedImage) {
			const link = document.createElement("a");
			link.href = selectedImage.imageUrl;
			link.download = `${selectedImage.title.replace(/\s+/g, "_").toLowerCase()}.png`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	const handleCopyDescription = () => {
		if (selectedImage) {
			navigator.clipboard.writeText(selectedImage.description);
			toast({
				title: "Description copied to clipboard!",
				description: "You can now paste the description wherever you need it.",
			});
		}
	};

	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			{/* Add top padding to account for fixed navigation */}
			<div className="pt-16">
				{/* Header Ad */}
				<div className="px-6 py-4">
					<AdHeader />
				</div>

				{/* Header */}
				<section className="py-20 px-6 bg-gradient-hero">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
							Digital Gallery
						</h1>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Explore our curated collection of digital art, showcasing the
							intersection of technology and creativity. Our exhibition creates a space for reflection, dialogue, and understanding of L8's unique story, featuring a diverse range of digital artworks, from interactive installations to virtual reality experiences. Each piece tells a story of the community's rich cultural heritage and vibrant present.
						</p>
					</div>
				</section>

				{/* Gallery Display */}
				<section className="py-20 px-6">
					<div className="max-w-4xl mx-auto">
						{/* Gallery Grid - More Frames, Smaller Size */}
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{galleryData.map((image) => (
								<Card
									key={image.id}
									className="bg-card/50 border-border hover:shadow-elegant transition-all duration-300 cursor-pointer"
									onClick={() => handleImageClick(image)}
								>
									<CardContent className="p-3">
										<div className="flex flex-col gap-2 items-center">
											<div className="w-32 h-24 overflow-hidden rounded-md flex items-center justify-center bg-muted">
												<img
													src={image.imageUrl}
													alt={image.title}
													className="object-cover w-full h-full"
												/>
											</div>
											<h3 className="text-lg font-semibold text-foreground text-center mt-2">
												{image.title}
											</h3>
											{image.description && (
												<p className="text-xs text-muted-foreground text-center">
													{image.description}
												</p>
											)}

											{/* Audio Player - Only show if audioUrl exists */}
											{image.audioUrl && (
												<div className="bg-muted/30 rounded-lg p-2 w-full">
													<div className="flex items-center gap-2">
														<Button
															variant="ghost"
															size="icon"
															onClick={(e) => {
																e.stopPropagation();
																const audioElement = document.querySelector(
																	`audio[data-id='${image.id}']`
																) as HTMLAudioElement;
																if (audioElement) {
																	handleAudioToggle(image.id, audioElement);
																}
															}}
															className="h-6 w-6"
														>
															{playingAudio === image.id ? (
																<Pause className="h-4 w-4" />
															) : (
																<Play className="h-4 w-4" />
															)}
														</Button>
														<span className="text-xs font-medium">Audio</span>
													</div>
													<audio
														data-id={image.id}
														src={image.audioUrl}
														onTimeUpdate={(e) => {
															const audio = e.target as HTMLAudioElement;
															const newProgress =
																(audio.currentTime / audio.duration) * 100;
															setProgress((prev) => ({
																...prev,
																[image.id]: newProgress || 0,
															}));
														}}
														onEnded={() => setPlayingAudio(null)}
														onPlay={() => setPlayingAudio(image.id)}
														onPause={() => setPlayingAudio(null)}
													/>
													<div
														className="w-full bg-muted rounded-full h-1 cursor-pointer"
														onClick={(e) => {
															e.stopPropagation();
															const audioElement = document.querySelector(
																`audio[data-id='${image.id}']`
															) as HTMLAudioElement;
															if (audioElement) {
																const rect = e.currentTarget.getBoundingClientRect();
																const percent =
																	(e.clientX - rect.left) / rect.width;
																audioElement.currentTime =
																	percent * audioElement.duration;
															}
														}}
													>
														<div
															className="bg-primary h-1 rounded-full transition-all duration-300"
															style={{
																width: `${progress[image.id] || 0}%`,
															}}
														></div>
													</div>
												</div>
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Footer Ad */}
				<div className="px-6 py-4">
					<AdFooter />
				</div>
			</div>

			{/* Image Dialog */}
			<Dialog
				open={selectedImage !== null}
				onOpenChange={() => setSelectedImage(null)}
			>
				<DialogContent className="sm:max-w-[525px] bg-background border-border">
					<DialogHeader>
						<DialogTitle className="text-foreground">
							{selectedImage?.title}
						</DialogTitle>
						<DialogDescription className="text-muted-foreground">
							{selectedImage?.description}
						</DialogDescription>
					</DialogHeader>
					{selectedImage && (
						<div className="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-md">
							<img
								src={selectedImage.imageUrl}
								alt={selectedImage.title}
								className="object-cover w-full h-full"
							/>
						</div>
					)}
					<div className="flex justify-end space-x-2">
						<Button variant="ghost" size="icon" onClick={handleDownload}>
							<Download className="h-5 w-5" />
						</Button>
						<Button variant="ghost" size="icon" onClick={handleCopyDescription}>
							<Copy className="h-5 w-5" />
						</Button>
						<Button variant="ghost" size="icon" onClick={handleCloseDialog}>
							<X className="h-5 w-5" />
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Gallery;
