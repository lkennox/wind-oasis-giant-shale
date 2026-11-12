export type CourseId =
  | "sets"
  | "starters"
  | "salads"
  | "soups"
  | "hot"
  | "grill"
  | "pasta"
  | "pizza"
  | "rolls"
  | "wok"
  | "sides"
  | "kids"
  | "desserts"
  | "cocktails"
  | "shakes"
  | "soft"
  | "soda"
  | "wine"
  | "spirits"
  | "beer"
  | "hotdrinks";

export type Tag = "chef" | "spicy" | "veg" | "new";

export type Dish = {
  id: string;
  course: CourseId;
  name: string;
  desc: string;
  price: number;
  amount: string;
  tags: Tag[];
  pair?: string;
};

export type Course = {
  id: CourseId;
  title: string;
  group: "kitchen" | "bar";
  blurb: string;
};

const item = (
  id: string,
  course: CourseId,
  name: string,
  desc: string,
  price: number,
  amount: string,
  tags: Tag[] = [],
  pair?: string,
): Dish => ({ id, course, name, desc, price, amount, tags, pair });

export const courses: Course[] = [
  { id: "sets", title: "Сеты", group: "kitchen", blurb: "Собранные столы, чтобы не выбирать по одному." },
  { id: "starters", title: "Закуски", group: "kitchen", blurb: "Холодные и горячие, пока греется зал." },
  { id: "salads", title: "Салаты", group: "kitchen", blurb: "От оливье до угря." },
  { id: "soups", title: "Супы", group: "kitchen", blurb: "Борщ, том ям и всё, что между ними." },
  { id: "hot", title: "Горячее", group: "kitchen", blurb: "Домашняя и европейская плита." },
  { id: "grill", title: "Гриль", group: "kitchen", blurb: "Огонь, рыба и мясо без лишней суеты." },
  { id: "pasta", title: "Паста", group: "kitchen", blurb: "Свежая паста, соусы каждый день." },
  { id: "pizza", title: "Пицца", group: "kitchen", blurb: "Дровяной жар, тонкий борт." },
  { id: "rolls", title: "Роллы", group: "kitchen", blurb: "Рис, рыба и фирменные сеты дома." },
  { id: "wok", title: "Вок", group: "kitchen", blurb: "Лапша и рис на сильном огне." },
  { id: "sides", title: "Гарниры", group: "kitchen", blurb: "Чтобы тарелка была полной." },
  { id: "kids", title: "Детям", group: "kitchen", blurb: "Короткие названия и спокойные вкусы." },
  { id: "desserts", title: "Десерты", group: "kitchen", blurb: "Торты, моти и горячий фондан." },
  { id: "cocktails", title: "Коктейли", group: "bar", blurb: "Классика бара и сезонные стаканы." },
  { id: "shakes", title: "Молочные", group: "bar", blurb: "Густые коктейли без градуса." },
  { id: "soft", title: "Безалкогольные", group: "bar", blurb: "Лимонады, морсы и соки." },
  { id: "soda", title: "Газировка", group: "bar", blurb: "Кола, пепси, фанта и тоники." },
  { id: "wine", title: "Вино", group: "bar", blurb: "Бокал или бутылка." },
  { id: "spirits", title: "Крепкое", group: "bar", blurb: "Порции по 40 мл, если не сказано иначе." },
  { id: "beer", title: "Пиво", group: "bar", blurb: "Бутылка и кран." },
  { id: "hotdrinks", title: "Чай и кофе", group: "bar", blurb: "Эспрессо, раф и чайник на стол." },
];

export const ALCOHOL: CourseId[] = ["cocktails", "wine", "spirits", "beer"];

