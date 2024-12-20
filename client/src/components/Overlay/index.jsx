
const Overlay = () => {

    const closeCartAndMenuSidebar = () => {
        const cartSidebar = document.querySelector(".cart");
        const menuSidebar = document.querySelector(".menu-sidebar");
        const overlay = document.querySelector(".overlay");

        if(cartSidebar){
            cartSidebar.classList.remove("open");
        }
        if(menuSidebar){
            menuSidebar.classList.remove("open");
        }
        if(overlay){
            overlay.classList.remove("open");
        }
    }

    return (
        <div className="overlay" onClick={closeCartAndMenuSidebar}></div>
    );
}

export default Overlay;