export default {
  first_name: "maxC",
  first_name1: "123",
  first_name2: "test123",
  mid_name: "A",
  mid_name1: "1",
  mid_name2: "#",
  dob: "02/02/2002",
  dob1: "13/13/2024",
  dob2: "01/01/1913",
  dob3: "01/01/00000000",
  phone_number: "5555555555",
  email1: "email",
  email2: "email@m.m",
  email3: "email@domain.domain123",
  otp: "0",
  otp1: "1",
};

export function randomName() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let name = "";
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const letter = letters.charAt(randomIndex);
    name += letter;
  }
  return name;
}