export const dishes: Dish[] = [
  item("set-kedr", "sets", "Сет «Кедр»", "Филадельфия, калифорния, сяке маки и спайси тунец. 32 кусочка.", 2490, "32 шт", ["chef"], "Сухой рислинг"),
  item("set-nefrit", "sets", "Сет «Нефрит»", "Дракон, унаги, радуга, запечённый краб и вегетарианский ролл. 40 кусочков.", 3290, "40 шт", ["new"], "Саке или имбирный лимонад"),
  item("set-dom", "sets", "Стол «Домашний»", "Борщ, салат оливье, пельмени и корзинка пампушек. На двоих.", 1680, "2 персоны", ["chef"]),
  item("set-grill", "sets", "Доска гриля", "Рибай 150 г, куриное бедро, овощи и два соуса. На компанию.", 2890, "700 г", ["chef"], "Мальбек"),

  item("st-tartar", "starters", "Тартар из говядины", "Вырезка, каперсы, желток и бородинские тосты.", 890, "160 г", ["chef"], "Красное бокала"),
  item("st-salmon", "starters", "Карпаччо из лосося", "Цитрус, укропное масло, каперсы.", 780, "140 г"),
  item("st-brus", "starters", "Брускетта со страчателлой", "Печёные томаты, базилик, тёплое масло.", 540, "180 г", ["veg"]),
  item("st-tempura", "starters", "Креветки в темпуре", "Пять креветок, соус юдзу и лайм.", 790, "5 шт", ["new"]),
  item("st-khav", "starters", "Сырная тарелка", "Сулугуни, козий сыр, мёд и грецкий орех.", 980, "220 г", ["veg"]),
  item("st-forsh", "starters", "Форшмак", "Сельдь, яблоко, масло и тёплый бородинский.", 460, "150 г"),
  item("st-edamame", "starters", "Эдамаме", "Молодые бобы, морская соль, кунжутное масло.", 390, "180 г", ["veg"]),
  item("st-hum", "starters", "Хумус с питой", "Нут, тахина, масло чили и тёплая пита.", 450, "200 г", ["veg", "spicy"]),
  item("st-pkhali", "starters", "Пхали из шпината", "Грецкий орех, кинза, зёрна граната.", 420, "160 г", ["veg"]),
  item("st-cheese-fry", "starters", "Жареный сулугуни", "Хруст, мёд и мята.", 520, "160 г", ["veg"]),

  item("sa-caesar", "salads", "Цезарь с цыплёнком", "Романо, анчоус, пармезан, крутоны.", 640, "230 г"),
  item("sa-greek", "salads", "Греческий", "Томаты, огурец, фета, оливки, орегано.", 540, "220 г", ["veg"]),
  item("sa-nicoise", "salads", "Нисуаз", "Тунец, яйцо, фасоль, картофель, оливки.", 760, "240 г"),
  item("sa-eel", "salads", "Угорь и авокадо", "Унаги, чука, кунжут, соус кабаи.", 920, "200 г", ["chef"]),
  item("sa-olivier", "salads", "Оливье", "Домашний, с телятиной и перепелиным яйцом.", 490, "220 г"),
  item("sa-warm", "salads", "Тёплый с телятиной", "Руккола, печёная свёкла, горчичный соус.", 780, "230 г"),
  item("sa-chuka", "salads", "Чука", "Водоросли, ореховый соус, кунжут.", 430, "160 г", ["veg"]),
  item("sa-burrata", "salads", "Буррата", "Сезонный фрукт, песто и оливковое масло.", 860, "200 г", ["veg", "new"]),

  item("so-borsch", "soups", "Борщ", "На говяжьем бульоне, сметана, пампушка с чесноком.", 490, "350 г", ["chef"]),
  item("so-tomyum", "soups", "Том ям", "Креветки, кокос, лемонграсс, лайм.", 720, "320 г", ["spicy"]),
  item("so-miso", "soups", "Мисо", "Тофу, вакамэ, зелёный лук.", 450, "300 г", ["veg"]),
  item("so-mush", "soups", "Крем из белых грибов", "Сливки, трюфельное масло, гренка.", 560, "300 г", ["veg"]),
  item("so-solyanka", "soups", "Солянка мясная", "Копчёности, лимон, сметана, оливки.", 580, "350 г"),
  item("so-ukha", "soups", "Уха из трёх рыб", "Судак, лосось, корюшка, водка по желанию рядом.", 640, "320 г"),
  item("so-ramen", "soups", "Рамен", "Бульон чашу, яйцо, свинина, нори.", 820, "400 г", ["new"]),
  item("so-kharcho", "soups", "Харчо", "Говядина, рис, ткемали, кинза.", 540, "350 г", ["spicy"]),

  item("ho-strogan", "hot", "Бефстроганов", "Говядина, грибной соус, картофельное пюре.", 920, "320 г", ["chef"]),
  item("ho-kiev", "hot", "Котлета по-киевски", "Масло и зелень внутри, гречка рядом.", 780, "280 г"),
  item("ho-pelmeni", "hot", "Пельмени", "Ручная лепка, бульон и сметана. Двойная порция.", 590, "300 г"),
  item("ho-var-pot", "hot", "Вареники с картофелем", "Жареный лук и сметана.", 480, "280 г", ["veg"]),
  item("ho-var-cher", "hot", "Вареники с вишней", "Сметана и сахарная пудра.", 460, "250 г", ["veg"]),
  item("ho-golub", "hot", "Голубцы", "Телятина и рис, томатный соус.", 670, "320 г"),
  item("ho-duck", "hot", "Утка с яблоком", "Томлёное бедро, печёное яблоко, соус демиглас.", 1340, "340 г", ["chef"]),
  item("ho-vareniki-meat", "hot", "Вареники с мясом", "Чёрный перец, жареный лук.", 540, "280 г"),
  item("ho-plov", "hot", "Плов", "Баранина, зира, чеснок, барбарис.", 740, "380 г"),

  item("gr-ribeye", "grill", "Рибай", "Зерновой откорм, 300 г, соль и перец. Гарнир отдельно.", 2450, "300 г", ["chef"], "Мальбек"),
  item("gr-dorada", "grill", "Дорадо", "Целая, лимон, травы, оливковое масло.", 1290, "1 шт"),
  item("gr-salmon", "grill", "Лосось терияки", "Глазурь, кунжут, лайм.", 1180, "180 г"),
  item("gr-chicken", "grill", "Цыплёнок на углях", "Половина, аджика и лаваш.", 890, "450 г", ["spicy"]),
  item("gr-lamb", "grill", "Каре ягнёнка", "Четыре ребра, мята, соус из йогурта.", 1680, "280 г"),
  item("gr-veg", "grill", "Овощи гриль", "Цукини, перец, баклажан, шпинатная соль.", 540, "250 г", ["veg"]),

  item("pa-carbo", "pasta", "Карбонара", "Гуанчале, желток, пекорино, чёрный перец.", 720, "300 г", ["chef"]),
  item("pa-bolo", "pasta", "Болоньезе", "Томлёная говядина, томат, паста тальятелле.", 690, "330 г"),
  item("pa-sea", "pasta", "Морепродукты", "Креветки, мидии, чеснок, белое вино, петрушка.", 980, "320 г"),
  item("pa-pesto", "pasta", "Песто", "Базилик, кедровый орех, пармезан.", 640, "300 г", ["veg"]),
  item("pa-truff", "pasta", "Грибы и трюфель", "Шампиньоны, сливки, трюфельное масло.", 860, "300 г", ["veg", "new"]),

  item("pi-marg", "pizza", "Маргарита", "Сан марцано, моцарелла, базилик.", 620, "30 см", ["veg"]),
  item("pi-pepper", "pizza", "Пепперони", "Острая колбаса, моцарелла, мёд чили.", 740, "30 см", ["spicy"]),
  item("pi-four", "pizza", "Четыре сыра", "Моцарелла, горгонзола, пармезан, страчателла.", 820, "30 см", ["veg"]),
  item("pi-pear", "pizza", "Груша и горгонзола", "Груша, мёд, грецкий орех.", 790, "30 см", ["veg"]),
  item("pi-dyn", "pizza", "Династия", "Утка, лук, соус ткемали, кинза.", 890, "30 см", ["chef"]),
  item("pi-sea", "pizza", "Море", "Креветки, кальмар, чеснок, лимонная цедра.", 940, "30 см"),
  item("pi-ham", "pizza", "Ветчина и грибы", "Ветчина, шампиньоны, моцарелла.", 730, "30 см"),
  item("pi-diav", "pizza", "Дьявола", "Салями, перец чили, оливки.", 760, "30 см", ["spicy"]),
  item("pi-truff", "pizza", "Трюфель и грибы", "Грибной соус, трюфельное масло, руккола.", 910, "30 см", ["veg", "new"]),
  item("pi-bbq", "pizza", "Курица барбекю", "Копчёная курица, лук, соус барбекю.", 770, "30 см"),

  item("ro-phila", "rolls", "Филадельфия", "Лосось, сливочный сыр, огурец.", 690, "8 шт", ["chef"]),
  item("ro-cali", "rolls", "Калифорния", "Краб, авокадо, огурец, тобико.", 620, "8 шт"),
  item("ro-dragon", "rolls", "Дракон", "Угорь сверху, авокадо, соус унаги.", 780, "8 шт"),
  item("ro-unagi", "rolls", "Унаги маки", "Угорь, огурец, кунжут.", 640, "8 шт"),
  item("ro-spicy", "rolls", "Спайси тунец", "Тунец, спайси соус, зелёный лук.", 670, "8 шт", ["spicy"]),
  item("ro-baked", "rolls", "Запечённый краб", "Сырная шапка, соус спайси, икра.", 720, "8 шт"),
  item("ro-dyn", "rolls", "Ролл «Династия»", "Угорь, манго, сыр, соус унаги.", 840, "8 шт", ["chef", "new"]),
  item("ro-avo", "rolls", "Авокадо", "Авокадо, огурец, кунжут. Без рыбы.", 490, "8 шт", ["veg"]),
  item("ro-temp", "rolls", "Темпура с лососем", "Тёплый рисовый корж, лосось, соус спайси.", 730, "8 шт"),
  item("ro-rain", "rolls", "Радуга", "Лосось, тунец, угорь сверху.", 890, "8 шт"),
  item("ro-sake", "rolls", "Сяке маки", "Рис, нори, лосось.", 420, "8 шт"),
  item("ro-kappa", "rolls", "Каппа маки", "Огурец и кунжут.", 320, "8 шт", ["veg"]),

  item("wo-udon", "wok", "Удон с говядиной", "Устричный соус, овощи, кунжут.", 740, "350 г"),
  item("wo-pad", "wok", "Пад тай", "Рисовая лапша, креветки, арахис, лайм, тамаринд.", 790, "340 г", ["chef"]),
  item("wo-rice", "wok", "Рис с курицей", "Яйцо, овощи, соевый соус.", 620, "350 г"),
  item("wo-soba", "wok", "Соба с креветками", "Гречневая лапша, имбирь, нори.", 760, "330 г"),
  item("wo-veg", "wok", "Овощная лапша", "Бок-чой, перец, грибы, без мяса.", 560, "330 г", ["veg"]),
  item("wo-spicy", "wok", "Лапша с чили", "Свинина, чеснок, перец, базилик.", 710, "340 г", ["spicy"]),

  item("si-fries", "sides", "Картофель фри", "Соль и соус на выбор.", 280, "150 г", ["veg"]),
  item("si-mash", "sides", "Пюре", "Масло и тёплое молоко.", 260, "180 г", ["veg"]),
  item("si-rice", "sides", "Рис жасмин", "Кунжут.", 220, "150 г", ["veg"]),
  item("si-buck", "sides", "Гречка", "Лук, масло.", 240, "180 г", ["veg"]),
  item("si-grill", "sides", "Овощи гриль", "Малая порция к мясу.", 340, "160 г", ["veg"]),

  item("ki-pel", "kids", "Маленькие пельмени", "Десять штук, сметана отдельно.", 390, "180 г"),
  item("ki-pasta", "kids", "Паста с маслом", "Сливочное масло и пармезан.", 360, "200 г", ["veg"]),
  item("ki-pizza", "kids", "Мини-маргарита", "20 см, без острого.", 420, "20 см", ["veg"]),
  item("ki-ice", "kids", "Пломбир", "Ваниль, шоколадный соус по желанию.", 240, "100 г", ["veg"]),

  item("de-napoleon", "desserts", "Наполеон", "Тонкие коржи, заварной крем.", 420, "140 г", ["chef"]),
  item("de-honey", "desserts", "Медовик", "Сметана и цветочный мёд.", 390, "140 г"),
  item("de-cheese", "desserts", "Чизкейк", "Нью-Йорк, ягодный соус.", 450, "150 г"),
  item("de-tira", "desserts", "Тирамису", "Савоярди, маскарпоне, какао.", 460, "140 г"),
  item("de-mochi", "desserts", "Моти", "Три штуки: манго, матча, кунжут.", 380, "3 шт", ["new"]),
  item("de-panna", "desserts", "Панна-котта", "Ваниль и малина.", 360, "130 г", ["veg"]),
  item("de-fondant", "desserts", "Фондан", "Тёплый шоколад, шарик пломбира.", 480, "140 г", ["chef"]),

  item("ck-negroni", "cocktails", "Негрони", "Джин, кампари, красный вермут, цедра.", 590, "90 мл", [], "Солёная закуска"),
  item("ck-old", "cocktails", "Олд фешен", "Бурбон, биттер, тростниковый сахар.", 620, "90 мл"),
  item("ck-aperol", "cocktails", "Апероль спритц", "Апероль, просекко, содовая, апельсин.", 540, "200 мл"),
  item("ck-mojito", "cocktails", "Мохито", "Ром, лайм, мята, тростниковый сахар.", 520, "250 мл"),
  item("ck-marg", "cocktails", "Маргарита", "Текила, трипл сек, лайм, соль на борт.", 560, "90 мл"),
  item("ck-espresso", "cocktails", "Эспрессо мартини", "Водка, кофейный ликёр, двойной эспрессо.", 610, "90 мл", ["new"]),
  item("ck-sour", "cocktails", "Виски сауэр", "Бурбон, лимон, белок, биттер.", 580, "120 мл"),
  item("ck-french", "cocktails", "Француз 75", "Джин, лимон, сахар, игристое.", 640, "140 мл", ["chef"]),
  item("ck-melon", "cocktails", "Дыня и базилик", "Дынный ликёр, джин, лимон, базилик.", 570, "160 мл", ["new"]),
  item("ck-straw", "cocktails", "Клубничный дайкири", "Ром, клубника, лайм.", 550, "140 мл"),

  item("sh-van", "shakes", "Ванильный", "Пломбир, молоко, ваниль, взбитые сливки.", 390, "350 мл", ["veg"]),
  item("sh-choc", "shakes", "Шоколадный", "Какао, пломбир, тёртый шоколад.", 410, "350 мл", ["veg"]),
  item("sh-straw", "shakes", "Клубничный", "Ягода, пломбир, молоко.", 410, "350 мл", ["veg"]),
  item("sh-pist", "shakes", "Фисташка", "Паста фисташки, молоко, соль.", 450, "350 мл", ["veg", "new"]),
  item("sh-ban", "shakes", "Банан и карамель", "Банан, солёная карамель, пломбир.", 430, "350 мл", ["veg"]),
  item("sh-oreo", "shakes", "Печенье и сливки", "Шоколадное печенье, молоко, пломбир.", 430, "350 мл", ["veg"]),

  item("sf-citrus", "soft", "Цитрусовый лимонад", "Лимон, апельсин, мята, лёд. Домашний.", 320, "400 мл", ["veg", "chef"]),
  item("sf-berry", "soft", "Ягодный морс", "Клюква и смородина, без газа.", 280, "400 мл", ["veg"]),
  item("sf-kompot", "soft", "Компот", "Сухофрукты, как дома.", 220, "400 мл", ["veg"]),
  item("sf-peach", "soft", "Айс-ти персик", "Чёрный чай, персик, лёд.", 290, "400 мл", ["veg"]),
  item("sf-matcha", "soft", "Матча латте", "Молоко или овсяное, без сиропа.", 340, "300 мл", ["veg"]),
  item("sf-orange", "soft", "Сок апельсина", "Выжимаем при вас.", 360, "250 мл", ["veg"]),
  item("sf-apple", "soft", "Сок яблока", "Кисло-сладкие яблоки.", 320, "250 мл", ["veg"]),
  item("sf-gran", "soft", "Сок граната", "Терпкий, без сахара.", 380, "250 мл", ["veg"]),
  item("sf-still", "soft", "Вода без газа", "Стекло, 0,5 л.", 180, "500 мл", ["veg"]),
  item("sf-spark", "soft", "Вода с газом", "Стекло, 0,5 л.", 180, "500 мл", ["veg"]),

  item("sd-cola", "soda", "Кока-Кола", "Классическая, стекло.", 220, "330 мл"),
  item("sd-zero", "soda", "Кока-Кола без сахара", "Стекло.", 220, "330 мл"),
  item("sd-pepsi", "soda", "Пепси", "Стекло.", 210, "330 мл"),
  item("sd-fanta", "soda", "Фанта", "Апельсин, стекло.", 210, "330 мл"),
  item("sd-sprite", "soda", "Спрайт", "Лимон-лайм, стекло.", 210, "330 мл"),
  item("sd-tonic", "soda", "Швепс тоник", "Индиан тоник.", 240, "330 мл"),
  item("sd-ginger", "soda", "Швепс имбирь", "Острый имбирный эль.", 240, "330 мл"),
  item("sd-mirinda", "soda", "Миринда", "Апельсин, жесть.", 200, "330 мл"),
  item("sd-borjomi", "soda", "Боржоми", "Минеральная, стекло.", 280, "500 мл"),

  item("wi-prosecco", "wine", "Просекко", "Бокал игристого, сухое.", 490, "150 мл", [], "Апероль или устричный вкус закусок"),
  item("wi-prosecco-b", "wine", "Просекко, бутылка", "Сухое игристое.", 2450, "750 мл"),
  item("wi-riesling", "wine", "Рислинг", "Полусухое белое, бокал.", 460, "150 мл"),
  item("wi-riesling-b", "wine", "Рислинг, бутылка", "Полусухое белое.", 2200, "750 мл"),
  item("wi-chard", "wine", "Шардоне", "Выдержанное в стали, бокал.", 480, "150 мл"),
  item("wi-malbec", "wine", "Мальбек", "Красное, бокал к мясу.", 520, "150 мл", ["chef"]),
  item("wi-malbec-b", "wine", "Мальбек, бутылка", "Красное сухое.", 2480, "750 мл"),
  item("wi-pinot", "wine", "Пино нуар", "Лёгкое красное, бокал.", 540, "150 мл"),
  item("wi-rose", "wine", "Розе", "Сухое, бокал.", 470, "150 мл"),

  item("sp-vodka", "spirits", "Водка", "Пшеничная, порция.", 280, "40 мл"),
  item("sp-cognac", "spirits", "Коньяк", "Выдержка 5 лет.", 420, "40 мл"),
  item("sp-whisky", "spirits", "Виски", "Солодовый, без добавок в бокал.", 480, "40 мл"),
  item("sp-bourbon", "spirits", "Бурбон", "Кукурузный, ваниль в послевкусии.", 460, "40 мл"),
  item("sp-gin", "spirits", "Джин", "Классический, к тонику.", 390, "40 мл"),
  item("sp-rum", "spirits", "Ром", "Тёмный.", 390, "40 мл"),
  item("sp-teq", "spirits", "Текила бланко", "С лаймом и солью по желанию.", 410, "40 мл"),
  item("sp-nastoy", "spirits", "Домашняя настойка", "Хрен или клюква, спросите у бара.", 260, "40 мл", ["chef"]),

  item("be-lager", "beer", "Светлый лагер", "Кран, местная варка.", 280, "400 мл"),
  item("be-wheat", "beer", "Пшеничное", "Кран, нефильтрованное.", 320, "400 мл"),
  item("be-ipa", "beer", "ИПА", "Бутылка, хмель впереди.", 390, "330 мл", ["new"]),
  item("be-dark", "beer", "Тёмный эль", "Бутылка, карамель и кофе.", 370, "330 мл"),
  item("be-non", "beer", "Безалкогольное", "Светлое, бутылка.", 260, "330 мл"),
  item("be-cider", "beer", "Сидр яблочный", "Сухой, бутылка.", 340, "400 мл"),

  item("hd-esp", "hotdrinks", "Эспрессо", "Двойной можно попросить.", 160, "30 мл"),
  item("hd-ame", "hotdrinks", "Американо", "Горячий или со льдом.", 190, "200 мл"),
  item("hd-cap", "hotdrinks", "Капучино", "Молоко или овсяное.", 240, "250 мл"),
  item("hd-lat", "hotdrinks", "Латте", "Большая чашка.", 260, "300 мл"),
  item("hd-raf", "hotdrinks", "Раф", "Сливки и ваниль. Можно без сиропа.", 290, "300 мл"),
  item("hd-puer", "hotdrinks", "Пуэр", "Чайник на стол, несколько проливов.", 420, "600 мл"),
  item("hd-jasmine", "hotdrinks", "Жасмин", "Зелёный, чайник.", 360, "600 мл", ["veg"]),
  item("hd-ivan", "hotdrinks", "Иван-чай", "Ферментированный, чайник.", 340, "600 мл", ["veg"]),
  item("hd-black", "hotdrinks", "Чёрный чай", "Классический, к десерту.", 280, "600 мл"),
];

