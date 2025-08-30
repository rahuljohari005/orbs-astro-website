import { houses } from "@/data/housesData";
import { notFound } from "next/navigation";
import HousePageClient from "./HousePageClient";

export async function generateStaticParams() {
    return houses.map((house) => ({
        slug: house.slug,
    }));
}

export default function HousePage({ params }: { params: { slug: string } }) {
    const house = houses.find(h => h.slug === params.slug);
    
    if (!house) {
        notFound();
    }

    return <HousePageClient house={house} />;
}