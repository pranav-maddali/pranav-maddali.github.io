import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';

import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
} from "react-circular-menu";

export function CircularMenu() {

    return (
        <CircleMenu
            startAngle={-90}
            rotationAngle={-180}
            itemSize={1.5}
            radius={7}
            rotationAngleInclusive={true}
        >

            <CircleMenuItem
                tooltip="Home"
                tooltipPlacement={TooltipPlacement.Top}
                >
                <HomeRoundedIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip="About"
                tooltipPlacement={TooltipPlacement.Left}
                >
                <AccountCircleIcon />
            </CircleMenuItem>

            <CircleMenuItem 
                tooltip="Email"
                tooltipPlacement={TooltipPlacement.Left}
                link="`mailto:pranav1608maddali@gmail.com`"
                target="_blank"
            >
                <MailIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip="Resume"
                tooltipPlacement={TooltipPlacement.Left}
                >
                <FormatListBulletedRoundedIcon />
            </CircleMenuItem>

            <CircleMenuItem 
                tooltip="LinkedIn"
                tooltipPlacement={TooltipPlacement.Left}
                link="https://www.linkedin.com/in/pranav-maddali/"
                target="_blank"
            >
                <LinkedInIcon />
            </CircleMenuItem>

            <CircleMenuItem
                tooltip="GitHub"
                tooltipPlacement={TooltipPlacement.Bottom}
                link="https://github.com/pranav-maddali"
                target="_blank"
            >
                <GitHubIcon />
            </CircleMenuItem>

        </CircleMenu>
    );
};