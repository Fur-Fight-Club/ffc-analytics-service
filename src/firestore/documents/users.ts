export class UsersDocument {
  static collectionName = "users";

  companyName: string;
  isVerified: boolean;
  kbis: string;
  phoneNumber: string;
  role: "USER" | "ADMIN" | null;
  websiteURL: string;
  clientId: string;
  clientSecret: string;
}
