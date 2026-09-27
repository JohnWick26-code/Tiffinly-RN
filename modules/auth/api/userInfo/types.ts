export interface CatalogueItemType {
    id: string;
    code: string;
    label: string;
    imageUrl: string;
    sortOrder: number;
}

export interface UserInfoType {
    id: string;
    phone: string;
    name: string;
    email: string;
    profilePicture: string;
    bio: string;
    ageRange: string;
    language: CatalogueItemType | null;
    dietType: CatalogueItemType | null;
    cookingSkill: CatalogueItemType | null;
    cookingTime: CatalogueItemType | null;
    sex: CatalogueItemType | null;
    meatTypes: CatalogueItemType[];
    goals: CatalogueItemType[];
    allergies: CatalogueItemType[];
    meatTypeOtherName: string;
    goalOtherName: string;
    allergyOtherName: string;
    onboardingStep: string | null;
    isOnboardingCompleted: boolean;
    followersCount: number;
    followingCount: number;
}
