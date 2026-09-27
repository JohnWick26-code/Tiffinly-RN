import type { CatalogueItemDomain, UserInfoDomain } from './domain';
import type { CatalogueItemDto, UserInfoDto } from './dto';

const transformCatalogue = (
    item?: CatalogueItemDto | null,
): CatalogueItemDomain | null => {

    return {
        id: item?.id ?? '',
        code: item?.code ?? '',
        label: item?.label ?? '',
        imageUrl: item?.imageUrl ?? '',
        sortOrder: item?.sortOrder ?? 0,
    };
};

const transformCatalogueList = (
    items?: CatalogueItemDto[] | null,
): CatalogueItemDomain[] => {
    return (items ?? []).flatMap((item) => transformCatalogue(item) ?? []);
};

export const transformUserInfo = (user: UserInfoDto): UserInfoDomain => {
    return {
        id: user?.id ?? '',
        phone: user?.phone ?? '',
        name: user?.name ?? '',
        email: user?.email ?? '',
        profilePicture: user?.profilePicture ?? '',
        bio: user?.bio ?? '',
        ageRange: user?.ageRange ?? '',
        language: transformCatalogue(user?.language),
        dietType: transformCatalogue(user?.dietType),
        cookingSkill: transformCatalogue(user?.cookingSkill),
        cookingTime: transformCatalogue(user?.cookingTime),
        sex: transformCatalogue(user?.sex),
        meatTypes: transformCatalogueList(user?.meatTypes),
        goals: transformCatalogueList(user?.goals),
        allergies: transformCatalogueList(user?.allergies),
        meatTypeOtherName: user?.meatTypeOtherName ?? '',
        goalOtherName: user?.goalOtherName ?? '',
        allergyOtherName: user?.allergyOtherName ?? '',
        onboardingStep: user?.onboardingStep || null,
        isOnboardingCompleted: user?.isOnboardingCompleted === true,
        followersCount: user?.followersCount ?? 0,
        followingCount: user?.followingCount ?? 0,
    };
};
