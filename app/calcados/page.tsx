"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SortSelect from "../components/SortSelect";

import { PRODUCTS } from "../data/products";

export default function CalcadosPage() {
  const [sortOrder, setSortOrder] = useState<string>("");

  const calcados = useMemo(() => {
    const filtered = PRODUCTS.filter(
      (p) => p.category === "calcados"
    );

    return filtered.sort((a, b) => {
      if (sortOrder === "menor-preco") {
        return Number(a.price) - Number(b.price);
      }

      if (sortOrder === "maior-preco") {
        return Number(b.price) - Number(a.price);
      }

      return 0;
    });
  }, [sortOrder]);

  return (
    <>
      <Header />

      <section
        className="uk-section uk-background-muted"
        style={{ minHeight: "100vh" }}
      >
        <div className="uk-container">
          <ul className="uk-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <span>Calçados</span>
            </li>
          </ul>

          <div className="uk-flex uk-flex-between uk-flex-middle uk-margin-large-bottom">
            <div>
              <h2
                className="uk-margin-remove"
                style={{ fontFamily: "serif" }}
              >
                Calçados
              </h2>

              <span className="uk-text-meta">
                {calcados.length} produtos encontrados
              </span>
            </div>

            <SortSelect
              value={sortOrder}
              onChange={setSortOrder}
            />
          </div>

          <div
            className="uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2"
            data-uk-grid
          >
            {calcados.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}