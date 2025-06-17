// localhost:3000/meals/something (except share)

export default function MealDetailPage({ params }) {
    return (
    <>
        <h1>Meal Detail Page</h1>
        <p>This is the detail page : {params.slug}</p>    
    </>
    );
}