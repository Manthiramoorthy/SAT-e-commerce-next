import "bootstrap/dist/css/bootstrap.min.css";

async function Home() {
  let result = await fetch("https://fakestoreapi.com/products")
  let data = await result.json();
  return (
    <div>
      {
        data.map((item) => (
          <div className="card m-5 p-5">
            <h1>{item.title}</h1>
            <p>{item.price}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
