"use client";

import { useState, useEffect } from "react";

export default function PokemonCard() {
  const [poke, setPoke] = useState(null);

  const fetchPokemonId = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPoke(data);
    console.log(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };

  useEffect(() => {
    fetchPokemonId(30);
  }, []);

  const randomizee = () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    fetchPokemonId(randomId);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-900 px-6 py-12 text-white">
      <h1 className="text-3xl font-bold">Pokemon Card</h1>

      <div className="flex h-[440px] w-80 flex-col items-center justify-center rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
        {poke ? (
          <>
            <h1>{poke.id}</h1>
            <img
              src={poke.sprites.other["official-artwork"].front_default}
              className="h-40 w-40 "
            />
            <h1 className="text-2xl font-bold">{poke.name}</h1>
            <div>
              <h1>{poke.stats.base_stat}</h1>
            </div>
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>

      <button
        onClick={randomizee}
        className="rounded-xl bg-yellow-400 px-8 py-3 text-lg font-bold text-slate-900 hover:bg-yellow-300 disabled:opacity-50"
      >
        🎲 Randomize
      </button>
    </main>
  );
}
