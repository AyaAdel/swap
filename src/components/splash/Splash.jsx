import { SplashWrapper } from './style';
import { motion } from 'framer-motion';

export default function Splash() {
	return (
		<SplashWrapper>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ ease: 'easeOut', duration: 2 }}
				exit={{ opacity: 0, scale: 0.5 }}
				style={{ transition: 'all .5s easeInOut' }}
			>
				<div className='container'>
					<img src='/images/logo.png' alt='logo' />
					<span>Swap</span>
				</div>
			</motion.div>
		</SplashWrapper>
	);
}
