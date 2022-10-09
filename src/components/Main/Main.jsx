
import { useState } from 'react';
import { DATA } from "../../data";
import Sidebar from "../Sidebar/Sidebar";
import Episodes from "../Episodes/Episodes";
import Information from "./Information";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import styles from "./Main.module.scss";

const Main = () => {
	const [activeTab, setActiveTab] = useState(1)

	return (
		<div className={styles.wrapper}>
			<Sidebar
				
			/>
			<div
				className={styles.main}
				style={{
					backgroundImage: `url(${DATA[0].mainImage})`,
					// width: isSidebarShow ? '85%' : '90%',
				}}
			>
				{activeTab === 1 ? (
					<Information movie={DATA[0]} />
				) : (
					activeTab === 2 && <Episodes />
				)}
			</div>
			<BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	)
}

export default Main