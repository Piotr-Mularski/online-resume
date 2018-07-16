import './styles/main.scss';
import stickyNav from './scripts/sticky-nav';
import RevealOnScroll from './scripts/reveal-on-scroll';
import ScrollSpy from './scripts/scroll-spy';
import ToggleNav from './scripts/toggle-nav';

stickyNav();
new RevealOnScroll('.experience__left', '.experience__right');
new RevealOnScroll('.education__left', '.education__right');
new ScrollSpy();
new ToggleNav();