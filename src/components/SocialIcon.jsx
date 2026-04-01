import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function SocialIcon({ item }) {
  const iconMap = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    x: FaXTwitter,
  };

  const Icon = iconMap[item];

  if (!Icon) {
    return null;
  }

  return <Icon aria-hidden="true" focusable="false" />;
}

export default SocialIcon;
