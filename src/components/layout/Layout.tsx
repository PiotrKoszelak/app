import MovingElement from './MovingElement';

import Lamps from '../../assets/lamps.png';
import Desk from '../../assets/desk.png';
import Wall from '../../assets/wall.png';

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
                shift={80}
            />
            <MovingElement
                selectedMenu={selectedMenu}
                image={Lamps}
                shift={100}
            />
            <MovingElement
                selectedMenu={selectedMenu}
                image={Desk}
                shift={160}
            />
        </div>
    );
};

export default Layout;
