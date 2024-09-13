import { useCallback, useState } from 'react';

import MenuBar from './components/menu/MenuBar';
import Layout from './components/layout/Layout';

import './App.css';

function App() {
    const [selectedMenu, setSelectedMenu] = useState(0);

    const onSelectedMenuChange = useCallback((menu: number) => {
        setSelectedMenu(menu);
    }, []);

    return (
        <>
            <Layout selectedMenu={selectedMenu} />
            <MenuBar
                selectedMenu={selectedMenu}
                onSelectedMenuChange={onSelectedMenuChange}
            />
        </>
    );
}

export default App;
