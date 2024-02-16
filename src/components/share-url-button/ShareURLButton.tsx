import { useState } from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';

const ShareURLButton = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  async function copyToClipboard() {
    /* eslint-disable-next-line no-restricted-globals */
    await navigator.clipboard.writeText(location.href);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  }

  return (
    <>
      <button
        className="ml-auto p-2 text-clr-text hover:text-clr-accent active:text-clr-accent"
        type="button"
        onClick={copyToClipboard}
        aria-label="Share URL"
      >
        <IoShareSocialOutline className="size-6" />
      </button>
      {copySuccess && (
        <p className="absolute right-1/2 top-2 translate-x-1/2 rounded-lg bg-clr-bg-muted px-4 py-2">
          Copied to clipboard!
        </p>
      )}
    </>
  );
};
export default ShareURLButton;
