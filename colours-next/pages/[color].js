//[Colour] is a parameter! Basically a var inside my URL instead of being the actual colour.
//No need to use react router for routes.

//We want to create a route for each of our colours in the colours.json.
import colours from '../data/colours.json';

//Data Fetching in Next.js
//Step 1: Data Fetching.
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
export async function getStaticProps({ params }) {
    const colour = colours.find(colour => colour.name === params.colour);
    return { props: { colour } }
}

