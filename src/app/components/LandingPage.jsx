import styles from "../page.module.css";

export default function LandingPage() {
  return (
    <div className={styles.bodyContainer}>
      <p className={styles.blurb}>
        Welcome to Pet Taskmaster - Where Pet Passion Meets Play! Start your
        journey with Pet Taskmaster and receive your first pet for free! Engage
        in delightful activities, earn points, and unlock a world of
        possibilities in our virtual store. Customize, trade, and watch your
        pets grow into unique forms. Join a vibrant community, where you can
        connect with fellow pet enthusiasts, trade pets, and top the
        leaderboards. Our sleek interface ensures a seamless experience, and
        regular updates keep the excitement alive. Pet Taskmaster - Unleash the
        joy of virtual companionship. Join now and make every click count!
      </p>
      <iframe
        className={styles.videoContainer}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1roy4o4tqQM?si=09w81yFz3LRMxeef"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
