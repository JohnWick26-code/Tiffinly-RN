import type { PreferenceOptionDomain } from '../../../api';
import type { OnboardingField } from '../../../config';
import { OptionList } from './OptionList';
import { SliderField } from './SliderField';
import { TextField } from './TextField';

export interface RenderContentProps {
  field: OnboardingField;
  options: PreferenceOptionDomain[];
}

export function RenderContent({ field, options }: RenderContentProps) {
  switch (field.kind) {
    case 'text':
      return <TextField name={field.name} labelKey={field.labelKey} />;

    case 'slider':
      return (
        <SliderField
          name={field.name}
          labelKey={field.labelKey}
          min={field.min}
          max={field.max}
        />
      );

    case 'options':
      return (
        <OptionList
          name={field.name}
          multiSelect={field.multiSelect}
          otherName={field.otherName}
          options={options}
        />
      );

    default:
      return null;
  }
}