export const dishById = new Map(dishes.map((dish) => [dish.id, dish]));

export type ZoneId = "hall" | "bar" | "cabinet" | "terrace";

export type TableSpec = {
  id: string;
  label: string;
  seats: number;
  zone: ZoneId;
  pos: string;
  shape: "round" | "rect";
};

export const zones: { id: ZoneId; title: string; lead: string }[] = [
  {
    id: "hall",
    title: "Основной зал",
    lead: "Тихий свет и столы у окон на Советскую.",
  },
  {
    id: "bar",
    title: "Бар",
    lead: "Высокие стулья. Удобно вдвоём и без долгой посадки.",
  },
  {
    id: "cabinet",
    title: "Кабинеты",
    lead: "Дверь закрывается. Для разговора, дня рождения и ужина шефа.",
  },
  {
    id: "terrace",
    title: "Терраса",
    lead: "Зимой тёплый контур и пледы, летом открытое стекло.",
  },
];

export const tables: TableSpec[] = [
  { id: "t1", label: "1", seats: 2, zone: "hall", pos: "pos-t1", shape: "round" },
  { id: "t2", label: "2", seats: 4, zone: "hall", pos: "pos-t2", shape: "rect" },
  { id: "t3", label: "3", seats: 4, zone: "hall", pos: "pos-t3", shape: "rect" },
  { id: "t4", label: "4", seats: 2, zone: "hall", pos: "pos-t4", shape: "round" },
  { id: "t5", label: "5", seats: 6, zone: "hall", pos: "pos-t5", shape: "rect" },
  { id: "t6", label: "6", seats: 4, zone: "hall", pos: "pos-t6", shape: "round" },
  { id: "t7", label: "7", seats: 2, zone: "hall", pos: "pos-t7", shape: "rect" },
  { id: "b1", label: "Б1", seats: 2, zone: "bar", pos: "pos-b1", shape: "rect" },
  { id: "b2", label: "Б2", seats: 2, zone: "bar", pos: "pos-b2", shape: "rect" },
  { id: "b3", label: "Б3", seats: 2, zone: "bar", pos: "pos-b3", shape: "rect" },
  { id: "vip1", label: "Кедр", seats: 6, zone: "cabinet", pos: "pos-vip1", shape: "rect" },
  { id: "vip2", label: "Нефрит", seats: 8, zone: "cabinet", pos: "pos-vip2", shape: "rect" },
  { id: "tr1", label: "Т1", seats: 2, zone: "terrace", pos: "pos-tr1", shape: "round" },
  { id: "tr2", label: "Т2", seats: 4, zone: "terrace", pos: "pos-tr2", shape: "rect" },
  { id: "tr3", label: "Т3", seats: 4, zone: "terrace", pos: "pos-tr3", shape: "rect" },
  { id: "tr4", label: "Т4", seats: 6, zone: "terrace", pos: "pos-tr4", shape: "rect" },
];

