"use server";
//  post mehtod
export const Post = async (data: any, name: any) => {
  const res = await fetch(
    `https://portfolio-server-six-tau.vercel.app/api/v1/${name}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
};
//  Get mehtod
export const Get = async (data: any, name: any) => {
  const res = await fetch(
    `https://portfolio-server-six-tau.vercel.app/api/v1/${name}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
//  Update mehtod
export const Update = async (data: any, name: any, id: any) => {
  const res = await fetch(
    `https://portfolio-server-six-tau.vercel.app/api/v1/${name}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
//  Delete mehtod
export const Delete = async (id: any, name: any) => {
  const res = await fetch(
    `https://portfolio-server-six-tau.vercel.app/api/v1/${name}/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 30 },
    }
  );
  if (!res.ok) {
    const errorDetails = await res.text();
    throw new Error(`Network response was not ok: ${errorDetails}`);
  }
  return res.json();
};
