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
                imageUrl: "/lovable-uploads/charlesIcon.png",
                description:
                        "3D Portrait – A Life Remembered\n\nA striking 3D model of Charles Wooten stands as a lasting archive — a powerful reminder of a life cut short in the very city where he lived and worked. Through the blending of technology and narrative, the artist captures his likeness in vivid 3D photographic form, using light and shadow to evoke both his presence and his absence.\n\nCharles Wooten, 24, a Bermudan ship's fireman, escaped a house in the city and fled towards the docks — pursued by both police and an angry mob. His death remains a tragic symbol of racial injustice, and this portrait preserves his memory as part of Liverpool's living history.\n\nProcess & Materials — From Image to 3D\nImage Capture & Reference: High-resolution photographs were taken from multiple angles, ensuring the subject's facial structure, proportions, and key shadow details were faithfully recorded.\n\nDigital Sculpting in Blender: Using Blender, the portrait was digitally sculpted to sub-millimetre accuracy, with surface textures and shadow planes refined to preserve the depth of Charles' likeness.\n\nModel Preparation for Printing: The 3D file was exported as .STL and prepared in PrusaSlicer for the Prusa XL printer.\n• Layer height: 0.15 mm for high-definition detail\n• Infill: 15% gyroid pattern for structural stability\n• Print speed: 45 mm/s to ensure precision\n\n3D Printing in PLA: The portrait was produced using PLA (Polylactic Acid) — a biodegradable polymer derived from renewable resources. The process involved heating the filament to ~200°C, extruding it through a fine nozzle, and building the form layer by layer.\n\nPost-Processing: Supports were removed, surfaces sanded, and finishing applied to achieve the final visual tone of the portrait.",
                audioUrl: "/audio/CharlesWooten.mp3",
        },
        {
                id: 2,
                title: "Bea Freeman",
                imageUrl: "/lovable-uploads/beaIcon.png",
                description:
                        "Pioneer of Media and Representation\n\nA finely detailed 3D portrait of Bea Freeman captures her confidence and presence, fusing the precision of digital imaging with the warmth of personal memory. Light and shadow are carefully sculpted to reflect her impact as a pioneering voice in Liverpool's cultural landscape.\n\nBea Freeman broke barriers as a television and media figure, amplifying underrepresented voices in the city. Her work reshaped the narrative of Liverpool's Black communities, leaving an enduring influence on how the city sees itself.\n\nProcess & Materials — From Image to 3D\n\nImage Capture & Reference: Multiple high-resolution images were used to map her distinctive facial features, particularly her confident gaze and expressive contours.\n\nDigital Sculpting: Created in Blender with precise polygon detailing and digital paint layers to enhance lighting fidelity.\n\nModel Preparation: Sliced for the Prusa XL printer at 0.15 mm layer height, 15% gyroid infill, and a 45 mm/s print speed.\n\n3D Printing: Produced in PLA, a biodegradable thermoplastic, printed at ~200°C and built layer by layer.\n\nPost-Processing: Surface smoothed and fine brush-painted to enhance tonal definition and texture depth.",
                audioUrl: "/audio/BeaFreeman.mp3",
        },
        {
                id: 3,
                title: "Joanne Anderson",
                imageUrl: "/lovable-uploads/joanneIcon.png",
                description:
                        "Political Leadership and Representation\n\nThis 3D model of Joanne Anderson presents her in a contemplative stance, the form bathed in soft monochromatic tones that echo the dignity and focus she brought to her public role. The portrait blends the tactile realism of digital sculpture with an aura of calm strength.\n\nJoanne Anderson made history as Liverpool's first Black female mayor, guiding the city through complex challenges. Her leadership embodied resilience and representation, inspiring communities locally and nationally.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Careful lighting used to create a soft tonal range, matching the poised expression of the subject.\n\nDigital Sculpting: Modelled in Blender, focusing on subtle surface detail and symmetry.\n\nModel Preparation: Exported and sliced with 0.16 mm layers and moderate infill for balance between weight and detail.\n\n3D Printing: Printed in PLA on the Prusa XL, using a slow extrusion for precise edge fidelity.\n\nPost-Processing: Buffed to a smooth matte finish to preserve the soft, monochrome-inspired aesthetic.",
                audioUrl: "/audio/JoanneAnderson.mp3",
        },
        {
                id: 4,
                title: "Leroy Cooper",
                imageUrl: "/lovable-uploads/leroyIcon.png",
                description:
                        "Visual Storyteller and Cultural Witness\n\nA sculpted 3D bust of Leroy Cooper draws attention to the details — the contours of the face, the gaze fixed beyond the frame — revealing both the artist and the witness. The work uses light to frame his features as if caught between memory and moment.\n\nLeroy Cooper is celebrated as a photographer, artist, and activist, whose work chronicled decades of life in Liverpool 8. His images have become part of the city's cultural memory, documenting the lived experience of its people.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: High-contrast lighting to highlight facial planes and enhance the sense of depth in the digital sculpt.\n\nDigital Sculpting: Created in Blender with emphasis on texture mapping for a life-like skin surface.\n\nModel Preparation: Sliced with a fine 0.12 mm layer height for enhanced portrait sharpness.\n\n3D Printing: Fabricated in PLA with ~200°C extrusion, using a slow print speed to ensure crisp shadow edges.\n\nPost-Processing: Surface lightly patinated to add visual depth, echoing the tonal contrast of his photographic work.",
                audioUrl: "/audio/LeroyCopper.mp3",
        },
        {
                id: 5,
                title: "Margaret Simey",
                imageUrl: "/lovable-uploads/margretIcon.png",
                description:
                        "Community Activist and Social Reformer\n\nA vivid 3D portrait of Margaret Simey captures her poise and determination, rendered with the sculptural clarity of digital craft. The interplay of highlights and shadow evokes her lifelong commitment to justice and reform.\n\nMargaret Simey (1906–2004) was a pioneering figure in Liverpool's social justice movement. Her advocacy for housing rights, community empowerment, and political change helped transform the lives of thousands in the city.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Natural key lighting chosen to reflect her determined character.\n\nDigital Sculpting: Detailed in Blender with sharp edge definition around the jawline and brow.\n\nModel Preparation: Sliced at 0.15 mm layers, 20% infill for structural strength.\n\n3D Printing: Printed in PLA, utilising a steady feed rate to maintain form accuracy.\n\nPost-Processing: Varnished for light gloss, creating a visual link to the polished tone of the subject's public presence.",
                audioUrl: "/audio/MargretSimey.mp3",
        },
        {
                id: 6,
                title: "Jacob Baptista",
                imageUrl: "/lovable-uploads/jacobIcon.png",
                description: "Community Builder and Athletic Mentor\n\nA dynamic 3D portrait of Jacob Baptista captures the spirit of dedication and mentorship that defines his work within Liverpool's L8 community. The sculpted form reflects both strength and compassion, embodying his dual role as athlete and guide.\n\nJacob Baptista is a promising footballer and respected mentor at Belv Boxing Gym L8, where he has inspired countless young people through sport and personal development. His commitment to community building has made him a vital figure in local youth engagement.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Action-oriented lighting to capture the energy and movement associated with athletic pursuits.\n\nDigital Sculpting: Modelled in Blender with emphasis on muscular definition and confident posture.\n\nModel Preparation: 0.15 mm layer resolution with reinforced infill patterns for durability.\n\n3D Printing: Produced in PLA using optimized settings for fine detail and structural integrity.\n\nPost-Processing: Enhanced with selective highlighting to emphasize the subject's dynamic presence.",
                audioUrl: "/audio/JacobBaptista.mp3",
        },
        {
                id: 7,
                title: "John Archer",
                imageUrl: "/lovable-uploads/johnIcon.png",
                description: "Pioneer of Political Representation\n\nThis thoughtful 3D portrait of John Archer presents him with the dignity and gravitas befitting a historic figure who broke significant barriers in British politics. The sculptural work captures both his personal character and his symbolic importance.\n\nJohn Archer (1863-1932) was a pioneering politician who became one of the first Black mayors in London and a significant figure in early 20th-century British politics. His commitment to representation and social justice paved the way for future generations of Black political leaders.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Classical portrait lighting to reflect the formal dignity of his political role.\n\nDigital Sculpting: Crafted in Blender with attention to period-appropriate facial hair and clothing details.\n\nModel Preparation: 0.14 mm layers with enhanced infill for archival longevity.\n\n3D Printing: Printed in PLA with careful temperature control to preserve fine historical details.\n\nPost-Processing: Finished with a subtle patina to suggest the gravitas of historical portraiture.",
                audioUrl: "/audio/JohnArcher.mp3",
        },
        {
                id: 8,
                title: "Katy Gardener",
                imageUrl: "/lovable-uploads/katiyaIcon.png",
                description: "Healthcare Advocate and Women's Rights Champion\n\nThis compassionate 3D portrait of Katy Gardener reflects the caring nature and professional dedication that have marked her medical career. The sculptural work captures both her clinical expertise and her advocacy for community health.\n\nDr. Katy Gardener has served as a dedicated GP and tireless advocate for women's health within Liverpool's diverse communities. Her work has focused on providing accessible healthcare and championing health equity for underserved populations.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Soft, professional lighting to convey the approachable yet authoritative nature of medical practice.\n\nDigital Sculpting: Modelled in Blender with attention to compassionate facial features and professional bearing.\n\nModel Preparation: 0.15 mm layers with standard infill optimized for smooth surface finish.\n\n3D Printing: Printed in PLA with consistent temperature control for professional-grade detail.\n\nPost-Processing: Polished to a clean, clinical finish reflecting the precision of medical practice.",
                audioUrl: "/audio/KatyGardener.mp3",
        },
        {
                id: 9,
                title: "Eleanor Rathbone",
                imageUrl: "/lovable-uploads/elanorIcon.png",
                description: "Social Reformer and Women's Rights Pioneer\n\nA commanding 3D portrait of Eleanor Rathbone captures the unwavering determination and intellectual strength that made her one of Britain's most influential social reformers. The sculptural work reflects both her political vision and her compassionate advocacy for the marginalized.\n\nEleanor Rathbone (1872-1946) was a pioneering feminist, social researcher, and independent MP who championed women's rights and family welfare. Her work on family allowances revolutionized social policy, and her advocacy for women's suffrage and international humanitarian causes left an indelible mark on British society.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Strong, directional lighting chosen to emphasize her resolute character and intellectual bearing.\n\nDigital Sculpting: Meticulously crafted in Blender with attention to period-appropriate dress and the determined expression that characterized her public appearances.\n\nModel Preparation: 0.14 mm layers with reinforced infill patterns for archival preservation.\n\n3D Printing: Printed in PLA using precise temperature control to capture the fine details of early 20th-century portraiture.\n\nPost-Processing: Finished with subtle aging techniques to reflect the historical significance and gravitas of this pioneering figure.",
                audioUrl: "/audio/eleanorRathbone.mp3",
        },
        {
                id: 10,
                title: "Alan Williams",
                imageUrl: "/lovable-uploads/alanIcon.png",
                description: "The Man Who Gave Away The Beatles\n\nA contemplative 3D portrait of Alan Williams captures the entrepreneurial spirit and Liverpool charm of the man who played a pivotal role in The Beatles' early career. The sculptural work reflects both his business acumen and the weight of decisions that would shape music history.\n\nAlan Williams (1930-2016) was a Liverpool entrepreneur and club owner who became The Beatles' first manager, organizing their legendary trip to Hamburg in 1960. Though he famously 'gave away' The Beatles before their meteoric rise, his role in their formative years was crucial to their development as performers and his place in Liverpool's musical heritage is undeniable.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Atmospheric lighting chosen to evoke the smoky club atmosphere of 1960s Liverpool music venues.\n\nDigital Sculpting: Created in Blender with emphasis on the confident yet reflective expression of a man who witnessed music history in the making.\n\nModel Preparation: 0.15 mm layers with careful support structuring for complex facial geometry.\n\n3D Printing: Fabricated in PLA using optimized settings to capture the character lines and expression of this music industry pioneer.\n\nPost-Processing: Enhanced with selective highlighting to emphasize the storytelling quality of his weathered, experienced features.",
                audioUrl: "/audio/AlanWilliams.mp3",
        },
        {
                id: 11,
                title: "Jimi Jagne",
                imageUrl: "/lovable-uploads/jimijIcon.png",
                description: "Cultural Innovator and Community Connector\n\nA vibrant 3D portrait of Jimi Jagne captures the creative energy and community spirit that defines his work within Liverpool's diverse cultural landscape. The sculptural form reflects both his artistic vision and his role as a bridge-builder between communities.\n\nJimi Jagne is a dynamic cultural innovator and community leader who has played a vital role in connecting Liverpool's diverse communities through art, music, and creative collaboration. His work embodies the multicultural spirit of the city and demonstrates the power of culture to unite and inspire.\n\nProcess & Materials — From Image to 3D\n\nImage Capture: Dynamic lighting to capture the creative energy and expressive nature of an artist and community connector.\n\nDigital Sculpting: Modelled in Blender with emphasis on expressive features and the confident bearing of a cultural leader.\n\nModel Preparation: 0.15 mm layers with optimized infill for detailed facial modeling.\n\n3D Printing: Produced in PLA using precision settings to capture the nuanced expressions of creativity and community engagement.\n\nPost-Processing: Finished with enhanced detailing to reflect the vibrant, contemporary nature of his cultural contributions.",
                audioUrl: "/audio/jimmiJagne.mp3",
        },
        {
                id: 12,
                title: "Ian Freeman",
                imageUrl: "/lovable-uploads/IanFreemanLogo.png",
                description: "Film Maker and Creative Director\n\nThis 3D portrait of Ian Freeman honours a life dedicated to creativity, education, and the power of storytelling through film. As a filmmaker, creative director, and teacher, Ian has worked tirelessly within Liverpool 8, transferring his skills to new generations and shaping how digital media is created and understood.\n\nHis practice spans filmmaking, directing, editing, photography, and digital marketing, with expertise in the latest creative software platforms. Beyond the technical, Ian is recognised as a collaborator and mentor — someone who brings people together, nurtures talent, and ensures that creativity is always rooted in community.\n\nResearch and Selection\n\nIan was chosen for this exhibition because his story represents skill, service, and legacy. He has worked with many film professionals while also teaching, assessing, and guiding learners in digital content production. His role as both practitioner and educator reflects the exhibition's theme: preserving not only individual achievement, but the shared knowledge and creativity that strengthens a community.\n\nThe artist's intention here is to celebrate Ian's tireless commitment to Liverpool 8, where he has built opportunities for others, transferred his well-honed skills, and inspired future filmmakers.\n\nProcess & Materials — From Image to 3D\n\nImage Capture & Reference:\nA series of high-resolution images were taken to capture Ian's expressive features, shaped by years of work behind the camera and within the classroom.\n\nDigital Sculpting in Blender:\nThe portrait was digitally sculpted with close attention to detail — emphasising the confidence and calm presence of an experienced director, alongside the warmth of a teacher who has given back to his community.\n\nModel Preparation for Printing\n\nThe digital model was prepared for 3D printing with precise technical settings:\n\nLayer height: 0.15 mm for clarity\n\nInfill: 15% gyroid pattern for stability\n\nPrint speed: 45 mm/s for accuracy\n\n3D Printing in PLA\n\nThe portrait was produced using PLA, a biodegradable polymer derived from renewable sources. Heated to ~200°C and extruded layer by layer, the form of Ian's likeness gradually emerged in three dimensions.\n\nPost-Processing\n\nAfter printing, the surfaces were smoothed, refined, and finished to capture both likeness and tone. This stage symbolises Ian's own process as a filmmaker: refining raw material into crafted work that carries both meaning and presence. The final portrait stands as a tribute not only to Ian Freeman's career, but to his generosity in passing on knowledge, skill, and inspiration.",
                audioUrl: "/audio/IanFreeman.mp3",
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
                        <div className="with-appbar">
                                {/* Header Ad */}
                                <div className="container-page py-gutter">
                                        <AdHeader />
                                </div>

                                {/* Header */}
                                <section className="py-section-lg bg-gradient-hero">
                                        <div className="container-page text-center">
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
                                <section className="py-section">
                                        <div className="container-page">
                                                {/* Section Divider */}
                                                <div className="mb-12">
                                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
                                                        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Portrait Collection</h2>
                                                        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                                                                Each 3D portrait combines artistic vision with technical mastery, preserving the essence and legacy of Liverpool's influential figures.
                                                        </p>
                                                        
                                                        {/* St. George's Hall Section */}
                                                        <div className="text-center mt-16 mb-8">
                                                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">St Georges Hall</h3>
                                                                <p className="text-lg text-primary font-medium">Capture the 8 Venue for the month of October 25</p>
                                                        </div>
                                                        
                                                        {/* St. George's Hall Image */}
                                                        <div className="flex justify-center mt-8 mb-8">
                                                                <div className="relative group">
                                                                        <img 
                                                                                src="/stgeorges-hall.png" 
                                                                                alt="St. George's Hall, Liverpool - Illuminated at night with purple and teal lighting"
                                                                                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-full h-auto max-h-96 object-cover group-hover:scale-105"
                                                                        />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                                </div>
                                                        </div>
                                                        
                                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-8"></div>
                                                </div>

                                                {/* Gallery Grid - Larger Cards */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                                        {galleryData.map((image) => (
                                                                <Card
                                                                        key={image.id}
                                                                        className="bg-card/80 border-border hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
                                                                        onClick={() => handleCardClick(image.id)}
                                                                >
                                                                        <CardContent className="p-6">
                                                                                <div className="flex flex-col gap-4 items-center">
                                                                                        {/* Larger Image Container */}
                                                                                        <div className="w-full h-48 sm:h-56 overflow-hidden rounded-lg flex items-center justify-center bg-muted shadow-inner">
                                                                                                <img
                                                                                                        src={image.imageUrl}
                                                                                                        alt={image.title}
                                                                                                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                                                                                                />
                                                                                        </div>
                                                                                        
                                                                                        {/* Content Section with Divider */}
                                                                                        <div className="w-full">
                                                                                                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>
                                                                                                
                                                                                                <h3 className="text-xl font-bold text-foreground text-center mb-3">
                                                                                                        {image.title}
                                                                                                </h3>
                                                                                                
                                                                                                {image.description && (
                                                                                                        <div className="mb-4">
                                                                                                                <p className="text-sm text-muted-foreground text-center line-clamp-3 leading-relaxed">
                                                                                                                        {image.description.split('\n\n')[0]}
                                                                                                                </p>
                                                                                                                <div className="text-center mt-2">
                                                                                                                        <span className="text-xs text-primary font-medium">Click to read more...</span>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                )}
                                                                                                
                                                                                                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>
                                                                                        </div>

                                                                                        {/* Audio Player - Only show if audioUrl exists */}
                                                                                        {image.audioUrl && (
                                                                                                <div className="bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 rounded-lg p-4 w-full border border-border/50">
                                                                                                        <div className="flex items-center gap-3 mb-3">
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
                                                                                                                        className="h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20"
                                                                                                                >
                                                                                                                        {playingAudio === image.id ? (
                                                                                                                                <Pause className="h-4 w-4 text-primary" />
                                                                                                                        ) : (
                                                                                                                                <Play className="h-4 w-4 text-primary" />
                                                                                                                        )}
                                                                                                                </Button>
                                                                                                                <span className="text-sm font-medium text-foreground">Audio Story</span>
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
                                                                                                                className="w-full bg-muted rounded-full h-2 cursor-pointer shadow-inner"
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
                                                                                                                        className={`bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-300 ${getProgressClass(progress[image.id] || 0)}`}
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
                                <div className="container-page py-gutter">
                                        <AdFooter />
                                </div>
                        </div>

                        {/* Individual Popups for Each Gallery Item - Mobile Optimized */}
                        {galleryData.map((image) => (
                                <Dialog
                                        key={`dialog-${image.id}`}
                                        open={openPopups[image.id] || false}
                                        onOpenChange={() => handleClosePopup(image.id)}
                                >
                                        <DialogContent className="sm:max-w-[95vw] md:max-w-[800px] max-h-[95vh] w-[95vw] mx-auto overflow-y-auto bg-background border-border rounded-xl shadow-2xl">
                                                <DialogHeader className="pb-4 border-b border-border/50">
                                                        <DialogTitle className="text-foreground text-xl md:text-2xl font-bold text-center">
                                                                {image.title}
                                                        </DialogTitle>
                                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-2"></div>
                                                </DialogHeader>
                                                
                                                {/* Image Display with Enhanced Mobile Layout */}
                                                <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
                                                        <img
                                                                src={image.imageUrl}
                                                                alt={image.title}
                                                                className="object-cover w-full h-64 md:h-96 rounded-xl"
                                                        />
                                                </div>

                                                {/* Content Sections with Dividers */}
                                                {image.description && (
                                                        <div className="mb-6">
                                                                <div className="mb-4">
                                                                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                                                                <div className="w-1 h-6 bg-primary rounded-full"></div>
                                                                                Portrait Description
                                                                        </h4>
                                                                        <div className="h-px bg-gradient-to-r from-primary/20 via-border to-primary/20 mb-4"></div>
                                                                </div>
                                                                
                                                                <div className="prose prose-sm max-w-none">
                                                                        <div className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line bg-muted/20 rounded-lg p-4 md:p-6 border border-border/30">
                                                                                {image.description}
                                                                        </div>
                                                                </div>
                                                                
                                                                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-6"></div>
                                                        </div>
                                                )}

                                                {/* Enhanced Audio Player - Mobile Optimized */}
                                                {image.audioUrl && (
                                                        <div className="mb-6">
                                                                <div className="mb-4">
                                                                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                                                                <div className="w-1 h-6 bg-primary rounded-full"></div>
                                                                                Audio Story
                                                                        </h4>
                                                                        <div className="h-px bg-gradient-to-r from-primary/20 via-border to-primary/20 mb-4"></div>
                                                                </div>
                                                                
                                                                <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl p-4 md:p-6 border border-border/50 shadow-inner">
                                                                        <div className="flex items-center gap-4 mb-4">
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
                                                                                        className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 hover:bg-primary/20 border-2 border-primary/20"
                                                                                >
                                                                                        {playingAudio === image.id ? (
                                                                                                <Pause className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                                                                                        ) : (
                                                                                                <Play className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                                                                                        )}
                                                                                </Button>
                                                                                <div className="flex-1">
                                                                                        <span className="text-sm md:text-base font-medium text-foreground block mb-2">
                                                                                                Listen to {image.title}'s story
                                                                                        </span>
                                                                                        <div
                                                                                                className="w-full bg-muted rounded-full h-3 cursor-pointer shadow-inner border border-border/50"
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
                                                                                                        className={`bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-300 ${getProgressClass(progress[image.id] || 0)}`}
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
                                                                
                                                                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-6"></div>
                                                        </div>
                                                )}

                                                {/* Action Buttons - Mobile Enhanced */}
                                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-border/50">
                                                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                                                                <Button 
                                                                        variant="outline" 
                                                                        size="sm" 
                                                                        onClick={() => handleDownload(image)}
                                                                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 text-sm"
                                                                >
                                                                        <Download className="h-4 w-4" />
                                                                        Download Image
                                                                </Button>
                                                                {image.description && (
                                                                        <Button 
                                                                                variant="outline" 
                                                                                size="sm" 
                                                                                onClick={() => handleCopyDescription(image.description)}
                                                                                className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 text-sm"
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
                                                                className="h-10 w-10 rounded-full bg-muted/50 hover:bg-muted"
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
