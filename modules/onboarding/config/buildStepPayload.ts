import type { OnboardingValues } from '../../../lib/store';
import type { UpdateUserRequest } from '../api';
import type { OnboardingStepConfig } from './onboardingSteps';

const toRefs = (ids: string[]) => ids.map((id) => ({ id }));

export interface BuildStepPayloadArgs {
  config: OnboardingStepConfig;
  values: OnboardingValues;
  nextStep?: string;
  isLastStep: boolean;
  customTextIds: string[];
}

export function buildStepPayload({
  config,
  values,
  nextStep,
  isLastStep,
  customTextIds,
}: BuildStepPayloadArgs): UpdateUserRequest {
  const payload: Record<string, unknown> = {};

  config.fields.forEach((field) => {
    const value = values[field.name];

    if (field.kind === 'text') {
      if (typeof value === 'string' && value.trim()) {
        payload[field.apiKey] = value.trim();
      }
      return;
    }

    if (field.kind === 'slider') {
      if (typeof value === 'number') {
        payload[field.apiKey] = String(value);
      }
      return;
    }

    const ids = Array.isArray(value) ? value : [];

    if (!ids.length) {
      return;
    }

    payload[field.apiKey] = field.multiSelect ? toRefs(ids) : { id: ids[0] };

    if (!field.otherName) {
      return;
    }

    const custom = values[field.otherName];
    const unlocked = ids.some((id) => customTextIds.includes(id));

    if (unlocked && typeof custom === 'string' && custom.trim()) {
      payload[field.otherName] = custom.trim();
    }
  });

  if (isLastStep) {
    payload.isOnboardingCompleted = true;
  } else if (nextStep) {
    payload.onboardingStep = nextStep;
  }

  return payload as UpdateUserRequest;
}
