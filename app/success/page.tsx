import Surprise from "../util/confetti";
import Link from 'next/link';
import Image from "next/image";

export default function page() {
    return (
        <div>
            <div className="homepage-link">
                <Link href='/'> ← Go Back</Link>
            </div>
            <div>
                <section className="success">
                    <Surprise />
                    <Image src="/love.png" alt="love" width={370} height={370} className="yay-img" priority />
                    <p id="yay">💖 You are my favorite person and valentine for life! 💖</p>
                </section>
            </div>
        </div>
    )
}