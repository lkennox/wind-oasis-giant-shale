import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, events } from "@/data/catalog";
import { useDynasty } from "@/dynasty/store";

export function StoryView() {
  const { go } = useDynasty();
  return (
    <section className="section">
      <p className="kicker">О доме</p>
      <h2>Семья, которая кормит город</h2>
      <p className="sub">
        «Династия» открылась в Луганске в 2014 году. Сначала был борщ и котлета. Потом гости попросили роллы,
        потом пиццу к позднему столу, потом бар, который не спорит с кухней.
      </p>
      <div className="timeline">
        <article className="card time-item">
          <b>2014</b>
          <div>
            <h3>Первый зал</h3>
            <p>Двенадцать посадочных мест и плита, которая не выключалась до полуночи.</p>
          </div>
        </article>
        <article className="card time-item">
          <b>2018</b>
          <div>
            <h3>Бар и кабинеты</h3>
            <p>Появились «Кедр» и «Нефрит»: комнаты, где можно говорить, не повышая голос.</p>
          </div>
        </article>
        <article className="card time-item">
          <b>2023</b>
          <div>
            <h3>Роллы и гриль</h3>
            <p>Рис и угли встали рядом с пельменями. Меню перестало выбирать одну страну.</p>
          </div>
        </article>
        <article className="card time-item">
          <b>Сейчас</b>
          <div>
            <h3>Шестнадцать столов</h3>
            <p>Зал, бар, терраса с тёплым контуром. Самовывоз у стойки, если некогда сидеть.</p>
          </div>
        </article>
      </div>
      <div className="hero-actions">
        <button className="btn btn-primary" type="button" onClick={() => go("book")}>Занять стол</button>
        <button className="btn btn-ghost" type="button" onClick={() => go("menu")}>Читать меню</button>
      </div>
    </section>
  );
}

export function EventsView() {
  const { addNote, notes, push } = useDynasty();
  const [open, setOpen] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [banquetName, setBanquetName] = useState("");
  const [banquetPhone, setBanquetPhone] = useState("");
  const [banquetGuests, setBanquetGuests] = useState("12");
  const [banquetDate, setBanquetDate] = useState("");

  return (
    <section className="section">
      <p className="kicker">Вечера</p>
      <h2>На что стоит прийти</h2>
      <p className="sub">Запись ни к чему не обязывает, пока администратор не перезвонит и не подтвердит место.</p>
      <div className="grid-2">
        {events.map((event) => (
          <article key={event.id} className="card">
            <p className="kicker">{event.when} · {event.time}</p>
            <h3>{event.title}</h3>
            <p>{event.text}</p>
            {open === event.id ? (
              <form
                className="form"
                onSubmit={(submitEvent) => {
                  submitEvent.preventDefault();
                  if (name.trim().length < 2 || phone.replace(/\D/g, "").length < 10) {
                    push("Имя и телефон, чтобы мы могли подтвердить");
                    return;
                  }
                  addNote({ id: `n-${Date.now()}`, title: event.title, name: name.trim(), phone });
                  setOpen(null);
                  setName("");
                  setPhone("");
                  push("Записали. Перезвоним.");
                }}
              >
                <label className="field">
                  Имя
                  <input value={name} onChange={(input) => setName(input.target.value)} />
                </label>
                <label className="field">
                  Телефон
                  <input value={phone} onChange={(input) => setPhone(input.target.value)} inputMode="tel" />
                </label>
                <button className="btn btn-primary" type="submit">Отправить запись</button>
              </form>
            ) : (
              <button className="btn btn-line" type="button" onClick={() => setOpen(event.id)}>
                Записаться
              </button>
            )}
          </article>
        ))}
      </div>

      <article className="card" style={{ marginTop: "1rem" }}>
        <h3>Банкет от 10 гостей</h3>
        <p>Закрываем кабинет или собираем зал. Меню соберём вместе: можно только гриль, только роллы или смешанный стол.</p>
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            if (banquetName.trim().length < 2 || banquetPhone.replace(/\D/g, "").length < 10 || !banquetDate) {
              push("Заполните имя, телефон и дату");
              return;
            }
            addNote({
              id: `b-${Date.now()}`,
              title: `Банкет ${banquetDate}, ${banquetGuests} гостей`,
              name: banquetName.trim(),
              phone: banquetPhone,
            });
            setBanquetName("");
            setBanquetPhone("");
            setBanquetDate("");
            push("Заявку на банкет приняли");
          }}
        >
          <div className="row-2">
            <label className="field">
              Имя
              <input value={banquetName} onChange={(event) => setBanquetName(event.target.value)} />
            </label>
            <label className="field">
              Телефон
              <input value={banquetPhone} onChange={(event) => setBanquetPhone(event.target.value)} inputMode="tel" />
            </label>
          </div>
          <div className="row-2">
            <label className="field">
              Дата
              <input type="date" value={banquetDate} onChange={(event) => setBanquetDate(event.target.value)} />
            </label>
            <label className="field">
              Гостей
              <input value={banquetGuests} onChange={(event) => setBanquetGuests(event.target.value)} inputMode="numeric" />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">Обсудить банкет</button>
        </form>
      </article>

      {notes.length > 0 ? (
        <div className="section">
          <h2>Ваши записи</h2>
          <div className="grid-2">
            {notes.map((note) => (
              <article key={note.id} className="card">
                <h3>{note.title}</h3>
                <p>{note.name} · {note.phone}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function ContactsView() {
  const { push, go } = useDynasty();
  return (
    <section className="section">
      <p className="kicker">Контакты</p>
      <h2>Как нас найти</h2>
      <div className="split">
        <article className="card">
          <div className="map-fake" aria-hidden="true">
            <span className="pin">Династия</span>
          </div>
          <p style={{ marginTop: "0.8rem" }}><MapPin size={16} /> {ADDRESS}</p>
          <p>Ежедневно 12:00–00:00. Кухня до 23:00. Вход со двора, вывеска зелёная.</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`tel:${PHONE_TEL}`}>
              <Phone size={16} />
              Позвонить
            </a>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => {
                void navigator.clipboard?.writeText(ADDRESS).then(
                  () => push("Адрес скопирован"),
                  () => push(ADDRESS),
                );
              }}
            >
              Скопировать адрес
            </button>
            <a className="btn btn-line" href="https://yandex.ru/maps/?text=Луганск%20улица%20Советская%2064" target="_blank" rel="noreferrer">
              Маршрут
            </a>
            <button className="btn btn-line" type="button" onClick={() => go("book")}>Забронировать</button>
          </div>
        </article>
        <article className="card">
          <h3>Коротко</h3>
          <ul className="pulse-list">
            <li><span>Телефон</span><b>{PHONE_DISPLAY}</b></li>
            <li><span>Кухня</span><b>12:00–23:00</b></li>
            <li><span>Бар</span><b>12:00–00:00</b></li>
            <li><span>Самовывоз</span><b>стойка у входа</b></li>
          </ul>
          <p className="quiet">Отдельной страницы в соцсетях нет: бронь и вопросы живут здесь и по телефону.</p>
        </article>
      </div>
    </section>
  );
}
