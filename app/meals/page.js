import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';


async function Meals(){
const meals = await getMeals();
return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  

  return (
    <>
    <header className={classes.header}>
      <h1>Delicious Meals Await <span className={classes.highlight}>For You!</span></h1>
      <p>Explore a variety of meals tailored just for you.</p>
      <p className={classes.cta}><Link href="/meals/share">Share Your Favourite Recipe.</Link></p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
        <Meals />
      </Suspense>
    </main>
    </>
  );
}