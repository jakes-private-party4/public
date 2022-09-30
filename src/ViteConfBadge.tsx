import React from 'react';
import styles from './ViteConfBadge.module.css';

export default function ViteConfBadge() {
  
  return (
    <a target="_blank" href="https://viteconf.org">
      <div className={styles.Badge}>
        <span className={styles.InnerBadge}>NEW</span>
        {/* <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 556 557"><g clip-path="url(#a)"><path fill="url(#b)" d="M539 61 364 93l-22 75c-2 5 3 10 8 9l55-10c6-2 11 4 8 10L288 458l-8 14c-7 11-27 16-24-14l9-91c1-5-4-10-9-8l-33 10c-5 2-10-3-9-8l16-78c1-6-3-10-9-9l-53 13a7 7 0 0 1-9-8l11-190L17 61C5 59-4 72 2 82l266 467c6 10 20 10 25 0L554 82c6-10-3-23-15-21Z"/><path fill="url(#c)" d="M403 0 210 38a7 7 0 0 0-6 7l-12 200a7 7 0 0 0 3 6 7 7 0 0 0 6 2l54-13c5-1 9 3 8 9l-16 78c-1 5 4 10 9 8l33-10c6-2 11 3 10 8l-26 123c-1 8 9 12 13 5l3-4 157-314c3-6-2-12-7-10l-56 10c-5 1-9-4-8-9L411 9c2-5-3-10-8-9Z"/></g><defs><linearGradient id="b" x1="151.5" x2="441.1" y1="-2.3" y2="344.8" gradientUnits="userSpaceOnUse"><stop stop-color="#54C8FA"/><stop offset="1" stop-color="#A744F4"/></linearGradient><linearGradient id="c" x1="207.6" x2="410.8" y1="52.8" y2="323.8" gradientUnits="userSpaceOnUse"><stop stop-color="#A843F4"/><stop offset=".8" stop-color="#FFD0D0"/><stop offset="1" stop-color="#FFF3E6"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h556v557H0z"/></clipPath></defs></svg> */}
        <span className={styles.ViteConf}>ViteConf</span>
      </div>
    </a>
  );
}