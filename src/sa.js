// import React from "react";
// import { Link, Element } from "react-scroll";

// function App() {
//   return (
//     <div>
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           background: "#fff",
//           padding: "10px",
//         }}
//       >
//         <Link
//           to="section1"
//           smooth={true}
//           duration={800}
//           style={{ margin: "0 10px" }}
//         >
//           Go to Section 1
//         </Link>
//         <Link
//           to="section2"
//           smooth={true}
//           duration={800}
//           style={{ margin: "0 10px" }}
//         >
//           Go to Section 2
//         </Link>
//         <Link
//           to="section3"
//           smooth={true}
//           duration={500}
//           style={{ margin: "0 10px" }}
//         >
//           Go to Section 3
//         </Link>
//       </nav>

//       <Element
//         name="section1"
//         style={{ height: "100vh", background: "lightcoral" }}
//       >
//         <h1>Section 1</h1>
//       </Element>
//       <Element
//         name="section2"
//         style={{ height: "100vh", background: "lightblue" }}
//       >
//         <h1>Section 2</h1>
//       </Element>
//       <Element
//         name="section3"
//         style={{ height: "100vh", background: "lightgreen" }}
//       >
//         <h1>Section 3</h1>
//       </Element>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import logo from './span.icon__selected-before (2).png'
import uzum from './div.middle-header-main-logo.png';
import katalog from './div.catalog-icon_margin (1).png'
import union from './union.png.png';
import margin from './SVG_margin.png';
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

// Language data
const texts = {
    uzbek: {
        city: "Shahar: Toshkent",
        delivery: "Buyurtmangizni 1 kunda bepul yetkazib beramiz!",
        faq: "Savol-javoblar",
        orders: "Buyurtmalarim",
        searchPlaceholder: "Mahsulotlar va turkumlar izlash",
        katalog: "Katalog",
        login: "Kirish",
        selected: "Saralangan",
        cart: "Savatcha",
        payment: "Muddatli to'lov",
        categories: [
            "Elektronika", "Maishiy texnika", "Kiyim", "Poyabzallar", "Aksessuarlar",
            "Goʻzallik va parvarish", "Salomatlik", "Uy-roʻzgʻor buyumlari", "Qurilish va taʼmirlash"
        ]
    },
    russian: {
        city: "Город: Ташкент",
        delivery: "Мы доставим ваш заказ бесплатно за 1 день!",
        faq: "Вопросы-ответы",
        orders: "Мои заказы",
        katalog: "Каталог",
        searchPlaceholder: "Поиск товаров и категорий",
        login: "Войти",
        selected: "Избранное",
        cart: "Корзина",
        payment: "Удобный платеж",
        categories: [
            "Электроника", "Бытовая техника", "Одежда", "Обувь", "Аксессуары",
            "Красота и уход", "Здоровье", "Товары для дома", "Строительство и ремонт"
        ]
    },
    english: {
        city: "City: Tashkent",
        delivery: "We deliver your order free of charge within 1 day!",
        faq: "FAQ",
        orders: "My Orders",
        searchPlaceholder: "Search products and categories",
        katalog: "Katalog",
        login: "Login",
        selected: "Favorites",
        cart: "Cart",
        payment: "Installment Payment",
        categories: [
            "Electronics", "Home Appliances", "Clothing", "Footwear", "Accessories",
            "Beauty & Care", "Health", "Household Items", "Construction & Repair"
        ]
    }
};

function Navbar() {
    const [language, setLanguage] = useState('uzbek'); // default language

    const changeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    const currentTexts = texts[language];

    return (
        <div className='Navbar'>
            <div className='buyurtmalar'>
                <div className='one'>
                    <CiLocationOn />
                    <h1 className='h1'>{currentTexts.city}</h1>
                    <p className='p_one'>{currentTexts.delivery}</p>
                </div>
                <div className='first'>
                    <p>{currentTexts.delivery}</p>
                </div>
                <div className='two'>
                    <h2 className='h2_one'>{currentTexts.faq} {currentTexts.orders}</h2>
                    <img className='ozb' src={logo} alt='' />
                    <select style={{ border: 'none', width: "100px", height: "30px", background: "#8B8E99", borderRadius: "5px" }} onChange={changeLanguage}>
                        <option style={{ border: "none", borderRadius: "5px" }} value="uzbek">O'zbekcha</option>
                        <option value="russian">Russian</option>
                        <option value="english">English</option>
                    </select>
                </div>
            </div>
            <div className='katalog'>
                <div className='katalogs'>
                    <img src={uzum} alt='' />
                    <div className='imgs'>
                        <img src={katalog} alt='' />
                        <h1>{currentTexts.katalog}</h1>
                    </div>
                    <div className='input'>
                        <input type='text' className='in' placeholder={currentTexts.searchPlaceholder} />
                        <CiSearch style={{ background: "#F2F4F7" }} className='ci' />
                    </div>
                    <div className='kirish'>
                        <div className='three'>
                            <Link style={{ textDecoration: "none", color: "black" }} to={"/login"}>
                                <IoPersonOutline style={{ fontSize: "20px", marginRight: "15px", textDecoration: "none" }} />
                                {currentTexts.login}
                            </Link>
                        </div>
                        <div className='thre'>
                            <h4 style={{ fontWeight: "400" }}>
                                <FaRegHeart style={{ marginRight: '15px', fontSize: "20px" }} />
                                {currentTexts.selected}
                            </h4>
                        </div>
                        <div className='thre'>
                            <h4 style={{ fontWeight: "400" }}>
                                <IoCartOutline style={{ fontSize: "20px", marginRight: "15px" }} />
                                {currentTexts.cart}
                            </h4>
                        </div>
                    </div>
                </div>

                <div className='Mudattlitolov'>
                    <div className='ps'>
                        <img className='union' src={union} />
                        <h5 className='unions'>{currentTexts.payment}</h5>
                        {currentTexts.categories.map((category, index) => (
                            <p key={index}>{category}</p>
                        ))}
                    </div>
                    <div className='margin'>
                        <h3>Yana <img src={margin} /> </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;s