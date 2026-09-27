import type { PreferenceCatalogue, PreferenceStep } from '../api';

export type OnboardingRoute =
  | 'UserInfo'
  | 'Language'
  | 'DietType'
  | 'MeatTypes'
  | 'CookingSkill'
  | 'CookingTime'
  | 'Goals'
  | 'Allergies';

export type OnboardingField =
  | { kind: 'text'; name: string; labelKey: string; apiKey: string }
  | {
      kind: 'slider';
      name: string;
      labelKey: string;
      min: number;
      max: number;
      defaultValue: number;
      apiKey: string;
    }
  | {
      kind: 'options';
      name: PreferenceCatalogue;
      apiKey: string;
      multiSelect: boolean;
      otherName?: string;
    };

export interface OnboardingStepConfig {
  route: OnboardingRoute;
  step: PreferenceStep;
  fields: OnboardingField[];
}

export const onboardingSteps: OnboardingStepConfig[] = [
  {
    route: 'UserInfo',
    step: 'userInfo',
    fields: [
      { kind: 'text', name: 'name', labelKey: 'onboarding.field.name', apiKey: 'name' },
      {
        kind: 'slider',
        name: 'age',
        labelKey: 'onboarding.field.age',
        min: 0,
        max: 99,
        defaultValue: 18,
        apiKey: 'ageRange',
      },
      { kind: 'options', name: 'sexes', apiKey: 'sex', multiSelect: false },
    ],
  },
  { route: 'Language', step: 'language', fields: [{ kind: 'options', name: 'languages', apiKey: 'language', multiSelect: false }] },
  { route: 'DietType', step: 'dietType', fields: [{ kind: 'options', name: 'dietTypes', apiKey: 'dietType', multiSelect: false }] },
  {
    route: 'MeatTypes',
    step: 'meatTypes',
    fields: [{ kind: 'options', name: 'meatTypes', apiKey: 'meatTypes', multiSelect: true, otherName: 'meatTypeOtherName' }],
  },
  { route: 'CookingSkill', step: 'cookingSkill', fields: [{ kind: 'options', name: 'cookingSkills', apiKey: 'cookingSkill', multiSelect: false }] },
  { route: 'CookingTime', step: 'cookingTime', fields: [{ kind: 'options', name: 'cookingTimes', apiKey: 'cookingTime', multiSelect: false }] },
  {
    route: 'Goals',
    step: 'goals',
    fields: [{ kind: 'options', name: 'goals', apiKey: 'goals', multiSelect: true, otherName: 'goalOtherName' }],
  },
  {
    route: 'Allergies',
    step: 'allergies',
    fields: [{ kind: 'options', name: 'allergies', apiKey: 'allergies', multiSelect: true, otherName: 'allergyOtherName' }],
  },
];

export const findStepByRoute = (route: string): OnboardingStepConfig =>
  onboardingSteps.find((item) => item.route === route) ?? onboardingSteps[0];

export const findStepIndex = (route: string): number => {
  const index = onboardingSteps.findIndex((item) => item.route === route);

  return index >= 0 ? index : 0;
};

export const findOptionsField = (config: OnboardingStepConfig) =>
  config.fields.find((field) => field.kind === 'options');
