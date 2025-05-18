function Home() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl text-green-500 font-extrabold text-primary mb-6">Games Store: O Paraíso dos Gamers!</h2>
      <p className="text-lg text-white max-w-2xl mx-auto">Mergulhe na aventura com a Games Store, sua parada definitiva para videogames épicos! Aqui, você encontra os maiores lançamentos, clássicos nostálgicos e acessórios de ponta para turbinar sua jogatina. De consoles de última geração a promoções imbatíveis, nossa paixão por jogos garante a melhor experiência para todos os níveis de jogadores. Visite a Games Store e liberte o herói dentro de você!
      </p>
      <a
        href="/games"
        className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-500 hover:text-black hover:font-semibold transition"
      >
        Ver Catálogo
      </a>
    </div>
  );
}

export default Home;