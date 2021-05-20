//[Colour] is a parameter! Basically a var inside my URL instead of being the actual colour.
//No need to use react router for routes.

//We want to create a route for each of our colours in the colours.json.
import colours from '../data/colours.json';


export default function Colour({ colour }) {
    return (
        <div className="colour-page" style={{ backgroundColor: colour.hex }}>
            <h1>{colour.name}</h1>
        </div>
    )
}

//Data Fetching in Next.js
//Step 1: Data Fetching to generate all the different paths for this component.
export async function getStaticPaths() {
    const paths = colours.map(colour => {
        return {
            params: { colour: colour.name}
        };
    });
    return { paths, fallback: false};
};

//Step 2: Data Fetching and Props.
//We find the full colour object by looking for the colour name.
//It pass the props to the individual instance of the component/page.
export async function getStaticProps({ params }) {
        const colour = colours.find(colour => colour.name === params.colour);
        return { props: { colour } }
};