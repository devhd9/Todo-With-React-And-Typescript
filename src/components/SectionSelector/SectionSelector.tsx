import styles from './SectionSelector.module.css'
import { SectionSelectorPropType } from './SectionSelector.types'

function SectionSelector({showDoneSection, setShowDoneSection}:SectionSelectorPropType) {
  return (
    <div className={styles['select-section-container']}>
            <div onClick={()=>setShowDoneSection(false)} className={`${styles['section-select-item']} ${showDoneSection ? styles["non-selected-section-header"] : styles["selected-section-header"]} pointer-hover`}>
                All
            </div>
            <div onClick={()=>setShowDoneSection(true)} className={`${styles['section-select-item']} ${showDoneSection ? styles["selected-section-header"] : styles["non-selected-section-header"]} pointer-hover`}>
                Done
            </div>
        </div>
  )
}

export default SectionSelector