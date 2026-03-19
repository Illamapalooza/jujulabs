export const metadata = {
  title: "Introduction to OpenClaw — Julius Baliling",
  description:
    "OpenClaw CDO Meetup · How to Use OpenClaw as Your Remote Coding Buddy",
};

export default function OpenClawSlides() {
  return (
    <iframe
      src="/openclaw-talk-slides.html"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
