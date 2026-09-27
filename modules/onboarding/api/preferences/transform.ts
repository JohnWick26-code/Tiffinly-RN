import type {
    PreferenceOptionDomain,
    PreferencesDomain,
} from './domain';
import type { PreferenceOptionDto, PreferencesDto } from './dto';

const transformOption = (
    option?: PreferenceOptionDto | null,
): PreferenceOptionDomain | null => {
    if (!option?.id) {
        return null;
    }

    return {
        id: option.id,
        code: option.code ?? '',
        label: option.label ?? '',
        imageUrl: option.imageUrl ?? '',
        sortOrder: option.sortOrder ?? 0,
        locale: option.locale ?? '',
        allowsCustomText: option.allowsCustomText === true,
    };
};

const transformOptionList = (
    options?: PreferenceOptionDto[] | null,
): PreferenceOptionDomain[] => {
    return (options ?? []).flatMap((option) => transformOption(option) ?? []);
};

export const transformPreferences = (
    preferences: PreferencesDto,
): PreferencesDomain => {
    return {
        sexes: transformOptionList(preferences?.sexes),
        languages: transformOptionList(preferences?.languages),
        dietTypes: transformOptionList(preferences?.dietTypes),
        meatTypes: transformOptionList(preferences?.meatTypes),
        cookingSkills: transformOptionList(preferences?.cookingSkills),
        cookingTimes: transformOptionList(preferences?.cookingTimes),
        goals: transformOptionList(preferences?.goals),
        allergies: transformOptionList(preferences?.allergies),
    };
};
