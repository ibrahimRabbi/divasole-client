import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
// import SizeQuanty from '../Utility/SizeQuanty/SizeQuanty'
// import Swal from 'sweetalert2'
// import { Context } from '../Authentication/AuthContext'
// import useCart from '../coustomHooks/useCart'
import { useNavigate, Navigate, Link } from 'react-router-dom'
 

export default function Modal({ obj, open, setIsOpen }) {
    const { _id, category, image, name, description, price } = obj

    // const [qunty, setQunty] = useState(1);
    // const [size, setSize] = useState('')
    // const { user } = useContext(Context)
    // const { refetch } = useCart()
    // const navigate = useNavigate()

    function closeModal() {
        setIsOpen(false)
    }


    return (
        <>

            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50 my-0 " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-opacity-25" />   
                    </Transition.Child>

                    <div className="fixed inset-0 text-zinc-950 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[70%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex justify-start gap-14'>
                                        <img width={400} src={image} alt="" />
                                        <div>
                                            <Dialog.Title as="h3" className="text-2xl font-medium leading-6">
                                                {name}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">{description}</p>
                                            </div>
                                            <Dialog.Description className='mt-6'>
                                                <h1 className='text-2xl font-semibold'>{`price ${price}-TK`}</h1>

                                            </Dialog.Description>

                                            <div className="absolute mt-5 bottom-6 space-x-4">
                                                <button type="button" className=' uppercase bg-red-400 hover:bg-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700  border-0 font-semibold text-zinc-950' onClick={closeModal}>cancel</button>
                                                <Link to={`/${category}/${_id}`} className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>View Detailes</Link>
                                                <button className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>Add To Bag</button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}







// const sizeHandler = (e) => {
//     setSize(e.target.value)
// }

// const incrementHandler = () => {
//     setQunty((pre) => pre + 1);
// };

// const decrimentHandler = () => {
//     setQunty((pre) => pre - 1);
//     if (qunty < 1) {
//         setQunty(0);
//     }
// };

// const addToBaghandler = () => {
//     if (!user) {
//         navigate('/signin')
//     } else {
//         const cartData = {
//             img: data.img,
//             title: data.title,
//             price: data.price,
//             qunty, size,
//             productId: data._id,
//             email: user?.email
//         }

//         fetch("https://cat-cart-server.vercel.app/cart", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(cartData)
//         })
//             .then(res => res.json())
//             .then(res => {
//                 if (res?.insertedId) {

//                     refetch()
//                     Swal.fire({
//                         title: `${data.title} has been added to the cart`,
//                         text: `quantity: ${qunty} size: ${size}`,
//                         icon: "success",
//                         showCancelButton: true,
//                         confirmButtonColor: "#8d5c2c",
//                         cancelButtonColor: "#d33",
//                         confirmButtonText: "Go to Cart",
//                     }).then((result) => {
//                         if (result.isConfirmed === true) {
//                             navigate("/cart");
//                         }
//                     });
//                 }
//             })
//     }
// }