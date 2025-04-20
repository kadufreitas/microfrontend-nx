export interface SelectDropdownProps {
  options: SelectDropdownOption[];
  initialOption?: SelectDropdownOption;
  onSelect?: (option: SelectDropdownOption) => void;
}

export type SelectDropdownOption = {
  value: string;
  label: string;
  ItemComponent?: React.ElementType;
  SelectedButtonComponent?: React.ElementType;
};
