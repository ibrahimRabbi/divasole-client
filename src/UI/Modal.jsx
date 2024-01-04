import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
// import SizeQuanty from '../Utility/SizeQuanty/SizeQuanty'
import Swal from 'sweetalert2'
import { Context } from '../Authentication/AuthContext'
// import useCart from '../coustomHooks/useCart'
import { useNavigate, Navigate, Link } from 'react-router-dom'

export default function Modal({ obj, open, setIsOpen }) {
    const { _id, category, image, name, description, price } = obj
    const availableSize = [5, 6, 7, 8, 10, 10.5, 12, 12.5, '15+']
    const [qnty, setQnty] = useState(1)
    const [size, setSize] = useState(7)


    const { user } = useContext(Context)

    const navigate = useNavigate()

    function closeModal() {
        setIsOpen(false)
    }

    const incrimentHandler = () => {
        setQnty(v => {
            if (v >= 10) {
                return v = 10
            }
            return v + 1
        })
    }

    const dicrimentHandler = () => {
        setQnty(v => {
            if (v < 2) {
                return v = 1
            }
            return v - 1
        })
    }


    const sizeHandler = (size) => {
        setSize(size)
    }

    const addToCartHandler = () => {
        if (!user) {
            return navigate('/signin')
        } else {

            const addData = {
                userMail: user?.email,
                productId: _id,
                name,
                price,
                size, qnty,
                image
            }
            fetch(`https://toys-server-ebon.vercel.app/cart`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(addData)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {

                        Swal.fire({
                            title: 'cart have been Added successfully',
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'view Cart'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/cart')
                            }
                        })
                    }
                })
        }
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
                                <Dialog.Panel className="lg:w-[70%] w-[85%] transform overflow-hidden rounded-2xl bg-slate-100 border p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex lg:flex-row flex-col justify-start gap-5 lg:gap-14'>
                                        <img className='' width={400} src={image} alt="" />
                                        <div>
                                            <Dialog.Title as="h3" className="text-xl font-medium leading-6">
                                                {name}
                                            </Dialog.Title>

                                            <Dialog.Description className='mt-6'>
                                                <div className='flex mt-10 justify-between w-[95%] items-center'>
                                                    <h1 className='text-xl lg:text-2xl text-zinc-950 font-semibold mt-5'>{`price ${price}-TK`}</h1>
                                                    <div>
                                                        <p className='font-semibold'>Quantity:</p>
                                                        <div className='flex justify-center items-center px-2 bg-slate-200 gap-5 rounded-md'>
                                                            <button onClick={dicrimentHandler} className='p-2 text-lg font-bold'>-</button>
                                                            <p className='px-1'>{qnty}</p>
                                                            <button onClick={incrimentHandler} className='p-2 text-lg font-bold' >+</button>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='mt-10'>
                                                    <p className='font-semibold'>Available Sizes:</p>
                                                    <div className='flex flex-wrap gap-4'>
                                                        {availableSize.map(v => {
                                                            return (
                                                                <div key={Math.random()} onClick={() => sizeHandler(v)} className={`${size === v ? 'bg-purple-500 text-slate-50 font-normal' : ''} border border-zinc-700 cursor-pointer font-semibold text-zinc-700 text-xs p-2 rounded-lg`} >
                                                                    {v} Inch
                                                                </div>
                                                            )

                                                        })}
                                                    </div>
                                                </div>

                                            </Dialog.Description>

                                            <div className="mt-20 space-x-4">
                                                <button type="button" className=' uppercase bg-red-400 hover:bg-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700  border-0 font-semibold text-zinc-950' onClick={closeModal}>cancel</button>
                                                <Link to={`/category/${_id}`} className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>View Detailes</Link>
                                                <button onClick={addToCartHandler} className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>Add To Cart</button>
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