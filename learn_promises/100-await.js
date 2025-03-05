import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    try {
        const resFromUploadPhoto = await uploadPhoto();
        const resFromcreateUser = await createUser();
        return {
            photo: resFromUploadPhoto,
            user: resFromcreateUser,
        };
    } catch (err) {
        return {
            photo: null,
            user: null,
        };
    }
}