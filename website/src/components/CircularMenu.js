import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';

import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
} from "react-circular-menu";

import styled from 'styled-components';

const CustomTooltip = styled.span`
  font-family: 'ubuntu';
  font-size: 18px;
  color: #ffffff;
`;

export function CircularMenu() {

    return (
        <CircleMenu
            startAngle={-90}
            rotationAngle={360}
            itemSize={1.5}
            radius={4}
            rotationAngleInclusive={false}
        >

            <CircleMenuItem
                tooltip={<CustomTooltip>resume</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Bottom}
                >
                <FormatListBulletedRoundedIcon />
            </CircleMenuItem>

            <CircleMenuItem 
                tooltip={<CustomTooltip>linkedin</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Top}
                link="https://www.linkedin.com/in/pranav-maddali/"
                target="_blank"
            >
                <LinkedInIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip={<CustomTooltip>github</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Top}
                link="https://github.com/pranav-maddali"
                target="_blank"
            >
                <GitHubIcon />
            </CircleMenuItem>

        </CircleMenu>
    );
};