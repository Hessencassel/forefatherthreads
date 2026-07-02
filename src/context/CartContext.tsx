import { createContext, useReducer, useEffect, useRef, type ReactNode, type Dispatch } from 'react';
import type { CartState, CartAction, CartItem } from '../types';

const CART_STORAGE_KEY = 'fft-cart';

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    const items = saved ? JSON.parse(saved) : [];
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.key === action.payload.key
      );
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: newItems, isOpen: true };
      }
      return { ...state, items: [...state.items, action.payload], isOpen: true };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.key !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.key === action.payload.key
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'HYDRATE_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

export interface CartContextValue {
  state: CartState;
  dispatch: Dispatch<CartAction>;
  addItem: (item: CartItem) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // Always starts empty on both the server-prerendered pass and the
  // client's first render, matching each other exactly. Reading
  // localStorage synchronously here (e.g. via useReducer's lazy-init
  // 3rd argument) would make the client's first render diverge from
  // the prerendered HTML — which has no access to localStorage and
  // always renders an empty cart — triggering a React hydration
  // mismatch. Restoring happens after mount instead, in the effect below.
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const hasHydrated = useRef(false);

  // Restore the persisted cart once, after mount (client-only).
  useEffect(() => {
    const items = readStoredCart();
    if (items.length > 0) {
      dispatch({ type: 'HYDRATE_CART', payload: items });
    }
  }, []);

  // Persist on every change — but not on the very first run of this
  // effect (which fires on mount with the still-empty initial state,
  // before the hydrate effect above has had a chance to restore
  // anything). Without this guard, that first run would briefly
  // overwrite a previously-saved non-empty cart with `[]`.
  useEffect(() => {
    if (!hasHydrated.current) {
      hasHydrated.current = true;
      return;
    }
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // localStorage unavailable (private browsing, quota exceeded, etc.)
    }
  }, [state.items]);

  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (key: string) => dispatch({ type: 'REMOVE_ITEM', payload: key });
  const updateQuantity = (key: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } });

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ state, dispatch, addItem, removeItem, updateQuantity, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
