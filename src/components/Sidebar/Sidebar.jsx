import React from 'react'
import styles from './Sidebar.module.scss'

const menu = ['Popular', 'TV Shows', 'Films', 'My list']

const Sidebar = () => {
	const [isSidebarShow, setIsSidebarShow] = React.useState(false)

	return (
		<div
			className={styles.sidebar}
			style={{ width: isSidebarShow ? '15%' : '10%' }}
		>
			<button onClick={() => setIsSidebarShow(prev => !prev)}>
				<i className={`bx bx-${isSidebarShow ? 'x' : 'border-left'}`}></i>
			</button>
			<ul className={isSidebarShow ? styles.show : ''}>
				{menu.map(title => (
					<li key={title}>
						<a href={title}>{title}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sidebar