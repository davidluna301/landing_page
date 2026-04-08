export default function Home() {
  const menuItems = [
    {
      title: "Chicken Parm",
      text: "House-cut slices and oven baked golden crust.",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Chicken Alpeedo",
      text: "Creamy herb sauce, roasted garlic and basil.",
      image:
        "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Spagneti & Meatballs",
      text: "Copper pot tomato sauce with beef meatballs.",
      image:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Baked Mac & Cheese",
      text: "Toasted breadcrumbs and sharp cheddar finish.",
      image:
        "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="page-shell">
      <main className="landing">
        <header className="topbar">
          <nav className="nav nav-left">
            <a className="active" href="#">
              Home
            </a>
            <a href="#">Menu</a>
            <a href="#">Mission</a>
            <a href="#">Order Online</a>
          </nav>
          <div className="brand-mark">Crust Pizza Co.</div>
          <nav className="nav nav-right">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Call Now</a>
          </nav>
        </header>

        <section className="hero">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80"
            alt="Pizza hero"
          />
          <div className="hero-overlay">
            <h1>For delicious, made-from scratch pizzas</h1>
            <p>Motor oil dreams and handmade dough, every day.</p>
            <button type="button">Order Online</button>
          </div>
        </section>

        <section className="menu">
          <h2>Our Menu</h2>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <article key={item.title} className="menu-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span>$9</span>
              </article>
            ))}
          </div>
          <button className="cta-mid" type="button">
            View Our Complete Menu
          </button>
        </section>

        <section className="story">
          <div className="story-copy">
            <h2>Home of the Chicago-style thin crust pizza</h2>
            <p>
              Unveiled for true savorers, a distinct bite to delight date-night
              dinners and game-day gatherings alike.
            </p>
            <div className="story-actions">
              <button type="button">Learn More</button>
              <a href="#">See Locations</a>
            </div>
          </div>
          <div className="story-icons">
            <div>Crafted Cuisine</div>
            <div>Curbside Pickup</div>
            <div>Private Dining</div>
            <div>Live Music</div>
            <div>Outdoor Patio</div>
            <div>Plant-based</div>
          </div>
          <div className="story-photo">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80"
              alt="Team"
            />
          </div>
        </section>

        <section className="enjoy">
          <h2>Ways To Enjoy</h2>
          <div className="enjoy-grid">
            <article className="big-card">
              <img
                src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1000&q=80"
                alt="Pepperoni pizza"
              />
              <div className="seal">Crust Pizza Co.</div>
            </article>
            <div className="promo-col">
              <article className="promo-card">
                <h3>Award-winning pizza & service</h3>
                <p>Signature blend and daily baked crusts for all occasions.</p>
                <button type="button">Learn More</button>
              </article>
              <article className="promo-card">
                <h3>Kids eat free Tuesdays!</h3>
                <p>Your local neighborhood crew serves crowd-pleasers weekly.</p>
                <button type="button">Find Our Complete Menu</button>
              </article>
            </div>
            <article className="collage-card">
              <h3>Why Choose Us</h3>
              <div className="mini-grid">
                <img
                  src="https://images.unsplash.com/photo-1593560704563-f176a2eb61db?auto=format&fit=crop&w=500&q=80"
                  alt="Food"
                />
                <img
                  src="https://images.unsplash.com/photo-1548365328-9f547fb0953f?auto=format&fit=crop&w=500&q=80"
                  alt="Food serving"
                />
                <img
                  src="https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=500&q=80"
                  alt="Guests"
                />
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
                  alt="Pizza"
                />
                <img
                  src="https://images.unsplash.com/photo-1600628422019-2d59f48ff33e?auto=format&fit=crop&w=500&q=80"
                  alt="Fresh bake"
                />
                <img
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=500&q=80"
                  alt="Boxed pizza"
                />
              </div>
            </article>
          </div>
        </section>

        <section className="bottom-row">
          <article className="community">
            <p>@yourbrandhandle</p>
            <h3>Let&apos;s work together for our community</h3>
            <p>Us and countless neighbors are proud partners every month.</p>
          </article>
          <article className="store-photo">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Restaurant exterior"
            />
          </article>
          <article className="request">
            <h3>Submit A Request</h3>
            <div>
              <button type="button">Catering</button>
              <button type="button">Get Funds</button>
              <button type="button">Help Us</button>
            </div>
          </article>
        </section>

        <footer className="footer-nav">
          <a href="#">Menu</a>
          <a href="#">Catering</a>
          <a href="#">Careers</a>
          <a href="#">Commissions</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </footer>
      </main>
    </div>
  );
}
