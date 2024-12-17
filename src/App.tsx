import styles from "./sass/App.module.scss";
import Titles from "./Title";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Titles />
      </div>
    </>
  );
}

export default App;
