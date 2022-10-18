import MenuListItems from "../MenuListItems";
import "../../../styles/footer.scss";

export default function Footer() {
  return (
    <>
      <footer id="sticky-footer" className="flex-shrink-0 py-4 ">
        <div className="container text-center">
          <small>Copyright &copy; {new Date().getFullYear()} TaskApp.</small>
        </div>
        <MenuListItems />
      </footer>
    </>
  );
}
