export default function Price(props: { price: String }) {
    return (
        <div className="flex flex-col justify-center items-start w-[100%] min-w-max ">
            <h1 className="text-lg text-center py-[1vmin] opacity-80">Preço</h1>
            <h1 className="text-base text-center pb-[2vmin]">R$ {props.price} / Kg </h1>
        </div>
    );
}