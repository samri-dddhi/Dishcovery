import NavLink from './nav-link';
import Image from 'next/image';
import logoImg from '@/public/images/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';

import MainHeaderBackground from './main-header-background';
export default function MainHeader(){
return (
<>
<MainHeaderBackground />
<header className={classes.header}>
    <Link href='/' className={classes.logo}>
        <Image src={logoImg} alt="Logo" priority />
       Dishcovery
    </Link>

<nav className={classes.nav}>
    <ul>
        <li><NavLink href='/meals'>Browse Meals</NavLink></li>
        <li><NavLink href='/community'>Community</NavLink></li>
    </ul>
</nav>

</header>
</>
);
}
