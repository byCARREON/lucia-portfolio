import { projectImg, crudoImages, venusImages, petaGalleryImages, crudoGalleryImages, venusGalleryImages, anatGalleryImages, sanatGalleryImages, sanah, editorial, svenusGalleryImages, weddingGalleryImages, heineken } from "../assets/img";
import { heinekenVideo} from "../assets/img";

export const menuItems = [
    {
      id: 1,
      imageSrc: projectImg[9],
      category:  "Concept Development",
      title: 'HEINEKEN CAMPAIGN : THE GREEN HERO',
      instagram: "",
      text: "HEINEKEN",
      conclusion: (
        <>
          <p className="pt-4"><span className="font-bold">Brand truth:</span> Heineken is a brand committed to the environment that seeks to encourage its consumers to have fun in a sustainable way.</p>

          <p className="pt-4"><span className="font-bold">Consumer truth:</span> The host of the house has the obligation to pick up and clean up after the party.</p>

          <p className="pt-4"><span className="font-bold">Strategic truth:</span> Turn the party host into a Hero.</p>

        </>
      ),
      description: (
        <>
          <p className="pt-4"><span className="font-bold">Culture truth:</span> People are not aware of the environmental damage caused by partying.</p>

          <p className="pt-4"><span className="font-bold">Rational:</span> The host is a true hero by nature, that courageous figure who does not hesitate to raise his hand when asked "Where is the party?". He is the friend who can always be trusted, the one who brings everyone together to create memorable moments that then become unforgettable memories. He always carries the best attitude no matter the situation, injecting a positive atmosphere into every moment. He is an expert at making the most of every moment, and those who have the pleasure of knowing him can attest to this.</p>

          <p className="pt-4">With him, surprise is constant, and you know you can expect great things, especially in those moments before, during and after the party…</p>
        </>
      ),
      galleryImages: heineken.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
      video: heinekenVideo,
    },
    {
      id: 2,
      imageSrc: projectImg[6],
      category:  "Concept Development",
      title: 'PETA Advertising Campaign: "Wearing the Pain"',
      instagram: (
        <>
        <a href="https://www.instagram.com/lucia.bust/" className="hover:bg-accent hover:opacity-25 transition-all ease-in mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5]" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"/>
          </svg>
        </a>
        </>
      ),
      text: "PETA",
      description: "The primary objective of the 'Wearing the Pain' PETA advertising campaign is to raise widespread awareness about the inherent cruelty involved in the production of mink eyelashes. By utilizing thought-provoking imagery and impactful slogans, we aim to educate the public about the pain and suffering inflicted upon these animals in the name of beauty. Our goal is to encourage consumers to make compassionate and ethical choices when it comes to beauty products.",
      galleryImages: petaGalleryImages.map((image) => ({
        src: image.src,
        imgTitle: image.imgTitle,
        imgText: image.imgText,
      })),
    },
    {
      id: 3,
      imageSrc: projectImg[0],
      category: "Art Direction",
      title: 'CRUDO',
      instagram: (
        <>
        <a href="https://www.instagram.com/crudotulum/?igshid=MzRlODBiNWFlZA%3D%3D" className="hover:bg-accent hover:opacity-25 transition-all ease-in mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5]" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"/>
          </svg>
        </a>
        </>
      ),
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
      id: 4,
      imageSrc: projectImg[4],
      category:  "Art Direction",
      title: 'Creative Process: Tantric Hotel Boutique',
      instagram: (
        <>
        <a href="https://www.instagram.com/anattulum/?igshid=MzRlODBiNWFlZA%3D%3D" className="hover:bg-accent hover:opacity-25 transition-all ease-in mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5]" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"/>
          </svg>
        </a>
        </>
      ),
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
      id: 5,
      imageSrc: venusImages[1],
      category:  "Concept Development",
      title: 'The Venusian Beauty Salon - Honoring the sacred Feminine ',
      instagram: (
        <>
        <a href="https://www.instagram.com/casavenussalon/?igshid=MzRlODBiNWFlZA%3D%3D" className="hover:bg-accent hover:opacity-25 transition-all ease-in mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5]" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"/>
          </svg>
        </a>
        </>
      ),
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
      instagram: (
        <>
        <a href="https://www.instagram.com/anattulum/?igshid=MzRlODBiNWFlZA%3D%3D" className="hover:bg-accent hover:opacity-25 transition-all ease-in mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5]" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"/>
          </svg>
        </a>
        </>
      ),
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
      instagram: (
        <>
        <a href="https://www.instagram.com/casavenussalon/?igshid=MzRlODBiNWFlZA%3D%3D" className="hover:bg-accent hover:opacity-25 transition-all ease-in mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5]" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"/>
          </svg>
        </a>
        </>
      ),
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

  

  