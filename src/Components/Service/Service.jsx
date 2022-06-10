import React from 'react';
import './Service.css';
import user1 from '../images/cus1.jpg';
import user2 from '../images/cus2.jpg';
import user3 from '../images/cus3.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const Service = () => {
  return (
    <div>
      <section className="services sec-width" id="services">
        <div className="Rooms-title">
          <h2>services</h2>
        </div>
        <div className="services-container">
          <article className="service">
            <div className="service-icon">
              <span>
                <i className="fas fa-utensils"></i>
              </span>
            </div>
            <div className="service-content">
              <h2>Food Service/ Food Runner</h2>
              <p>
                When receiving a customer's Room Service order over the phone,
                the staff The person in charge can write directly on the ticket
                or manipulate it directly Contact the software manager to save
                all the following information: room number, guest name, number
                of people, order details, pick up time order, server time. Staff
                receiving orders must ensure the information The information is
                correct and the Upselling method is appropriate.
              </p>
              <button type="button" className="Rooms-btn">
                Know More
              </button>
            </div>
          </article>
          <article className="service">
            <div className="service-icon">
              <span>
                <i className="fas fa-swimming-pool"></i>
              </span>
            </div>
            <div className="service-content">
              <h2>Refreshment</h2>
              <p>
                Khách lưu trú cũng có thể yêu cầu sử dụng Room service thông qua
                phiếu thông tin được nhân viên buồng phòng đặt trên bàn trong
                phòng khách. Khách sẽ điền thông tin order vào đó và đặt vào hộp
                yêu cầu phía bên ngoài phòng. Nhân viên phụ trách nhận order sẽ
                có nhiệm vụ đi thu thập các phiếu yêu cầu để chuẩn bị sẵn sàng
                và phục vụ khách đúng giờ.
              </p>
              <button type="button" className="Rooms-btn">
                Know More
              </button>
            </div>
          </article>
          <article className="service">
            <div className="service-icon">
              <span>
                <i className="fas fa-broom"></i>
              </span>
            </div>
            <div className="service-content">
              <h2>Housekeeping</h2>
              <p>
                Guest can also request to use Room service through Information
                slips are placed by the housekeeping staff on the inner desk
                living room. Customers will fill in order information and place
                it in the box Ask for the outside of the room. The staff in
                charge of receiving orders will have the task of collecting the
                tickets to get ready and serve customers on time.
              </p>
              <button type="button" className="Rooms-btn">
                Know More
              </button>
            </div>
          </article>
          <article className="service">
            <div className="service-icon">
              <span>
                <i className="fas fa-door-closed"></i>
              </span>
            </div>
            <div className="service-content">
              <h2>Room Security</h2>
              <p>
                Guest can also request to use Room service through an
                information slip placed by the housekeeping staff on the table
                in the living room. Guests will fill in order information and
                place it in the request box outside the room. The staff in
                charge of receiving orders will be responsible for collecting
                tickets to prepare and serve customers on time.
              </p>
              <button type="button" className="Rooms-btn">
                Know More
              </button>
            </div>
          </article>
        </div>
      </section>

      <div className="book">
        <form className="book-form">
          <div className="form-item">
            <label for="checkin-date">Check In Date: </label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label for="checkout-date">Check Out Date: </label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label for="adult">Adults: </label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label for="children">Children: </label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label for="rooms">Rooms: </label>
            <input type="text" />
          </div>
          <div className="form-item">Book Now</div>
        </form>
      </div>

      <section className="rooms sec-width" id="rooms">
        <div className="Rooms-title">
          <h2>rooms</h2>
        </div>
        <div className="rooms-container">
          <article className="room">
            <div className="room-image">
              <img src={img1} alt="" />
            </div>
            <div className="room-text">
              <h3>Luxury Rooms</h3>
              <ul>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
              <p>
                Carefully check the order to complete the service trolley setup.
                Prepare bread, butter, sauces or condiments to accompany the
                dish. Prepare a drink, place it in a suitable location and cover
                it with specialized tools. Print the invoice, carefully check
                the information. Take the prepared food, place it on the warmer
                (if necessary) and cover it carefully. Final check of ordered
                items before serving to customers.
              </p>
              <p>
                Guest can also request to use Room service through an
                information slip placed by the housekeeping staff on the table
                in the living room. Guests will fill in order information and
                place it in the request box outside the room. The staff in
                charge of receiving orders will be responsible for collecting
                tickets to prepare and serve customers on time.
              </p>
              <p className="rate">
                <span>$29.00 /</span> Per Night
              </p>
              <button type="button" className="Rooms-btn">
                book now
              </button>
            </div>
          </article>
          <article className="room">
            <div className="room-image">
              <img src={img2} alt="" />
            </div>
            <div className="room-text">
              <h3>Luxury Rooms</h3>
              <ul>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
              <p>
                Cognomen hospitem in cautionem cognoscere. Cubiculum pulso
                fores. Notice 'Locum ministerium'. Exspecta donec conviva
                invitat architriclinus Salutant te hospites. Hospites interroga
                ubi cibum et potus iubeant. Inducere items iussit a elit. Lorem
                cautionem subscribere roga. Hospiti gratias ago, et hospiti
                explica quomodo procedendi utensilia esus colligendi fiat,
                secundum cuiusque consilium deversorium.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                corporis quasi officiis cumque, fugiat nostrum sunt, tempora
                animi dicta laborum beatae ratione doloremque. Delectus odio sit
                eius labore, atque quo?
              </p>
              <p className="rate">
                <span>$50.00 /</span> Per Night
              </p>
              <button type="button" className="Rooms-btn">
                book now
              </button>
            </div>
          </article>
          <article className="room">
            <div className="room-image">
              <img src={img3} alt="" />
            </div>
            <div className="room-text">
              <h3>Luxury Rooms</h3>
              <ul>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
              <p>
                Servitium cubiculi forma in-cella triclinii hospitibus in
                deversorio degentibus est. Hoc est officium departmentis F&B in
                4-5 hotels star. Cibus calidus servabitur et hospitum cellis a
                trudit tradetur. Si cibus frigidum emptorem imperavit, baculus
                cibo lance uti potest et ad refectio loco trahit subsidium.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                corporis quasi officiis cumque, fugiat nostrum sunt, tempora
                animi dicta laborum beatae ratione doloremque. Delectus odio sit
                eius labore, atque quo?
              </p>
              <p className="rate">
                <span>$100.00 /</span> Per Night
              </p>
              <button type="button" className="Rooms-btn">
                book now
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="Rooms-customers" id="customers">
        <div className="sec-width">
          <div className="Rooms-title">
            <h2>customers</h2>
          </div>
          <div className="customers-container">
            <div className="customer">
              <div className="rating">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
              </div>
              <h3>We Loved it</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                beatae veritatis provident eveniet praesentium veniam cum iusto
                distinctio esse, vero est autem, eius optio cupiditate?
              </p>
              <img src={user1} alt="" />
              <span>Customer Name, Country</span>
            </div>
            <div className="customer">
              <div className="rating">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
              </div>
              <h3>Comfortable Living</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                beatae veritatis provident eveniet praesentium veniam cum iusto
                distinctio esse, vero est autem, eius optio cupiditate?
              </p>
              <img src={user2} alt="" />

              <span>Customer Name, Country</span>
            </div>
            <div className="customer">
              <div className="rating">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
              </div>
              <h3>Nice Place</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                beatae veritatis provident eveniet praesentium veniam cum iusto
                distinctio esse, vero est autem, eius optio cupiditate?
              </p>
              <img src={user3} alt="" />
              <span>Customer Name, Country</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h2>About Us </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              sapiente mollitia doloribus provident? Eos quisquam aliquid vel
              dolorum, impedit culpa.
            </p>
            <ul className="social-icons">
              <li className="Rooms-flex">
                <i className="fa fa-twitter fa-2x"></i>
              </li>
              <li className="Rooms-flex">
                <i className="fa fa-facebook fa-2x"></i>
              </li>
              <li className="Rooms-flex">
                <i className="fa fa-instagram fa-2x"></i>
              </li>
            </ul>
          </div>

          <div>
            <h2>Useful Links</h2>
            <a href="#">Blog</a>
            <a href="#">Rooms</a>
            <a href="#">Subscription</a>
            <a href="#">Gift Card</a>
          </div>

          <div>
            <h2>Privacy</h2>
            <a href="#">Career</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Services</a>
          </div>

          <div>
            <h2>Have A Question</h2>
            <div className="contact-item">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>
                203 Fake St.Mountain View, San Francisco, California, USA
              </span>
            </div>
            <div className="contact-item">
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              <span>+84545 37534 48</span>
            </div>
            <div className="contact-item">
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <span>info@domain.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Service;
