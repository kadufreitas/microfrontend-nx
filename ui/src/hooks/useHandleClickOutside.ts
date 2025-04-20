import { useEffect } from 'react';

type useHandleClickOutsideProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  callback?: () => void;
};

export const useHandleClickOutside = ({
  containerRef,
  callback,
}: useHandleClickOutsideProps) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      event.target instanceof Node &&
      !containerRef.current.contains(event.target)
    ) {
      callback?.();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
};
