import { createPortal } from 'react-dom'
import { memo } from 'react'

const ToastComponent = memo(({ onClose, type, children, id }) => createPortal(
    <div style={{ background: 'black', margin: '8px' }}>
        <div style={{ color: type === 'error' ? 'red' : 'white', padding: '10px 5px' }}>
            {children}
            <a style={{ cursor: 'pointer', margin: '0 10px' }} onClick={() => onClose(id)}>X</a>
        </div>
    </div>
    , document.getElementById('modal')
))

ToastComponent.displayName = 'ToastComponent'

export default ToastComponent
