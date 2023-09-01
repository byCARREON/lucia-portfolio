import { projectImg, crudoImages, venusImages, petaGalleryImages, crudoGalleryImages, venusGalleryImages, anatGalleryImages, sanatGalleryImages, sanah, editorial, svenusGalleryImages, weddingGalleryImages } from "../assets/img";

export const menuItems = [
    {
      id: 1,
      imageSrc: projectImg[6],
      category:  "Concept Development",
      title: 'PETA Advertising Campaign: "Wearing the Pain"',
      text: "PETA",
      description: "The primary objective of the 'Wearing the Pain' PETA advertising campaign is to raise widespread awareness about the inherent cruelty involved in the production of mink eyelashes. By utilizing thought-provoking imagery and impactful slogans, we aim to educate the public about the pain and suffering inflicted upon these animals in the name of beauty. Our goal is to encourage consumers to make compassionate and ethical choices when it comes to beauty products.",
      galleryImages: petaGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
    {
      id: 2,
      imageSrc: projectImg[0],
      category: "Art Direction",
      title: 'CRUDO',
      text: "CRUDO",
      conclusion: (
        <>
          <p className="py-4">The moodboard creation process was an absolute blast. We spent hours collecting images of Tulum's stunning beaches, lush jungles, and vibrant street scenes. We couldn't help but daydream about frolicking in the sand and dancing under the moonlight. It was a vivid reminder of the magical place that inspired our brand.</p>
          <p className="py-4">Local Artisan Adventures: Collaborating with local artisans brought endless joy. Learning traditional craftsmanship techniques and sharing stories over mezcal-infused conversations added a delightful cultural dimension to our brand. We discovered the quirkiest details and talents in the community.</p>
          <p className="py-4">
          Crudo remains deeply rooted in Tulum's soul, offering luxurious yet affordable clothing that resonates with the local community. Our brand isn't just about fashion; it's a celebration of the vibrant culture and natural beauty of Tulum, wrapped in a playful, bohemian embrace.
          </p>
        </>
      ),
      description: (
        <>
          <p className="pb-4">Crudo emerged from a vision to provide the vibrant community of Tulum with a unique and affordable luxury clothing option. The initial phase of our creative journey was all about concept development. We brainstormed and sketched, envisioning a brand that would effortlessly blend the essence of Tulum - its natural beauty, bohemian spirit, and luxury vibes.</p>
          <ul>
            <p className="font-bold ">Entrepreneurship Phases:</p>
            <li>1. Market Research.</li>
            <li>2. Sustainability Commitment</li>
            <li>3. Design Iteration</li>
            <li>4. Brand Identity</li>
            <li>5. The Funniest Branding Process</li>
          </ul>
        </>
      ),
      galleryImages: crudoGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
    {
      id: 3,
      imageSrc: projectImg[4],
      category:  "Art Direction",
      title: 'Creative Process: Tantric Hotel Boutique',
      text: "ANAT",
      description: (
        <>
          <p>
            I had the privilege of leading the creative process for the development of a unique Tantric Hotel Boutique, a project that pushed the boundaries of conventional design. The aim was to create a space that transcended the ordinary, blending sensuality, spirituality, and luxury to offer guests a truly transformative experience.
          </p><br />
          <p>
            It was an interesting creative journey, guiding every decision in the design process. It was not just a collection of images; it was a representation of the emotions, experiences, and sensations we aimed to evoke in every guest who walked through the doors of our Tantric Hotel Boutique.
          </p><br />
          <p>
            The challenge lies in creating an immersive brand that tells a compelling story about how elements like copper, bamboo, linen, and cotton are integral to the user experience.
          </p>
        </>
      ),
      galleryImages: anatGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
    {
      id: 4,
      imageSrc: venusImages[1],
      category:  "Concept Development",
      title: 'The Venusian Beauty Salon - Honoring the sacred Feminine ',
      text: "CASA VENUS",
      description: "The concept development of the Venusian Beauty Salon was an artistic journey through the cosmic realms of womanhood, weaving together the essence of Venus herself with the timeless allure of sacred rituals.",
      galleryImages: venusGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
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
      title: 'ANAT',
      text: "ANAT",
      conclusion: "Real estate is not just about properties; it's about emotions and dreams. The challenge is to create spaces and a brand that evoke profound emotions and a sense of fulfillment, aligning with the depth and intensity of tantric philosophy.",
      description: "Developing a real estate brand infused with a tantric vibe presents a unique and intriguing challenge. The core essence of tantric philosophy, which combines sensuality, spirituality, and artistic expression, must be artfully interwoven with the practicalities of the real estate industry.",
      galleryImages: sanatGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
    {
      id: 2,
      imageSrc: projectImg[2],
      category:  "Styling",
      title: 'VENUS',
      text: "VENUS",
      description: (
        <>
          <p className="pb-4">The concept development of the Venusian Beauty Salon is an odyssey into the heart and soul of womanhood. It beckons every woman to embrace her inner goddess, to connect with the sacred feminine energies that course through her being. </p>
          <p>
          This salon is a temple, a canvas, a sanctuary - a place where beauty transcends the physical, and the soul radiates with the cosmic allure of Venus.
          </p>
        </>
      ),
      galleryImages: svenusGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
    {
      id: 3,
      imageSrc: projectImg[3],
      category:  "Styling",
      title: 'WEDDING EXPERIENCE',
      text: "WEDDINGS",
      description: "Curating all the details for a special wedding is an art form in itself, a journey that blends design and experiential curation to create a day that transcends the ordinary and becomes a beautiful, unforgettable story. Here's why it's so special:",
      galleryImages: weddingGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
    /*{
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
    },*/
    // Agrega más elementos según sea necesario
    // ...
  ];

export const menuItems3 = [
    {
      id: 1,
      imageSrc: projectImg[8],
      category:  "Photography", 
      title: 'Editorial"', 
      text: "Editorial",
      conclusion: (
        <>
          <p className="pb-4"><span className="font-bold">Concept Overview:</span> "Mexican legends” is an artistic journey that reimagines iconic Mexican legends in a fresh, urban context while paying homage to their traditional roots. </p>
          <p>
          This innovative photoshoot seeks to evoke emotions, memories, and a deep connection to Mexico's folklore while embracing the vibrant energy of contemporary fashion and urban aesthetics.
          </p>
        </>
      ),
      description: "Step into a realm where time-honored Mexican legends intertwine with contemporary urban fashion, giving rise to a captivating visual narrative that bridges the gap between folklore and modernity:",
      galleryImages: editorial.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
  ];

  

  