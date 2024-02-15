export interface Language {
  color: string;
  name: string;
}

export interface RepoInterface {
  __typename: string;
  name: string;
  url: string;
  primaryLanguage: Language;
  description: string;
  stargazerCount: number;
}
