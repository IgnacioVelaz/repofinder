import { FC } from 'react';

type Props = {
  languages: string[];
  selectLanguage: (language: string) => void;
};

const LanguagesList: FC<Props> = ({ languages, selectLanguage }) => (
  <ul>
    <button
      type="button"
      onClick={() => selectLanguage('')}
      className="flex w-full"
    >
      <li className="flex w-full border-b border-clr-bg-muted px-10 py-6">
        All
      </li>
    </button>
    {
      /* eslint-disable consistent-return */
      languages.map((language) => {
        if (language)
          return (
            <button
              type="button"
              onClick={() => selectLanguage(language)}
              className="flex w-full"
              key={language}
            >
              <li className="flex w-full border-b border-clr-bg-muted px-10 py-6">
                {language}
              </li>
            </button>
          );
        return null;
      })
      /* eslint-enable consistent-return */
    }
  </ul>
);

export default LanguagesList;
