import MenuListItems from "../MenuListItems";
import "../../../styles/footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} - All right reserved </p>
        </div>
        <MenuListItems />
      </footer>
    </>
  );
}
