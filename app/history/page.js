"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/historyPage.module.css";

export default function History() {
    const refList = useRef([]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        
                    } else {
                        entry.target.classList.remove(styles.visible);
                    }
                });
            },
            { threshold: 0.5 }
        );

        refList.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            refList.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <main className={styles.historySection}>
            <h2>Our Story</h2>

            <div className={styles.hitoryCardWrapper}>
                <ul className={styles.imageWrapper}>
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                        <li
                        key = {index}
                        >
                            <img
                                src={`history${num}.png`}
                                alt={`Image ${num}`}
                            />
                        </li>
                    ))}
                </ul>


                <ul className={styles.historyContent}>
                    {[
                        {
                            year: "1946",
                            title: "Founding of Sony",
                            content:
                                "Masaru Ibuka and Akio Morita founded Tokyo Tsushin Kogyo (Tokyo Telecommunications Engineering Corporation) in Nihombashi, Tokyo. The company initially focused on repairing radios and developing the first tape recorder in Japan.",
                        },
                        {
                            year: "1958",
                            title: "Rebranding to Sony",
                            content:
                                'The company changed its name to Sony, reflecting a new global vision. The name was derived from the Latin word "sonus" (sound) and "sonny," a colloquial term in English for a young boy, indicating youthful energy and innovation.',
                        },
                        {
                            year: "1979",
                            title: "Launch of the Walkman",
                            content:
                                "Sony revolutionized personal music consumption with the launch of the Walkman, a compact cassette player that allowed music lovers to enjoy their favorite tunes on the go. This product became iconic and symbolized the rise of portable music.",
                        },
                        {
                            year: "1982",
                            title: "Introduction of the Compact Disc (CD)",
                            content:
                                "Sony collaborated with Philips to develop and launch the compact disc, a revolutionary format for digital music playback. The CD quickly became the dominant format for music, replacing vinyl records and cassette tapes.",
                        },
                        {
                            year: "1994",
                            title: "PlayStation Release",
                            content:
                                "Sony entered the gaming industry with the launch of the PlayStation, which became one of the most successful gaming consoles of all time. This marked the beginning of Sony’s dominance in the gaming market, setting the stage for future generations of PlayStation consoles.",
                        },
                        {
                            year: "1989",
                            title: "Acquisition of Columbia Pictures",
                            content:
                                "Sony expanded into the entertainment industry by acquiring Columbia Pictures, giving it a strong foothold in film and television production. This move was part of Sony's strategy to control both the hardware (electronics) and software (content) sides of entertainment.",
                        },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className={styles.historyContentCard}
                            ref={(el) => (refList.current[index] = el)} // 요소에 ref 연결
                        >
                            <h3>{item.year}</h3>
                            <h4>{item.title}</h4>
                            <hr />
                            <p>{item.content}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </main>

    );
}
