import { useState } from "react";
import Modal from "../pages/modal";
import Image from 'next/image'; 


import image2 from "/images/frank-leuderalbert-uWA0x6L7ex4-unsplash.jpg";
import image3 from "/images/kofi-buckley-WiWnYSShNnY-unsplash.jpg";
import image4 from "/images/will-echols-P_l1bJQpQF0-unsplash.jpg";
import image5 from "/images/fernanda-martinez-H2RzlOijhlQ-unsplash.jpg";
import image6 from "/images/louis-hansel-M-4_S-SsDFw-unsplash.jpg";
import iceamericano from "/images/ice-americano.jpg";
import icelate from "/images/ice-latte.jpg";
import icemoka from "/images/ice-mocha.jpg";
import icecara from "/images/ice-caramel-macchiato.jpg";
import icechoc from "/images/ice-chocolate.jpg";
import ostova from "/images/ostova.jpg";
import mohito from "";
import blue from "/images/blue-sky.jpg";
import anbe from "/images/smoothie-anbe.jpg";
import hendone from "/images/smoothie-hendone.jpg";
import sperso from "/images/espresso-single.jpg";
import shir from "/images/milk.jpg";
import karak from "/images/karak.jpg  ";

const coldDrinks = [
  { name: "آیس آمریکانو", price: "62", image: iceamericano },
  { name: "آیس لاته", price: "72", image: icelate },
  { name: "آیس موکا", price: "78", image: icemoka },
  { name: "آیس کارامل ماکیاتو", price: "78", image: icecara },
  { name: "آیس چاکلت", price: "67", image: icechoc },
  { name: "آفوگاتو", price: "62" },
  { name: "اوشن موهیتو", price: "85", image: mohito },
  { name: "استوا", price: "85", image: ostova },
  { name: "بلو اسکای", price: "75", image: blue },
  { name: "اسموتی موز و انبه", price: "90", image: anbe },
  { name: "اسموتی هندوانه", price: "70", image: hendone },
  { name: "آیس تی پرتقال کرنبری", price: "40" },
  { name: "لیموناد گریپ فروت", price: "60" },
];

const hotDrinks = [
  { name: "اسپرسو سینگل", price: "40", image: sperso },
  { name: "اسپرسو دبل", price: "50" },
  { name: "آمریکانو", price: "59" },
  { name: "کورتادو", price: "63" },
  { name: "کاپوچینو", price: "65" },
  { name: "کافه لاته", price: "69", image: late },
  { name: "موکا", price: "75" },
  { name: "کارامل ماکیاتو", price: "75" },
  { name: "هات چاکلت", price: "64" },
  { name: "وایت چاکلت", price: "64" },
  { name: "شیر زردچوبه", price: "50" },
  { name: "چای کرک", price: "65", image: karak },
  { name: "چای ماسالا", price: "65" },
  { name: "چای نبات", price: "29" },
  { name: "دمنوش", price: "33" },
  { name: "شیرگرم", price: "33", image: shir },
];

const shakes = [
  { name: "شیک شکلات", price: "78" },
  { name: "شیک توت فرنگی", price: "80" },
  { name: "شیک بادام زمینی", price: "90" },
  { name: "شیک موز شکلات", price: "95" },
  { name: "شیک موز انبه", price: "110" },
  { name: "کافه گلاسه", price: "100" },
  { name: "کافه گلاسه", price: "110" },
];

const cakes = [{ name: "موچی" }, { name: "کیک روز" }, { name: "کوکی" }];

const snacks = [
  { name: "سیب زمینی کوچک", price: "70" },
  { name: "سیب زمینی متوسط", price: "110" },
  { name: "سیب زمینی بزرگ", price: "140" },
  { name: "اسنک", price: "70" },
];

