import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("679e2fef002a759d83cc");

export const account = new Account(client);
export const databases = new Databases(client);

export const DATABASE_ID = "679e321a00036331e3f5";
export const COMMUNITY_COLLECTION_ID = "679e3236000fdefaec9e";
export const CHAT_COLLECTION_ID = "679e3928001180d2dbec";
