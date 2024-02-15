export interface Language {
  __typename: string;
  color: string;
  name: string;
}

export interface RepoInterface {
  __typename: string;
  name: string;
  url: string;
  primaryLanguage: Language | null;
  description: string | null;
  stargazerCount: number;
}
