import { Meta, StoryObj } from '@storybook/react';
import LanguagesButton from './LanguagesButton';

const meta = {
  title: 'Static/Languages Button',
  component: LanguagesButton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LanguagesButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    openModal: () => {},
    userLanguages: ['JavaScript', 'TypeScript', 'Python'],
    allReposLoaded: true,
    selectedLanguage: '',
  },
};

export const LoadingRepos: Story = {
  args: {
    openModal: () => {},
    userLanguages: ['JavaScript', 'TypeScript', 'Python'],
    allReposLoaded: false,
    selectedLanguage: '',
  },
};

export const NoUserLanguages: Story = {
  args: {
    openModal: () => {},
    userLanguages: [],
    allReposLoaded: true,
    selectedLanguage: '',
  },
};

export const LanguageSelected: Story = {
  args: {
    openModal: () => {},
    userLanguages: ['JavaScript', 'TypeScript', 'Python'],
    allReposLoaded: true,
    selectedLanguage: 'JavaScript',
  },
};
