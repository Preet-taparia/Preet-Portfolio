import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaPython, 
  FaReact, FaNodeJs 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiDjango, 
  SiFlask, SiFastapi, SiMongodb, SiMysql, SiRedis, 
  SiCodechef, SiLeetcode, SiGeeksforgeeks 
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";

const getIcon = (icon: string, className?: string) => {
  switch (icon) {
    // Social Media Icons
    case "github":
      return <FontAwesomeIcon icon={faGithub} width={24} height={24} />;
    case "linkedin":
      return <FontAwesomeIcon icon={faLinkedin} width={24} height={24} />;
    case "codechef":
      return <SiCodechef size={24} />;
    case "leetcode":
      return <SiLeetcode size={24} />;
    case "gfg":
      return <SiGeeksforgeeks size={24} />;
    
    // Skill Icons
    case "FaHtml5":
      return <FaHtml5 className={className}/>;
    case "FaCss3Alt":
      return <FaCss3Alt className={className}/>;
    case "FaBootstrap":
      return <FaBootstrap className={className}/>;
    case "RiTailwindCssFill":
      return <RiTailwindCssFill className={className}/>;
    case "FaJs":
      return <FaJs className={className}/>;
    case "FaPython":
      return <FaPython className={className}/>;
    case "SiTypescript":
      return <SiTypescript className={className}/>;
    case "FaReact":
      return <FaReact className={className}/>;
    case "SiNextdotjs":
      return <SiNextdotjs className={className}/>;
    case "FaNodeJs":
      return <FaNodeJs className={className}/>;
    case "SiExpress":
      return <SiExpress className={className}/>;
    case "SiDjango":
      return <SiDjango className={className}/>;
    case "SiFlask":
      return <SiFlask className={className}/>;
    case "SiFastapi":
      return <SiFastapi className={className}/>;
    case "SiMongodb":
      return <SiMongodb className={className}/>;
    case "SiMysql":
      return <SiMysql className={className}/>;
    case "DiRedis":
      return <DiRedis className={className}/>;
    default:
      return null;
  }
};

export default getIcon;
