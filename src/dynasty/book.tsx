import { useMemo, useState } from "react";
import { Check, Phone } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SLOTS,
  dateKey,
  formatDay,
  formatWeekday,
  luhanskNow,
  slotPassed,
  tableBusy,
  tables,
  upcomingDays,
  zones,
  type TableSpec,
  type ZoneId,
} from "@/data/catalog";
import { useDynasty, type Reservation } from "@/dynasty/store";

const OCCASIONS = ["Ужин", "Свидание", "Деловая встреча", "День рождения", "Просто посидеть"];

export function BookView() {
  const { reservations, addReservation, cancelReservation, go } = useDynasty();
  const now = luhanskNow();
  const days = useMemo(() => upcomingDays(now, 14), [now.getDate(), now.getMonth(), now.getFullYear()]);
  const [day, setDay] = useState(days[0] ?? now);
  const [time, setTime] = useState(SLOTS.find((slot) => !slotPassed(day, slot, now)) ?? SLOTS[0] ?? "18:00");
  const [guests, setGuests] = useState(2);
  const [zone, setZone] = useState<ZoneId>("hall");
  const [tableId, setTableId] = useState<string | null>(null);
  const [mode, setMode] = useState<"table" | "consult">("table");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState(OCCASIONS[0] ?? "Ужин");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<Reservation | null>(null);

  const key = dateKey(day);
  const tooBig = guests > 8;

  const stateOf = (table: TableSpec) => {
    const taken =
      reservations.some((item) => item.mode === "table" && item.tableId === table.id && item.date === key && item.time === time) ||
      tableBusy(table, key, time);
    if (taken) return "busy";
    if (table.seats < guests) return "tight";
    return "free";
  };

  const submit = () => {
    const cleanName = name.trim();
    const digits = phone.replace(/\D/g, "");
    if (cleanName.length < 2) {
      setError("Напишите имя, как к вам обращаться.");
      return;
    }
    if (digits.length < 10) {
      setError("Телефон нужен полностью, чтобы подтвердить стол.");
      return;
    }
    if (slotPassed(day, time, luhanskNow())) {
      setError("Это время уже прошло. Выберите следующий слот.");
      return;
    }
    if (mode === "table") {
      if (tooBig) {
        setError("Компания больше восьми мест садится через администратора.");
        return;
      }
      const table = tables.find((item) => item.id === tableId);
      if (!table || stateOf(table) !== "free") {
        setError("Выберите свободный стол на плане. Он подсветится зелёным.");
        return;
      }
      const reservation: Reservation = {
        id: `r-${Date.now()}`,
        date: key,
        time,
        guests,
        tableId: table.id,
        tableLabel: `${zones.find((item) => item.id === table.zone)?.title ?? "Зал"}, стол ${table.label}`,
        name: cleanName,
        phone,
        occasion,
        comment: comment.trim(),
        mode,
      };
      addReservation(reservation);
      setDone(reservation);
      setError("");
      return;
    }
    const reservation: Reservation = {
      id: `r-${Date.now()}`,
      date: key,
      time,
      guests,
      tableId: null,
      tableLabel: "Подберёт администратор",
      name: cleanName,
      phone,
      occasion,
      comment: comment.trim(),
      mode,
    };
    addReservation(reservation);
    setDone(reservation);
    setError("");
  };

  if (done) {
    return (
      <section className="section">
        <article className="card success">
          <div className="seal" aria-hidden="true">
            <Check size={36} />
          </div>
          <p className="kicker">Стол записан</p>
          <h2>Ждём вас, {done.name}</h2>
          <p>
            {formatDay(day)}, {done.time}. {done.tableLabel}. Гостей: {done.guests}. Повод: {done.occasion}.
          </p>
          <p className="quiet">Это заявка в доме. Если планы изменятся, снимите бронь ниже или позвоните.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <button className="btn btn-primary" type="button" onClick={() => go("menu")}>
              Выбрать еду
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => setDone(null)}>
              Ещё одна бронь
            </button>
            <a className="btn btn-line" href={`tel:${PHONE_TEL}`}>
              <Phone size={16} />
              Позвонить
            </a>
          </div>
        </article>
        <Visits />
      </section>
    );
  }

  return (
    <section className="section">
      <p className="kicker">Бронь</p>
      <h2>Выберите день и стол</h2>
      <p className="sub">
        План дома обновляется по слотам. Занятые столы нельзя нажать. Если удобнее голосом, позвоните: мы подберём место.
      </p>

      <div className="hero-actions">
        <button className={mode === "table" ? "btn btn-primary" : "btn btn-ghost"} type="button" onClick={() => setMode("table")}>
          Выбрать стол самому
        </button>
        <button className={mode === "consult" ? "btn btn-primary" : "btn btn-ghost"} type="button" onClick={() => setMode("consult")}>
          Обсудить с сотрудником
        </button>
        <a className="btn btn-line" href={`tel:${PHONE_TEL}`}>
          <Phone size={16} />
          {PHONE_DISPLAY}
        </a>
      </div>

      <h3 className="block-title" style={{ fontSize: "1.8rem", marginTop: "1.4rem" }}>День</h3>
      <div className="days" role="listbox" aria-label="Дни брони">
        {days.map((date) => {
          const on = dateKey(date) === key;
          return (
            <button key={dateKey(date)} className={on ? "day is-on" : "day"} type="button" onClick={() => { setDay(date); setTableId(null); }}>
              <small>{formatWeekday(date)}</small>
              {formatDay(date)}
            </button>
          );
        })}
      </div>

      <h3 className="block-title" style={{ fontSize: "1.8rem", marginTop: "1rem" }}>Время</h3>
      <div className="slots">
        {SLOTS.map((slot) => {
          const past = slotPassed(day, slot, now);
          return (
            <button
              key={slot}
              className={time === slot ? "slot is-on" : "slot"}
              type="button"
              disabled={past}
              onClick={() => { setTime(slot); setTableId(null); }}
            >
              {slot}
              <small>{past ? "прошло" : "свободно"}</small>
            </button>
          );
        })}
      </div>

      <div className="card" style={{ marginTop: "1rem" }}>
        <p className="meta">Гостей за столом</p>
        <div className="guest-step">
          <button className="btn btn-ghost" type="button" onClick={() => setGuests((value) => Math.max(1, value - 1))} aria-label="Меньше гостей">
            −
          </button>
          <strong>{guests}</strong>
          <button className="btn btn-ghost" type="button" onClick={() => setGuests((value) => Math.min(12, value + 1))} aria-label="Больше гостей">
            +
          </button>
          <span className="quiet">До 8 человек сажаем по плану. От 9 человек стол собирает администратор.</span>
        </div>
      </div>

      {mode === "consult" ? (
        <article className="card" style={{ marginTop: "0.8rem" }}>
          <h3>Администратор перезвонит</h3>
          <p>
            Оставьте имя и телефон. Мы подтвердим {formatDay(day)} в {time} и подскажем, какой зал тише.
            Можно и сразу позвонить на {PHONE_DISPLAY}.
          </p>
        </article>
      ) : (
        <>
          <div className="zone-row" role="tablist" aria-label="Зоны зала">
            {zones.map((item) => (
              <button
                key={item.id}
                className={zone === item.id ? "zone-btn is-on" : "zone-btn"}
                type="button"
                onClick={() => setZone(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <p className="quiet">{zones.find((item) => item.id === zone)?.lead}</p>
          <Floor zone={zone} guests={guests} tableId={tableId} stateOf={stateOf} onPick={setTableId} />
        </>
      )}

      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <div className="row-2">
          <label className="field">
            Имя
            <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" placeholder="Как к вам обращаться" />
          </label>
          <label className="field">
            Телефон
            <input value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="tel" inputMode="tel" placeholder="+7" />
          </label>
        </div>
        <label className="field">
          Повод
          <select value={occasion} onChange={(event) => setOccasion(event.target.value)}>
            {OCCASIONS.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Комментарий
          <textarea value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Окно, детский стул, без остrego, торт к 21:00" />
        </label>
        {error ? <p className="error">{error}</p> : null}
        <button className="btn btn-primary" type="submit">
          {mode === "table" ? "Забронировать этот стол" : "Попросить перезвонить"}
        </button>
      </form>
      <Visits />
    </section>
  );
}

function Floor({
  zone,
  guests,
  tableId,
  stateOf,
  onPick,
}: {
  zone: ZoneId;
  guests: number;
  tableId: string | null;
  stateOf: (table: TableSpec) => "busy" | "tight" | "free";
  onPick: (id: string) => void;
}) {
  const zoneTables = tables.filter((table) => table.zone === zone);
  return (
    <>
      <div className="room-wrap">
        <div className="room" aria-label="План зоны">
          {zone === "hall" ? <div className="room-prop pos-entry">Вход</div> : null}
          {zone === "bar" ? <div className="room-prop pos-bar">Барная стойка</div> : null}
          {zoneTables.map((table) => {
            const state = guests > 8 ? "tight" : stateOf(table);
            const picked = tableId === table.id && state === "free";
            return (
              <button
                key={table.id}
                type="button"
                disabled={state !== "free"}
                className={`seat ${table.shape} ${table.pos} ${picked ? "is-picked" : ""} ${state === "busy" ? "is-busy" : ""} ${state === "tight" ? "is-tight" : ""}`}
                onClick={() => onPick(table.id)}
              >
                <strong>{table.label}</strong>
                <em>{state === "busy" ? "занят" : state === "tight" ? "мало мест" : `${table.seats} мест`}</em>
              </button>
            );
          })}
          {zone === "hall" ? <div className="room-prop pos-window">Окна на улицу</div> : null}
          {zone === "bar" ? <div className="room-prop pos-bar-note">Вид на стойку и коктейли</div> : null}
          {zone === "cabinet" ? <div className="room-prop pos-cab-note">Дверь закрывается с вашей стороны</div> : null}
          {zone === "terrace" ? <div className="room-prop pos-plant">Пледы и тёплый контур</div> : null}
        </div>
      </div>
      <div className="legend">
        <span><i className="swatch swatch-free" /> свободен</span>
        <span><i className="swatch swatch-pick" /> ваш выбор</span>
        <span><i className="swatch swatch-busy" /> занят или мал</span>
      </div>
      <p className="quiet">На телефоне план можно вести пальцем в сторону.</p>
    </>
  );
}

function Visits() {
  const { reservations, cancelReservation } = useDynasty();
  if (reservations.length === 0) return null;
  return (
    <div className="section">
      <h2>Ваши брони</h2>
      <div className="grid-2">
        {reservations.map((item) => (
          <article key={item.id} className="card visit">
            <div>
              <strong>{item.date} · {item.time}</strong>
              <p>{item.tableLabel}. {item.guests} гостей. {item.name}.</p>
            </div>
            <button className="btn btn-ghost" type="button" onClick={() => cancelReservation(item.id)}>
              Снять
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
