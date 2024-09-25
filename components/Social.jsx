import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/Atv23", title: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/atv23/", title: "LinkedIn" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/Atv_23/", title: "LeetCode" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/iamatv23/", title: "Instagram" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles} title={item.title}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
