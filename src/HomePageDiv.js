import styled, {keyframes} from 'styled-components';

const backgroundToGray = (props) => keyframes`
	0%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 0}, ${props.leftG + props.leftGStep * 0}, ${props.leftB + props.leftBStep * 0}, ${0.5 + 0.002 * 0} + ), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 0}, ${props.rightG + props.rightGStep * 0}, ${props.rightB + props.rightBStep * 0}, ${0.5 + 0.002 * 0}), transparent);
    }
	1%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 1}, ${props.leftG + props.leftGStep * 1}, ${props.leftB + props.leftBStep * 1}, ${0.5 + 0.002 * 1}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 1}, ${props.rightG + props.rightGStep * 1}, ${props.rightB + props.rightBStep * 1}, ${0.5 + 0.002 * 1}), transparent);
	}
	2%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 2}, ${props.leftG + props.leftGStep * 2}, ${props.leftB + props.leftBStep * 2}, ${0.5 + 0.002 * 2}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 2}, ${props.rightG + props.rightGStep * 2}, ${props.rightB + props.rightBStep * 2}, ${0.5 + 0.002 * 2}), transparent);
	}
	3%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 3}, ${props.leftG + props.leftGStep * 3}, ${props.leftB + props.leftBStep * 3}, ${0.5 + 0.002 * 3}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 3}, ${props.rightG + props.rightGStep * 3}, ${props.rightB + props.rightBStep * 3}, ${0.5 + 0.002 * 3}), transparent);
	}
	4%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 4}, ${props.leftG + props.leftGStep * 4}, ${props.leftB + props.leftBStep * 4}, ${0.5 + 0.002 * 4}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 4}, ${props.rightG + props.rightGStep * 4}, ${props.rightB + props.rightBStep * 4}, ${0.5 + 0.002 * 4}), transparent);
	}
	5%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 5}, ${props.leftG + props.leftGStep * 5}, ${props.leftB + props.leftBStep * 5}, ${0.5 + 0.002 * 5}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 5}, ${props.rightG + props.rightGStep * 5}, ${props.rightB + props.rightBStep * 5}, ${0.5 + 0.002 * 5}), transparent);
	}
	6%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 6}, ${props.leftG + props.leftGStep * 6}, ${props.leftB + props.leftBStep * 6}, ${0.5 + 0.002 * 6}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 6}, ${props.rightG + props.rightGStep * 6}, ${props.rightB + props.rightBStep * 6}, ${0.5 + 0.002 * 6}), transparent);
	}
	7%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 7}, ${props.leftG + props.leftGStep * 7}, ${props.leftB + props.leftBStep * 7}, ${0.5 + 0.002 * 7}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 7}, ${props.rightG + props.rightGStep * 7}, ${props.rightB + props.rightBStep * 7}, ${0.5 + 0.002 * 7}), transparent);
	}
	8%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 8}, ${props.leftG + props.leftGStep * 8}, ${props.leftB + props.leftBStep * 8}, ${0.5 + 0.002 * 8}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 8}, ${props.rightG + props.rightGStep * 8}, ${props.rightB + props.rightBStep * 8}, ${0.5 + 0.002 * 8}), transparent);
	}
	9%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 9}, ${props.leftG + props.leftGStep * 9}, ${props.leftB + props.leftBStep * 9}, ${0.5 + 0.002 * 9}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 9}, ${props.rightG + props.rightGStep * 9}, ${props.rightB + props.rightBStep * 9}, ${0.5 + 0.002 * 9}), transparent);
	}
	10%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 10}, ${props.leftG + props.leftGStep * 10}, ${props.leftB + props.leftBStep * 10}, ${0.5 + 0.002 * 10}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 10}, ${props.rightG + props.rightGStep * 10}, ${props.rightB + props.rightBStep * 10}, ${0.5 + 0.002 * 10}), transparent);
	}
	11%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 11}, ${props.leftG + props.leftGStep * 11}, ${props.leftB + props.leftBStep * 11}, ${0.5 + 0.002 * 11}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 11}, ${props.rightG + props.rightGStep * 11}, ${props.rightB + props.rightBStep * 11}, ${0.5 + 0.002 * 11}), transparent);
	}
	12%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 12}, ${props.leftG + props.leftGStep * 12}, ${props.leftB + props.leftBStep * 12}, ${0.5 + 0.002 * 12}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 12}, ${props.rightG + props.rightGStep * 12}, ${props.rightB + props.rightBStep * 12}, ${0.5 + 0.002 * 12}), transparent);
	}
	13%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 13}, ${props.leftG + props.leftGStep * 13}, ${props.leftB + props.leftBStep * 13}, ${0.5 + 0.002 * 13}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 13}, ${props.rightG + props.rightGStep * 13}, ${props.rightB + props.rightBStep * 13}, ${0.5 + 0.002 * 13}), transparent);
	}
	14%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 14}, ${props.leftG + props.leftGStep * 14}, ${props.leftB + props.leftBStep * 14}, ${0.5 + 0.002 * 14}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 14}, ${props.rightG + props.rightGStep * 14}, ${props.rightB + props.rightBStep * 14}, ${0.5 + 0.002 * 14}), transparent);
	}
	15%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 15}, ${props.leftG + props.leftGStep * 15}, ${props.leftB + props.leftBStep * 15}, ${0.5 + 0.002 * 15}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 15}, ${props.rightG + props.rightGStep * 15}, ${props.rightB + props.rightBStep * 15}, ${0.5 + 0.002 * 15}), transparent);
	}
	16%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 16}, ${props.leftG + props.leftGStep * 16}, ${props.leftB + props.leftBStep * 16}, ${0.5 + 0.002 * 16}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 16}, ${props.rightG + props.rightGStep * 16}, ${props.rightB + props.rightBStep * 16}, ${0.5 + 0.002 * 16}), transparent);
	}
	17%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 17}, ${props.leftG + props.leftGStep * 17}, ${props.leftB + props.leftBStep * 17}, ${0.5 + 0.002 * 17}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 17}, ${props.rightG + props.rightGStep * 17}, ${props.rightB + props.rightBStep * 17}, ${0.5 + 0.002 * 17}), transparent);
	}
	18%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 18}, ${props.leftG + props.leftGStep * 18}, ${props.leftB + props.leftBStep * 18}, ${0.5 + 0.002 * 18}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 18}, ${props.rightG + props.rightGStep * 18}, ${props.rightB + props.rightBStep * 18}, ${0.5 + 0.002 * 18}), transparent);
	}
	19%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 19}, ${props.leftG + props.leftGStep * 19}, ${props.leftB + props.leftBStep * 19}, ${0.5 + 0.002 * 19}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 0}, ${props.rightG + props.rightGStep * 19}, ${props.rightB + props.rightBStep * 19}, ${0.5 + 0.002 * 19}), transparent);
	}
	20%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 20}, ${props.leftG + props.leftGStep * 20}, ${props.leftB + props.leftBStep * 20}, ${0.5 + 0.002 * 20}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 20}, ${props.rightG + props.rightGStep * 20}, ${props.rightB + props.rightBStep * 20}, ${0.5 + 0.002 * 20}), transparent);
	}
	21% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 21}, ${props.leftG + props.leftGStep * 21}, ${props.leftB + props.leftBStep * 21}, ${0.5 + 0.002 * 21}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 21}, ${props.rightG + props.rightGStep * 21}, ${props.rightB + props.rightBStep * 21}, ${0.5 + 0.002 * 21}), transparent);
	}
	22%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 22}, ${props.leftG + props.leftGStep * 22}, ${props.leftB + props.leftBStep * 22}, ${0.5 + 0.002 * 22}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 22}, ${props.rightG + props.rightGStep * 22}, ${props.rightB + props.rightBStep * 22}, ${0.5 + 0.002 * 22}), transparent);
	}
	23%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 23}, ${props.leftG + props.leftGStep * 23}, ${props.leftB + props.leftBStep * 23}, ${0.5 + 0.002 * 23}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 23}, ${props.rightG + props.rightGStep * 23}, ${props.rightB + props.rightBStep * 23}, ${0.5 + 0.002 * 23}), transparent);
	}
	24%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 24}, ${props.leftG + props.leftGStep * 24}, ${props.leftB + props.leftBStep * 24}, ${0.5 + 0.002 * 24}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 24}, ${props.rightG + props.rightGStep * 24}, ${props.rightB + props.rightBStep * 24}, ${0.5 + 0.002 * 24}), transparent);
	}
	25%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 25}, ${props.leftG + props.leftGStep * 25}, ${props.leftB + props.leftBStep * 25}, ${0.5 + 0.002 * 25}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 25}, ${props.rightG + props.rightGStep * 25}, ${props.rightB + props.rightBStep * 25}, ${0.5 + 0.002 * 25}), transparent);
	}
	26%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 26}, ${props.leftG + props.leftGStep * 26}, ${props.leftB + props.leftBStep * 26}, ${0.5 + 0.002 * 26}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 26}, ${props.rightG + props.rightGStep * 26}, ${props.rightB + props.rightBStep * 26}, ${0.5 + 0.002 * 26}), transparent);
	}
	27%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 27}, ${props.leftG + props.leftGStep * 27}, ${props.leftB + props.leftBStep * 27}, ${0.5 + 0.002 * 27}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 27}, ${props.rightG + props.rightGStep * 27}, ${props.rightB + props.rightBStep * 27}, ${0.5 + 0.002 * 27}), transparent);
	}
	28%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 28}, ${props.leftG + props.leftGStep * 28}, ${props.leftB + props.leftBStep * 28}, ${0.5 + 0.002 * 28}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 28}, ${props.rightG + props.rightGStep * 28}, ${props.rightB + props.rightBStep * 28}, ${0.5 + 0.002 * 28}), transparent);
	}
	29%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 29}, ${props.leftG + props.leftGStep * 29}, ${props.leftB + props.leftBStep * 29}, ${0.5 + 0.002 * 29}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 29}, ${props.rightG + props.rightGStep * 29}, ${props.rightB + props.rightBStep * 29}, ${0.5 + 0.002 * 29}), transparent);
	}
	30%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 30}, ${props.leftG + props.leftGStep * 30}, ${props.leftB + props.leftBStep * 30}, ${0.5 + 0.002 * 30}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 30}, ${props.rightG + props.rightGStep * 30}, ${props.rightB + props.rightBStep * 30}, ${0.5 + 0.002 * 30}), transparent);
	}
	31% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 31}, ${props.leftG + props.leftGStep * 31}, ${props.leftB + props.leftBStep * 31}, ${0.5 + 0.002 * 31}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 31}, ${props.rightG + props.rightGStep * 31}, ${props.rightB + props.rightBStep * 31}, ${0.5 + 0.002 * 31}), transparent);
	}
	32%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 32}, ${props.leftG + props.leftGStep * 32}, ${props.leftB + props.leftBStep * 32}, ${0.5 + 0.002 * 32}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 32}, ${props.rightG + props.rightGStep * 32}, ${props.rightB + props.rightBStep * 32}, ${0.5 + 0.002 * 32}), transparent);
	}
	33%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 33}, ${props.leftG + props.leftGStep * 33}, ${props.leftB + props.leftBStep * 33}, ${0.5 + 0.002 * 33}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 33}, ${props.rightG + props.rightGStep * 33}, ${props.rightB + props.rightBStep * 33}, ${0.5 + 0.002 * 33}), transparent);
	}
	34%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 34}, ${props.leftG + props.leftGStep * 34}, ${props.leftB + props.leftBStep * 34}, ${0.5 + 0.002 * 34}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 34}, ${props.rightG + props.rightGStep * 34}, ${props.rightB + props.rightBStep * 34}, ${0.5 + 0.002 * 34}), transparent);
	}
	35%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 35}, ${props.leftG + props.leftGStep * 35}, ${props.leftB + props.leftBStep * 35}, ${0.5 + 0.002 * 35}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 35}, ${props.rightG + props.rightGStep * 35}, ${props.rightB + props.rightBStep * 35}, ${0.5 + 0.002 * 35}), transparent);
	}
	36%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 36}, ${props.leftG + props.leftGStep * 36}, ${props.leftB + props.leftBStep * 36}, ${0.5 + 0.002 * 36}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 36}, ${props.rightG + props.rightGStep * 36}, ${props.rightB + props.rightBStep * 36}, ${0.5 + 0.002 * 36}), transparent);
	}
	37%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 37}, ${props.leftG + props.leftGStep * 37}, ${props.leftB + props.leftBStep * 37}, ${0.5 + 0.002 * 37}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 37}, ${props.rightG + props.rightGStep * 37}, ${props.rightB + props.rightBStep * 37}, ${0.5 + 0.002 * 37}), transparent);
	}
	38%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 38}, ${props.leftG + props.leftGStep * 38}, ${props.leftB + props.leftBStep * 38}, ${0.5 + 0.002 * 38}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 38}, ${props.rightG + props.rightGStep * 38}, ${props.rightB + props.rightBStep * 38}, ${0.5 + 0.002 * 38}), transparent);
	}
	39%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 39}, ${props.leftG + props.leftGStep * 39}, ${props.leftB + props.leftBStep * 39}, ${0.5 + 0.002 * 39}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 39}, ${props.rightG + props.rightGStep * 39}, ${props.rightB + props.rightBStep * 39}, ${0.5 + 0.002 * 39}), transparent);
	}
	40%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 40}, ${props.leftG + props.leftGStep * 40}, ${props.leftB + props.leftBStep * 40}, ${0.5 + 0.002 * 40}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 40}, ${props.rightG + props.rightGStep * 40}, ${props.rightB + props.rightBStep * 40}, ${0.5 + 0.002 * 40}), transparent);
	}
	41% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 41}, ${props.leftG + props.leftGStep * 41}, ${props.leftB + props.leftBStep * 41}, ${0.5 + 0.002 * 41}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 41}, ${props.rightG + props.rightGStep * 41}, ${props.rightB + props.rightBStep * 41}, ${0.5 + 0.002 * 41}), transparent);
	}
	42%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 42}, ${props.leftG + props.leftGStep * 42}, ${props.leftB + props.leftBStep * 42}, ${0.5 + 0.002 * 42}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 42}, ${props.rightG + props.rightGStep * 42}, ${props.rightB + props.rightBStep * 42}, ${0.5 + 0.002 * 42}), transparent);
	}
	43%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 43}, ${props.leftG + props.leftGStep * 43}, ${props.leftB + props.leftBStep * 43}, ${0.5 + 0.002 * 43}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 43}, ${props.rightG + props.rightGStep * 43}, ${props.rightB + props.rightBStep * 43}, ${0.5 + 0.002 * 43}), transparent);
	}
	44%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 44}, ${props.leftG + props.leftGStep * 44}, ${props.leftB + props.leftBStep * 44}, ${0.5 + 0.002 * 44}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 44}, ${props.rightG + props.rightGStep * 44}, ${props.rightB + props.rightBStep * 44}, ${0.5 + 0.002 * 44}), transparent);
	}
	45%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 45}, ${props.leftG + props.leftGStep * 45}, ${props.leftB + props.leftBStep * 45}, ${0.5 + 0.002 * 45}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 45}, ${props.rightG + props.rightGStep * 45}, ${props.rightB + props.rightBStep * 45}, ${0.5 + 0.002 * 45}), transparent);
	}
	46%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 46}, ${props.leftG + props.leftGStep * 46}, ${props.leftB + props.leftBStep * 46}, ${0.5 + 0.002 * 46}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 46}, ${props.rightG + props.rightGStep * 46}, ${props.rightB + props.rightBStep * 46}, ${0.5 + 0.002 * 46}), transparent);
	}
	47%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 47}, ${props.leftG + props.leftGStep * 47}, ${props.leftB + props.leftBStep * 47}, ${0.5 + 0.002 * 47}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 47}, ${props.rightG + props.rightGStep * 47}, ${props.rightB + props.rightBStep * 47}, ${0.5 + 0.002 * 47}), transparent);
	}
	48%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 48}, ${props.leftG + props.leftGStep * 48}, ${props.leftB + props.leftBStep * 48}, ${0.5 + 0.002 * 48}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 48}, ${props.rightG + props.rightGStep * 48}, ${props.rightB + props.rightBStep * 48}, ${0.5 + 0.002 * 48}), transparent);
	}
	49%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 49}, ${props.leftG + props.leftGStep * 49}, ${props.leftB + props.leftBStep * 49}, ${0.5 + 0.002 * 49}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 49}, ${props.rightG + props.rightGStep * 49}, ${props.rightB + props.rightBStep * 49}, ${0.5 + 0.002 * 49}), transparent);
	}
	50%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 50}, ${props.leftG + props.leftGStep * 50}, ${props.leftB + props.leftBStep * 50}, ${0.5 + 0.002 * 50}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 50}, ${props.rightG + props.rightGStep * 50}, ${props.rightB + props.rightBStep * 50}, ${0.5 + 0.002 * 50}), transparent);
	}
	51% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 51}, ${props.leftG + props.leftGStep * 51}, ${props.leftB + props.leftBStep * 51}, ${0.5 + 0.002 * 51}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 51}, ${props.rightG + props.rightGStep * 51}, ${props.rightB + props.rightBStep * 51}, ${0.5 + 0.002 * 51}), transparent);
	}
	52%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 52}, ${props.leftG + props.leftGStep * 52}, ${props.leftB + props.leftBStep * 52}, ${0.5 + 0.002 * 52}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 52}, ${props.rightG + props.rightGStep * 52}, ${props.rightB + props.rightBStep * 52}, ${0.5 + 0.002 * 52}), transparent);
	}
	53%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 53}, ${props.leftG + props.leftGStep * 53}, ${props.leftB + props.leftBStep * 53}, ${0.5 + 0.002 * 53}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 53}, ${props.rightG + props.rightGStep * 53}, ${props.rightB + props.rightBStep * 53}, ${0.5 + 0.002 * 53}), transparent);
	}
	54%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 54}, ${props.leftG + props.leftGStep * 54}, ${props.leftB + props.leftBStep * 54}, ${0.5 + 0.002 * 54}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 54}, ${props.rightG + props.rightGStep * 54}, ${props.rightB + props.rightBStep * 54}, ${0.5 + 0.002 * 54}), transparent);
	}
	55%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 55}, ${props.leftG + props.leftGStep * 55}, ${props.leftB + props.leftBStep * 55}, ${0.5 + 0.002 * 55}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 55}, ${props.rightG + props.rightGStep * 55}, ${props.rightB + props.rightBStep * 55}, ${0.5 + 0.002 * 55}), transparent);
	}
	56%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 56}, ${props.leftG + props.leftGStep * 56}, ${props.leftB + props.leftBStep * 56}, ${0.5 + 0.002 * 56}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 56}, ${props.rightG + props.rightGStep * 56}, ${props.rightB + props.rightBStep * 56}, ${0.5 + 0.002 * 56}), transparent);
	}
	57%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 57}, ${props.leftG + props.leftGStep * 57}, ${props.leftB + props.leftBStep * 57}, ${0.5 + 0.002 * 57}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 57}, ${props.rightG + props.rightGStep * 57}, ${props.rightB + props.rightBStep * 57}, ${0.5 + 0.002 * 57}), transparent);
	}
	58%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 58}, ${props.leftG + props.leftGStep * 58}, ${props.leftB + props.leftBStep * 58}, ${0.5 + 0.002 * 58}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 58}, ${props.rightG + props.rightGStep * 58}, ${props.rightB + props.rightBStep * 58}, ${0.5 + 0.002 * 58}), transparent);
	}
	59%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 59}, ${props.leftG + props.leftGStep * 59}, ${props.leftB + props.leftBStep * 59}, ${0.5 + 0.002 * 59}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 59}, ${props.rightG + props.rightGStep * 59}, ${props.rightB + props.rightBStep * 59}, ${0.5 + 0.002 * 59}), transparent);
	}
	60%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 60}, ${props.leftG + props.leftGStep * 60}, ${props.leftB + props.leftBStep * 60}, ${0.5 + 0.002 * 60}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 60}, ${props.rightG + props.rightGStep * 60}, ${props.rightB + props.rightBStep * 60}, ${0.5 + 0.002 * 60}), transparent);
	}
	61% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 61}, ${props.leftG + props.leftGStep * 61}, ${props.leftB + props.leftBStep * 61}, ${0.5 + 0.002 * 61}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 61}, ${props.rightG + props.rightGStep * 61}, ${props.rightB + props.rightBStep * 61}, ${0.5 + 0.002 * 61}), transparent);
	}
	62%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 62}, ${props.leftG + props.leftGStep * 62}, ${props.leftB + props.leftBStep * 62}, ${0.5 + 0.002 * 62}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 62}, ${props.rightG + props.rightGStep * 62}, ${props.rightB + props.rightBStep * 62}, ${0.5 + 0.002 * 62}), transparent);
	}
	63%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 63}, ${props.leftG + props.leftGStep * 63}, ${props.leftB + props.leftBStep * 63}, ${0.5 + 0.002 * 63}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 63}, ${props.rightG + props.rightGStep * 63}, ${props.rightB + props.rightBStep * 63}, ${0.5 + 0.002 * 63}), transparent);
	}
	64%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 64}, ${props.leftG + props.leftGStep * 64}, ${props.leftB + props.leftBStep * 64}, ${0.5 + 0.002 * 64}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 64}, ${props.rightG + props.rightGStep * 64}, ${props.rightB + props.rightBStep * 64}, ${0.5 + 0.002 * 64}), transparent);
	}
	65%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 65}, ${props.leftG + props.leftGStep * 65}, ${props.leftB + props.leftBStep * 65}, ${0.5 + 0.002 * 65}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 65}, ${props.rightG + props.rightGStep * 65}, ${props.rightB + props.rightBStep * 65}, ${0.5 + 0.002 * 65}), transparent);
	}
	66%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 66}, ${props.leftG + props.leftGStep * 66}, ${props.leftB + props.leftBStep * 66}, ${0.5 + 0.002 * 66}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 66}, ${props.rightG + props.rightGStep * 66}, ${props.rightB + props.rightBStep * 66}, ${0.5 + 0.002 * 66}), transparent);
	}
	67%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 67}, ${props.leftG + props.leftGStep * 67}, ${props.leftB + props.leftBStep * 67}, ${0.5 + 0.002 * 67}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 67}, ${props.rightG + props.rightGStep * 67}, ${props.rightB + props.rightBStep * 67}, ${0.5 + 0.002 * 67}), transparent);
	}
	68%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 68}, ${props.leftG + props.leftGStep * 68}, ${props.leftB + props.leftBStep * 68}, ${0.5 + 0.002 * 68}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 68}, ${props.rightG + props.rightGStep * 68}, ${props.rightB + props.rightBStep * 68}, ${0.5 + 0.002 * 68}), transparent);
	}
	69%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 69}, ${props.leftG + props.leftGStep * 69}, ${props.leftB + props.leftBStep * 69}, ${0.5 + 0.002 * 69}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 69}, ${props.rightG + props.rightGStep * 69}, ${props.rightB + props.rightBStep * 69}, ${0.5 + 0.002 * 69}), transparent);
	}
	70%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 70}, ${props.leftG + props.leftGStep * 70}, ${props.leftB + props.leftBStep * 70}, ${0.5 + 0.002 * 70}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 70}, ${props.rightG + props.rightGStep * 70}, ${props.rightB + props.rightBStep * 70}, ${0.5 + 0.002 * 70}), transparent);
	}
	71% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 71}, ${props.leftG + props.leftGStep * 71}, ${props.leftB + props.leftBStep * 71}, ${0.5 + 0.002 * 71}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 71}, ${props.rightG + props.rightGStep * 71}, ${props.rightB + props.rightBStep * 71}, ${0.5 + 0.002 * 71}), transparent);
	}
	72%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 72}, ${props.leftG + props.leftGStep * 72}, ${props.leftB + props.leftBStep * 72}, ${0.5 + 0.002 * 72}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 72}, ${props.rightG + props.rightGStep * 72}, ${props.rightB + props.rightBStep * 72}, ${0.5 + 0.002 * 72}), transparent);
	}
	73%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 73}, ${props.leftG + props.leftGStep * 73}, ${props.leftB + props.leftBStep * 73}, ${0.5 + 0.002 * 73}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 73}, ${props.rightG + props.rightGStep * 73}, ${props.rightB + props.rightBStep * 73}, ${0.5 + 0.002 * 73}), transparent);
	}
	74%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 74}, ${props.leftG + props.leftGStep * 74}, ${props.leftB + props.leftBStep * 74}, ${0.5 + 0.002 * 74}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 74}, ${props.rightG + props.rightGStep * 74}, ${props.rightB + props.rightBStep * 74}, ${0.5 + 0.002 * 74}), transparent);
	}
	75%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 75}, ${props.leftG + props.leftGStep * 75}, ${props.leftB + props.leftBStep * 75}, ${0.5 + 0.002 * 75}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 75}, ${props.rightG + props.rightGStep * 75}, ${props.rightB + props.rightBStep * 75}, ${0.5 + 0.002 * 75}), transparent);
	}
	76%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 76}, ${props.leftG + props.leftGStep * 76}, ${props.leftB + props.leftBStep * 76}, ${0.5 + 0.002 * 76}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 76}, ${props.rightG + props.rightGStep * 76}, ${props.rightB + props.rightBStep * 76}, ${0.5 + 0.002 * 76}), transparent);
	}
	77%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 77}, ${props.leftG + props.leftGStep * 77}, ${props.leftB + props.leftBStep * 77}, ${0.5 + 0.002 * 77}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 77}, ${props.rightG + props.rightGStep * 77}, ${props.rightB + props.rightBStep * 77}, ${0.5 + 0.002 * 77}), transparent);
	}
	78%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 78}, ${props.leftG + props.leftGStep * 78}, ${props.leftB + props.leftBStep * 78}, ${0.5 + 0.002 * 78}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 78}, ${props.rightG + props.rightGStep * 78}, ${props.rightB + props.rightBStep * 78}, ${0.5 + 0.002 * 78}), transparent);
	}
	79%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 79}, ${props.leftG + props.leftGStep * 79}, ${props.leftB + props.leftBStep * 79}, ${0.5 + 0.002 * 79}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 79}, ${props.rightG + props.rightGStep * 79}, ${props.rightB + props.rightBStep * 79}, ${0.5 + 0.002 * 79}), transparent);
	}
	80%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 80}, ${props.leftG + props.leftGStep * 80}, ${props.leftB + props.leftBStep * 80}, ${0.5 + 0.002 * 80}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 80}, ${props.rightG + props.rightGStep * 80}, ${props.rightB + props.rightBStep * 80}, ${0.5 + 0.002 * 80}), transparent);
	}
	81% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 81}, ${props.leftG + props.leftGStep * 81}, ${props.leftB + props.leftBStep * 81}, ${0.5 + 0.002 * 81}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 81}, ${props.rightG + props.rightGStep * 81}, ${props.rightB + props.rightBStep * 81}, ${0.5 + 0.002 * 81}), transparent);
	}
	82%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 82}, ${props.leftG + props.leftGStep * 82}, ${props.leftB + props.leftBStep * 82}, ${0.5 + 0.002 * 82}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 82}, ${props.rightG + props.rightGStep * 82}, ${props.rightB + props.rightBStep * 82}, ${0.5 + 0.002 * 82}), transparent);
	}
	83%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 83}, ${props.leftG + props.leftGStep * 83}, ${props.leftB + props.leftBStep * 83}, ${0.5 + 0.002 * 83}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 83}, ${props.rightG + props.rightGStep * 83}, ${props.rightB + props.rightBStep * 83}, ${0.5 + 0.002 * 83}), transparent);
	}
	84%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 84}, ${props.leftG + props.leftGStep * 84}, ${props.leftB + props.leftBStep * 84}, ${0.5 + 0.002 * 84}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 84}, ${props.rightG + props.rightGStep * 84}, ${props.rightB + props.rightBStep * 84}, ${0.5 + 0.002 * 84}), transparent);
	}
	85%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 85}, ${props.leftG + props.leftGStep * 85}, ${props.leftB + props.leftBStep * 85}, ${0.5 + 0.002 * 85}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 85}, ${props.rightG + props.rightGStep * 85}, ${props.rightB + props.rightBStep * 85}, ${0.5 + 0.002 * 85}), transparent);
	}
	86%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 86}, ${props.leftG + props.leftGStep * 86}, ${props.leftB + props.leftBStep * 86}, ${0.5 + 0.002 * 86}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 86}, ${props.rightG + props.rightGStep * 86}, ${props.rightB + props.rightBStep * 86}, ${0.5 + 0.002 * 86}), transparent);
	}
	87%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 87}, ${props.leftG + props.leftGStep * 87}, ${props.leftB + props.leftBStep * 87}, ${0.5 + 0.002 * 87}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 87}, ${props.rightG + props.rightGStep * 87}, ${props.rightB + props.rightBStep * 87}, ${0.5 + 0.002 * 87}), transparent);
	}
	88%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 88}, ${props.leftG + props.leftGStep * 88}, ${props.leftB + props.leftBStep * 88}, ${0.5 + 0.002 * 88}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 88}, ${props.rightG + props.rightGStep * 88}, ${props.rightB + props.rightBStep * 88}, ${0.5 + 0.002 * 88}), transparent);
	}
	89%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 89}, ${props.leftG + props.leftGStep * 89}, ${props.leftB + props.leftBStep * 89}, ${0.5 + 0.002 * 89}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 89}, ${props.rightG + props.rightGStep * 89}, ${props.rightB + props.rightBStep * 89}, ${0.5 + 0.002 * 89}), transparent);
	}
	90%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 90}, ${props.leftG + props.leftGStep * 90}, ${props.leftB + props.leftBStep * 90}, ${0.5 + 0.002 * 90}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 90}, ${props.rightG + props.rightGStep * 90}, ${props.rightB + props.rightBStep * 90}, ${0.5 + 0.002 * 90}), transparent);
	}
	91% {
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 91}, ${props.leftG + props.leftGStep * 91}, ${props.leftB + props.leftBStep * 91}, ${0.5 + 0.002 * 91}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 91}, ${props.rightG + props.rightGStep * 91}, ${props.rightB + props.rightBStep * 91}, ${0.5 + 0.002 * 91}), transparent);
	}
	92%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 92}, ${props.leftG + props.leftGStep * 92}, ${props.leftB + props.leftBStep * 92}, ${0.5 + 0.002 * 92}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 92}, ${props.rightG + props.rightGStep * 92}, ${props.rightB + props.rightBStep * 92}, ${0.5 + 0.002 * 92}), transparent);
	}
	93%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 93}, ${props.leftG + props.leftGStep * 93}, ${props.leftB + props.leftBStep * 93}, ${0.5 + 0.002 * 93}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 93}, ${props.rightG + props.rightGStep * 93}, ${props.rightB + props.rightBStep * 93}, ${0.5 + 0.002 * 93}), transparent);
	}
	94%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 94}, ${props.leftG + props.leftGStep * 94}, ${props.leftB + props.leftBStep * 94}, ${0.5 + 0.002 * 94}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 94}, ${props.rightG + props.rightGStep * 94}, ${props.rightB + props.rightBStep * 94}, ${0.5 + 0.002 * 94}), transparent);
	}
	95%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 95}, ${props.leftG + props.leftGStep * 95}, ${props.leftB + props.leftBStep * 95}, ${0.5 + 0.002 * 95}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 95}, ${props.rightG + props.rightGStep * 95}, ${props.rightB + props.rightBStep * 95}, ${0.5 + 0.002 * 95}), transparent);
	}
	96%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 96}, ${props.leftG + props.leftGStep * 96}, ${props.leftB + props.leftBStep * 96}, ${0.5 + 0.002 * 96}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 96}, ${props.rightG + props.rightGStep * 96}, ${props.rightB + props.rightBStep * 96}, ${0.5 + 0.002 * 96}), transparent);
	}
	97%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 97}, ${props.leftG + props.leftGStep * 97}, ${props.leftB + props.leftBStep * 97}, ${0.5 + 0.002 * 97}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 97}, ${props.rightG + props.rightGStep * 97}, ${props.rightB + props.rightBStep * 97}, ${0.5 + 0.002 * 97}), transparent);
	}
	98%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 98}, ${props.leftG + props.leftGStep * 98}, ${props.leftB + props.leftBStep * 98}, ${0.5 + 0.002 * 98}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 98}, ${props.rightG + props.rightGStep * 98}, ${props.rightB + props.rightBStep * 98}, ${0.5 + 0.002 * 98}), transparent);
	}
	99%{
        background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 99}, ${props.leftG + props.leftGStep * 99}, ${props.leftB + props.leftBStep * 99}, ${0.5 + 0.002 * 99}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 99}, ${props.rightG + props.rightGStep * 99}, ${props.rightB + props.rightBStep * 99}, ${0.5 + 0.002 * 99}), transparent);
	}
	100{
		background: radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 100}, ${props.leftG + props.leftGStep * 100}, ${props.leftB + props.leftBStep * 100}, ${0.5 + 0.002 * 100}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 100}, ${props.rightG + props.rightGStep * 100}, ${props.rightB + props.rightBStep * 100}, ${0.5 + 0.002 * 100}), transparent);
	}
`;

const HomePageDiv = styled.div`
	height: 100vh;
	width: 100vw;
    min-width: 465.94px;
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	background: ${(props) => `radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(${props.leftR + props.leftRStep * 100}, ${props.leftG + props.leftGStep * 100}, ${props.leftB + props.leftBStep * 100}, ${0.5 + 0.002 * 80}), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(${props.rightR + props.rightRStep * 100}, ${props.rightG + props.rightGStep * 100}, ${props.rightB + props.rightBStep * 100}, ${0.5 + 0.002 * 80}), transparent)`};
	animation: ${backgroundToGray} 2.8s linear forwards 1;
`;

export default HomePageDiv;