import { projectImg, crudoImages, venusImages, petaGalleryImages, crudoGalleryImages, venusGalleryImages, anatGalleryImages, sanatGalleryImages, sanah, editorial, svenusGalleryImages, weddingGalleryImages } from "../assets/img";

export const menuItems = [
    {
      id: 1,
      imageSrc: projectImg[0],
      category: "Art Direction",
      text: "CRUDO",
      description: "The owner had recently launched her own brand...",
      galleryImages: crudoGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    {
      id: 2,
      imageSrc: projectImg[4],
      category:  "Art Direction",
      text: "ANAT",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: anatGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    {
      id: 3,
      imageSrc: venusImages[1],
      category:  "Concept Development",
      text: "CASA VENUS",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: venusGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    {
      id: 4,
      imageSrc: projectImg[6],
      category:  "Concept Development",
      text: "PETA",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: petaGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    // Agrega más elementos según sea necesario
    // ...
  ];


export const menuItems2 = [
    {
      id: 1,
      imageSrc: projectImg[5],
      category:  "Styling",  
      text: "ANAT",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: sanatGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    {
      id: 2,
      imageSrc: projectImg[2],
      category:  "Styling",
      text: "VENUS",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: svenusGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    {
      id: 3,
      imageSrc: projectImg[3],
      category:  "Styling",
      text: "WEDDINGS",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: weddingGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    {
      id: 4,
      imageSrc: projectImg[7],
      category:  "Styling",
      text: "SANAH",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: sanah.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    {
      id: 5,
      imageSrc: venusImages[3],
      category:  "Styling",
      text: "BABEL",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: venusGalleryImages.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
    // Agrega más elementos según sea necesario
    // ...
  ];

export const menuItems3 = [
    {
      id: 1,
      imageSrc: projectImg[8],
      category:  "Photography",  
      text: "Editorial",
      description: "The owner had recently launched her own brand and was ready to create the visual identity and online presence. Wanting a brand that avoided the child like aesthetic other interior design studios often opt for, Clayhouse wanted a elegant and sophisticated look and feel which would target the parents oppose to their children.",
      galleryImages: editorial.map((image) => ({
        src: image.src,
        imgText: image.imgText,
      })),
    },
  ];

  

  