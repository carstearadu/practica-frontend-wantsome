import React from 'react';

import styles from './Header.module.scss'

class Header extends Component {
    state = {
        isInputFocused: false;
    }

    setInputFocused = () => {
        const { isInputFocused } = this.state;
        this.setState( {isInputFocused: !isInputFocused})
    }

    render() {
        const { imgUrl } = this.props;
        const { isInputFocused } = this.state;

        return (
            <header className={styles.header}>
                <img src={imgUrl} alt='logo' />

                <input onFocus = {this.setInputFocused}type='search' value ='keyword' />

                <ul>
                    <li>
                        <a href='#'>Link 1 </a>
                    </li>
                 </ul>
            </header>
        );
    }
}

Header.propTypes = {

}

export default Header;