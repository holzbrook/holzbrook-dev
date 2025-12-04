import type { LandingPage } from '@/lib/ui';

export interface HomePageExploreSection {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  cta: string;
  ctaClass: string;
}

export interface HomePageData extends LandingPage.Data {
  sections: {
    work: HomePageExploreSection;
    family: HomePageExploreSection;
    play: HomePageExploreSection;
  };
}

const homePageDataObject: HomePageData = {
  id: 'home',
  title: 'Andrew Hol(z)brook',
  subtitle:
    'A computational framework that might reshape how we think about application development.',
  sections: {
    work: {
      title: 'Work',
      description: 'My work experience, projects, skills, and resume.',
      link: '/work',
      bgColor: 'bg-stone-100',
      cta: 'Explore Career',
      ctaClass: 'bg-gray-700 hover:bg-gray-800',
    },
    family: {
      title: 'Family',
      description: 'Family is at the heart of everything I do.',
      link: '/family',
      bgColor: 'bg-stone-100',
      cta: 'Meet the Family',
      ctaClass: 'bg-gray-700 hover:bg-gray-800',
    },
    play: {
      title: 'Play',
      description: 'Board games, reading, video games, and more.',
      link: '/play',
      bgColor: 'bg-stone-100',
      cta: "See What I'm Playing",
      ctaClass: 'bg-gray-700 hover:bg-gray-800',
    },
  },
};

export async function getHomePageData(): Promise<HomePageData> {
  return homePageDataObject;
}
