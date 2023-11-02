import React from 'react'

const Layout = ({ children }) => {
	return <div className='py-10 bg-zinc-900 h-screen'>{children}</div>
}
// принимаем children, и отображаем обертку с children

export default Layout
