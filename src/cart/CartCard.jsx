import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import '../Navbar/navbar.css'
import Swal from "sweetalert2";



const Card = ({ obj, handler }) => {

    return (
        <section>
            <div className="flex backDrp items-start gap-6 border p-4 rounded-lg shadow-md">
                <div className="avatar">
                    <div className="w-32 rounded-xl">
                        <img src='https://i.ibb.co/b62tbqv/1696653667598.png' alt="" />
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl text font-semibold">{obj?.name}</h1>
                    <div className="flex items-center gap-10 text-zinc-900 text-sm mt-1 font-semibold">
                        <p>Size: {obj?.size}-inch</p>
                        <p>Quantity: {obj?.qnty}</p>
                    </div>
                    <div className="flex items-center gap-11 mt-5">
                        <p className="text-xl font-semibold mt-2">Price : {obj?.price}-TK</p>
                        <button onClick={() => handler(obj?._id)}>
                            <FaTrashAlt className="text-red-600 text-xl mt-2"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;