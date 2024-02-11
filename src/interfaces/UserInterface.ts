interface Followers {
  __typename: string;
  totalCount: number;
}

interface Repositories {
  totalCount: number;
}

interface UserInterface {
  __typename: string;
  login: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: Followers;
  repositories: Repositories;
}

export default UserInterface;
