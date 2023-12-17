import { Route, Routes } from 'react-router';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    return (
        <div>
            Product Feature
            <Routes>
                <Route path="/" element={<ListPage />} />
            </Routes>
        </div>
    );
}

export default ProductFeature;
