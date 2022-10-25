export default function HomeWithLogin(props) {
  const logged = props.logged;

  return (
    <div className="home-container w-full">
      <div className="flex flex-col items-center p-2">
        <h1 className="text-2xl text-black font-semibold uppercase">Welcome back</h1>
      </div>
    </div>
  );
}
