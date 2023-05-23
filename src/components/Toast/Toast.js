export function ToastComponent({messages, onClose}) {
    return (
        <div style={{ position: 'fixed', top: '15px', left: '15px', background: 'black' }}>
            {messages.map((x, index) => (
                <div key={index} style={{ color: x.type === 'error' ? 'red' : 'white', padding: '10px 5px' }}>
                    {x.type} : {x.text} : {x.id} : <a style={{ cursor: 'pointer', margin: '0 10px' }} onClick={() => onClose(x.id)}>X</a>
                </div>
            ))}
        </div>
    );
}