import { render } from 'preact';

import { CoverGallery } from './components/organisms/CoverGallery';

import './global/styles/reset.css';
import './global/styles/style.css';

export function App() {
	return (
		<CoverGallery />
	);
}

render(<App />, document.getElementById('app'));