export const SLOTS = ["12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00", "22:30"];

export function tableBusy(table: TableSpec, date: string, time: string): boolean {
  let hash = 2166136261;
  const key = `${table.id}|${date}|${time}`;
  for (let i = 0; i < key.length; i += 1) {
    hash ^= key.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const roll = (hash >>> 0) % 100;
  const limit = table.zone === "cabinet" ? 18 : table.zone === "bar" ? 46 : 32;
  return roll < limit;
}

export const events = [
  {
    id: "jazz",
    when: "Каждая пятница",
    time: "20:00",
    title: "Джазовый стол",
    text: "Трио у бара. Посадка свободная, кабинет лучше забронировать.",
  },
  {
    id: "wine",
    when: "Каждый четверг",
    time: "19:00",
    title: "Три бокала",
    text: "Сомелье наливает три вина к трём закускам. Мест двенадцать.",
  },
  {
    id: "chef",
    when: "Последняя суббота",
    time: "19:30",
    title: "Ужин шефа",
    text: "Пять подач, меню не публикуем заранее. Только по записи.",
  },
  {
    id: "family",
    when: "Воскресенье",
    time: "13:00",
    title: "Семейный обед",
    text: "Борщ, пицца и детское меню. Терраса, если тепло в контуре.",
  },
];

export const PHONE_DISPLAY = "+7 (959) 104-48-21";
export const PHONE_TEL = "+79591044821";
export const ADDRESS = "г. Луганск, ул. Советская, 64";

export function luhanskNow(): Date {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60_000;
  return new Date(utc + 3 * 3_600_000);
}

export function dateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const WEEKDAYS = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const MONTHS = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export function formatDay(date: Date): string {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

export function formatWeekday(date: Date): string {
  const name = WEEKDAYS[date.getDay()] ?? "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function rub(value: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

export function upcomingDays(from: Date, count: number): Date[] {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  return Array.from({ length: count }, (_, index) => {
    const next = new Date(start);
    next.setDate(start.getDate() + index);
    return next;
  });
}

export function slotPassed(day: Date, slot: string, now: Date): boolean {
  if (dateKey(day) !== dateKey(now)) return false;
  const [hours, minutes] = slot.split(":").map(Number);
  return (hours ?? 0) < now.getHours() || ((hours ?? 0) === now.getHours() && (minutes ?? 0) <= now.getMinutes());
}

export function houseStatus(now: Date): { open: boolean; kitchen: boolean; label: string } {
  const minutes = now.getHours() * 60 + now.getMinutes();
  const open = minutes >= 12 * 60 && minutes < 24 * 60;
  const kitchen = minutes >= 12 * 60 && minutes < 23 * 60;
  if (!open) return { open, kitchen, label: "Сейчас закрыто. Откроемся в 12:00" };
  if (!kitchen) return { open, kitchen, label: "Зал и бар открыты. Кухня до 23:00 уже закрыта" };
  return { open, kitchen, label: "Открыто. Кухня работает до 23:00, бар до полуночи" };
}

export function tagLabel(tag: Tag): string {
  if (tag === "chef") return "От шефа";
  if (tag === "spicy") return "Острое";
  if (tag === "veg") return "Без мяса";
  return "Новое";
}
