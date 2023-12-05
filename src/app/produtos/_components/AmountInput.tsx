import { useEffect, useState } from 'react'

type AmountInputProps = {
    amount: number;
    setAmount: (value: number | ((prevVal: number) => number)) => void;
};



export default function AmountInput({ amount, setAmount }: AmountInputProps) {

    // const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    // const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    // const [holding, setHolding] = useState<boolean>(false);


    const counterChange = (delta: number) => {

        setAmount(amount => amount + delta)

    };

    return (
        <div className="bg-transparent flex flex-col min-w-max w-[100%] ">
            <h1 className="text-lg text-left py-[1vmin] opacity-80 pb-[1vmin]">Quantidade</h1>
            <div className="flex flex-row justify-between items-center w-[100%] rounded border border-[#c0c0c0] h-[7.5vmin] gap-[2vmin] py-[1vmin] ">
                <span className="pl-[2vmin]">{amount + " Kg"}</span>
                
                <div className="flex gap-[1vmin] pr-[1vmin] h-[7vmin] py-[0.5vmin] " >
                    <button onMouseDown={() => counterChange(1)}

                        className="min-w-max bg-[#e3e3e3] aspect-square h-[100%] active:scale-90 transform ">
                        <span>+</span>
                    </button>
                    <button onMouseDown={() => counterChange(-1)}

                        className="min-w-max bg-[#e3e3e3] aspect-square h-[100%] active:scale-90">
                        <span>-</span>
                    </button>
                </div>
            </div>
        </div>
    );
}