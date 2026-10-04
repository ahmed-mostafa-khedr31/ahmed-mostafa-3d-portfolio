export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  iconLetter: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name" | "icon">>;

export type TTestimonial = {
  id?: string;
  testimonial: string;
  designation: string;
  company: string;
  image?: string;
  rating?: number;
} & Required<Pick<TCommonProps, "name">>;

export type TReview = {
  id: string;
  name: string;
  email: string;
  company?: string;
  position?: string;
  date: string;
  review: string;
};

export type TProjectCategory =
  | "all"
  | "hospitality"
  | "cruises"
  | "event"
  | "other";

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
  liveDemo?: string;
  featured?: boolean;
  category?: TProjectCategory;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = {
  color?: string;
} & Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
