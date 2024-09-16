import MovingElement from './MovingElement';
import TextElement from './TextElement';

import Lamps from '../../assets/lamps.png';
import Table from '../../assets/table.png';
import Wall from '../../assets/wall.png';
import Lamp from '../../assets/lamp.png';

import { backgroundShift } from '../../utils/constants';

interface LayoutProps {
    selectedMenu: number;
}

const Layout = (props: LayoutProps) => {
    const { selectedMenu } = props;
    return (
        <div data-testid="layout">
            <MovingElement
                selectedMenu={selectedMenu}
                image={Wall}
                shift={backgroundShift}
            />
            <MovingElement
                selectedMenu={selectedMenu}
                image={Lamp}
                shift={90}
            />
            <MovingElement
                selectedMenu={selectedMenu}
                image={Lamps}
                shift={100}
            />
            <MovingElement
                selectedMenu={selectedMenu}
                image={Table}
                shift={160}
            />
            <TextElement selectedMenu={selectedMenu} shift={backgroundShift} />
        </div>
    );
};

export default Layout;
