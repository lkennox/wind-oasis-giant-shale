import { Flame, Leaf, Search, X } from "lucide-react";
import { ALCOHOL, courses, dishes, rub, tagLabel, type Dish } from "@/data/catalog";
import { useDynasty } from "@/dynasty/store";

export function MenuView() {
  const { course, setCourse, query, setQuery, add, setOpenDish, alcohol, setAlcohol } = useDynasty();
  const matched = dishes.filter((dish) => {
    const byCourse = course === "all" || dish.course === course;
    const needle = query.trim().toLowerCase();
    const byQuery = !needle || `${dish.name} ${dish.desc}`.toLowerCase().includes(needle);
    return byCourse && byQuery;
  });
  const courseIsAlcohol = course !== "all" && ALCOHOL.includes(course);
  const list = matched.filter((dish) => alcohol === "yes" || !ALCOHOL.includes(dish.course));
  const kitchen = courses.filter((item) => item.group === "kitchen");
  const bar = courses.filter((item) => item.group === "bar");
  const active = courses.find((item) => item.id === course);

  return (
    <section className="section">
      <p className="kicker">Меню</p>
      <h2>Кухня и бар</h2>
      <p className="sub">
        {dishes.length} позиций: от пампушки до угря, от колы до виски. Нажмите блюдо, чтобы прочитать пару к нему,
        или сразу добавьте в самовывоз.
      </p>
      <div className="filters" role="tablist" aria-label="Разделы меню">
        <button className={course === "all" ? "chip is-on" : "chip"} type="button" onClick={() => setCourse("all")}>
          Всё
        </button>
        {kitchen.map((item) => (
          <button
            key={item.id}
            className={course === item.id ? "chip is-on" : "chip"}
            type="button"
            onClick={() => setCourse(item.id)}
          >
            {item.title}
          </button>
        ))}
        {bar.map((item) => (
          <button
            key={item.id}
            className={course === item.id ? "chip is-on" : "chip"}
            type="button"
            onClick={() => setCourse(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <label className="search">
        <Search size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Найти борщ, пепси, филадельфию..."
          aria-label="Поиск по меню"
        />
        {query ? (
          <button className="icon-btn" type="button" aria-label="Очистить поиск" onClick={() => setQuery("")}>
            <X size={16} />
          </button>
        ) : null}
      </label>
      {active ? <p className="quiet">{active.blurb}</p> : null}

      {courseIsAlcohol && alcohol === "unknown" ? (
        <AgeGate onYes={() => setAlcohol("yes")} onNo={() => setAlcohol("no")} />
      ) : null}
      {courseIsAlcohol && alcohol === "no" ? (
        <article className="card age-card">
          <h3>Этот раздел только с 18 лет</h3>
          <p>Молочные коктейли, лимонады и газировка остаются открытыми.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <button className="btn btn-primary" type="button" onClick={() => setAlcohol("yes")}>
              Мне есть 18
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => setCourse("shakes")}>
              К молочным
            </button>
          </div>
        </article>
      ) : null}
      {!courseIsAlcohol || alcohol === "yes" ? (
        <>
          {course === "all" && alcohol !== "yes" ? (
            <p className="quiet">Вино, пиво, крепкое и коктейли откроются в разделе бара после вопроса о возрасте.</p>
          ) : null}
          {list.length === 0 ? (
            <article className="card lock-note">
              <h3>Ничего не нашлось</h3>
              <p>Смените раздел или сотрите запрос.</p>
              <button className="btn btn-line" type="button" onClick={() => { setQuery(""); setCourse("all"); }}>
                Показать всё
              </button>
            </article>
          ) : (
            <div className="dish-grid">
              {list.map((dish, index) => (
                <DishCard key={dish.id} dish={dish} delay={Math.min(index, 8) * 0.04} onOpen={() => setOpenDish(dish.id)} onAdd={() => add(dish.id)} />
              ))}
            </div>
          )}
          {course === "all" && alcohol !== "yes" ? (
            <article className="card lock-note">
              <h3>Бар с градусом</h3>
              <p>Коктейли, вино, крепкое и пиво откроются после короткого вопроса. Кола, морс и молочные коктейли уже в списке.</p>
              <button className="btn btn-primary" type="button" onClick={() => setCourse("cocktails")}>
                Открыть коктейли
              </button>
            </article>
          ) : null}
        </>
      ) : null}
    </section>
  );
}

function DishCard({
  dish,
  delay,
  onOpen,
  onAdd,
}: {
  dish: Dish;
  delay: number;
  onOpen: () => void;
  onAdd: () => void;
}) {
  return (
    <article className="card dish reveal" style={{ animationDelay: `${delay}s` }}>
      <div className="dish-top">
        <h3>{dish.name}</h3>
        <span className="price">{rub(dish.price)}</span>
      </div>
      <p>{dish.desc}</p>
      <p className="meta">{dish.amount}</p>
      {dish.tags.length > 0 ? (
        <div className="tags">
          {dish.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag === "spicy" ? <Flame size={12} /> : null}
              {tag === "veg" ? <Leaf size={12} /> : null}
              {tagLabel(tag)}
            </span>
          ))}
        </div>
      ) : null}
      <div className="dish-actions">
        <button className="btn btn-primary" type="button" onClick={onAdd}>
          В самовывоз
        </button>
        <button className="btn btn-ghost" type="button" onClick={onOpen}>
          Подробнее
        </button>
      </div>
    </article>
  );
}

export function AgeGate({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <article className="card age-card">
      <p className="kicker">Бар</p>
      <h3>Вам уже есть 18?</h3>
      <p>Алкоголь показываем только совершеннолетним. Молочные коктейли, соки и газировка доступны без вопроса.</p>
      <div className="hero-actions" style={{ justifyContent: "center" }}>
        <button className="btn btn-primary" type="button" onClick={onYes}>
          Да, мне есть 18
        </button>
        <button className="btn btn-ghost" type="button" onClick={onNo}>
          Нет
        </button>
      </div>
    </article>
  );
}

export function DishDialog() {
  const { openDish, setOpenDish, add, go } = useDynasty();
  const dish = dishes.find((item) => item.id === openDish);
  if (!dish) return null;
  return (
    <div className="modal-back" role="presentation" onClick={() => setOpenDish(null)}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <p className="kicker">{courses.find((item) => item.id === dish.course)?.title}</p>
            <h2 id="dish-title" className="block-title">{dish.name}</h2>
          </div>
          <button className="icon-btn" type="button" aria-label="Закрыть" onClick={() => setOpenDish(null)}>
            <X size={18} />
          </button>
        </div>
        <p>{dish.desc}</p>
        <p className="meta">{dish.amount} · {rub(dish.price)}</p>
        {dish.pair ? <p>К бокалу: {dish.pair}.</p> : <p>Подача как в зале. Остроту и соусы можно поправить в комментарии к самовывозу.</p>}
        <p className="quiet">Если есть аллергия, напишите её в комментарии или скажите администратору. Кухня не гарантирует полное отсутствие следов.</p>
        <div className="hero-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              add(dish.id);
              setOpenDish(null);
            }}
          >
            В самовывоз
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => { setOpenDish(null); go("book"); }}>
            Сесть в зале
          </button>
        </div>
      </div>
    </div>
  );
}
