import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const logos = [
    { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", height: "h-5" },
    { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", height: "h-4" },
    { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub Logo", height: "h-4" },
    { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike Logo", height: "h-5" },
    { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", height: "h-5" },
    { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", height: "h-4" },
    { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", height: "h-7" },
    { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", height: "h-6" },
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
                <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-12 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex">
                            <img
                                className={`mx-auto w-fit dark:invert ${logo.height}`}
                                src={logo.src}
                                alt={logo.alt}
                                width="auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
