import authorImg from "@/assets/images/author.png";

export type DefaultTestimonial = {
  quote: string;
  role: string;
  image: string;
};

export const defaultTestimonial: DefaultTestimonial = {
  quote:
    "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
  role: "Co-founder",
  image: authorImg,
};

export const testimonialNames: string[] = [
  "Kathryn Murphy",
  "Darrell Steward",
  "Eleanor Pena",
  "Bessie Cooper",
  "Jerome Bell",
  "Guy Hawkins",
  "James Smith",
  "Emily Davis",
  "David Clark",
  "Alex Carter",
  "Robert Brown",
  "Sarah Miller",
];
