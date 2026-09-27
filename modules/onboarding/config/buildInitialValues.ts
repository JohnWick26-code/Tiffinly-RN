import type { OnboardingValues } from '../../../lib/store';
import type { OnboardingStepConfig } from './onboardingSteps';

export function buildInitialValues(
  config: OnboardingStepConfig,
  stored: OnboardingValues,
): OnboardingValues {
  return config.fields.reduce<OnboardingValues>((values, field) => {
    const saved = stored[field.name];

    switch (field.kind) {
      case 'options':
        values[field.name] = Array.isArray(saved) ? saved : [];

        if (field.otherName) {
          values[field.otherName] =
            typeof stored[field.otherName] === 'string'
              ? stored[field.otherName]
              : '';
        }

        break;

      case 'slider':
        values[field.name] =
          typeof saved === 'number'
            ? Math.min(Math.max(saved, field.min), field.max)
            : field.defaultValue;

        break;

      default:
        values[field.name] = typeof saved === 'string' ? saved : '';
    }

    return values;
  }, {});
}
