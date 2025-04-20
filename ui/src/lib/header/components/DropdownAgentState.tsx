import { ErrorBoundary } from '../../errorBoundary';
import { DropdownButtonNotReady } from '../../selectDropdown/DropdownButtonNotReady';
import { DropdownButtonReady } from '../../selectDropdown/DropdownButtonReady';
import { DropdownItemNotReady } from '../../selectDropdown/DropdownItemNotReady';
import { DropdownItemReady } from '../../selectDropdown/DropdownItemReady';
import { SelectDropdown } from '../../selectDropdown/SelectDropdown';
import {
  SelectDropdownOption,
  SelectDropdownProps,
} from '../../selectDropdown/types';

const states: Record<string, SelectDropdownOption> = {
  ready: {
    value: 'ready',
    label: 'Ready (Voice)',
    ItemComponent: DropdownItemReady,
    SelectedButtonComponent: DropdownButtonReady,
  },
  notReady: {
    value: 'not-ready',
    label: 'Not Ready',
    ItemComponent: DropdownItemNotReady,
    SelectedButtonComponent: DropdownButtonNotReady,
  },
  meal: {
    value: 'meal',
    label: 'Meal',
    ItemComponent: DropdownItemNotReady,
    SelectedButtonComponent: DropdownButtonNotReady,
  },
  Break: {
    value: 'break',
    label: 'Break',
    ItemComponent: DropdownItemNotReady,
    SelectedButtonComponent: DropdownButtonNotReady,
  },
  invisible: {
    value: 'invisible',
    label: 'Invisible',
    // ItemComponent: DropdownItemNotReady,
    // SelectedButtonComponent: DropdownButtonNotReady,
  },
};

export const DropdownAgentState = (
  props: Pick<SelectDropdownProps, 'onSelect'>,
) => {
  const options = Object.keys(states).map(
    (key) => states[key as keyof typeof states],
  );

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <SelectDropdown
        options={options}
        initialOption={states.notReady}
        {...props}
      />
    </ErrorBoundary>
  );
};
