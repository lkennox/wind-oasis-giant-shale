import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useEffect } from "react";
import { ADDRESS, PHONE_TEL, dishById, rub } from "@/data/catalog";
import { BookView } from "@/dynasty/book";
import { HomeView } from "@/dynasty/home";
import { DishDialog, MenuView } from "@/dynasty/menu";
import { ContactsView, EventsView, StoryView } from "@/dynasty/more";
import { PickupView } from "@/dynasty/pickup";
import { DynastyProvider, useDynasty, type View } from "@/dynasty/store";

const LINKS: { id: View; label: string }[] = [
  { id: "menu", label: "Меню" },
  { id: "book", label: "Бронь" },
  { id: "pickup", label: "Самовывоз" },
  { id: "story", label: "О доме" },
  { id: "events", label: "Вечера" },
  { id: "contacts", label: "Контакты" },
];

export function DynastyApp() {
  return (
    <DynastyProvider>
      <Shell />
    </DynastyProvider>
  );
}

function Shell() {
  const store = useDynasty();
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      store.setOpenDish(null);
      store.setCartOpen(false);
      store.setNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [store]);
  return (
    <div className="shell">
      <header className="topbar">
        <button className="brand" type="button" onClick={() => store.go("home")}>
          <span className="mark">Д</span>
          <span>
            <span className="brand-name">Династия</span>
            <span className="brand-city">Луганск</span>
          </span>
        </button>
        <nav className="nav" aria-label="Разделы">
          {LINKS.map((link) => (
            <button key={link.id} className={store.view === link.id ? "is-on" : ""} type="button" onClick={() => store.go(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button className="btn btn-primary" type="button" onClick={() => store.go("menu")}>
            Меню
          </button>
          <a className="icon-btn" href={`tel:${PHONE_TEL}`} aria-label="Позвонить в ресторан">
            <Phone size={18} />
          </a>
          <button className="icon-btn" type="button" aria-label="Корзина самовывоза" onClick={() => store.setCartOpen(true)}>
            <ShoppingBag size={18} />
            {store.count > 0 ? <span className="badge">{store.count}</span> : null}
          </button>
          <button className="icon-btn burger" type="button" aria-label="Открыть навигацию" onClick={() => store.setNavOpen(true)}>
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main className="page">
        {store.view === "home" ? <HomeView /> : null}
        {store.view === "menu" ? <MenuView /> : null}
        {store.view === "book" ? <BookView /> : null}
        {store.view === "pickup" ? <PickupView /> : null}
        {store.view === "story" ? <StoryView /> : null}
        {store.view === "events" ? <EventsView /> : null}
        {store.view === "contacts" ? <ContactsView /> : null}
        <footer className="footer">
          <strong>Династия</strong>
          <p>{ADDRESS}. Еда в зале и с собой. Бронь держим 15 минут после указанного времени.</p>
          <div className="footer-row">
            {LINKS.map((link) => (
              <button key={link.id} className="btn btn-ghost" type="button" onClick={() => store.go(link.id)}>
                {link.label}
              </button>
            ))}
          </div>
        </footer>
      </main>

      <nav className="dock" aria-label="Быстрые действия">
        <button className={store.view === "menu" ? "is-on" : ""} type="button" onClick={() => store.go("menu")}>Меню</button>
        <button className={store.view === "book" ? "is-on" : ""} type="button" onClick={() => store.go("book")}>Бронь</button>
        <button className={store.view === "pickup" ? "is-on" : ""} type="button" onClick={() => store.go("pickup")}>С собой</button>
      </nav>

      {store.navOpen ? (
        <div className="nav-panel">
          <button className="icon-btn" type="button" aria-label="Закрыть меню" onClick={() => store.setNavOpen(false)}>
            <X size={18} />
          </button>
          <button type="button" onClick={() => store.go("home")}>Главная</button>
          {LINKS.map((link) => (
            <button key={link.id} type="button" onClick={() => store.go(link.id)}>{link.label}</button>
          ))}
        </div>
      ) : null}

      {store.cartOpen ? <CartDrawer /> : null}
      <DishDialog />
      <div className="toasts" aria-live="polite">
        {store.toasts.map((toast) => (
          <div className="toast" key={toast.id}>{toast.text}</div>
        ))}
      </div>
    </div>
  );
}

function CartDrawer() {
  const { cart, setQty, setCartOpen, go, clearCart } = useDynasty();
  const lines = cart
    .map((line) => {
      const dish = dishById.get(line.id);
      if (!dish) return null;
      return { ...line, name: dish.name, price: dish.price };
    })
    .filter((line): line is { id: string; qty: number; name: string; price: number } => Boolean(line));
  const total = lines.reduce((sum, line) => sum + line.qty * line.price, 0);
  return (
    <aside className="drawer" role="dialog" aria-modal="true" aria-label="Самовывоз">
      <div className="modal-head">
        <h2 className="block-title">С собой</h2>
        <button className="icon-btn" type="button" aria-label="Закрыть корзину" onClick={() => setCartOpen(false)}>
          <X size={18} />
        </button>
      </div>
      {lines.length === 0 ? <p>Пока пусто. Меню откроется одной кнопкой.</p> : null}
      {lines.map((line) => (
        <div className="line" key={line.id}>
          <div>
            <strong>{line.name}</strong>
            <p className="meta">{rub(line.price * line.qty)}</p>
          </div>
          <div className="qty">
            <button type="button" onClick={() => setQty(line.id, line.qty - 1)} aria-label="Меньше">−</button>
            <span>{line.qty}</span>
            <button type="button" onClick={() => setQty(line.id, line.qty + 1)} aria-label="Больше">+</button>
          </div>
        </div>
      ))}
      <p className="price" style={{ marginTop: "0.8rem" }}>Итого {rub(total)}</p>
      <div className="hero-actions">
        <button className="btn btn-primary" type="button" onClick={() => go("pickup")} disabled={lines.length === 0}>
          Оформить
        </button>
        <button className="btn btn-ghost" type="button" onClick={() => go("menu")}>В меню</button>
        {lines.length > 0 ? (
          <button className="btn btn-line" type="button" onClick={clearCart}>Очистить</button>
        ) : null}
      </div>
    </aside>
  );
}
