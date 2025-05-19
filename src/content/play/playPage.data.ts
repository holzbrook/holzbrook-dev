import { LandingPage } from '@/lib/ui';
import { getCollection } from 'astro:content';
import { type PlayHobby, PlayHobbyId } from '@/lib/domain/play/hobby/PlayHobby';

export interface PlayPageData extends LandingPage.Data {
  title: string;
  subtitle: string;
  introduction?: string[];
  hobbies: PlayHobby[];
}

export async function getPlayPageData(): Promise<PlayPageData> {
  const hobbyEntries = await getCollection('play/hobbies');
  const hobbies = hobbyEntries.map(entry => ({
    id: entry.data.hobbyId as PlayHobbyId,
    name: entry.data.name,
    description: entry.data.description,
    icon: entry.data.icon,
    sections: entry.data.sections,
  }));

  return {
    id: 'play',
    title: 'Hobby Corner',
    subtitle: 'Games, discs, books. The fun stuff.',
    introduction: [
      "Here's what I do when I'm not coding or hanging with family.",
      'Each hobby scratches a different itch - from the strategy of board games to the satisfaction of hitting chains in disc golf.',
    ],
    hobbies,
  };
}
