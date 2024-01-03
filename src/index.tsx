import { render } from 'preact';

import Header from './components/organisms/Header';
import Home from './components/pages/Home';

import './global/styles/reset.css';
import './global/styles/style.css';

import styles from './index.module.scss';

export function App() {
	return (
		<>
			<Header className={styles.header} />
			<Home />
		</>
	);
}

render(<App />, document.getElementById('app'));
