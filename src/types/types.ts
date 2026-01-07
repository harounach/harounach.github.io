export type TPhoto = {
  imageUrl: ImageMetadata;
  imageAlt: string;
  caption?: string;
};

export type TProject = {
  title: string;
  description: string;
  imageUrl: ImageMetadata;
  imageAlt: string;
  url: string;
};

/* 

certifications.json
{
    "title": "Responsive Web Design",
    "issuer": "FreeCodeCamp",
    "url": "https://www.freecodecamp.org/certification/harounach/responsive-web-design"
  },
*/

export type TAward = {
  title: string;
  issuer: string;
  url?: string;
};
