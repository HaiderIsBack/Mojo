import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Add, Close, Remove } from "@mui/icons-material";
import { addItem, removeItem } from "../../redux/cartSlice";

const CartSidebar = () => {
    const [products, setProducts] = useState([]);
    const cart = useSelector((state) => state.cart);

    const closeCart = () => {
        const cartSidebar = document.querySelector(".cart");
        const overlay = document.querySelector(".overlay");

        cartSidebar.classList.remove("open");
        overlay.classList.remove("open");
    }

    return (
        <>
        <div className="cart fixed top-0 right-[-100%] w-[300px] md:w-[350px] h-screen bg-white duration-300 z-[56]">
            <div className="flex justify-between items-center py-5 px-3 border-b-[1px] border-gray-400">
                <h2 className="font-bold ml-3">Cart</h2>
                <p className="cursor-pointer hover:text-red-600 flex items-center" onClick={closeCart}><Close fontSize="small" style={{marginTop: "-4px"}} /> Close</p>
            </div>
            <div style={{height: "calc(100% - 116px - 66px)"}} className="overflow-auto">
                {
                    cart.items && cart.items.length > 0 ? (
                        cart.items.map(item => {
                            return <CartItem key={item.id} item={item} />
                        })
                    )
                    : <div className="flex flex-col justify-center items-center gap-3 w-full h-full">
                        <h6>No products added to cart.</h6>
                        <button className="bg-transparent border-[1px] rounded-[30px] border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 duration-300 px-7 py-3">Return to Shop</button>
                    </div> 
                }
            </div>
            <div className="absolute bottom-0 left-0 bg-white w-full p-5 border-t-2 border-blue-700">
                <h2>Total: <p className="text-blue-600 inline-block">${cart.totalPrice}</p></h2>
                <div className="grid grid-cols-2 gap-1">
                    <Link className='w-full col-span-2 sm:col-span-1 bg-transparent text-center hover:bg-blue-600 hover:text-white duration-200 border-[1px] border-blue-600 text-blue-600 text-xs lg:text-md mt-2 py-3' to={"/cart"} >View Cart</Link>
                    <button className='w-full hidden sm:block bg-blue-600 hover:bg-blue-700 text-xs lg:text-md text-white mt-2 py-3'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
        </>
    );
}

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const changeQuantity = (action) => {
        if(action === "increase"){
            dispatch(addItem(item));
        }else{
            dispatch(removeItem(item.id));
        }
    } 
    return (
        <div className="cart-item flex items-center border-b-[1px] border-gray-400 py-3 px-5">
            <img src={item.imageUrl} alt={item.name} className="w-[75px] aspect-square object-contain" />
            <div className="py-3 pl-4 w-full">
                <h5>{item.name}</h5>
                <div className="w-full flex items-center justify-between">
                    <p className="text-blue-700">${item.totalPrice}</p>
                    <p className="text-black">${item.price}/-</p>
                </div>
                <div className="flex justify-start items-center">
                    <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('decrease')}><Remove fontSize="small" /></span>
                    <span className="px-5">{item.quantity}</span>
                    <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('increase')}><Add fontSize="small" /></span>
                </div>
            </div>
        </div>
    );
}

export default CartSidebar;