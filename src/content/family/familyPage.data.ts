import type { LandingPage } from '@/lib/ui';
import { getCollection } from 'astro:content';
import { type FamilyMember, FamilyMemberId } from '../../lib/domain/family/member/FamilyMember';
import type { FamilyInterestId } from '../../lib/domain/family/interest/FamilyInterest';

export interface FamilyPageData extends LandingPage.Data {
  familyMembers: FamilyMember[];
}

export async function getFamilyPageData(): Promise<FamilyPageData> {
  const memberEntries = await getCollection('family/members');

  const familyMembers = memberEntries
    .map(entry => {
      return {
        id: entry.data.memberId as FamilyMemberId,
        order: entry.data.order,
        emoji: entry.data.emoji,
        firstName: entry.data.firstName,
        middleName: entry.data.middleName,
        lastName: entry.data.lastName,
        nickName: entry.data.nickName,
        role: entry.data.role,
        bio: entry.data.bio,
        interests: entry.data.interests as FamilyInterestId[],
      } as FamilyMember;
    })
    .sort((a, b) => a.order - b.order);

  return {
    id: 'family',
    title: 'Meet the Fam',
    subtitle: '2 parents, 4 kids, and only some regrets...',
    familyMembers,
  };
}
