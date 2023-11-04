import styles from "./page.module.css";

// fun linkbox({ href, title, description })

function LinkBox({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className={styles.card}
      target="_self"
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>minpeter.tech - blinker ✨</h2>
      <div className={styles.grid}>
        <LinkBox
          href="https://minpeter.github.io"
          title="Blog"
          description="Blink towards a domain"
        />

        <LinkBox
          href="https://ip.minpeter.tech"
          title="ipLogger"
          description="Blink towards a domain"
        />

        <LinkBox
          href="https://tmpf.me"
          title="tempfiles"
          description="Blink towards a domain"
        />

        <LinkBox
          href="https://github.com/minpeter"
          title="Github"
          description="Blink towards a domain"
        />

        <LinkBox
          href="https://instagram.com/minpeter2"
          title="instagram"
          description="Blink towards a domain"
        />
      </div>
      <h4 className={styles.footer}>
        developed by <a href="https://github.com/minpeter">minpeter</a> with ❤️
      </h4>
    </main>
  );
}
