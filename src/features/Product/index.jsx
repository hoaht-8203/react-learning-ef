import { Route, Routes } from 'react-router';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    return (
        <div style={{ marginTop: '2rem' }}>
            <Routes>
                <Route path="/" element={<ListPage />} />
            </Routes>
        </div>
    );
}

export default ProductFeature;
