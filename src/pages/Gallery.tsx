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
		imageUrl: "/images/c13edb28-d455-42ce-b675-302a5a6f4ca1.png",
		description:
			"A striking urban silhouette of Charles, captured in the city he loved, blending his facial likeness with shadows in vivid 3D photographic form. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "/audio/CharlesWooten.mp3",
	},
	{
		id: 2,
		title: "Bea Freeman",
		imageUrl: "/images/08bef744-0596-4c4d-8c18-8cdfdea0ecec.png",
		description:
			"A pioneer in media and television, Bea is portrayed in the heart of her city, her likeness preserved through striking and lifelike 3D photography. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "",
	},
	{
		id: 3,
		title: "Joanne Anderson",
		imageUrl: "/images/c4a65cb4-1f9f-46a9-953b-98e8a08b8e24.png",
		description:
			"A contemplative portrait of Joanne, capturing subtle human expression and artistry in timeless monochromatic and 3D photographic style. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "/audio/JoanneAnderson.mp3",
	},
	{
		id: 4,
		title: "Leroy Cooper",
		imageUrl: "/images/01ac894b-7177-43b1-b129-57e5d815170d.png",
		description:
			"A classical sculpture-style bust of Leroy, reflecting traditional craftsmanship and fine detail, celebrating his influence in 3D artistic form. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "/audio/LeroyCopper.mp3",
	},
	{
		id: 5,
		title: "Margaret Simey",
		imageUrl: "/images/307d02bf-74fb-40e4-a422-fc8ee8fe12c2.png",
		description:
			"A distinguished figure in social reform, captured as a sculptural work that blends diverse artistic styles with a mastery of three-dimensional form. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "/audio/MargretSimey.mp3",
	},
	{
		id: 6,
		title: "Jimi Jagne",
		imageUrl: "/placeholder.svg",
		description: "A creative force in Liverpool's culture, Jimi is shown as a dynamic 3D portrait, symbolising his lasting impact in music, activism, and the arts. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "/audio/jimmiJagne.mp3",
	},
	{
		id: 7,
		title: "Jacob Baptista",
		imageUrl: "/placeholder.svg",
		description: "A promising footballer and mentor at Belv Boxing Gym L8, Jacob is honoured in a 3D portrait that reflects his dedication and community spirit. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "",
	},
	{
		id: 8,
		title: "John Archer",
		imageUrl: "/placeholder.svg",
		description: "A respected community leader, John's likeness is immortalised in 3D form, symbolising his commitment to representation and social justice. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "",
	},
	{
		id: 9,
		title: "Jerome Priest",
		imageUrl: "/placeholder.svg",
		description: "A portrait of Jerome capturing resilience and pride, rendered in detailed 3D artistry to honour his life and role within the community. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "",
	},
	{
		id: 10,
		title: "Kate Garder",
		imageUrl: "/placeholder.svg",
		description: "A dedicated GP and advocate for women's health, Kate's 3D portrait reflects her service and care for the local community. Each person was chosen because they have had an influence on me personally and on the community I live in.",
		audioUrl: "",
	},
	{
		id: 11,
		title: "Kim Johnson",
		imageUrl: "/placeholder.svg",
		description: "A local L8 politician and champion for the people, Kim's 3D portrayal celebrates her decades of dedication and political leadership. Each person was chosen because they have had an influence on me personally and on the community I live in.",
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
	const [openPopups, setOpenPopups] = useState<{ [key: number]: boolean }>({});
	const [playingAudio, setPlayingAudio] = useState<number | null>(null);
	const [progress, setProgress] = useState<{ [key: number]: number }>({});
	const { toast } = useToast();

	// Function to convert progress percentage to CSS class
	const getProgressClass = (progressPercent: number) => {
		const rounded = Math.round(progressPercent / 5) * 5; // Round to nearest 5
		return `audio-progress-${Math.min(100, Math.max(0, rounded))}`;
	};

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

	const handleCardClick = (imageId: number) => {
		setOpenPopups(prev => ({
			...prev,
			[imageId]: true
		}));
	};

	const handleClosePopup = (imageId: number) => {
		setOpenPopups(prev => ({
			...prev,
			[imageId]: false
		}));
		// Also pause any playing audio for this card
		if (playingAudio === imageId) {
			const audioElement = document.querySelector(
				`audio[data-id="${imageId}"]`
			) as HTMLAudioElement;
			if (audioElement) {
				audioElement.pause();
			}
			setPlayingAudio(null);
		}
	};

/*************  ✨ Windsurf Command ⭐  *************/
	/**
	 * Creates a temporary link to download the given image.
	 * @param {object} image - Image object with title and imageUrl properties.
	 */
/*******  c11e9ce1-5a04-4ba3-951a-e4064d9161f5  *******/
	const handleDownload = (image: any) => {
		const link = document.createElement("a");
		link.href = image.imageUrl;
		link.download = `${image.title.replace(/\s+/g, "_").toLowerCase()}.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleCopyDescription = (description: string) => {
		navigator.clipboard.writeText(description);
		toast({
			title: "Description copied to clipboard!",
			description: "You can now paste the description wherever you need it.",
		});
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
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
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
									onClick={() => handleCardClick(image.id)}
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
															className={`bg-primary h-1 rounded-full transition-all duration-300 ${getProgressClass(progress[image.id] || 0)}`}
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

			{/* Individual Popups for Each Gallery Item */}
			{galleryData.map((image) => (
				<Dialog
					key={`dialog-${image.id}`}
					open={openPopups[image.id] || false}
					onOpenChange={() => handleClosePopup(image.id)}
				>
					<DialogContent className="sm:max-w-[600px] bg-background border-border">
						<DialogHeader>
							<DialogTitle className="text-foreground text-xl">
								{image.title}
							</DialogTitle>
							{image.description && (
								<DialogDescription className="text-muted-foreground text-base">
									{image.description}
								</DialogDescription>
							)}
						</DialogHeader>
						
						{/* Image Display */}
						<div className="mb-6 overflow-hidden rounded-lg">
							<img
								src={image.imageUrl}
								alt={image.title}
								className="object-cover w-full h-80 rounded-lg"
							/>
						</div>

						{/* Enhanced Audio Player - Only show if audioUrl exists */}
						{image.audioUrl && (
							<div className="bg-muted/30 rounded-lg p-4 mb-4">
								<h4 className="text-sm font-semibold mb-3 text-foreground">Audio Story</h4>
								<div className="flex items-center gap-3">
									<Button
										variant="ghost"
										size="icon"
										onClick={(e) => {
											e.stopPropagation();
											const audioElement = document.querySelector(
												`audio[data-id='popup-${image.id}']`
											) as HTMLAudioElement;
											if (audioElement) {
												handleAudioToggle(image.id, audioElement);
											}
										}}
										className="h-10 w-10"
									>
										{playingAudio === image.id ? (
											<Pause className="h-5 w-5" />
										) : (
											<Play className="h-5 w-5" />
										)}
									</Button>
									<div className="flex-1">
										<span className="text-sm font-medium text-foreground">Listen to {image.title}'s story</span>
										<div
											className="w-full bg-muted rounded-full h-2 cursor-pointer mt-2"
											onClick={(e) => {
												const audioElement = document.querySelector(
													`audio[data-id='popup-${image.id}']`
												) as HTMLAudioElement;
												if (audioElement) {
													const rect = e.currentTarget.getBoundingClientRect();
													const percent = (e.clientX - rect.left) / rect.width;
													audioElement.currentTime = percent * audioElement.duration;
												}
											}}
										>
											<div
												className={`bg-primary h-2 rounded-full transition-all duration-300 ${getProgressClass(progress[image.id] || 0)}`}
											></div>
										</div>
									</div>
								</div>
								<audio
									data-id={`popup-${image.id}`}
									src={image.audioUrl}
									onTimeUpdate={(e) => {
										const audio = e.target as HTMLAudioElement;
										const newProgress = (audio.currentTime / audio.duration) * 100;
										setProgress((prev) => ({
											...prev,
											[image.id]: newProgress || 0,
										}));
									}}
									onEnded={() => setPlayingAudio(null)}
									onPlay={() => setPlayingAudio(image.id)}
									onPause={() => setPlayingAudio(null)}
								/>
							</div>
						)}

						{/* Action Buttons */}
						<div className="flex justify-between items-center">
							<div className="flex space-x-2">
								<Button 
									variant="outline" 
									size="sm" 
									onClick={() => handleDownload(image)}
									className="flex items-center gap-2"
								>
									<Download className="h-4 w-4" />
									Download
								</Button>
								{image.description && (
									<Button 
										variant="outline" 
										size="sm" 
										onClick={() => handleCopyDescription(image.description)}
										className="flex items-center gap-2"
									>
										<Copy className="h-4 w-4" />
										Copy Description
									</Button>
								)}
							</div>
							<Button 
								variant="ghost" 
								size="icon" 
								onClick={() => handleClosePopup(image.id)}
							>
								<X className="h-5 w-5" />
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			))}
		</div>
	);
};

export default Gallery;
