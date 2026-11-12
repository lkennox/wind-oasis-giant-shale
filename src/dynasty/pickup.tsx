import { useMemo, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { dateKey, dishById, formatDay, luhanskNow, rub } from "@/data/catalog";
import { useDynasty, type Order } from "@/dynasty/store";

function buildSlots(now: Date): { key: string; label: string }[] {
  const slots: { key: string; label: string }[] = [];
  const readyAt = now.getTime() + 40 * 60 * 1000;
  for (let offset = 0; offset < 2; offset += 1) {
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
    for (let minutes = 12 * 60; minutes <= 22 * 60 + 40; minutes += 20) {
      const stamp = new Date(day.getFullYear(), day.getMonth(), day.getDate(), Math.floor(minutes / 60), minutes % 60);
      if (stamp.getTime() < readyAt) continue;
      const hh = String(Math.floor(minutes / 60)).padStart(2, "0");
      const mm = String(minutes % 60).padStart(2, "0");
      const when = offset === 0 ? "Сегодня" : "Завтра";
      slots.push({ key: `${dateKey(day)} ${hh}:${mm}`, label: `${when}, ${hh}:${mm}` });
    }
  }
  return slots;
}

export function PickupView() {
  const { cart, setQty, clearCart, addOrder, orders, go } = useDynasty();
  const now = luhanskNow();
  const slots = useMemo(() => buildSlots(now), [now.getHours(), now.getDate()]);
  const [slot, setSlot] = useState(slots[0]?.key ?? "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<Order | null>(null);

  const lines = cart
    .map((line) => {
      const dish = dishById.get(line.id);
      if (!dish) return null;
      return { ...line, name: dish.name, price: dish.price };
    })
    .filter((line): line is { id: string; qty: number; name: string; price: number } => Boolean(line));
  const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0);

  const submit = () => {
    if (lines.length === 0) {
      setError("Сначала добавьте блюда из меню.");
      return;
    }
    if (!slot) {
      setError("На сегодня кухня уже не успевает. Выберите завтра.");
      return;
    }
    if (name.trim().length < 2) {
      setError("Напишите имя для заказа.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Нужен телефон, чтобы отдать заказ именно вам.");
      return;
    }
    const order: Order = {
      id: `a-${Date.now().toString().slice(-6)}`,
      whenLabel: slots.find((item) => item.key === slot)?.label ?? slot,
      name: name.trim(),
      phone,
      comment: comment.trim(),
      lines,
      total,
    };
    addOrder(order);
    setDone(order);
    setError("");
  };

  if (done) {
    return (
      <section className="section">
        <article className="card success">
          <div className="seal"><Check size={36} /></div>
          <p className="kicker">Самовывоз</p>
          <h2>Заказ {done.id}</h2>
          <p>Заберёте {done.whenLabel.toLowerCase()} на стойке у входа. Сумма {rub(done.total)}. Оплата на месте.</p>
          <p className="quiet">Назовите номер заказа. Если опаздываете больше чем на 20 минут, кухня может поставить заказ на паузу.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <button className="btn btn-primary" type="button" onClick={() => setDone(null)}>Новый заказ</button>
            <button className="btn btn-ghost" type="button" onClick={() => go("home")}>На главную</button>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="section">
      <p className="kicker">Забрать на месте</p>
      <h2>Соберём к вашему часу</h2>
      <p className="sub">Без доставки: приходите в дом на Советскую, 64. Готовим так, чтобы заказ не ждал на витрине.</p>

      {lines.length === 0 ? (
        <article className="card">
          <h3>Корзина пустая</h3>
          <p>Откройте меню и нажмите «В самовывоз» у блюд, которые хотите забрать.</p>
          <button className="btn btn-primary" type="button" onClick={() => go("menu")}>Перейти в меню</button>
        </article>
      ) : (
        <div className="card">
          {lines.map((line) => (
            <div className="line" key={line.id}>
              <div>
                <strong>{line.name}</strong>
                <p className="meta">{rub(line.price)} · {rub(line.price * line.qty)}</p>
              </div>
              <div className="qty">
                <button type="button" aria-label="Меньше" onClick={() => setQty(line.id, line.qty - 1)}><Minus size={14} /></button>
                <span>{line.qty}</span>
                <button type="button" aria-label="Больше" onClick={() => setQty(line.id, line.qty + 1)}><Plus size={14} /></button>
              </div>
            </div>
          ))}
          <div className="line">
            <strong>Итого</strong>
            <strong>{rub(total)}</strong>
          </div>
          <button className="btn btn-ghost" type="button" onClick={clearCart}>Очистить</button>
        </div>
      )}

      <h3 className="block-title" style={{ fontSize: "1.8rem", marginTop: "1.2rem" }}>Когда заберёте</h3>
      <div className="slots">
        {slots.length === 0 ? <p>Свободных слотов на ближайшие два дня нет.</p> : null}
        {slots.slice(0, 24).map((item) => (
          <button key={item.key} className={slot === item.key ? "slot is-on" : "slot"} type="button" onClick={() => setSlot(item.key)}>
            {item.label}
          </button>
        ))}
      </div>

      <form className="form" onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <div className="row-2">
          <label className="field">
            Имя
            <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
          </label>
          <label className="field">
            Телефон
            <input value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="tel" inputMode="tel" />
          </label>
        </div>
        <label className="field">
          Комментарий к заказу
          <textarea value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Без лука, соус отдельно, детский стул не нужен" />
        </label>
        {error ? <p className="error">{error}</p> : null}
        <button className="btn btn-primary" type="submit" disabled={lines.length === 0}>
          Оформить самовывоз · {rub(total)}
        </button>
      </form>

      {orders.length > 0 ? (
        <div className="section">
          <h2>Уже оформленные</h2>
          <div className="grid-2">
            {orders.map((order) => (
              <article key={order.id} className="card">
                <p className="kicker">{order.id}</p>
                <h3>{order.whenLabel}</h3>
                <p>{order.lines.map((line) => `${line.name} × ${line.qty}`).join(", ")}</p>
                <p className="price">{rub(order.total)}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
