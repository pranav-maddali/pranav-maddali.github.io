import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
} from "react-circular-menu";

import styled from 'styled-components';

const CustomTooltip = styled.span`
  font-family: 'Trebuchet MS';
  font-size: 18px;
  color: #ffffff;
`;

export function CircularMenu() {

    return (
        <CircleMenu
            startAngle={-135}
            rotationAngle={360}
            itemSize={1.75}
            radius={4}
            rotationAngleInclusive={false}
        >
            <CircleMenuItem
                tooltip={<CustomTooltip>instagram</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Top}
                link="https://www.instagram.com/pranav.maddali/"
                target="_blank"
                >
                <InstagramIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip={<CustomTooltip>resume</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Top}
                link="https://drive.google.com/file/d/1x8T65PO2EcEdk1jyKPIvBKGghFGExTRe/view?usp=sharing"
                target="_blank"
                >
                <FormatListBulletedRoundedIcon />
            </CircleMenuItem>

            <CircleMenuItem 
                tooltip={<CustomTooltip>linkedin</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Bottom}
                link="https://www.linkedin.com/in/pranav-maddali/"
                target="_blank"
            >
                <LinkedInIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip={<CustomTooltip>github</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Bottom}
                link="https://github.com/pranav-maddali"
                target="_blank"
            >
                <GitHubIcon />
            </CircleMenuItem>

        </CircleMenu>
    );
};