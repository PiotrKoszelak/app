import MovingElement from './MovingElement';
import Content from './Content';
import Logo from './Logo';
import Footer from './Footer';

import { backgroundShift } from '../../utils/constants';

import Lamps from '../../assets/lamps.png';
import Table from '../../assets/table.png';
import Wall from '../../assets/wall.jpg';
import Lamp from '../../assets/lamp.png';

const Layout = () => {
    return (
        <div data-testid="layout">
            <MovingElement image={Wall} shift={backgroundShift} />
            <MovingElement image={Lamp} shift={backgroundShift + 10} />
            <MovingElement image={Lamps} shift={backgroundShift + 30} />
            <MovingElement image={Table} shift={backgroundShift + 90} />
            <Content shift={backgroundShift} />
            <Logo />
            <Footer />
        </div>
    );
};

export default Layout;
