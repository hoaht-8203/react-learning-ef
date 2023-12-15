import { Container } from '@mui/material';
import Header from 'components/Header';
import { useSnackbar } from 'notistack';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ColorBox from './components/ColorBox';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
    const { enqueueSnackbar } = useSnackbar();

    const openNofi = () => {
        enqueueSnackbar('This is nofication', {
            autoHideDuration: 2000,
            variant: 'success',
        });
    };

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const params = {
    //             _limit: 10,
    //         };

    //         const products = await productApi.getAll(params);
    //         console.log(products);
    //     };

    //     fetchProducts();
    // }, []);

    return (
        <>
            <Header />
            <button onClick={openNofi}>Show nofi</button>

            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<CounterFeature />} />
                    <Route path="/todos/*" element={<TodoFeature />} />
                    <Route path="/albums" element={<AlbumFeature />} />
                    <Route path="/colorbox" element={<ColorBox />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
