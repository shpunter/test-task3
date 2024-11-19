import "./App.css";
import { basicCards, premiumCards } from "./config";
import { useGetUser } from "./fetchHooks/useGetUser";
import Card from "./shared/Card/Card";
import Loader from "./shared/Loader/Loader";
import Toast from "./shared/Toast/Toast";

function App() {
  const { isLoading, data, isError } = useGetUser();
  // concat can be replaced with push as we have only 1 element
  // having concat we may add elements to basicCards array and no other changes needed
  const combinedCards = (data?.premium ? premiumCards : []).concat(basicCards);

  return (
    <main>
      {isError && (
        <Toast isVisible>
          Error. Can't fetch permission
        </Toast>
      )}

      <Loader isLoading={isLoading}>
        {combinedCards.map(({ title, component: Component }) => {
          return (
            <Card key={title} title={title}>
              <Component />
            </Card>
          );
        })}
      </Loader>
    </main>
  );
}

export default App;
