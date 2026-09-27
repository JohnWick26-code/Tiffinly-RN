export type PreferenceStep =
    | 'userInfo'
    | 'language'
    | 'dietType'
    | 'meatTypes'
    | 'cookingSkill'
    | 'cookingTime'
    | 'goals'
    | 'allergies';

export interface PreferenceOptionDomain {
    id: string;
    code: string;
    label: string;
    imageUrl: string;
    sortOrder: number;
    locale: string;
    allowsCustomText: boolean;
}

export interface PreferencesDomain {
    sexes: PreferenceOptionDomain[];
    languages: PreferenceOptionDomain[];
    dietTypes: PreferenceOptionDomain[];
    meatTypes: PreferenceOptionDomain[];
    cookingSkills: PreferenceOptionDomain[];
    cookingTimes: PreferenceOptionDomain[];
    goals: PreferenceOptionDomain[];
    allergies: PreferenceOptionDomain[];
}

export type PreferenceCatalogue = keyof PreferencesDomain;
