import MovingElement from './MovingElement';
import TextElement from './TextElement';
import Logo from './Logo';
import Footer from './Footer';

import Lamps from '../../assets/lamps.png';
import Table from '../../assets/table.png';
import Wall from '../../assets/wall.jpg';
import Lamp from '../../assets/lamp.png';

import { backgroundShift } from '../../utils/constants';

const Layout = () => {
    return (
        <div data-testid="layout">
            <MovingElement image={Wall} shift={backgroundShift} />
            <MovingElement image={Lamp} shift={80} />
            <MovingElement image={Lamps} shift={100} />
            <MovingElement image={Table} shift={160} />
            <TextElement shift={backgroundShift} />
            <Logo />
            <Footer />
        </div>
    );
};

export default Layout;
