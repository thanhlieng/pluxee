import GlobalStyle from './config/global.style';
import { AppRouter } from './features/AppRouter';

function App() {
    console.log('render');
    return (
        <div style={{ minHeight: '100vh' }}>
            <AppRouter />
            <GlobalStyle />
        </div>
    );
}

export default App;
