export interface CatalogueItemDomain {
    id: string;
    code: string;
    label: string;
    imageUrl: string;
    sortOrder: number;
}

export interface UserInfoDomain {
    id: string;
    phone: string;
    name: string;
    email: string;
    profilePicture: string;
    bio: string;
    ageRange: string;
    language: CatalogueItemDomain | null;
    dietType: CatalogueItemDomain | null;
    cookingSkill: CatalogueItemDomain | null;
    cookingTime: CatalogueItemDomain | null;
    sex: CatalogueItemDomain | null;
    meatTypes: CatalogueItemDomain[];
    goals: CatalogueItemDomain[];
    allergies: CatalogueItemDomain[];
    meatTypeOtherName: string;
    goalOtherName: string;
    allergyOtherName: string;
    onboardingStep: string | null;
    isOnboardingCompleted: boolean;
    followersCount: number;
    followingCount: number;
}
