import { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import Button from './Button';

const Cart = () => {
  const { currentColor, setIsClicked } = useStateContext();
  const [quantities, setQuantities] = useState(cartData.map(() => 1));

  const updateQuantity = (index, change) => {
    setQuantities((currentQuantities) => currentQuantities.map((quantity, itemIndex) => (
      itemIndex === index ? Math.max(1, quantity + change) : quantity
    )));
  };

  const subtotal = cartData.reduce((total, item, index) => (
    total + Number(item.price.replace('$', '')) * quantities[index]
  ), 0);

  return (
    <div className="fixed inset-0 z-50 bg-(--half-transparent)" onClick={() => setIsClicked({})}>
      <aside
        className="ml-auto flex h-full w-full max-w-md flex-col bg-white text-gray-800 shadow-2xl dark:bg-[#484B52] dark:text-gray-200"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-(--border-color) px-6 py-5 dark:border-gray-600">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Your selection</p>
            <h2 className="mt-1 text-xl font-semibold">Shopping Cart</h2>
          </div>
          <button
            type="button"
            aria-label="Close shopping cart"
            className="rounded-full p-2 text-2xl text-gray-500 transition-colors hover:bg-(--light-gray) hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setIsClicked({})}
          >
            <MdOutlineCancel />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6">
          <div className="flex items-center justify-between py-5">
            <p className="font-semibold">Order summary</p>
            <span className="rounded-full bg-(--light-gray) px-3 py-1 text-xs font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-300">
              {quantities.reduce((total, quantity) => total + quantity, 0)} items
            </span>
          </div>

          <div className="divide-y divide-(--border-color) dark:divide-gray-600">
            {cartData.map((item, index) => (
              <article key={item.name} className="flex gap-4 py-5 first:pt-0">
                <img className="h-20 w-20 shrink-0 rounded-xl object-cover" src={item.image} alt={item.name} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold capitalize">{item.name}</p>
                  <p className="mt-1 text-xs font-semibold text-gray-500 dark:text-gray-400">{item.category}</p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="font-semibold">{item.price}</p>
                    <div className="flex items-center overflow-hidden rounded-lg border border-(--border-color) dark:border-gray-600">
                      <button type="button" aria-label={`Decrease ${item.name} quantity`} className="p-2 text-gray-500 hover:bg-(--light-gray) dark:hover:bg-gray-700" onClick={() => updateQuantity(index, -1)}><AiOutlineMinus /></button>
                      <span className="min-w-8 border-x border-(--border-color) px-2 py-1 text-center text-sm font-semibold dark:border-gray-600">{quantities[index]}</span>
                      <button type="button" aria-label={`Increase ${item.name} quantity`} className="p-2 text-gray-500 hover:bg-(--light-gray) dark:hover:bg-gray-700" onClick={() => updateQuantity(index, 1)}><AiOutlinePlus /></button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="border-t border-(--border-color) px-6 py-5 dark:border-gray-600">
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span style={{ color: currentColor }}>${subtotal}</span>
            </div>
          </div>
          <div className="mt-5">
            <Button color="white" bgColor={currentColor} text="Place Order" borderRadius="10px" width="full" />
          </div>
        </footer>
      </aside>
    </div>
  )
}

export default Cart;