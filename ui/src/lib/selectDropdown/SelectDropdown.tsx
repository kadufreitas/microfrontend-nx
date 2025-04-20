import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useHandleClickOutside } from '../../hooks/useHandleClickOutside';
import { CustomTheme } from '../../types';
import { boxShadow, color, typography } from '../../utils';
import { DropdownButtonBase } from './DropdownButtonBase';
import { DropdownItemBase } from './DropdownItemBase';
import { SelectDropdownOption, SelectDropdownProps } from './types';

const DropdownContainer = styled.div<{ theme?: CustomTheme }>`
  position: relative;
  width: 200px;
  font-family: ${typography('fontFamily')};
`;

const ArrowIcon = styled.span`
  font-size: 0.8em;
  margin-left: 10px;
`;

const DropdownList = styled.ul<{ theme?: CustomTheme }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${color('background')};
  border: 1px solid ${color('border')};
  border-radius: 4px;
  box-shadow: ${boxShadow('elevation1')};
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
`;

export const SelectDropdown = ({
  options,
  initialOption,
  onSelect,
}: SelectDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<SelectDropdownOption | null>(initialOption || null);

  // Extract the custom DropdownButton component
  const DropdownButton =
    selectedOption?.SelectedButtonComponent || DropdownButtonBase;

  // Close the dropdown when clicking outside
  useHandleClickOutside({
    containerRef,
    callback: () => setIsOpen(false),
  });

  // Handle option selection
  const handleSelect = (option: SelectDropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <DropdownContainer ref={containerRef}>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption?.value || 'Select an option'}
        <ArrowIcon>{isOpen ? '▲' : '▼'}</ArrowIcon>
      </DropdownButton>

      {isOpen && (
        <DropdownList role="listbox">
          {options.map((option) => {
            const DropdownItem = option.ItemComponent || DropdownItemBase;

            return (
              <DropdownItem
                key={option.value}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={selectedOption?.value === option.value}
              >
                {option.label}
              </DropdownItem>
            );
          })}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
