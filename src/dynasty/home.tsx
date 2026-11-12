import { ChefHat, Clock3, Sparkles, UtensilsCrossed } from "lucide-react";
import { dishes, events, houseStatus, luhanskNow, rub } from "@/data/catalog";
import { useDynasty } from "@/dynasty/store";

const ticker = dishes.filter((dish) => dish.tags.includes("chef")).slice(0, 8);

export function HomeView() {
  const { go, add } = useDynasty();
  const status = houseStatus(luhanskNow());
  const featured = dishes.filter((dish) => dish.tags.includes("chef")).slice(0, 6);

  return (
    <>
      <section className="hero">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
        <p className="kicker">Ресторан · Луганск · с 2014</p>
        <h1 className="wordmark" aria-label="Династия">
          {"ДИНАСТИЯ".split("").map((letter, index) => (
            <span key={letter + index} style={{ animationDelay: `${index * 0.06}s` }}>
              {letter}
            </span>
          ))}
        </h1>
        <p className="lede">
          Один дом для борща и роллов, рибая и пиццы, молочного коктейля и негрони.
          Столы выбираете на плане зала. Еду можно забрать у стойки к своему времени.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" type="button" onClick={() => go("menu")}>
            <UtensilsCrossed size={18} />
            Открыть меню
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => go("book")}>
            Забронировать стол
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => go("pickup")}>
            Забрать на месте
          </button>
        </div>
        <p className="status-pill">
          <span className={status.open ? "dot" : "dot is-off"} />
          {status.label}
        </p>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((dish, index) => (
            <span key={dish.id + index}>
              <b>{dish.name}</b> · {rub(dish.price)}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <h2>Как устроен дом</h2>
        <p className="sub">Три коротких пути. Каждый ведёт на свою страницу, ничего не висит без дела.</p>
        <div className="grid-3">
          <article className="card reveal">
            <ChefHat size={20} />
            <h3>Кухня без границ</h3>
            <p>Азия, гриль, домашнее и пицца в одном меню. Фильтры, поиск и карточка каждого блюда.</p>
            <button className="btn btn-line" type="button" onClick={() => go("menu", "rolls")}>
              Сначала роллы
            </button>
          </article>
          <article className="card reveal" style={{ animationDelay: "0.08s" }}>
            <Sparkles size={20} />
            <h3>Стол, который виден</h3>
            <p>Четырнадцать дней, слоты и план: зал, бар, кабинеты, терраса. Или звонок администратору.</p>
            <button className="btn btn-line" type="button" onClick={() => go("book")}>
              Смотреть план
            </button>
          </article>
          <article className="card reveal" style={{ animationDelay: "0.16s" }}>
            <Clock3 size={20} />
            <h3>Самовывоз к часу</h3>
            <p>Соберите заказ из меню и заберите у стойки. Готовим к выбранному времени, оплата на месте.</p>
            <button className="btn btn-line" type="button" onClick={() => go("pickup")}>
              К самовывозу
            </button>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>От шефа сегодня</h2>
        <p className="sub">Эти позиции можно сразу положить в самовывоз или открыть и прочитать состав.</p>
        <div className="dish-grid">
          {featured.map((dish) => (
            <article key={dish.id} className="card dish">
              <div className="dish-top">
                <h3>{dish.name}</h3>
                <span className="price">{rub(dish.price)}</span>
              </div>
              <p>{dish.desc}</p>
              <p className="meta">{dish.amount}</p>
              <div className="dish-actions">
                <button className="btn btn-primary" type="button" onClick={() => add(dish.id)}>
                  В самовывоз
                </button>
                <button className="btn btn-ghost" type="button" onClick={() => go("menu")}>
                  Всё меню
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Ближайшие вечера</h2>
        <div className="grid-2">
          {events.slice(0, 2).map((event) => (
            <article key={event.id} className="card">
              <p className="kicker">{event.when}</p>
              <h3>{event.title}</h3>
              <p>{event.text}</p>
              <button className="btn btn-line" type="button" onClick={() => go("events")}>
                Записаться · {event.time}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section stats">
        <article className="card stat">
          <strong>2014</strong>
          <p>год, когда открыли первый зал</p>
        </article>
        <article className="card stat">
          <strong>16</strong>
          <p>столов на плане, от двоих до кабинета</p>
        </article>
        <article className="card stat">
          <strong>{dishes.length}</strong>
          <p>позиций в кухне и баре</p>
        </article>
      </section>
    </>
  );
}
