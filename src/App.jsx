import Routers from './Routers';
import { useEffect, useState } from 'react';
import Splash from './components/splash';

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return loading ? <Splash /> : <Routers />;
}
