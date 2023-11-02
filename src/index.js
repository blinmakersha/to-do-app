import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout'
import Home from './components/screen/Home/Home'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Layout>
			<Home /> {/* children */}
		</Layout>
	</React.StrictMode>
)
// передаем в index.html через root, наши рабочие файлы js, jsx

reportWebVitals()
