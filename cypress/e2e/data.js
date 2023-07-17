export default {
  //WELCOME page
  //English text values
  label_preferred_language_en: "Preferred Language",
  label_patient_name_en: "Patient Name:",
  label_dob_en: "Date of Birth:",
  label_login_option_en: "Preferred method of contact:",
  label_mobile_phone_en: "Mobile Phone:",
  label_whatsapp_en: "WhatsApp:",
  label_email_en: "Email:",
  label_guardian_en: "Are you filling this out for a dependent?",
  label_visited_before_part1_en: "Have you visited ",
  label_visited_before_part2_en: " before?",
  label_medical_patient_en: "Are you a Medicare patient?",
  label_call_911_en:
    "Please stop and call 911 if you are experiencing chest pain, think you may be having a heart attack or stroke, are struggling to breathe, have a severe injury or severe abdominal pain.",

  placeholder_first_name_en: "First Name",
  placeholder_mid_name_en: "M",
  placeholder_last_name_en: "Last Name",
  placeholder_dob_en: "MM/DD/YYYY",
  placeholder_dob2_en: "DD/MM/YYYY",
  placeholder_mobile_phone: "(555) 555-5555",
  placeholder_email_en: "Please enter your email address",
  placeholder_relationship_label_en: "Relationship to Patient:",
  placeholder_relationship_en: "Relationship to Patient",
  placeholder_enter_provider: "Enter Provider",
  placeholder_select_provider: "Select Provider",
  placeholder_member_id: "Enter Card Number",
  placeholder_group_id: "Enter Group ID",
  placeholder_rx_bin: "Enter RxBin",
  placeholder_rx_pcn: "Enter RxPcn",
  placeholder_post_code: "Post Code",
  placeholder_state: "State",

  option_english_language_en: "English",
  option_spanish_language_en: "Spanish",
  option_mobile_phone_en: "Mobile Phone",
  option_whats_app_en: "WhatsApp",
  option_email_en: "Email",
  option_yes_en: "Yes",
  option_no_en: "No",

  button_cancel_en: "Cancel",
  button_agree_en: "Agree",
  button_submit_en: "Submit",
  button_next: "Next",

  error_name_required: "Name entry is required",
  error_name_numbers: "Name field may not contain numbers",
  error_middle_invalid: "Must be a letter",
  error_dob_required: "Date of Birth is required",
  error_dob_invalid: "Date of Birth is invalid",
  error_field_required: "This field is required.",
  error_relationship_required: "Relationship to Patient: is required",
  error_email_required: "Please enter your email address",
  error_email_invalid: "The current email address is invalid, please update",

  error_patient_first_name: "Legal First Name",
  error_patient_last_name: "Last Name",
  error_height_zero: "Height should be greater than 0.",
  error_height_required: "Height is required.",
  error_feet_required: "Feet is required",
  error_weight_zero: "Weight should be greater than 0.",
  error_weight_required: "Weight is required.",

  error_insurance_required: "Insurance Provider is required",
  error_member_id_required: "MemberID is required",
  error_group_id_required: "Group ID is required",
  error_special_character: "No special characters allowed",
  error_start_date_before: "Start date must be before today",
  error_end_date_after: "End date must be after Start Date",
  error_date_invalid: "The date you entered is invalid",
  error_first_name_required: "First Name is required",
  error_last_name_required: "Last Name is required",
  error_sex_required: "Sex is required",
  error_is_invalid: "is invalid",
  error_phone_number_short: "Phone Number must be 10 digits",
  error_phone_number_required: "Phone Number is required",

  message_verified: "You have been verified",
  message_wrong_otp_phone:
    "Wrong phone number or verification code. You have 2 attempt(s) left.",
  message_insurance_required: "Insurance Provider is required",

  list_relationship_en: [
    "Parent",
    "Grandparent",
    "Spouse",
    "Child",
    "Aunt",
    "Uncle",
    "Sibling",
  ],
  list_relationship_insurance: [
    "Self",
    "Parent",
    "Spouse",
    "Grandparent",
    "Guardian",
    "StepParent",
    "Significant Other",
    "Grandchild",
    "Other",
  ],
  list_state: [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ],
};

export const Pages = {
  Identification: "Identification",
  Insurance: "Insurance",
  Demographics: "Demographics",
};

let business = "AdviNow";

export const getBusiness = () => {
  return business;
};

export const setBusiness = (value) => {
  business = value;
};
