import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import '../Navbar/navbar.css'
import Swal from "sweetalert2";



const Card = ({ obj}) => {


    const deleteHandler = (id) => {  
        fetch(`http://localhost:5000/cart/${id}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then(res => {
                if (res.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Delete Done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    action()
                }
            })
    }



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
                    <div className="flex items-center gap-10 mt-2 text-gray-500 font-semibold">
                        <p>Size: 12inch</p>
                        <p>Quantity: 2</p>
                    </div>
                    <div className="flex items-center gap-11 mt-3">
                        <p className="text-xl font-semibold mt-2">Price:{obj?.price}-TK</p>
                        <button onClick={() => deleteHandler(obj?._id)}>
                            <FaTrashAlt className="text-red-600 text-xl mt-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;