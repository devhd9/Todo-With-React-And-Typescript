import logo from '../../todo-icon.png';
import styles from './AppIcon.module.css'

function AppIcon() {
  return (
    <div className={`${styles['icon-container']}`}>
            <img className='app-icon' src={logo} alt='logo' />
    </div>
  )
}

export default AppIcon