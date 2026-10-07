import Image from "next/image"

export default async function VenueDetailPage({params}: {params: Promise<{vid: string}>}) {
    const { vid } = await params

    const mockVenue = new Map()
    mockVenue.set("001", {name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg"})
    mockVenue.set("002", {name: "Spark Space", imgSrc: "/img/sparkspace.jpg"})
    mockVenue.set("003", {name: "The Grand Table", imgSrc: "/img/grandTable.jpg" })
    
    return (
        <main className="m-10">
            <div className="flex flex-row my-5">
                <Image src={(mockVenue.get(vid)).imgSrc}
                    alt="Venue Picture"
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%]'/>
                    <div className='text-3xl font-bold mx-5'>{(mockVenue.get(vid)).name}</div>
            </div>
        </main>
    )
}