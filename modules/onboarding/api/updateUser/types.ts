export interface PreferenceOptionRef {
    id: string;
}

export interface UpdateUserRequest {
    name?: string;
    email?: string | null;
    bio?: string;
    ageRange?: string;
    profilePicture?: string;
    sex?: PreferenceOptionRef | null;
    language?: PreferenceOptionRef | null;
    dietType?: PreferenceOptionRef | null;
    cookingSkill?: PreferenceOptionRef | null;
    cookingTime?: PreferenceOptionRef | null;
    meatTypes?: PreferenceOptionRef[];
    goals?: PreferenceOptionRef[];
    allergies?: PreferenceOptionRef[];
    meatTypeOtherName?: string | null;
    goalOtherName?: string | null;
    allergyOtherName?: string | null;
    onboardingStep?: string;
    isOnboardingCompleted?: true;
}
