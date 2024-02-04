// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItems, isActiveId, updateTabId} = props
  const {tabId, displayText} = tabItems

  const onClickButton = () => {
    updateTabId(tabId)
  }

  const getActiveId = isActiveId ? 'tab-button active' : 'tab-button'

  return (
    <div>
      <li className="tab-item">
        <button type="button" onClick={onClickButton} className={getActiveId}>
          {displayText}
        </button>
      </li>
    </div>
  )
}
export default TabItem
