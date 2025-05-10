import type { FamilyInterestId } from '@lib/domain/family/interest/FamilyInterest';

export enum FamilyMemberId {
  Andrew = 'andrew',
  Brooke = 'brooke',
  Oakley = 'oakley',
  Finn = 'finn',
  Leo = 'leo',
  Wren = 'wren',
}

export interface FamilyMember {
  id: FamilyMemberId;
  order: number;
  emoji: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickName?: string;
  role: string;
  bio: string;
  interests: FamilyInterestId[];
}
