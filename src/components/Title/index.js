import React from "react";

function Title({ title, crumbs }) {
  return (
    <section className="pt-8">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>Home {"> " + crumbs}</p>
    </section>
  );
}

export default Title;