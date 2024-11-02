import dynamic from "next/dynamic";
import React from "react";

type Props = {
  name: string;
} & React.ComponentProps<"svg">;

export default function LazySvg({ name, ...props }: Props) {
  const Svg = dynamic(() => import(`./assets/${name}.svg`));
  // Or without using `dynamic`:
  // We use `default` here because `@svgr/webpack` converts all other *.svg imports to React components, this might be different for other loaders.
  // const Svg = (await import(`@/assets/${name}.svg`)).default;

  return <Svg {...props} />;
}
