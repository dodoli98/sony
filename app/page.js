
// 스타일 모듈
import styles from './page.module.css';
import ProductCard from './components/ProductCard';

export default function Home() {
    let productName = ["EV-E10", "ILCE-9M3", "ILCE-7CM2L"];
    let productImagePath = ["/ZV-E10.png", "/ZV-E10.png", "/ZV-E10.png"];


    return (
        <main>
            {/* banner */}
            <section className={styles.banner} id="home">

                <button className={styles.prev}>
                    <img src="/arrow.png" alt="Previous" />
                </button>

                <button className={styles.next}>
                    <img src="/arrow.png" alt="Next" />
                </button>

                <div className={styles.slider}>
                </div>

            </section>

            {/* product */}
            <section className={styles.productSection} id="product">
                <h2>NEW ARRIVALS</h2>

                <div className={styles.productCardWrapper}>
                    {productName.map((a, i) => (
                        <ProductCard
                            key={i}
                            productName={a}
                            productImage={productImagePath[i]}
                        />
                    ))}
                </div>

                <button><a>SHOP MORE</a></button>
            </section>


            {/* photo interaction */}
            <section >

            </section>


            {/* about */}
            <section className={styles.aboutSection} id="about">
                <h2>ABOUT US</h2>

                <div className={styles.aboutWrapper}>

                </div>

            </section>

        </main>
    );
}
