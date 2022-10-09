import Search from "../Search/Search";
import Profile from "./Profile";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <a href="/">
                    <img
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        width="112"
                        height="35"
                        alt="netflix"
                    />
                </a>
                <Search />
            </div>
            <Profile />
        </div>
    );
};

export default Header;
