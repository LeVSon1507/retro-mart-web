import Image from "next/image";
import homeVN from "./bgimage.png";
import logo from "./logo.png";

function AndroidDownloadButton() {
  return (
    <a
      className="btn btn-primary"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Tải trên CH Play (sẽ cập nhật sau)
    </a>
  );
}

function IOSSoonButton() {
  return <span className="btn btn-disabled">iOS sẽ cập nhật sau</span>;
}

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div className="brand">
          <Image src={logo} alt="Retro Mart logo" width={48} height={48} />
          <span className="brand-name">Retro Mart</span>
        </div>
      </header>

      <section className="hero">
        <h1 className="title">Tạp hoá thời 9x</h1>
        <p className="subtitle">
          Game Retro Mart - hoài niệm tuổi thơ, bán hàng kiểu xưa.
        </p>
        <div className="cta">
          <AndroidDownloadButton />
          <IOSSoonButton />
        </div>
        <div className="hero-image">
          <Image
            src={homeVN}
            alt="Retro Mart gameplay"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>
    </main>
  );
}
