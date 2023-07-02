import { uuid } from "uuidv4";

export const generateUUID = () => {
  return uuid();
};

export function mapObjectToInterface<T>(obj: any): T {
  return obj;
}
