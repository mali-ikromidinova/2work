//icons for sidebar
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
//pics for stats
const stats1 = "/images/icons/grey-profile.svg";
const stats2 = "/images/icons/tasks.svg";
const stats3 = "/images/icons/people.svg";

//pics
const processImg = "/images/process.png";
const money = "/images/icons/money.svg";
const reviewPic = "/images/review.png";
const newStore = "/images/main_screen/new-store.jpg";

//pics for office perfomers
const item1 = "/images/perfomers/amir.png";
const item2 = "/images/perfomers/karina.png";
const item3 = "/images/perfomers/julia.png";
const item4 = "/images/perfomers/toshmat.png";
const item5 = "/images/perfomers/pulat.png";

//pics for remote perfomers
const pic1 = "/images/perfomers/julia-remote.png";
const pic2 = "/images/perfomers/toshmat-remote.png";
const pic3 = "/images/perfomers/amir-remote.png";
const pic4 = "/images/perfomers/pulat-remote.png";

const pic5 = "/images/perfomers/karina-remote.png";
//pics for vacancies
const img1 = "/images/perfomers/toshmat-vacancy.png";
const img2 = "/images/perfomers/karina-vacancy.png";
const img3 = "/images/perfomers/pulat-vacancy.png";
const img4 = "/images/perfomers/amir-vacancy.png";
const img5 = "/images/perfomers/julia-vacancy.png";

//data
export const StatsData = [
  {
    numbers: "+200",
    descr: "пользователей ежедневно",
    icon: stats1,
  },
  {
    numbers: "+9.500",
    descr: "активных заданий",
    icon: stats2,
  },
  {
    numbers: "+8900",
    descr: "заказчиков и иcполнителей",
    icon: stats3,
  },
];

export const OfficeData = [
  {
    id: 1,
    title: "Копирайтер керак",
    jobDescr:
      "Катта компанияга 18-25 ёшгача булган рус, узбек тилларини биладиган ва ёза оладиган ва офлайн ишлайдиган ходим керак. Кушимча маълумот учун телефон: +998990005817.",
    salary: "2.300.000 сум",
    location: "Ташкент",
  },
  {
    id: 2,
    title: "Копирайтер керак",
    jobDescr:
      "Катта компанияга 18-25 ёшгача булган рус, узбек тилларини биладиган ва ёза оладиган ва офлайн ишлайдиган ходим керак. Кушимча маълумот учун телефон: +998990005817.",
    salary: "2.300.000 сум",
    location: "Ташкент",
  },
  {
    id: 3,
    title: "Копирайтер керак",
    jobDescr:
      "Катта компанияга 18-25 ёшгача булган рус, узбек тилларини биладиган ва ёза оладиган ва офлайн ишлайдиган ходим керак. Кушимча маълумот учун телефон: +998990005817.",
    salary: "2.300.000 сум",
    location: "Ташкент",
  },
  {
    id: 4,
    title: "Копирайтер керак",
    jobDescr:
      "Катта компанияга 18-25 ёшгача булган рус, узбек тилларини биладиган ва ёза оладиган ва офлайн ишлайдиган ходим керак. Кушимча маълумот учун телефон: +998990005817.",
    salary: "2.300.000 сум",
    location: "Ташкент",
  },
];

export const ProcessData = [
  {
    title: "Опишите",
    descr:
      "Расскажите подробно, какую работу нужно выполнить, чтобы система помогла вам со специалистом",
    img: processImg,
  },
  {
    title: "Получите предложения",
    descr:
      "Специалисты сами свяжутся с вами, выберите лучшего по ценам, анкетам и отзывам",
    img: processImg,
  },
  {
    title: "Оцените работу",
    descr: "Оставьте отзыв выбранному специалисту по проделанной работе",
    img: processImg,
  },
];

export const BenefitData = [
  {
    img: money,
    title: "от 3 000 000 сум в месяц",
    descr:
      "Специалисты, которые поняли, что работа на репутацию приносит деньги, уже вышли на доход от 3 000 000 сум",
  },
  {
    img: money,
    title: "от 3 000 000 сум в месяц",
    descr:
      "Специалисты, которые поняли, что работа на репутацию приносит деньги, уже вышли на доход от 3 000 000 сум",
  },
  {
    img: money,
    title: "от 3 000 000 сум в месяц",
    descr:
      "Специалисты, которые поняли, что работа на репутацию приносит деньги, уже вышли на доход от 3 000 000 сум",
  },
  {
    img: money,
    title: "от 3 000 000 сум в месяц",
    descr:
      "Специалисты, которые поняли, что работа на репутацию приносит деньги, уже вышли на доход от 3 000 000 сум",
  },
];

