import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
