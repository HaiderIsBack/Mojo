import { KeyboardArrowDown, KeyboardArrowUp, Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <>
        <section className="container mx-auto grid grid-cols-12 min-h-screen gap-10">
            <div className="col-span-7">
                <div className="flex justify-between items-center my-3">
                    <h6 className="uppercase text-sm font-semibold">Product</h6>
                    <h6 className="uppercase text-sm font-semibold">Total</h6>
                </div>
                <hr />
                {
                    cart.items && cart.items.length > 0 ? (
                        cart.items.map(item => {
                            return <CartProduct key={item.id} product={item} />
                        })
                    ) : null
                }
            </div>
            <div className="col-span-5">
                <div className="my-3">
                    <h6 className="uppercase text-sm font-semibold">Cart Totals</h6>
                </div>
                <hr />
                <AddCoupon />
                <hr />
                <div className="flex justify-between items-center px-3 py-4">
                    <h6 className="text-md font-normal">Subtotal</h6>
                    <p className="text-md">Rs.{cart.totalPrice}</p>
                </div>
                <hr />
                <div className="flex justify-between items-center px-3 py-4">
                    <h6 className="text-xl font-bold">Total</h6>
                    <p className="text-xl">Rs.{cart.totalPrice}</p>
                </div>
                <button className='w-full hidden sm:block bg-blue-600 hover:bg-blue-700 text-lg lg:text-md text-white mt-2 py-4'>Proceed to Checkout</button>
            </div>
        </section>
        </>
    );
}

const AddCoupon = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(prev => !prev);
    }
    return (<>
        <div className="flex justify-between items-center cursor-pointer duration-300 px-3 pt-4" style={{paddingBottom: isActive ? "0" : "1rem"}} onClick={handleClick}>
            <h6 className="text-md font-normal">Add a coupon</h6>
            <p className="text-md text-gray-700">{isActive ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</p>
        </div>
        <div className="flex gap-2 duration-300 overflow-hidden" style={{maxHeight: isActive ? "200px" : "0px", padding: isActive ? "1rem 0.75rem" : "0 0.75rem"}}>
            <input type="text" className="flex-[2] border-[1px] border-black rounded-sm" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white flex-1 py-3">Apply</button>
        </div>
    </>);
}

const CartProduct = ({ product }) => {
    const dispatch = useDispatch();

    const changeQuantity = (action) => {
        if(action === "increase"){
            dispatch(addItem(product));
        }else{
            dispatch(removeItem(product.id));
        }
    } 
    return (<>
        <div className="grid grid-cols-12 gap-5 px-3 py-4">
            <div className="col-span-2">
                <Link to={"/product/" + product.id}>
                    <img src={product.imageUrl} alt={product.name} className="w-full aspect-square object-contain" loading="lazy" />
                </Link>
            </div>
            <div className="col-span-10">
                <h2 className="flex justify-between items-center text-lg pt-1">
                    <Link to={"/product/" + product.id}>{product.name}</Link>
                    <span>Rs.{product.totalPrice}</span>
                </h2>
                <p className="my-3 text-xl font-normal">Rs.{product.price}</p>
                <div className="flex justify-start items-center">
                    <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('decrease')}><Remove fontSize="small" /></span>
                    <span className="px-5">{product.quantity}</span>
                    <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('increase')}><Add fontSize="small" /></span>
                </div>
            </div>
        </div>
        <hr />
    </>);
}

export default Cart;