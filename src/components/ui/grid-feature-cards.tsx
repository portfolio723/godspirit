import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

function useRandomPattern(length: number = 5): number[][] {
    const [pattern, setPattern] = useState<number[][]>([]);

    useEffect(() => {
        const newPattern = Array.from({ length }, () => [
            Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
            Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
        ]);
        setPattern(newPattern)
    }, [length]);

	return pattern;
}


export function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
	const p = useRandomPattern();

	return (
		<div className={cn('relative overflow-hidden p-8', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-accent/10 stroke-border/40 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<feature.icon className="text-accent size-8" strokeWidth={1.5} aria-hidden />
			<h3 className="mt-10 text-lg md:text-xl font-semibold text-foreground">{feature.title}</h3>
			<p className="text-muted-foreground relative z-20 mt-4 text-base font-light">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}
