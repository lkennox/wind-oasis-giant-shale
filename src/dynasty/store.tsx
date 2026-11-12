import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dishById, type CourseId } from "@/data/catalog";

export type View = "home" | "menu" | "book" | "pickup" | "story" | "events" | "contacts";

export type CartLine = { id: string; qty: number };

export type Reservation = {
  id: string;
  date: string;
  time: string;
  guests: number;
  tableId: string | null;
  tableLabel: string;
  name: string;
  phone: string;
  occasion: string;
  comment: string;
  mode: "table" | "consult";
};

export type Order = {
  id: string;
  whenLabel: string;
  name: string;
  phone: string;
  comment: string;
  lines: { id: string; name: string; qty: number; price: number }[];
  total: number;
};

export type Note = {
  id: string;
  title: string;
  name: string;
  phone: string;
};

type Toast = { id: number; text: string };

type Persisted = {
  cart: CartLine[];
  reservations: Reservation[];
  orders: Order[];
  notes: Note[];
  alcohol: "unknown" | "yes" | "no";
};

type Store = Persisted & {
  hydrated: boolean;
  view: View;
  course: CourseId | "all";
  query: string;
  openDish: string | null;
  cartOpen: boolean;
  navOpen: boolean;
  toasts: Toast[];
  go: (view: View, course?: CourseId | "all") => void;
  setCourse: (course: CourseId | "all") => void;
  setQuery: (query: string) => void;
  setOpenDish: (id: string | null) => void;
  setCartOpen: (open: boolean) => void;
  setNavOpen: (open: boolean) => void;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  addReservation: (reservation: Reservation) => void;
  cancelReservation: (id: string) => void;
  addOrder: (order: Order) => void;
  addNote: (note: Note) => void;
  setAlcohol: (value: "yes" | "no") => void;
  push: (text: string) => void;
  count: number;
};

const KEY = "dynasty-luhansk-v1";
const StoreContext = createContext<Store | null>(null);

const empty: Persisted = {
  cart: [],
  reservations: [],
  orders: [],
  notes: [],
  alcohol: "unknown",
};

export function DynastyProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Persisted>(empty);
  const [hydrated, setHydrated] = useState(false);
  const [view, setView] = useState<View>("home");
  const [course, setCourse] = useState<CourseId | "all">("all");
  const [query, setQuery] = useState("");
  const [openDish, setOpenDish] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Persisted>;
        setData({
          cart: parsed.cart ?? [],
          reservations: parsed.reservations ?? [],
          orders: parsed.orders ?? [],
          notes: parsed.notes ?? [],
          alcohol: parsed.alcohol ?? "unknown",
        });
      }
    } catch {
      /* ignore broken local data */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(KEY, JSON.stringify(data));
  }, [data, hydrated]);

  useEffect(() => {
    document.body.classList.toggle("is-lock", Boolean(openDish || cartOpen || navOpen));
    return () => document.body.classList.remove("is-lock");
  }, [openDish, cartOpen, navOpen]);

  const push = (text: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts((current) => [...current, { id, text }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 2600);
  };

  const go = (next: View, nextCourse?: CourseId | "all") => {
    setView(next);
    setNavOpen(false);
    setCartOpen(false);
    if (nextCourse) setCourse(nextCourse);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const value = useMemo<Store>(() => {
    const count = data.cart.reduce((sum, line) => sum + line.qty, 0);
    return {
      ...data,
      hydrated,
      view,
      course,
      query,
      openDish,
      cartOpen,
      navOpen,
      toasts,
      count,
      go,
      setCourse,
      setQuery,
      setOpenDish,
      setCartOpen,
      setNavOpen,
      push,
      add: (id: string) => {
        if (!dishById.has(id)) return;
        setData((current) => {
          const found = current.cart.find((line) => line.id === id);
          const cart = found
            ? current.cart.map((line) => (line.id === id ? { ...line, qty: line.qty + 1 } : line))
            : [...current.cart, { id, qty: 1 }];
          return { ...current, cart };
        });
        push("Добавили в самовывоз");
      },
      setQty: (id: string, qty: number) => {
        setData((current) => ({
          ...current,
          cart: qty <= 0 ? current.cart.filter((line) => line.id !== id) : current.cart.map((line) => (line.id === id ? { ...line, qty } : line)),
        }));
      },
      clearCart: () => setData((current) => ({ ...current, cart: [] })),
      addReservation: (reservation: Reservation) => {
        setData((current) => ({ ...current, reservations: [reservation, ...current.reservations] }));
      },
      cancelReservation: (id: string) => {
        setData((current) => ({
          ...current,
          reservations: current.reservations.filter((item) => item.id !== id),
        }));
        push("Бронь снята");
      },
      addOrder: (order: Order) => {
        setData((current) => ({ ...current, orders: [order, ...current.orders], cart: [] }));
      },
      addNote: (note: Note) => {
        setData((current) => ({ ...current, notes: [note, ...current.notes] }));
      },
      setAlcohol: (alcohol: "yes" | "no") => setData((current) => ({ ...current, alcohol })),
    };
  }, [data, hydrated, view, course, query, openDish, cartOpen, navOpen, toasts]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useDynasty(): Store {
  const store = useContext(StoreContext);
  if (!store) throw new Error("Dynasty store missing");
  return store;
}
