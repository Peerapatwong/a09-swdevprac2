import Card from "./Card";

export default function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
    if (!venuesJson?.data) {
        return <p>Failed to load venues</p>;
    }

    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex flex-auto flex-row flex-wrap justify-around align-around m-5 w-full">
            {venuesJson.data.map((venueItem: VenueItem) => (
                <Card
                    key={venueItem.id}
                    venueName={venueItem.name}
                    imgSrc={venueItem.picture}
                    vid={venueItem.id}
                />
            ))}
            </div>
        </div>

        
    );
}