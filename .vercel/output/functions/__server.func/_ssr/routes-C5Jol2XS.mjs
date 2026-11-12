import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShoppingBag, c as Phone, d as MapPin, f as Leaf, g as Check, h as ChefHat, i as Sparkles, l as Minus, m as Clock3, n as UtensilsCrossed, o as Search, p as Flame, s as Plus, t as X, u as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5Jol2XS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var item = (id, course, name, desc, price, amount, tags = [], pair) => ({
	id,
	course,
	name,
	desc,
	price,
	amount,
	tags,
	pair
});
var courses = [
	{
		id: "sets",
		title: "Сеты",
		group: "kitchen",
		blurb: "Собранные столы, чтобы не выбирать по одному."
	},
	{
		id: "starters",
		title: "Закуски",
		group: "kitchen",
		blurb: "Холодные и горячие, пока греется зал."
	},
	{
		id: "salads",
		title: "Салаты",
		group: "kitchen",
		blurb: "От оливье до угря."
	},
	{
		id: "soups",
		title: "Супы",
		group: "kitchen",
		blurb: "Борщ, том ям и всё, что между ними."
	},
	{
		id: "hot",
		title: "Горячее",
		group: "kitchen",
		blurb: "Домашняя и европейская плита."
	},
	{
		id: "grill",
		title: "Гриль",
		group: "kitchen",
		blurb: "Огонь, рыба и мясо без лишней суеты."
	},
	{
		id: "pasta",
		title: "Паста",
		group: "kitchen",
		blurb: "Свежая паста, соусы каждый день."
	},
	{
		id: "pizza",
		title: "Пицца",
		group: "kitchen",
		blurb: "Дровяной жар, тонкий борт."
	},
	{
		id: "rolls",
		title: "Роллы",
		group: "kitchen",
		blurb: "Рис, рыба и фирменные сеты дома."
	},
	{
		id: "wok",
		title: "Вок",
		group: "kitchen",
		blurb: "Лапша и рис на сильном огне."
	},
	{
		id: "sides",
		title: "Гарниры",
		group: "kitchen",
		blurb: "Чтобы тарелка была полной."
	},
	{
		id: "kids",
		title: "Детям",
		group: "kitchen",
		blurb: "Короткие названия и спокойные вкусы."
	},
	{
		id: "desserts",
		title: "Десерты",
		group: "kitchen",
		blurb: "Торты, моти и горячий фондан."
	},
	{
		id: "cocktails",
		title: "Коктейли",
		group: "bar",
		blurb: "Классика бара и сезонные стаканы."
	},
	{
		id: "shakes",
		title: "Молочные",
		group: "bar",
		blurb: "Густые коктейли без градуса."
	},
	{
		id: "soft",
		title: "Безалкогольные",
		group: "bar",
		blurb: "Лимонады, морсы и соки."
	},
	{
		id: "soda",
		title: "Газировка",
		group: "bar",
		blurb: "Кола, пепси, фанта и тоники."
	},
	{
		id: "wine",
		title: "Вино",
		group: "bar",
		blurb: "Бокал или бутылка."
	},
	{
		id: "spirits",
		title: "Крепкое",
		group: "bar",
		blurb: "Порции по 40 мл, если не сказано иначе."
	},
	{
		id: "beer",
		title: "Пиво",
		group: "bar",
		blurb: "Бутылка и кран."
	},
	{
		id: "hotdrinks",
		title: "Чай и кофе",
		group: "bar",
		blurb: "Эспрессо, раф и чайник на стол."
	}
];
var ALCOHOL = [
	"cocktails",
	"wine",
	"spirits",
	"beer"
];
var dishes = [
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
	item("hd-black", "hotdrinks", "Чёрный чай", "Классический, к десерту.", 280, "600 мл")
];
var dishById = new Map(dishes.map((dish) => [dish.id, dish]));
var zones = [
	{
		id: "hall",
		title: "Основной зал",
		lead: "Тихий свет и столы у окон на Советскую."
	},
	{
		id: "bar",
		title: "Бар",
		lead: "Высокие стулья. Удобно вдвоём и без долгой посадки."
	},
	{
		id: "cabinet",
		title: "Кабинеты",
		lead: "Дверь закрывается. Для разговора, дня рождения и ужина шефа."
	},
	{
		id: "terrace",
		title: "Терраса",
		lead: "Зимой тёплый контур и пледы, летом открытое стекло."
	}
];
var tables = [
	{
		id: "t1",
		label: "1",
		seats: 2,
		zone: "hall",
		pos: "pos-t1",
		shape: "round"
	},
	{
		id: "t2",
		label: "2",
		seats: 4,
		zone: "hall",
		pos: "pos-t2",
		shape: "rect"
	},
	{
		id: "t3",
		label: "3",
		seats: 4,
		zone: "hall",
		pos: "pos-t3",
		shape: "rect"
	},
	{
		id: "t4",
		label: "4",
		seats: 2,
		zone: "hall",
		pos: "pos-t4",
		shape: "round"
	},
	{
		id: "t5",
		label: "5",
		seats: 6,
		zone: "hall",
		pos: "pos-t5",
		shape: "rect"
	},
	{
		id: "t6",
		label: "6",
		seats: 4,
		zone: "hall",
		pos: "pos-t6",
		shape: "round"
	},
	{
		id: "t7",
		label: "7",
		seats: 2,
		zone: "hall",
		pos: "pos-t7",
		shape: "rect"
	},
	{
		id: "b1",
		label: "Б1",
		seats: 2,
		zone: "bar",
		pos: "pos-b1",
		shape: "rect"
	},
	{
		id: "b2",
		label: "Б2",
		seats: 2,
		zone: "bar",
		pos: "pos-b2",
		shape: "rect"
	},
	{
		id: "b3",
		label: "Б3",
		seats: 2,
		zone: "bar",
		pos: "pos-b3",
		shape: "rect"
	},
	{
		id: "vip1",
		label: "Кедр",
		seats: 6,
		zone: "cabinet",
		pos: "pos-vip1",
		shape: "rect"
	},
	{
		id: "vip2",
		label: "Нефрит",
		seats: 8,
		zone: "cabinet",
		pos: "pos-vip2",
		shape: "rect"
	},
	{
		id: "tr1",
		label: "Т1",
		seats: 2,
		zone: "terrace",
		pos: "pos-tr1",
		shape: "round"
	},
	{
		id: "tr2",
		label: "Т2",
		seats: 4,
		zone: "terrace",
		pos: "pos-tr2",
		shape: "rect"
	},
	{
		id: "tr3",
		label: "Т3",
		seats: 4,
		zone: "terrace",
		pos: "pos-tr3",
		shape: "rect"
	},
	{
		id: "tr4",
		label: "Т4",
		seats: 6,
		zone: "terrace",
		pos: "pos-tr4",
		shape: "rect"
	}
];
var SLOTS = [
	"12:00",
	"13:30",
	"15:00",
	"16:30",
	"18:00",
	"19:30",
	"21:00",
	"22:30"
];
function tableBusy(table, date, time) {
	let hash = 2166136261;
	const key = `${table.id}|${date}|${time}`;
	for (let i = 0; i < key.length; i += 1) {
		hash ^= key.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	return (hash >>> 0) % 100 < (table.zone === "cabinet" ? 18 : table.zone === "bar" ? 46 : 32);
}
var events = [
	{
		id: "jazz",
		when: "Каждая пятница",
		time: "20:00",
		title: "Джазовый стол",
		text: "Трио у бара. Посадка свободная, кабинет лучше забронировать."
	},
	{
		id: "wine",
		when: "Каждый четверг",
		time: "19:00",
		title: "Три бокала",
		text: "Сомелье наливает три вина к трём закускам. Мест двенадцать."
	},
	{
		id: "chef",
		when: "Последняя суббота",
		time: "19:30",
		title: "Ужин шефа",
		text: "Пять подач, меню не публикуем заранее. Только по записи."
	},
	{
		id: "family",
		when: "Воскресенье",
		time: "13:00",
		title: "Семейный обед",
		text: "Борщ, пицца и детское меню. Терраса, если тепло в контуре."
	}
];
var PHONE_DISPLAY = "+7 (959) 104-48-21";
var PHONE_TEL = "+79591044821";
var ADDRESS = "г. Луганск, ул. Советская, 64";
function luhanskNow() {
	const now = /* @__PURE__ */ new Date();
	const utc = now.getTime() + now.getTimezoneOffset() * 6e4;
	return new Date(utc + 108e5);
}
function dateKey(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
var WEEKDAYS = [
	"вс",
	"пн",
	"вт",
	"ср",
	"чт",
	"пт",
	"сб"
];
var MONTHS = [
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
	"декабря"
];
function formatDay(date) {
	return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}
function formatWeekday(date) {
	const name = WEEKDAYS[date.getDay()] ?? "";
	return name.charAt(0).toUpperCase() + name.slice(1);
}
function rub(value) {
	return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}
function upcomingDays(from, count) {
	const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
	return Array.from({ length: count }, (_, index) => {
		const next = new Date(start);
		next.setDate(start.getDate() + index);
		return next;
	});
}
function slotPassed(day, slot, now) {
	if (dateKey(day) !== dateKey(now)) return false;
	const [hours, minutes] = slot.split(":").map(Number);
	return (hours ?? 0) < now.getHours() || (hours ?? 0) === now.getHours() && (minutes ?? 0) <= now.getMinutes();
}
function houseStatus(now) {
	const minutes = now.getHours() * 60 + now.getMinutes();
	const open = minutes >= 720 && minutes < 1440;
	const kitchen = minutes >= 720 && minutes < 1380;
	if (!open) return {
		open,
		kitchen,
		label: "Сейчас закрыто. Откроемся в 12:00"
	};
	if (!kitchen) return {
		open,
		kitchen,
		label: "Зал и бар открыты. Кухня до 23:00 уже закрыта"
	};
	return {
		open,
		kitchen,
		label: "Открыто. Кухня работает до 23:00, бар до полуночи"
	};
}
function tagLabel(tag) {
	if (tag === "chef") return "От шефа";
	if (tag === "spicy") return "Острое";
	if (tag === "veg") return "Без мяса";
	return "Новое";
}
var KEY = "dynasty-luhansk-v1";
var StoreContext = (0, import_react.createContext)(null);
var empty = {
	cart: [],
	reservations: [],
	orders: [],
	notes: [],
	alcohol: "unknown"
};
function DynastyProvider({ children }) {
	const [data, setData] = (0, import_react.useState)(empty);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [view, setView] = (0, import_react.useState)("home");
	const [course, setCourse] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openDish, setOpenDish] = (0, import_react.useState)(null);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const [toasts, setToasts] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				setData({
					cart: parsed.cart ?? [],
					reservations: parsed.reservations ?? [],
					orders: parsed.orders ?? [],
					notes: parsed.notes ?? [],
					alcohol: parsed.alcohol ?? "unknown"
				});
			}
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		localStorage.setItem(KEY, JSON.stringify(data));
	}, [data, hydrated]);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("is-lock", Boolean(openDish || cartOpen || navOpen));
		return () => document.body.classList.remove("is-lock");
	}, [
		openDish,
		cartOpen,
		navOpen
	]);
	const push = (text) => {
		const id = Date.now() + Math.floor(Math.random() * 1e3);
		setToasts((current) => [...current, {
			id,
			text
		}]);
		window.setTimeout(() => {
			setToasts((current) => current.filter((toast) => toast.id !== id));
		}, 2600);
	};
	const go = (next, nextCourse) => {
		setView(next);
		setNavOpen(false);
		setCartOpen(false);
		if (nextCourse) setCourse(nextCourse);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const value = (0, import_react.useMemo)(() => {
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
			add: (id) => {
				if (!dishById.has(id)) return;
				setData((current) => {
					const cart = current.cart.find((line) => line.id === id) ? current.cart.map((line) => line.id === id ? {
						...line,
						qty: line.qty + 1
					} : line) : [...current.cart, {
						id,
						qty: 1
					}];
					return {
						...current,
						cart
					};
				});
				push("Добавили в самовывоз");
			},
			setQty: (id, qty) => {
				setData((current) => ({
					...current,
					cart: qty <= 0 ? current.cart.filter((line) => line.id !== id) : current.cart.map((line) => line.id === id ? {
						...line,
						qty
					} : line)
				}));
			},
			clearCart: () => setData((current) => ({
				...current,
				cart: []
			})),
			addReservation: (reservation) => {
				setData((current) => ({
					...current,
					reservations: [reservation, ...current.reservations]
				}));
			},
			cancelReservation: (id) => {
				setData((current) => ({
					...current,
					reservations: current.reservations.filter((item) => item.id !== id)
				}));
				push("Бронь снята");
			},
			addOrder: (order) => {
				setData((current) => ({
					...current,
					orders: [order, ...current.orders],
					cart: []
				}));
			},
			addNote: (note) => {
				setData((current) => ({
					...current,
					notes: [note, ...current.notes]
				}));
			},
			setAlcohol: (alcohol) => setData((current) => ({
				...current,
				alcohol
			}))
		};
	}, [
		data,
		hydrated,
		view,
		course,
		query,
		openDish,
		cartOpen,
		navOpen,
		toasts
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useDynasty() {
	const store = (0, import_react.useContext)(StoreContext);
	if (!store) throw new Error("Dynasty store missing");
	return store;
}
var OCCASIONS = [
	"Ужин",
	"Свидание",
	"Деловая встреча",
	"День рождения",
	"Просто посидеть"
];
function BookView() {
	const { reservations, addReservation, cancelReservation, go } = useDynasty();
	const now = luhanskNow();
	const days = (0, import_react.useMemo)(() => upcomingDays(now, 14), [
		now.getDate(),
		now.getMonth(),
		now.getFullYear()
	]);
	const [day, setDay] = (0, import_react.useState)(days[0] ?? now);
	const [time, setTime] = (0, import_react.useState)(SLOTS.find((slot) => !slotPassed(day, slot, now)) ?? SLOTS[0] ?? "18:00");
	const [guests, setGuests] = (0, import_react.useState)(2);
	const [zone, setZone] = (0, import_react.useState)("hall");
	const [tableId, setTableId] = (0, import_react.useState)(null);
	const [mode, setMode] = (0, import_react.useState)("table");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [occasion, setOccasion] = (0, import_react.useState)(OCCASIONS[0] ?? "Ужин");
	const [comment, setComment] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(null);
	const key = dateKey(day);
	const tooBig = guests > 8;
	const stateOf = (table) => {
		if (reservations.some((item) => item.mode === "table" && item.tableId === table.id && item.date === key && item.time === time) || tableBusy(table, key, time)) return "busy";
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
			const reservation = {
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
				mode
			};
			addReservation(reservation);
			setDone(reservation);
			setError("");
			return;
		}
		const reservation = {
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
			mode
		};
		addReservation(reservation);
		setDone(reservation);
		setError("");
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card success",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "seal",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 36 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Стол записан"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Ждём вас, ", done.name] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					formatDay(day),
					", ",
					done.time,
					". ",
					done.tableLabel,
					". Гостей: ",
					done.guests,
					". Повод: ",
					done.occasion,
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "quiet",
					children: "Это заявка в доме. Если планы изменятся, снимите бронь ниже или позвоните."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-actions",
					style: { justifyContent: "center" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-primary",
							type: "button",
							onClick: () => go("menu"),
							children: "Выбрать еду"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-ghost",
							type: "button",
							onClick: () => setDone(null),
							children: "Ещё одна бронь"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "btn btn-line",
							href: `tel:${PHONE_TEL}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), "Позвонить"]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visits, {})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Бронь"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Выберите день и стол" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sub",
				children: "План дома обновляется по слотам. Занятые столы нельзя нажать. Если удобнее голосом, позвоните: мы подберём место."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: mode === "table" ? "btn btn-primary" : "btn btn-ghost",
						type: "button",
						onClick: () => setMode("table"),
						children: "Выбрать стол самому"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: mode === "consult" ? "btn btn-primary" : "btn btn-ghost",
						type: "button",
						onClick: () => setMode("consult"),
						children: "Обсудить с сотрудником"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "btn btn-line",
						href: `tel:${PHONE_TEL}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), PHONE_DISPLAY]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "block-title",
				style: {
					fontSize: "1.8rem",
					marginTop: "1.4rem"
				},
				children: "День"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "days",
				role: "listbox",
				"aria-label": "Дни брони",
				children: days.map((date) => {
					const on = dateKey(date) === key;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: on ? "day is-on" : "day",
						type: "button",
						onClick: () => {
							setDay(date);
							setTableId(null);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: formatWeekday(date) }), formatDay(date)]
					}, dateKey(date));
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "block-title",
				style: {
					fontSize: "1.8rem",
					marginTop: "1rem"
				},
				children: "Время"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "slots",
				children: SLOTS.map((slot) => {
					const past = slotPassed(day, slot, now);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: time === slot ? "slot is-on" : "slot",
						type: "button",
						disabled: past,
						onClick: () => {
							setTime(slot);
							setTableId(null);
						},
						children: [slot, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: past ? "прошло" : "свободно" })]
					}, slot);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card",
				style: { marginTop: "1rem" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: "Гостей за столом"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "guest-step",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-ghost",
							type: "button",
							onClick: () => setGuests((value) => Math.max(1, value - 1)),
							"aria-label": "Меньше гостей",
							children: "−"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: guests }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-ghost",
							type: "button",
							onClick: () => setGuests((value) => Math.min(12, value + 1)),
							"aria-label": "Больше гостей",
							children: "+"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "quiet",
							children: "До 8 человек сажаем по плану. От 9 человек стол собирает администратор."
						})
					]
				})]
			}),
			mode === "consult" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card",
				style: { marginTop: "0.8rem" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Администратор перезвонит" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Оставьте имя и телефон. Мы подтвердим ",
					formatDay(day),
					" в ",
					time,
					" и подскажем, какой зал тише. Можно и сразу позвонить на ",
					PHONE_DISPLAY,
					"."
				] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "zone-row",
					role: "tablist",
					"aria-label": "Зоны зала",
					children: zones.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: zone === item.id ? "zone-btn is-on" : "zone-btn",
						type: "button",
						onClick: () => setZone(item.id),
						children: item.title
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "quiet",
					children: zones.find((item) => item.id === zone)?.lead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floor, {
					zone,
					guests,
					tableId,
					stateOf,
					onPick: setTableId
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "form",
				onSubmit: (event) => {
					event.preventDefault();
					submit();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: ["Имя", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (event) => setName(event.target.value),
								autoComplete: "name",
								placeholder: "Как к вам обращаться"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: ["Телефон", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								autoComplete: "tel",
								inputMode: "tel",
								placeholder: "+7"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field",
						children: ["Повод", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: occasion,
							onChange: (event) => setOccasion(event.target.value),
							children: OCCASIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: item
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field",
						children: ["Комментарий", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: comment,
							onChange: (event) => setComment(event.target.value),
							placeholder: "Окно, детский стул, без остrego, торт к 21:00"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "error",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary",
						type: "submit",
						children: mode === "table" ? "Забронировать этот стол" : "Попросить перезвонить"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visits, {})
		]
	});
}
function Floor({ zone, guests, tableId, stateOf, onPick }) {
	const zoneTables = tables.filter((table) => table.zone === zone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "room-wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "room",
				"aria-label": "План зоны",
				children: [
					zone === "hall" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "room-prop pos-entry",
						children: "Вход"
					}) : null,
					zone === "bar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "room-prop pos-bar",
						children: "Барная стойка"
					}) : null,
					zoneTables.map((table) => {
						const state = guests > 8 ? "tight" : stateOf(table);
						const picked = tableId === table.id && state === "free";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: state !== "free",
							className: `seat ${table.shape} ${table.pos} ${picked ? "is-picked" : ""} ${state === "busy" ? "is-busy" : ""} ${state === "tight" ? "is-tight" : ""}`,
							onClick: () => onPick(table.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: table.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: state === "busy" ? "занят" : state === "tight" ? "мало мест" : `${table.seats} мест` })]
						}, table.id);
					}),
					zone === "hall" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "room-prop pos-window",
						children: "Окна на улицу"
					}) : null,
					zone === "bar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "room-prop pos-bar-note",
						children: "Вид на стойку и коктейли"
					}) : null,
					zone === "cabinet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "room-prop pos-cab-note",
						children: "Дверь закрывается с вашей стороны"
					}) : null,
					zone === "terrace" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "room-prop pos-plant",
						children: "Пледы и тёплый контур"
					}) : null
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "legend",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-free" }), " свободен"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-pick" }), " ваш выбор"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-busy" }), " занят или мал"] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "quiet",
			children: "На телефоне план можно вести пальцем в сторону."
		})
	] });
}
function Visits() {
	const { reservations, cancelReservation } = useDynasty();
	if (reservations.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Ваши брони" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid-2",
			children: reservations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card visit",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
					item.date,
					" · ",
					item.time
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					item.tableLabel,
					". ",
					item.guests,
					" гостей. ",
					item.name,
					"."
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-ghost",
					type: "button",
					onClick: () => cancelReservation(item.id),
					children: "Снять"
				})]
			}, item.id))
		})]
	});
}
var ticker = dishes.filter((dish) => dish.tags.includes("chef")).slice(0, 8);
function HomeView() {
	const { go, add } = useDynasty();
	const status = houseStatus(luhanskNow());
	const featured = dishes.filter((dish) => dish.tags.includes("chef")).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb orb-a" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb orb-b" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb orb-c" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Ресторан · Луганск · с 2014"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "wordmark",
					"aria-label": "Династия",
					children: "ДИНАСТИЯ".split("").map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { animationDelay: `${index * .06}s` },
						children: letter
					}, letter + index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "Один дом для борща и роллов, рибая и пиццы, молочного коктейля и негрони. Столы выбираете на плане зала. Еду можно забрать у стойки к своему времени."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "btn btn-primary",
							type: "button",
							onClick: () => go("menu"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { size: 18 }), "Открыть меню"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-ghost",
							type: "button",
							onClick: () => go("book"),
							children: "Забронировать стол"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-ghost",
							type: "button",
							onClick: () => go("pickup"),
							children: "Забрать на месте"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "status-pill",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: status.open ? "dot" : "dot is-off" }), status.label]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track",
				children: [...ticker, ...ticker].map((dish, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: dish.name }),
					" · ",
					rub(dish.price)
				] }, dish.id + index))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Как устроен дом" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sub",
					children: "Три коротких пути. Каждый ведёт на свою страницу, ничего не висит без дела."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { size: 20 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Кухня без границ" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Азия, гриль, домашнее и пицца в одном меню. Фильтры, поиск и карточка каждого блюда." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-line",
									type: "button",
									onClick: () => go("menu", "rolls"),
									children: "Сначала роллы"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card reveal",
							style: { animationDelay: "0.08s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 20 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Стол, который виден" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Четырнадцать дней, слоты и план: зал, бар, кабинеты, терраса. Или звонок администратору." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-line",
									type: "button",
									onClick: () => go("book"),
									children: "Смотреть план"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card reveal",
							style: { animationDelay: "0.16s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { size: 20 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Самовывоз к часу" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Соберите заказ из меню и заберите у стойки. Готовим к выбранному времени, оплата на месте." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-line",
									type: "button",
									onClick: () => go("pickup"),
									children: "К самовывозу"
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "От шефа сегодня" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sub",
					children: "Эти позиции можно сразу положить в самовывоз или открыть и прочитать состав."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dish-grid",
					children: featured.map((dish) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card dish",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dish-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: dish.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "price",
									children: rub(dish.price)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: dish.desc }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta",
								children: dish.amount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dish-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-primary",
									type: "button",
									onClick: () => add(dish.id),
									children: "В самовывоз"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-ghost",
									type: "button",
									onClick: () => go("menu"),
									children: "Всё меню"
								})]
							})
						]
					}, dish.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Ближайшие вечера" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid-2",
				children: events.slice(0, 2).map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: event.when
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: event.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.text }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "btn btn-line",
							type: "button",
							onClick: () => go("events"),
							children: ["Записаться · ", event.time]
						})
					]
				}, event.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section stats",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card stat",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2014" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "год, когда открыли первый зал" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card stat",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "столов на плане, от двоих до кабинета" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card stat",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: dishes.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "позиций в кухне и баре" })]
				})
			]
		})
	] });
}
function MenuView() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Меню"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Кухня и бар" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sub",
				children: [dishes.length, " позиций: от пампушки до угря, от колы до виски. Нажмите блюдо, чтобы прочитать пару к нему, или сразу добавьте в самовывоз."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "filters",
				role: "tablist",
				"aria-label": "Разделы меню",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: course === "all" ? "chip is-on" : "chip",
						type: "button",
						onClick: () => setCourse("all"),
						children: "Всё"
					}),
					kitchen.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: course === item.id ? "chip is-on" : "chip",
						type: "button",
						onClick: () => setCourse(item.id),
						children: item.title
					}, item.id)),
					bar.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: course === item.id ? "chip is-on" : "chip",
						type: "button",
						onClick: () => setCourse(item.id),
						children: item.title
					}, item.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "search",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Найти борщ, пепси, филадельфию...",
						"aria-label": "Поиск по меню"
					}),
					query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "icon-btn",
						type: "button",
						"aria-label": "Очистить поиск",
						onClick: () => setQuery(""),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
					}) : null
				]
			}),
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "quiet",
				children: active.blurb
			}) : null,
			courseIsAlcohol && alcohol === "unknown" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeGate, {
				onYes: () => setAlcohol("yes"),
				onNo: () => setAlcohol("no")
			}) : null,
			courseIsAlcohol && alcohol === "no" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card age-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Этот раздел только с 18 лет" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Молочные коктейли, лимонады и газировка остаются открытыми." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-actions",
						style: { justifyContent: "center" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-primary",
							type: "button",
							onClick: () => setAlcohol("yes"),
							children: "Мне есть 18"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-ghost",
							type: "button",
							onClick: () => setCourse("shakes"),
							children: "К молочным"
						})]
					})
				]
			}) : null,
			!courseIsAlcohol || alcohol === "yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				course === "all" && alcohol !== "yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "quiet",
					children: "Вино, пиво, крепкое и коктейли откроются в разделе бара после вопроса о возрасте."
				}) : null,
				list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card lock-note",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Ничего не нашлось" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Смените раздел или сотрите запрос." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-line",
							type: "button",
							onClick: () => {
								setQuery("");
								setCourse("all");
							},
							children: "Показать всё"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dish-grid",
					children: list.map((dish, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						dish,
						delay: Math.min(index, 8) * .04,
						onOpen: () => setOpenDish(dish.id),
						onAdd: () => add(dish.id)
					}, dish.id))
				}),
				course === "all" && alcohol !== "yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card lock-note",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Бар с градусом" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Коктейли, вино, крепкое и пиво откроются после короткого вопроса. Кола, морс и молочные коктейли уже в списке." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-primary",
							type: "button",
							onClick: () => setCourse("cocktails"),
							children: "Открыть коктейли"
						})
					]
				}) : null
			] }) : null
		]
	});
}
function DishCard({ dish, delay, onOpen, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card dish reveal",
		style: { animationDelay: `${delay}s` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dish-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: dish.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "price",
					children: rub(dish.price)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: dish.desc }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "meta",
				children: dish.amount
			}),
			dish.tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tags",
				children: dish.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tag",
					children: [
						tag === "spicy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { size: 12 }) : null,
						tag === "veg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { size: 12 }) : null,
						tagLabel(tag)
					]
				}, tag))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dish-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-primary",
					type: "button",
					onClick: onAdd,
					children: "В самовывоз"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-ghost",
					type: "button",
					onClick: onOpen,
					children: "Подробнее"
				})]
			})
		]
	});
}
function AgeGate({ onYes, onNo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card age-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Бар"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Вам уже есть 18?" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Алкоголь показываем только совершеннолетним. Молочные коктейли, соки и газировка доступны без вопроса." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-actions",
				style: { justifyContent: "center" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-primary",
					type: "button",
					onClick: onYes,
					children: "Да, мне есть 18"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-ghost",
					type: "button",
					onClick: onNo,
					children: "Нет"
				})]
			})
		]
	});
}
function DishDialog() {
	const { openDish, setOpenDish, add, go } = useDynasty();
	const dish = dishes.find((item) => item.id === openDish);
	if (!dish) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-back",
		role: "presentation",
		onClick: () => setOpenDish(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "dish-title",
			onClick: (event) => event.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "modal-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: courses.find((item) => item.id === dish.course)?.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "dish-title",
						className: "block-title",
						children: dish.name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "icon-btn",
						type: "button",
						"aria-label": "Закрыть",
						onClick: () => setOpenDish(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: dish.desc }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "meta",
					children: [
						dish.amount,
						" · ",
						rub(dish.price)
					]
				}),
				dish.pair ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"К бокалу: ",
					dish.pair,
					"."
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Подача как в зале. Остроту и соусы можно поправить в комментарии к самовывозу." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "quiet",
					children: "Если есть аллергия, напишите её в комментарии или скажите администратору. Кухня не гарантирует полное отсутствие следов."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary",
						type: "button",
						onClick: () => {
							add(dish.id);
							setOpenDish(null);
						},
						children: "В самовывоз"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-ghost",
						type: "button",
						onClick: () => {
							setOpenDish(null);
							go("book");
						},
						children: "Сесть в зале"
					})]
				})
			]
		})
	});
}
function StoryView() {
	const { go } = useDynasty();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "О доме"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Семья, которая кормит город" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sub",
				children: "«Династия» открылась в Луганске в 2014 году. Сначала был борщ и котлета. Потом гости попросили роллы, потом пиццу к позднему столу, потом бар, который не спорит с кухней."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "timeline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card time-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2014" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Первый зал" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Двенадцать посадочных мест и плита, которая не выключалась до полуночи." })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card time-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2018" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Бар и кабинеты" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Появились «Кедр» и «Нефрит»: комнаты, где можно говорить, не повышая голос." })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card time-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2023" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Роллы и гриль" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Рис и угли встали рядом с пельменями. Меню перестало выбирать одну страну." })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card time-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Сейчас" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Шестнадцать столов" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Зал, бар, терраса с тёплым контуром. Самовывоз у стойки, если некогда сидеть." })] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-primary",
					type: "button",
					onClick: () => go("book"),
					children: "Занять стол"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-ghost",
					type: "button",
					onClick: () => go("menu"),
					children: "Читать меню"
				})]
			})
		]
	});
}
function EventsView() {
	const { addNote, notes, push } = useDynasty();
	const [open, setOpen] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [banquetName, setBanquetName] = (0, import_react.useState)("");
	const [banquetPhone, setBanquetPhone] = (0, import_react.useState)("");
	const [banquetGuests, setBanquetGuests] = (0, import_react.useState)("12");
	const [banquetDate, setBanquetDate] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Вечера"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "На что стоит прийти" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sub",
				children: "Запись ни к чему не обязывает, пока администратор не перезвонит и не подтвердит место."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid-2",
				children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "kicker",
							children: [
								event.when,
								" · ",
								event.time
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: event.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.text }),
						open === event.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "form",
							onSubmit: (submitEvent) => {
								submitEvent.preventDefault();
								if (name.trim().length < 2 || phone.replace(/\D/g, "").length < 10) {
									push("Имя и телефон, чтобы мы могли подтвердить");
									return;
								}
								addNote({
									id: `n-${Date.now()}`,
									title: event.title,
									name: name.trim(),
									phone
								});
								setOpen(null);
								setName("");
								setPhone("");
								push("Записали. Перезвоним.");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field",
									children: ["Имя", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: name,
										onChange: (input) => setName(input.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field",
									children: ["Телефон", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: phone,
										onChange: (input) => setPhone(input.target.value),
										inputMode: "tel"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-primary",
									type: "submit",
									children: "Отправить запись"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-line",
							type: "button",
							onClick: () => setOpen(event.id),
							children: "Записаться"
						})
					]
				}, event.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card",
				style: { marginTop: "1rem" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Банкет от 10 гостей" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Закрываем кабинет или собираем зал. Меню соберём вместе: можно только гриль, только роллы или смешанный стол." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "form",
						onSubmit: (event) => {
							event.preventDefault();
							if (banquetName.trim().length < 2 || banquetPhone.replace(/\D/g, "").length < 10 || !banquetDate) {
								push("Заполните имя, телефон и дату");
								return;
							}
							addNote({
								id: `b-${Date.now()}`,
								title: `Банкет ${banquetDate}, ${banquetGuests} гостей`,
								name: banquetName.trim(),
								phone: banquetPhone
							});
							setBanquetName("");
							setBanquetPhone("");
							setBanquetDate("");
							push("Заявку на банкет приняли");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field",
									children: ["Имя", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: banquetName,
										onChange: (event) => setBanquetName(event.target.value)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field",
									children: ["Телефон", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: banquetPhone,
										onChange: (event) => setBanquetPhone(event.target.value),
										inputMode: "tel"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field",
									children: ["Дата", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: banquetDate,
										onChange: (event) => setBanquetDate(event.target.value)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field",
									children: ["Гостей", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: banquetGuests,
										onChange: (event) => setBanquetGuests(event.target.value),
										inputMode: "numeric"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "btn btn-primary",
								type: "submit",
								children: "Обсудить банкет"
							})
						]
					})
				]
			}),
			notes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Ваши записи" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-2",
					children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: note.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							note.name,
							" · ",
							note.phone
						] })]
					}, note.id))
				})]
			}) : null
		]
	});
}
function ContactsView() {
	const { push, go } = useDynasty();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Контакты"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Как нас найти" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "map-fake",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pin",
								children: "Династия"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: { marginTop: "0.8rem" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 }),
								" ",
								ADDRESS
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ежедневно 12:00–00:00. Кухня до 23:00. Вход со двора, вывеска зелёная." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "btn btn-primary",
									href: `tel:${PHONE_TEL}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), "Позвонить"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-ghost",
									type: "button",
									onClick: () => {
										navigator.clipboard?.writeText(ADDRESS).then(() => push("Адрес скопирован"), () => push(ADDRESS));
									},
									children: "Скопировать адрес"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-line",
									href: "https://yandex.ru/maps/?text=Луганск%20улица%20Советская%2064",
									target: "_blank",
									rel: "noreferrer",
									children: "Маршрут"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-line",
									type: "button",
									onClick: () => go("book"),
									children: "Забронировать"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Коротко" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "pulse-list",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Телефон" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: PHONE_DISPLAY })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Кухня" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "12:00–23:00" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Бар" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "12:00–00:00" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Самовывоз" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "стойка у входа" })] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "quiet",
							children: "Отдельной страницы в соцсетях нет: бронь и вопросы живут здесь и по телефону."
						})
					]
				})]
			})
		]
	});
}
function buildSlots(now) {
	const slots = [];
	const readyAt = now.getTime() + 24e5;
	for (let offset = 0; offset < 2; offset += 1) {
		const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
		for (let minutes = 720; minutes <= 1360; minutes += 20) {
			if (new Date(day.getFullYear(), day.getMonth(), day.getDate(), Math.floor(minutes / 60), minutes % 60).getTime() < readyAt) continue;
			const hh = String(Math.floor(minutes / 60)).padStart(2, "0");
			const mm = String(minutes % 60).padStart(2, "0");
			const when = offset === 0 ? "Сегодня" : "Завтра";
			slots.push({
				key: `${dateKey(day)} ${hh}:${mm}`,
				label: `${when}, ${hh}:${mm}`
			});
		}
	}
	return slots;
}
function PickupView() {
	const { cart, setQty, clearCart, addOrder, orders, go } = useDynasty();
	const now = luhanskNow();
	const slots = (0, import_react.useMemo)(() => buildSlots(now), [now.getHours(), now.getDate()]);
	const [slot, setSlot] = (0, import_react.useState)(slots[0]?.key ?? "");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [comment, setComment] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(null);
	const lines = cart.map((line) => {
		const dish = dishById.get(line.id);
		if (!dish) return null;
		return {
			...line,
			name: dish.name,
			price: dish.price
		};
	}).filter((line) => Boolean(line));
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
		const order = {
			id: `a-${Date.now().toString().slice(-6)}`,
			whenLabel: slots.find((item) => item.key === slot)?.label ?? slot,
			name: name.trim(),
			phone,
			comment: comment.trim(),
			lines,
			total
		};
		addOrder(order);
		setDone(order);
		setError("");
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card success",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "seal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 36 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Самовывоз"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Заказ ", done.id] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Заберёте ",
					done.whenLabel.toLowerCase(),
					" на стойке у входа. Сумма ",
					rub(done.total),
					". Оплата на месте."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "quiet",
					children: "Назовите номер заказа. Если опаздываете больше чем на 20 минут, кухня может поставить заказ на паузу."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-actions",
					style: { justifyContent: "center" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary",
						type: "button",
						onClick: () => setDone(null),
						children: "Новый заказ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-ghost",
						type: "button",
						onClick: () => go("home"),
						children: "На главную"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Забрать на месте"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Соберём к вашему часу" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sub",
				children: "Без доставки: приходите в дом на Советскую, 64. Готовим так, чтобы заказ не ждал на витрине."
			}),
			lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Корзина пустая" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Откройте меню и нажмите «В самовывоз» у блюд, которые хотите забрать." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary",
						type: "button",
						onClick: () => go("menu"),
						children: "Перейти в меню"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card",
				children: [
					lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: line.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "meta",
							children: [
								rub(line.price),
								" · ",
								rub(line.price * line.qty)
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "qty",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Меньше",
									onClick: () => setQty(line.id, line.qty - 1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.qty }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Больше",
									onClick: () => setQty(line.id, line.qty + 1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
								})
							]
						})]
					}, line.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Итого" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: rub(total) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-ghost",
						type: "button",
						onClick: clearCart,
						children: "Очистить"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "block-title",
				style: {
					fontSize: "1.8rem",
					marginTop: "1.2rem"
				},
				children: "Когда заберёте"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "slots",
				children: [slots.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Свободных слотов на ближайшие два дня нет." }) : null, slots.slice(0, 24).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: slot === item.key ? "slot is-on" : "slot",
					type: "button",
					onClick: () => setSlot(item.key),
					children: item.label
				}, item.key))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "form",
				onSubmit: (event) => {
					event.preventDefault();
					submit();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: ["Имя", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (event) => setName(event.target.value),
								autoComplete: "name"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: ["Телефон", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								autoComplete: "tel",
								inputMode: "tel"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field",
						children: ["Комментарий к заказу", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: comment,
							onChange: (event) => setComment(event.target.value),
							placeholder: "Без лука, соус отдельно, детский стул не нужен"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "error",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "btn btn-primary",
						type: "submit",
						disabled: lines.length === 0,
						children: ["Оформить самовывоз · ", rub(total)]
					})
				]
			}),
			orders.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Уже оформленные" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-2",
					children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: order.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: order.whenLabel }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: order.lines.map((line) => `${line.name} × ${line.qty}`).join(", ") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "price",
								children: rub(order.total)
							})
						]
					}, order.id))
				})]
			}) : null
		]
	});
}
var LINKS = [
	{
		id: "menu",
		label: "Меню"
	},
	{
		id: "book",
		label: "Бронь"
	},
	{
		id: "pickup",
		label: "Самовывоз"
	},
	{
		id: "story",
		label: "О доме"
	},
	{
		id: "events",
		label: "Вечера"
	},
	{
		id: "contacts",
		label: "Контакты"
	}
];
function DynastyApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynastyProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {}) });
}
function Shell() {
	const store = useDynasty();
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key !== "Escape") return;
			store.setOpenDish(null);
			store.setCartOpen(false);
			store.setNavOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [store]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "brand",
						type: "button",
						onClick: () => store.go("home"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mark",
							children: "Д"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-name",
							children: "Династия"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-city",
							children: "Луганск"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "nav",
						"aria-label": "Разделы",
						children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: store.view === link.id ? "is-on" : "",
							type: "button",
							onClick: () => store.go(link.id),
							children: link.label
						}, link.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "top-actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "btn btn-primary",
								type: "button",
								onClick: () => store.go("menu"),
								children: "Меню"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "icon-btn",
								href: `tel:${PHONE_TEL}`,
								"aria-label": "Позвонить в ресторан",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "icon-btn",
								type: "button",
								"aria-label": "Корзина самовывоза",
								onClick: () => store.setCartOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 18 }), store.count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "badge",
									children: store.count
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "icon-btn burger",
								type: "button",
								"aria-label": "Открыть навигацию",
								onClick: () => store.setNavOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "page",
				children: [
					store.view === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {}) : null,
					store.view === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuView, {}) : null,
					store.view === "book" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookView, {}) : null,
					store.view === "pickup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickupView, {}) : null,
					store.view === "story" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryView, {}) : null,
					store.view === "events" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsView, {}) : null,
					store.view === "contacts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactsView, {}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "footer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Династия" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [ADDRESS, ". Еда в зале и с собой. Бронь держим 15 минут после указанного времени."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "footer-row",
								children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-ghost",
									type: "button",
									onClick: () => store.go(link.id),
									children: link.label
								}, link.id))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "dock",
				"aria-label": "Быстрые действия",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: store.view === "menu" ? "is-on" : "",
						type: "button",
						onClick: () => store.go("menu"),
						children: "Меню"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: store.view === "book" ? "is-on" : "",
						type: "button",
						onClick: () => store.go("book"),
						children: "Бронь"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: store.view === "pickup" ? "is-on" : "",
						type: "button",
						onClick: () => store.go("pickup"),
						children: "С собой"
					})
				]
			}),
			store.navOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nav-panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "icon-btn",
						type: "button",
						"aria-label": "Закрыть меню",
						onClick: () => store.setNavOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => store.go("home"),
						children: "Главная"
					}),
					LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => store.go(link.id),
						children: link.label
					}, link.id))
				]
			}) : null,
			store.cartOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "toasts",
				"aria-live": "polite",
				children: store.toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "toast",
					children: toast.text
				}, toast.id))
			})
		]
	});
}
function CartDrawer() {
	const { cart, setQty, setCartOpen, go, clearCart } = useDynasty();
	const lines = cart.map((line) => {
		const dish = dishById.get(line.id);
		if (!dish) return null;
		return {
			...line,
			name: dish.name,
			price: dish.price
		};
	}).filter((line) => Boolean(line));
	const total = lines.reduce((sum, line) => sum + line.qty * line.price, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "drawer",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Самовывоз",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "modal-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "block-title",
					children: "С собой"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "icon-btn",
					type: "button",
					"aria-label": "Закрыть корзину",
					onClick: () => setCartOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})]
			}),
			lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Пока пусто. Меню откроется одной кнопкой." }) : null,
			lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: line.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: rub(line.price * line.qty)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "qty",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setQty(line.id, line.qty - 1),
							"aria-label": "Меньше",
							children: "−"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.qty }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setQty(line.id, line.qty + 1),
							"aria-label": "Больше",
							children: "+"
						})
					]
				})]
			}, line.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "price",
				style: { marginTop: "0.8rem" },
				children: ["Итого ", rub(total)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary",
						type: "button",
						onClick: () => go("pickup"),
						disabled: lines.length === 0,
						children: "Оформить"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-ghost",
						type: "button",
						onClick: () => go("menu"),
						children: "В меню"
					}),
					lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-line",
						type: "button",
						onClick: clearCart,
						children: "Очистить"
					}) : null
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynastyApp, {});
}
//#endregion
export { Home as component };
