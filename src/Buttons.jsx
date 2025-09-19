function Buttons({ filteredProducts }) {

    return(
        <div className="container">
            <button onClick={()=> filteredProducts("slim")} className="change">Slim PC</button>
            <button onClick={()=> filteredProducts("nano")} className="change">Nano PC</button>
            <button onClick={()=> filteredProducts("aio")} className="change">AIO</button>
            <button onClick={()=> filteredProducts("cube")} className="change">Cube PC</button>
            <button onClick={()=> filteredProducts("ipc")} className="change">IPC</button>
            <button onClick={()=> filteredProducts("all")} className="change">All</button>
        </div>
    )
}

export default Buttons;