const beverages = [
  { name: "آب معدنی", price: "10" },
  { name: "نوشابه", price: "15" },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>کافه کامو</h1>
        <nav>
          <a href="#cold-drinks">نوشیدنی سرد</a>
          <a href="#hot-drinks">نوشیدنی گرم</a>
          <a href="#shakes">شیک و گلاسه</a>
          <a href="#cakes">کیک‌ها</a>
          <a href="#snacks">پیش‌غذا</a>
          <a href="#beverages">نوشیدنی‌ها</a>
        </nav>
      </header>
      <main>
        <section id="cold-drinks" className="menu-section">
          <div className="menu-section-content">
            <img src={image1} alt="Cold Drinks" />
            <div className="title">نوشیدنی سرد</div>
          </div>
          <ul>
            {coldDrinks.map((item) => (
              <li
                key={item.name}
                className="product-item"
                onClick={() => openModal(item)}
              >
                <span>{item.name}</span>
                <span>{item.price} </span>
              </li>
            ))}
          </ul>
          <hr className="section-divider" />
        </section>

        <section id="hot-drinks" className="menu-section">
          <div className="menu-section-content">
            <img src={image2} alt="Hot Drinks" />
            <div className="title">نوشیدنی گرم</div>
          </div>
          <ul>
            {hotDrinks.map((item) => (
              <li
                key={item.name}
                className="product-item"
                onClick={() => openModal(item)}
              >
                <span>{item.name}</span>
                <span>{item.price} </span>
              </li>
            ))}
          </ul>
          <hr className="section-divider" />
        </section>

        <section id="shakes" className="menu-section">
          <div className="menu-section-content">
            <img src={image3} alt="Shakes" />
            <div className="title">شیک و گلاسه</div>
          </div>
          <ul>
            {shakes.map((item) => (
              <li
                key={item.name}
                className="product-item"
                onClick={() => openModal(item)}
              >
                <span>{item.name}</span>
                <span>{item.price} </span>
              </li>
            ))}
          </ul>
          <hr className="section-divider" />
        </section>

        <section id="cakes" className="menu-section">
          <div className="menu-section-content">
            <img src={image4} alt="Cakes" />
            <div className="title">کیک‌ها</div>
          </div>
          <ul>
            {cakes.map((item) => (
              <li
                key={item.name}
                className="product-item"
                onClick={() => openModal(item)}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          <hr className="section-divider" />
        </section>

        <section id="snacks" className="menu-section">
          <div className="menu-section-content">
            <img src={image5} alt="Snacks" />
            <div className="title">پیش‌غذا</div>
          </div>
          <ul>
            {snacks.map((item) => (
              <li
                key={item.name}
                className="product-item"
                onClick={() => openModal(item)}
              >
                <span>{item.name}</span>
                <span>{item.price} </span>
              </li>
            ))}
          </ul>
          <hr className="section-divider" />
        </section>

        <section id="beverages" className="menu-section">
          <div className="menu-section-content">
            <img src={image6} alt="Beverages" />
            <div className="title">نوشیدنی‌ها</div>
          </div>
          <ul>
            {beverages.map((item) => (
              <li
                key={item.name}
                className="product-item"
                onClick={() => openModal(item)}
              >
                <span>{item.name}</span>
                <span>{item.price} </span>
              </li>
            ))}
          </ul>
          <hr className="section-divider" />
        </section>
      </main>

      {isModalOpen && <Modal item={selectedItem} onClose={closeModal} />}

      <style jsx>{`
        .App {
          font-family: Arial, sans-serif;
          color: #333;
        }
        .App-header {
          background-color: #f8f8f8;
          padding: 1rem;
          text-align: center;
        }
        .App-header h1 {
          margin: 0;
        }
        nav {
          margin-top: 1rem;
        }
        nav a {
          margin: 0 1rem;
          text-decoration: none;
          color: #0070f3;
        }
        .menu-section {
          margin: 2rem 0;
        }
        .menu-section-content {
          display: flex;
          align-items: center;
        }
        .menu-section-content img {
          width: 150px;
          height: auto;
          margin-right: 1rem;
        }
        .title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        .product-item {
          cursor: pointer;
          margin: 0.5rem 0;
          display: flex;
          justify-content: space-between;
        }
        .product-item:hover {
          background-color: #f0f0f0;
          
        }
        .section-divider {
          margin: 1rem 0;
          border: 0;
          border-top: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
}

