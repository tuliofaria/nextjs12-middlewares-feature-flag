import Link from "next/link";

const Index = () => {
  return (
    <>
      <h1>Olá DevPleno!</h1>
      <p>Vendas Abertas.</p>
      <p>
        <Link href="/products">
          <a>Comprar</a>
        </Link>
      </p>
    </>
  );
};

export default Index;
