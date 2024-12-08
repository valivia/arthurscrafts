<script lang="ts">
	type Direction = "up" | "down" | "left" | "right";

	interface Props {
		direction?: Direction;
		size?: string;
	}

	let { direction = "down", size = "64px" }: Props = $props();

	let degrees = {
		down: 0,
		up: 180,
		left: 90,
		right: -90,
	}[direction];
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	width={size}
	height={size}
	viewBox="0 0 32 32"
	xml:space="preserve"
	style="transform: rotate({degrees}deg)"
>
	<polygon
		style="fill: currentColor"
		points="16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12 "
	/>
</svg>

