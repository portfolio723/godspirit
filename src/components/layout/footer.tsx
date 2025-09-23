'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Crown, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import Link from 'next/link';

interface FooterLink {
 	title: string;
 	href: string;
 	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
 	label: string;
 	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: "Explore",
        links: [
            { title: "About", href: "#about" },
            { title: "Messages", href: "#messages" },
            { title: "Insights", href: "#insights" },
            { title: "Testimonials", href: "#testimonials" },
        ],
    },
    {
        label: "Connect",
        links: [
            { title: "Contact", href: "#contact" },
            { title: "Share Your Story", href: "#" },
        ],
    },
    {
        label: "Legal",
        links: [
            { title: "Privacy Policy", href: "#" },
            { title: "Terms of Service", href: "#" },
        ],
    },
 	{
 		label: 'Social',
 		links: [
 			{ title: 'Twitter', href: '#', icon: Twitter },
 			{ title: 'Facebook', href: '#', icon: Facebook },
 			{ title: 'Instagram', href: '#', icon: Instagram },
 			{ title: 'YouTube', href: '#', icon: Youtube },
 		],
 	},
];

export function Footer() {
 	return (
 		<footer id="contact" className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-card mt-20">
 			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8 p-12 lg:p-16">
 				<AnimatedContainer className="space-y-4">
                    <div className="flex flex-col items-start">
                        <Link href="/" className="mb-4 flex items-center space-x-2">
                        <Crown className="h-8 w-8 text-accent" />
                        <span className="font-headline text-2xl font-bold text-primary">
                            God Spirit Says
                        </span>
                        </Link>
                        <p className="text-muted-foreground">
                            Guiding souls towards divine prosperity and purpose.
                        </p>
                    </div>
 					<p className="text-muted-foreground mt-8 text-sm md:mt-4">
 						© {new Date().getFullYear()} God Spirit Says. All rights reserved.
 					</p>
 				</AnimatedContainer>

 				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
 					{footerLinks.map((section, index) => (
 						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
 							<div className="mb-10 md:mb-0">
 								<h3 className="text-foreground font-semibold mb-4">{section.label}</h3>
 								<ul className="text-muted-foreground mt-4 space-y-3 text-sm">
 									{section.links.map((link) => (
 										<li key={link.title}>
 											<a
 												href={link.href}
 												className="hover:text-primary inline-flex items-center transition-all duration-300"
 											>
 												{link.icon && <link.icon className="me-2 size-5" />}
 												{link.title}
 											</a>
 										</li>
 									))}
 								</ul>
 							</div>
 						</AnimatedContainer>
 					))}
 				</div>
 			</div>
 		</footer>
 	);
};

type ViewAnimationProps = {
 	delay?: number;
 	className?: ComponentProps<typeof motion.div>['className'];
 	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
 	const shouldReduceMotion = useReducedMotion();

 	if (shouldReduceMotion) {
 		return <>{children}</>;
 	}

 	return (
 		<motion.div
 			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
 			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
 			viewport={{ once: true }}
 			transition={{ delay, duration: 0.8 }}
 			className={className}
 		>
 			{children}
 		</motion.div>
 	);
};
