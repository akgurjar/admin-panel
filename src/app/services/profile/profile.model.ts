export class Profile {
  static parse(data: Record<string, string>): Profile {
    const profile = new Profile();
    profile.id = data['id'];
    profile.name = data['name'];
    profile.email = data['email'];
    profile.picture = data['picture'];
    return profile;
  }
  id!: string;
  name!: string;
  email!: string;
  picture!: string;
}
