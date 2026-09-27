export interface CatalogueItemDto {
    id?: string | null;
    code?: string | null;
    label?: string | null;
    imageUrl?: string | null;
    sortOrder?: number | null;
}

export interface UserInfoDto {
    id?: string | null;
    phone?: string | null;
    name?: string | null;
    email?: string | null;
    profilePicture?: string | null;
    bio?: string | null;
    ageRange?: string | null;
    language?: CatalogueItemDto | null;
    dietType?: CatalogueItemDto | null;
    cookingSkill?: CatalogueItemDto | null;
    cookingTime?: CatalogueItemDto | null;
    sex?: CatalogueItemDto | null;
    meatTypes?: CatalogueItemDto[] | null;
    goals?: CatalogueItemDto[] | null;
    allergies?: CatalogueItemDto[] | null;
    meatTypeOtherName?: string | null;
    goalOtherName?: string | null;
    allergyOtherName?: string | null;
    onboardingStep?: string | null;
    isOnboardingCompleted?: boolean | null;
    followersCount?: number | null;
    followingCount?: number | null;
}
