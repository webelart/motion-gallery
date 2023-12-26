import { render } from 'preact';

import Header from './components/organisms/Header';
import Main from './components/pages/Main';

import './global/styles/reset.css';
import './global/styles/style.css';

import styles from './index.module.scss';

export function App() {
	return (
		<>
			<Header className={styles.header} />
			{/* <Main /> */}
		</>
	);
}

render(<App />, document.getElementById('app'));