export const SidebarData = [
  {
    navItem: "Грузоперевозки",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Дизайн",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Животные",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Компьютерные услуги",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Красота и здоровье",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Курьерские услуги",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Обучение и репетиторы",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Ремонт транспорта",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Строительство и ремонт",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
  {
    navItem: "Уборка и помощь по хозяйству",
    path: "/",
    iconClosed: <BiChevronDown />,
    iconOpened: <BiChevronUp />,
    submenu: [
      {
        title: "Переезд",
        path: "/",
      },
      {
        title: "Вывоз мусора",
        path: "/",
      },
      {
        title: "Услуги грузчиков",
        path: "/",
      },
    ],
  },
];

export const OfficePerfomers = [
  {
    name: "Амир Пулатов",
    job: "Веб дизайн, верстка сайтов",
    location: "Ташкент",
    img: item1,
  },
  {
    name: "Карина К",
    job: "Страхование, бухгалтерия",
    location: "Самарканд",
    img: item2,
  },
  {
    name: "Юлия Красота",
    job: "Красота и здоровье",
    location: "Наманган",
    img: item3,
  },
  {
    name: "Тошмат Икромов",
    job: "Переводчик, репетитор",
    location: "Бухара",
    img: item4,
  },
  {
    name: "Пулатжон Джумаев",
    job: "Аудитор, маркетолог, аналитик",
    location: "Бухара",
    img: item5,
  },
];

export const RemotePerfomers = [
  {
    name: "Юлия Красота",
    job: "Красота и здоровье",
    location: "Наманган",
    img: pic1,
  },
  {
    name: "Тошмат Икромов",
    job: "Переводчик, репетитор",
    location: "Бухара",
    img: pic2,
  },
  {
    name: "Амир Пулатов",
    job: "Веб дизайн, верстка сайтов",
    location: "Ташкент",
    img: pic3,
  },
  {
    name: "Пулатжон Джумаев",
    job: "Аудитор, маркетолог, аналитик",
    location: "Бухара",
    img: pic4,
  },
  {
    name: "Карина К",
    job: "Страхование, бухгалтерия",
    location: "Самарканд",
    img: pic5,
  },
];

export const Vacancies = [
  {
    name: "Тошмат Икромов",
    job: "Переводчик, репетитор",
    location: "Бухара",
    img: img1,
  },
  {
    name: "Карина К",
    job: "Страхование, бухгалтерия",
    location: "Самарканд",
    img: img2,
  },
  {
    name: "Пулатжон Джумаев",
    job: "Аудитор, маркетолог, аналитик",
    location: "Бухара",
    img: img3,
  },
  {
    name: "Амир Пулатов",
    job: "Веб дизайн, верстка сайтов",
    location: "Ташкент",
    img: img4,
  },
  {
    name: "Юлия Красота",
    job: "Красота и здоровье",
    location: "Наманган",
    img: img5,
  },
];

export const ReviewsData = [
  {
    id: 1,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 2,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 3,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 4,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 5,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 6,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 7,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 8,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 9,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
  {
    id: 10,
    name: "Анастасия К.",
    title: "Репетитор по английскому языку",
    rating: "4.6",
    salary: "3 000 000",
    time: "24",
    review:
      "Прекрасный преподаватель. Сразу нашла общий язык с ребёнком. Объясняет очень доступно. Ребёнок доволен.",
    date: "24 сентября 2022",
    score: "24",
    img: reviewPic,
  },
];

export const NewPublications = [
  {
    id: 1,
    img: newStore,
    type: "Пресс-релиз",
    headline: "Открытие первого офлайн магазина в городе Ташкент",
    date: "20.06.2022",
  },
  {
    id: 2,
    img: newStore,
    type: "Пресс-релиз",
    headline: "Открытие первого офлайн магазина в городе Ташкент",
    date: "20.06.2022",
  },
  {
    id: 3,
    img: newStore,
    type: "Пресс-релиз",
    headline: "Открытие первого офлайн магазина в городе Ташкент",
    date: "20.06.2022",
  },
  {
    id: 4,
    img: newStore,
    type: "Пресс-релиз",
    headline: "Открытие первого офлайн магазина в городе Ташкент",
    date: "20.06.2022",
  },
];
