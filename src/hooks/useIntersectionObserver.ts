import { useRef, useState } from 'react';

const useIntersectionObserver = (): [
  React.RefObject<HTMLLIElement>,
  boolean | undefined,
  React.MutableRefObject<IntersectionObserver>,
] => {
  const [lastItemIsVisible, setLastItemIsVisible] = useState<boolean>();
  const lastItem = useRef<HTMLLIElement>(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const entry = entries[0];
      setLastItemIsVisible(entry.isIntersecting);
    }),
  );

  return [lastItem, lastItemIsVisible, observer];
};

export default useIntersectionObserver;
