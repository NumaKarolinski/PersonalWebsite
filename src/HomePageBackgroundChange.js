import styled, { keyframes } from 'styled-components';
 
export const backgroundChange = keyframes`
	${

		for(i=0; i<=900; i++){

			let percentage = i * 0.11111111111111111111111111111111111111;

			let angle1 = 2 * Math.PI * i / 900;
			let angle2 = angle1 - Math.PI;

			let sin1 = Math.sin(angle1);
			let sin2 = Math.sin(angle2);

			let cos1 = Math.cos(angle1);
			let cos2 = Math.cos(angle2);

			let xLeftDisplacement = 25 + cos1 * 12.5;
			let xLeftPercent = xLeftDisplacement + '%';

			let yLeftDisplacement = 25 + sin1 * 12.5;
			let yLeftPercent = yLeftDisplacement + '%';

			let xRightDisplacement = 25 + cos2 * 12.5;
			let xRightPercent = xRightDisplacement + 50 + '%';

			let yRightDisplacement = 25 + sin2 * 12.5;
			let yRightPercent = yRightDisplacement + 50 + '%';



		}

	}
	
	@for $i from 0 through 900{

		$percentage: $i * 0.11111111111111111111111111111111111111;

		$angle1: 2 * pi() * $i / 900;
		$angle2: $angle1 - pi();

		$sin1: sin($angle1);
		$sin2: sin($angle2);

		$cos1: cos($angle1);
		$cos2: cos($angle2);

		$xLeftDisplacement: 25 + $cos1 * 12.5;
		$xLeftPercent: $xLeftDisplacement * 1%;

		$yLeftDisplacement: 25 + $sin1 * 12.5;
		$yLeftPercent: $yLeftDisplacement * 1%;

		$xRightDisplacement: 25 + $cos2 * 12.5;
		$xRightPercent: $xRightDisplacement * 1% + 50%;

		$yRightDisplacement: 25 + $sin2 * 12.5;
		$yRightPercent: $yRightDisplacement * 1% + 50%;

		#{$percentage * 1%} {	

			@if $i < 100 {

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(218.75,62.5 + $i * 0.625,62.5, 0.5), transparent),
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(140,80 + $i * 0.4,40, 0.5), transparent);	

			} @else if $i < 200 {

				$j: $i - 100;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(218.75,125 + $j * 0.625,62.5, 0.5), transparent), 
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(140 - $j * 0.4,120 + $j * 0.20,40, 0.5), transparent);	

			} @else if $i < 300 {

				$j: $i - 200;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(218.75 - $j * 0.625,187.5 + $j * 0.3125,62.5, 0.5), transparent), 
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(100 - $j * 0.60,140,40, 0.5), transparent);	
			
			} @else if $i < 400 {

				$j: $i - 300;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(156.25 - $j * 0.9375,218.75,62.5, 0.5), transparent),
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(40,140,40 + $j, 0.5), transparent);	
			
			} @else if $i < 500 {

				$j: $i - 400;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(62.5,218.75,62.5 + $j * 1.5625, 0.5), transparent),
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(40,140 - $j * 0.8,140, 0.5), transparent);	
			
			} @else if $i < 600 {

				$j: $i - 500;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(62.5,218.75 - $j * 1.25,218.75, 0.5), transparent), 
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(40 + $j * 0.60,60 - $j * 0.2,140, 0.5), transparent);	
			
			} @else if $i < 700 {

				$j: $i - 600;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(62.5 + $j * 0.9375,93.75 - $j * 0.3125,218.75, 0.5), transparent), 
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(100 + $j * 0.4,40 + $j * 0.2,140, 0.5), transparent);	
			
			} @else if $i < 800 {

				$j: $i - 700;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(156.25 + $j * 0.625,62.5 + $j * 0.3125,218.75, 0.5), transparent),
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(140,60 - $j * 0.2,140 - $j, 0.5), transparent);	
			
			} @else if $i <= 900 {

				$j: $i - 800;

				background: radial-gradient(ellipse at $xLeftPercent $yLeftPercent, rgba(218.75,93.75 - $j * 0.3125,218.75 - $j * 1.5625, 0.5), transparent),
							radial-gradient(ellipse at $xRightPercent $yRightPercent, rgba(140,50 + $j * 0.4,40, 0.5), transparent);	
			
			}
		}
	}
`