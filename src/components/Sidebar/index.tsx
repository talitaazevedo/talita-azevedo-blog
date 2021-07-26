import { AiFillInstagram } from 'react-icons/ai';
import { SideBar, Menu, SocialMenu } from './styles';
import { Profile } from '../Profile';

export function Sidebar() {
    return (
        <SideBar>
            <Profile />
            <SocialMenu>
                <ul>
                    <li>
                        <a href="#">
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </SocialMenu>
            <Menu>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Sobre Mim</a>
                    </li>
                    <li>
                        <a href="">Posts</a>
                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                </ul>
            </Menu>
        </SideBar>
    );
}
