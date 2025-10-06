import { useState } from "react"
import { useTheme } from "../../../hooks/theme";
import { useAuth } from "../../../hooks/auth";
import { Container, Icon, LeftSide, RightSide } from "./styles";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

export const Navbar = () => {
    const [fullscreenEnabled, setFullscreenEnabled] = useState(false);
    const { handleToogleTheme, theme } = useTheme();
    const { handleSignOut } = useAuth();
    
    const handleToogleFullscren = async () => {
        let enabled = true;

        if(!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if(document.exitFullscreen) {
            await document.exitFullscreen();
            enabled = false;
        }

        setFullscreenEnabled(enabled);
    }

    return (
        <Container>
            <LeftSide>
                <Icon onClick={handleToogleFullscren}>
                    {fullscreenEnabled ? <BiExitFullscreen /> : <BiFullscreen />}
                </Icon>
            </LeftSide>
            <RightSide>
                <Icon onClick={handleToogleTheme}>
                    {theme == 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </Icon>
                <Icon onClick={handleSignOut}>
                    <TbLogout />
                </Icon>
            </RightSide>
        </Container>
    )
}