export default {
  clear: "{selectall}{backspace}",
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
  height0: "0",
  height1: "1",
  height170: "170",
  state: "AZ",
  provider_search: "doc",
  provider: "Doctors Healthcare Plans Inc",

  text_value: "Abc",
  numeric_value: "12345",
  special_char_value: "!@#",
  mix_value: "Abc123",
  mix_all_value: "Abc123!@#",
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

export function today() {
  const date = new Date();
  return formatDate(date);
}

export function tomorrow() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return formatDate(date);
}

export function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return formatDate(date);
}

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return [`${month}/${day}/${year}`, `${day}/${month}/${year}`];
}
