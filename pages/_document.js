// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
			<Head>
				<link rel="stylesheet" href="..." />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Mukta&amp;family=Saira+Stencil+One&amp;display=swap"
					rel="stylesheet"
				/>

				<meta name="viewport" content="width=device-width" />

			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}