import React from 'react'
import { ThreeDMarquee } from './ui/3d-marquee'



const images = [
    // Unsplash (high-quality, free images)
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // Dashboard UI
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f", // Analytics dashboard
    "https://images.unsplash.com/photo-1547658719-da2b51169166", // Web components
    "https://images.unsplash.com/photo-1541462608143-67571c6738dd", // Modern UI
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6", // Mobile app UI
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d", // Design system
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", // Website design
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931", // Code editor
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", // UI elements
    "https://images.unsplash.com/photo-1546054454-aa26e2b734c7", // Form components

    // Pixabay (free stock photos)
    "https://cdn.pixabay.com/photo/2017/08/10/03/47/dashboard-2618277_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/09/04/18/39/ux-2714686_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
    "https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/05/31/13/45/tablet-791192_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/30/08/48/business-1872661_1280.jpg",

    // Pexels (free stock photos)
    "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg", // Web development
    "https://images.pexels.com/photos/713049/pexels-photo-713049.jpeg", // Code screen
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", // UI mockup
    "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg", // Design tools
    "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg", // Dashboard
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg", // Wireframing
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg", // UX design
    "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg", // App development
    "https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg", // Responsive design
    "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg" // UI components
];
const ImageMarqueeSection = () => {
  return (
    <div>
        
        <ThreeDMarquee images={images} />


    </div>
  )
}

export default ImageMarqueeSection