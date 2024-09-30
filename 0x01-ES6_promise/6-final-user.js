import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  const arrays = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
  .then((value) => {
    value.forEach((val) => {
      if (val.status === 'fulfilled') arrays.push({ status: val.status, value: val.value });
      else arrays.push({ status: val.status, reason: val.reason.message });
    });
    return arrays;
  });
}
