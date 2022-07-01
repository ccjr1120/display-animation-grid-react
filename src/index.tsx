import { createRoot } from 'react-dom/client';
import View from './View';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode as HTMLElement);
root.render(<View />);
