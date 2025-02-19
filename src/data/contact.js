import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/y556zhao',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://scholar.google.ca/citations?user=14RMAx0AAAAJ&hl=en',
    label: 'Goolge Scholar',
    icon: faGoogleScholar,
  },
  {
    link: 'https://www.linkedin.com/in/yuchi-allan-zhao/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://x.com/ZhaoYuchi',
    label: 'X',
    icon: faXTwitter,
  },
  {
    link: 'mailto:allan.zhao@utoronto.ca',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
