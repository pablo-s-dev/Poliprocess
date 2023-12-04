export default function AmountInput(props: { amount: number, setAmount: Function }) {

    return (
        <div className="bg-transparent flex flex-col min-w-max w-[100%] ">
            <h1 className="text-lg text-left py-[1vmin] opacity-80 pb-[1vmin]">Quantidade</h1>
            <div className="flex flex-row justify-between items-center w-[100%] rounded border border-[#c0c0c0] py-[2vmin] gap-[2vmin] ">
                <span className="pl-[2vmin]">{props.amount + " Kg"}</span>
                <div >
                    <button onClick={() => props.setAmount(props.amount + 1)} className="pr-[1vmin] min-w-max ">
                        <span className="bg-[#e3e3e3] px-[2vmin] py-[1.5vmin]">+</span>
                    </button>
                    <button onClick={() => props.amount > 100 ? props.setAmount(props.amount - 1) : null} className="pr-[1vmin] min-w-max ">
                        <span className="bg-[#e3e3e3] px-[2vmin] py-[1.5vmin]">-</span>
                    </button>
                </div>
            </div>
        </div>
    );
}