import { FC } from 'react';
import { RxCaretDown } from 'react-icons/rx';

type Props = {
  openModal: () => void;
  userLanguages: string[];
  allReposLoaded: boolean;
  selectedLanguage: string;
};

const LanguagesButton: FC<Props> = ({
  openModal,
  userLanguages,
  allReposLoaded,
  selectedLanguage,
}) => {
  if (!allReposLoaded)
    return <span className="animate-pulse">Getting user languages...</span>;
  if (allReposLoaded && userLanguages.length === 0)
    return <span>User languages not available.</span>;

  return (
    <button
      className="mb-6 flex items-center gap-2 rounded-full bg-clr-bg-muted px-4 py-2 text-sm hover:bg-clr-accent active:bg-clr-accent"
      type="button"
      onClick={openModal}
    >
      {selectedLanguage.length > 0 ? selectedLanguage : 'Language'}
      <RxCaretDown size={20} />
    </button>
  );
};
export default LanguagesButton;
