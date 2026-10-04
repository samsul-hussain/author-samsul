export interface BookFormat {
  type: string;
  price: string;
  pages?: number;
  badge?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  category: 'non-fiction' | 'children' | 'tech';
  categoryLabel: string;
  coverImage: string;
  formats: BookFormat[];
  rating: number;
  reviewCount: number;
  publishDate: string;
  publisher: string;
  asinOrIsbn?: string;
  tagline: string;
  synopsis: string;
  keyHighlights: string[];
  sampleExcerpt: {
    chapterTitle: string;
    text: string[];
  };
  amazonUrl: string;
  lookInsideUrl?: string;
  isBestseller?: boolean;
  isNewRelease?: boolean;
}

export interface ServicePackage {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  turnaround: string;
  popularFor: string;
  platforms: string[];
  fiverrUrl: string;
  upworkUrl: string;
  iconName: 'file-text' | 'palette' | 'search' | 'bot';
  gigImage?: string;
}

export interface Milestone {
  period: string;
  title: string;
  organization: string;
  location?: string;
  type: 'work' | 'education' | 'volunteering';
  summary: string;
  achievements: string[];
  badgeText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  connection?: string;
  openToWork?: boolean;
  service: string;
  rating: number;
  date: string;
  quote: string;
  avatarColor?: string;
  initials?: string;
}
