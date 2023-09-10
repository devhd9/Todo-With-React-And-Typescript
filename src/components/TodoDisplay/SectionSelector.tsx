import { setShowDoneSectionFuncType } from '../../Types/Types'

function SectionSelector({showDoneSection, setShowDoneSection}:{setShowDoneSection:setShowDoneSectionFuncType, showDoneSection: boolean}) {
  return (
    <div className='select-section-container'>
            <div onClick={()=>setShowDoneSection(false)} className={`section-select-item ${showDoneSection ? "non-" : ""}selected-section-header pointer-hover`}>
                All
            </div>
            <div onClick={()=>setShowDoneSection(true)} className={`section-select-item ${showDoneSection ? "" : "non-"}selected-section-header pointer-hover`}>
                Done
            </div>
        </div>
  )
}

export default SectionSelector