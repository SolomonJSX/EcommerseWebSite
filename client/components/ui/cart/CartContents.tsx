import React from 'react';
import Image from "next/image";
import {RiDeleteBin3Line} from "react-icons/ri";

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            productName: "Парацетамол 500 мг",
            dosage: "500 мг", // вместо размера
            form: "Таблетки", // вместо цвета
            quantity: 2,
            price: 1200,
            image: "https://picsum.photos/200?random=11",
        },
        {
            productId: 2,
            productName: "Витамин C",
            dosage: "1000 мг",
            form: "Таблетки шипучие",
            quantity: 1,
            price: 1800,
            image: "https://picsum.photos/200?random=12",
        },
        {
            productId: 3,
            productName: "Градусник электронный",
            dosage: "-",
            form: "Устройство",
            quantity: 1,
            price: 3500,
            image: "https://picsum.photos/200?random=13",
        },
        {
            productId: 4,
            productName: "Антисептик для рук",
            dosage: "250 мл",
            form: "Жидкость",
            quantity: 1,
            price: 900,
            image: "https://picsum.photos/200?random=14",
        },
    ];


    return (
        <div>
            {cartProducts.map((product) => (
                <div
                    key={product.productId}
                    className={"flex justify-between items-center py-4 border-b border-gray-200"}
                >
                    <div className="flex items-start">
                        <Image
                            src={product.image}
                            alt={product.productName}
                            width={80}
                            height={84}
                            className="object-cover mr-4"
                        />

                        <div>
                            <h3>{product.productName}</h3>
                            <p className={"text-sm text-gray-500"}>
                                {product.form} • {product.dosage}
                            </p>
                            <div className={"flex items-center mt-2"}>
                                <button className={"border rounded px-3 py-1 text-xl font-medium"}>
                                    -
                                </button>
                                <span className={"mx-4"}>{product.quantity}</span>
                                <button className={"border rounded px-3 py-1 text-xl font-medium"}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>$ {product.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin3Line className={"h-6 w-6 mt-2 text-red-600"} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;