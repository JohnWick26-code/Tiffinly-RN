export interface PreferenceOptionDto {
    id?: string | null;
    code?: string | null;
    label?: string | null;
    imageUrl?: string | null;
    sortOrder?: number | null;
    locale?: string | null;
    allowsCustomText?: boolean | null;
}

export interface PreferencesDto {
    sexes?: PreferenceOptionDto[] | null;
    languages?: PreferenceOptionDto[] | null;
    dietTypes?: PreferenceOptionDto[] | null;
    meatTypes?: PreferenceOptionDto[] | null;
    cookingSkills?: PreferenceOptionDto[] | null;
    cookingTimes?: PreferenceOptionDto[] | null;
    goals?: PreferenceOptionDto[] | null;
    allergies?: PreferenceOptionDto[] | null;
}
