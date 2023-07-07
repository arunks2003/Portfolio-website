import './index.scss';
import Sidebar from '../Siderbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar></Sidebar>
            <div className="page">
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet></Outlet>

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout