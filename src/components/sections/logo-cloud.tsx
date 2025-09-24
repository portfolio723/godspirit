import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image';

const logos = [
    { src: "/assets/ktfTemppng_38127549_1701443839.png", alt: "KTF Logo", width: 90, height: 90 },
    { src: "/assets/144 1.png", alt: "Fox Interviewer Logo", width: 120, height: 40 },
    { src: "/assets/1666 1.png", alt: "Rolling Stone Logo", width: 120, height: 40 },
    { src: "/assets/dallas.png", alt: "Voyage Dallas Logo", width: 120, height: 20 },
    { src: "/assets/123.png", alt: "Jesus Wired Logo", width: 100, height: 40 },
    { src: "/assets/133 1.png", alt: "Louder Than The Music Logo", width: 120, height: 20 },
];

export function LogoCloud() {
    return (
        <section className="bg-background py-16 sm:py-24 lg:py-32">
            <div className="group relative m-auto max-w-5xl px-6">
                <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Link
                        href="#"
                        className="block text-sm duration-150 hover:opacity-75">
                        <span> Featured In</span>

                        <ChevronRight className="ml-1 inline-block size-3" />
                    </Link>
                </div>
                <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-4xl grid-cols-2 items-center gap-x-12 gap-y-12 transition-all duration-500 group-hover:opacity-50 md:grid-cols-3 sm:gap-x-16 sm:gap-y-14 md:max-w-5xl">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex justify-center">
                            <Image
                                className="mx-auto w-fit"
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
