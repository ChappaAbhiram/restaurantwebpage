const DUMMYMEALS = [
{
    id : 'm1',
    name:'Sushi',
    description : 'Finest fish and veggies',
    price : 22.99,
},
{
    id : 'm2',
    name:'Schnitzel',
    description : 'A german speciality',
    price : 16.5,
},
{
    id : 'm3',
    name:'Barbecue Burger',
    description : 'American, Raw, Meaty',
    price : 12.99,
},
{
    id : 'm4',
    name:'Green Bowl',
    description : 'Healthy and Green',
    price : 18.99,
}
];
const AvailableMeals = ()=>{
    const mealsList= DUMMYMEALS.map((item)=>{
        return <li>{item.name}</li>
    })
return <section>
    <ul>
        {mealsList}
    </ul>
</section>
}
export default AvailableMeals;