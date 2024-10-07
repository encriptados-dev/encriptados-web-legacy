export interface Feature {
    icon: string;  // Path to the image
    alt: string;   // Alt text for the icon
    description: string;
  }
  
  export interface CardDescriptionProps {
    logoSrc: string;
    title: string;
    description: string;
    features: Feature[];
  }

  