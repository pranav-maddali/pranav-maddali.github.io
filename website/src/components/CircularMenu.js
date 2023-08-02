import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import $ from "jquery";

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

const blur = (active) => {
    if (active) {
        $(document.getElementsByClassName("Column")).css('filter', 'blur(5px)');
        $(document.getElementsByClassName("Column")).css('transition', '1.5s');
    }
    else {
        $(document.getElementsByClassName("Column")).css('filter', 'blur(0px)');
    }
}

export function CircularMenu() {
    return (
        <CircleMenu
            startAngle={-180}
            rotationAngle={180}
            itemSize={1.25}
            radius={5}
            rotationAngleInclusive={true}
            onMenuToggle={(menuActive) => blur(menuActive)}
        >
            <CircleMenuItem
                tooltip={<CustomTooltip>follow me on instagram</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Left}
                link="https://www.instagram.com/pranav.maddali/"
                target="_blank"
                >
                <InstagramIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip={<CustomTooltip>check out my resume</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Left}
                link="https://drive.google.com/file/d/1qRAQdcC3DyxilLRXHEkRz83vgEd7msB0/view?usp=sharing"
                target='_blank'
                >
                <FormatListBulletedRoundedIcon />
            </CircleMenuItem>

            <CircleMenuItem 
                tooltip={<CustomTooltip>visit my linkedin</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Top}
                link="https://www.linkedin.com/in/pranav-maddali/"
                target="_blank"
            >
                <LinkedInIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip={<CustomTooltip>check out my github</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Right}
                link="https://github.com/pranav-maddali"
                target="_blank"
            >
                <GitHubIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip={<CustomTooltip>follow me on spotify</CustomTooltip>}
                tooltipPlacement={TooltipPlacement.Right}
                link="https://open.spotify.com/user/pranav1608maddali"
                target="_blank"
                >
                <LibraryMusicRoundedIcon />
            </CircleMenuItem>

        </CircleMenu>
    );
};