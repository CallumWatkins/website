import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faGraduationCap,
  faSchool,
  faBriefcase,
  faCircle,
  faStar,
  faCodeCommit,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import {
  faTelegram,
  faKeybase,
  faTwitter,
  faGithub,
  faStackOverflow,
  faLinkedinIn,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
  faGraduationCap,
  faSchool,
  faBriefcase,
  faCircle,
  faStar,
  faCodeCommit,
  faArrowUpRightFromSquare,
  faEnvelope,
  faTelegram,
  faKeybase,
  faTwitter,
  faGithub,
  faStackOverflow,
  faLinkedinIn,
  faPaypal,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
